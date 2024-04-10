import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Alert, Text, ScrollView } from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import axios from 'axios';

const Lab6Ex2 = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const handleImagePicker = async () => {
        const options = {
            mediaType: 'photo',
            multiple: true
        };

        try {
            const response: ImagePickerResponse = await launchImageLibrary(options);
            if (response.assets) {
                const selectedImages = response.assets.map(asset => asset.uri);

                // Cập nhật state images bằng cách kết hợp những ảnh đã chọn trước đó và ảnh mới
                setImages(prevImages => [...prevImages, ...selectedImages]);
            } else {
                Alert.alert('No images selected');
            }
        } catch (error) {
            Alert.alert('Error: ' + error.message);
        }
    };


    const handleAddFruit = async () => {
        try {
            const formData = new FormData();
            images.forEach((image, index) => {
                const fileName = `image_${index + 1}`;
                formData.append('images', {
                    uri: image,
                    name: fileName,
                    type: 'image/jpeg' // or 'image/png' depending on image type
                });
            });

            const response = await axios.post('http://192.168.137.1:4000/uploadmultiple', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { imageUrls } = response.data;

            await axios.post('http://192.168.137.1:4000/addfruit', {
                name,
                quantity,
                price,
                status,
                description,
                images: imageUrls
            });

            Alert.alert('Fruit added successfully!');
        } catch (error) {
            console.error('Error adding fruit:', error);
            Alert.alert('Failed to add fruit. Please try again.');
        }
    };

    return (
        <ScrollView style={{ padding: 20 }}>
            <Text className='font-bold text-lg text-black'>Name</Text>
            <TextInput
                placeholder="Name"
                onChangeText={text => setName(text)}
                value={name}
                style={{ borderWidth: 1, borderRadius: 7, marginTop: 7, paddingStart: 10, borderColor: 'gray' }}
            />
            <Text className='font-bold text-lg text-black mt-2'>Quantity</Text>
            <TextInput
                placeholder="Quantity"
                onChangeText={text => setQuantity(text)}
                value={quantity}
                style={{ borderWidth: 1, borderRadius: 7, marginTop: 7, paddingStart: 10, borderColor: 'gray' }}
            />
            <Text className='font-bold text-lg text-black mt-2'>Price</Text>
            <TextInput
                placeholder="Price"
                onChangeText={text => setPrice(text)}
                value={price}
                style={{ borderWidth: 1, borderRadius: 7, marginTop: 7, paddingStart: 10, borderColor: 'gray' }}
            />
            <Text className='font-bold text-lg text-black mt-2'>Status</Text>
            <TextInput
                placeholder="Status"
                onChangeText={text => setStatus(text)}
                value={status}
                style={{ borderWidth: 1, borderRadius: 7, marginTop: 7, paddingStart: 10, borderColor: 'gray' }}
            />
            <Text className='font-bold text-lg text-black mt-2'>Description</Text>
            <TextInput
                placeholder="Description"
                onChangeText={text => setDescription(text)}
                value={description}
                style={{ borderWidth: 1, borderRadius: 7, marginTop: 7, paddingStart: 10, borderColor: 'gray' }}
            />
            <TouchableOpacity onPress={handleImagePicker} className='my-3'>
                <Text>Select Images</Text>
            </TouchableOpacity>
            <View className='flex-row'>
                {images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={{ width: 120, height: 120, marginBottom: 10 }} />
                ))}
            </View>
            <Button title="Add Fruit" onPress={handleAddFruit} />
        </ScrollView>
    );
};

export default Lab6Ex2;
