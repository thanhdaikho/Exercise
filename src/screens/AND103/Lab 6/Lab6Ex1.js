import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Alert, Text } from 'react-native';
import { launchCamera, ImagePickerResponse, CameraOptions, ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';

const Lab6Ex1 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [imageUri, setImageUri] = useState(null);


    const options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    const generateUserId = () => {
        const currentDate = new Date();
        const userId = `user_${currentDate.getTime()}`;
        return userId;
    };
    const pickImage = async () => {
        const libraryOptions: ImageLibraryOptions = {
            selectionLimit: 10,
            ...options
        }
        try {
            const respone: ImagePickerResponse = await launchImageLibrary(libraryOptions)
            if (respone.assets) {
                const { uri } = respone.assets[0]
                setImageUri(uri)
            } else {
                Alert.alert('No image picked')
            }
        } catch (error) {
            Alert.alert('Error: ' + error.message);
        }
    }

    const handleUpload = async () => {
        if (!imageUri) {
            Alert.alert('Please select an image');
            return;
        }

        const formData = new FormData();
        formData.append('product', {
            uri: imageUri,
            type: 'image/jpeg', // Adjust the type according to the image file type
            name: 'avatar.jpg', // Adjust the file name if needed
        });

        try {
            // Upload image to server
            const response = await fetch('http://192.168.137.1:4000/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            // Parse response to get image URL
            const imageData = await response.json();
            const avatarUrl = imageData.image_url;
            const userId = generateUserId();

            // Call API to add user with username, password, email, and avatar
            const addUserResponse = await fetch('http://192.168.137.1:4000/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    userName: username,
                    password: password,
                    email: email,
                    avatar: avatarUrl,
                }),
            });

            if (addUserResponse.ok) {
                Alert.alert('User added successfully!');
                // Reset form fields and image
                setUsername('');
                setPassword('');
                setEmail('');
                setImageUri(null);
            } else {
                throw new Error('Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Failed to add user. Please try again.');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />
            <TouchableOpacity onPress={pickImage} style={{ marginBottom: 10 }}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Choose Image</Text>
            </TouchableOpacity>
            {imageUri && (
                <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginBottom: 10 }} />
            )}
            <Button title="Submit" onPress={handleUpload} />
        </View>
    );
};

export default Lab6Ex1;
