import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, Image, Alert } from 'react-native';
import axios from 'axios';

const Lab5Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!searchText.trim()) {
            Alert.alert('Error', 'Please enter a search keyword');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get(`http://192.168.137.1:4000/search?query=${searchText}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching: ', error);
            Alert.alert('Error', 'Failed to search for products. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => {
        const imageUrl = item.image.replace('localhost', '192.168.137.1');
        return (
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Image source={{ uri: imageUrl }} style={{ width: 100, height: 150, marginStart: 5, marginEnd: 8 }} />
                <View className='flex-col'>
                    <Text style={{ fontWeight: 'bold', fontSize: 19, width: 300, color: 'black' }} numberOfLines={2}>{item.name}</Text>
                    <View className='flex-row gap-3 items-center my-1'>
                        <Text className='line-through font-bold text-red-600 text-base'>${item.old_price}</Text>
                        <Text className='font-bold text-lg text-red-600'>${item.new_price}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 }}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Enter search keyword"
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity onPress={handleSearch} style={{ marginLeft: 10 }}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={searchResults}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
            )}
        </View>
    );
};

export default Lab5Search;
