import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import SearchView from '../../../components/Search';
const Lab5API = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://192.168.137.1:4000/allproducts`);
                const modifiedData = response.data.map(item => ({
                    ...item,
                    image: item.image.replace('localhost', '192.168.137.1')
                }));
                setData(modifiedData);
            } catch (error) {
                console.error('Error fetching data: ' + error)
            }
        }
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 150, marginStart: 5, marginEnd: 8 }} />
            <View className='flex-col'>
                <Text style={{ fontWeight: 'bold', fontSize: 19, width: 300, color: 'black' }} numberOfLines={2}>{item.name}</Text>
                <View className='flex-row gap-3 items-center my-1'>
                    <Text className='line-through font-bold text-red-600 text-base'>${item.old_price}</Text>
                    <Text className='font-bold text-lg text-red-600'>${item.new_price}</Text>
                </View>
                <TouchableOpacity onPress={() => handleDelete(item.id, item.name)}>
                    <View className='bg-blue-400 w-16 h-7 justify-center items-center mt-10' >
                        <Text className='text-white text-semibold text-base'>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
    const handleDelete = async (id, name) => {
        try {
            await axios.post(`http://192.168.137.1:4000/removeproduct`, { id });
            // Remove the deleted product from the state
            setData(prevData => prevData.filter(item => item.id !== id));
            console.log(`Product "${name}" deleted successfully`);
        } catch (error) {
            console.error('Error deleting product: ', error);
        }
    };
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
        </View>
    );
};

export default Lab5API;
