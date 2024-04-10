import React, { useState } from 'react';
import { Alert, View, Image, Button } from 'react-native';
import { launchCamera, ImagePickerResponse, CameraOptions, ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';

const Ex1Lab4 = () => {
  const [imageUri, setImageUri] = useState(null);
  const options: CameraOptions = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
    quality: 1,
  };
  const openCamera = async () => {
    try {
      const response: ImagePickerResponse = await launchCamera(options);

      if (response.assets && response.assets.length > 0) {
        const { uri } = response.assets[0];
        setImageUri(uri);
      } else {
        Alert.alert('No image captured');
      }
    } catch (error) {
      Alert.alert('Error: ' + error.message);
    }
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


  return (
    <View style={{ flex: 1, alignItems: 'center',  }}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 400, height: 400, marginTop: 25 }} resizeMode='contain'/>
      ) : null}
      <View style={{flexDirection: 'row', position: 'absolute', bottom: 50}}>
        <Button title="Open Camera" onPress={openCamera} />
        <View style={{width: 50}}/>
        <Button title="Pick Image" onPress={pickImage} />
      </View>

    </View>
  );
};

export default Ex1Lab4;
