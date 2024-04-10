import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather'
const Lab7Ex2 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('')
    const [minPrice, setMinPrice] = useState('');


    const fetchProductsByMinPrice = async () => {
        if (minPrice == '') return
        try {
            const response = await axios.get(`http://192.168.137.1:4000/products/filterByMinPrice?minPrice=${minPrice}`);
            const modifiedData = response.data.map(item => ({
                ...item,
                image: item.image.replace('localhost', '192.168.137.1')
            }));
            setProducts(modifiedData);
        } catch (error) {
            console.error('Error filtering products by minimum price:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts(); // Load products khi component được mount

        // Hàm fetchProducts để lấy danh sách sản phẩm từ API
        async function fetchProducts() {
            try {
                const response = await axios.get('http://192.168.137.1:4000/products');
                const modifiedData = response.data.map(item => ({
                    ...item,
                    image: item.image.replace('localhost', '192.168.137.1')
                }));
                setProducts(modifiedData);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
    }, []);

    const handleFilterByName = async (name) => {
        try {
            const response = await axios.get(`http://192.168.137.1:4000/products/filterByName?name=${name}`);
            const modifiedData = response.data.map(item => ({
                ...item,
                image: item.image.replace('localhost', '192.168.137.1')
            }));
            setProducts(modifiedData);
        } catch (error) {
            console.error('Error filtering products by name:', error);
        }
    };

    const handleSortByPrice = async (sortOrder) => {
        try {
            const response = await axios.get(`http://192.168.137.1:4000/products/sortByPrice?sortOrder=${sortOrder}`);
            const modifiedData = response.data.map(item => ({
                ...item,
                image: item.image.replace('localhost', '192.168.137.1')
            }));
            setProducts(modifiedData);
        } catch (error) {
            console.error('Error sorting products by price:', error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: item.image }} style={{ width: 200, height: 250, marginStart: 5, marginEnd: 2 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 19, width: 200, color: 'black' }} numberOfLines={2}>{item.name}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', color: 'red' }}>Price: ${item.new_price}</Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {/*
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                <TouchableOpacity onPress={() => handleFilterByName('Striped')}>
                    <Text>Filter by Name: Product A</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSortByPrice('asc')}>
                    <Text>Sort by Price (Low to High)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSortByPrice('desc')}>
                    <Text>Sort by Price (High to Low)</Text>
                </TouchableOpacity>
            </View>*/}
            <View className='flex-row items-center pl-2 border-2 mx-5 mt-3 rounded-md'>
                <Icon name='search' size={17} />
                <TextInput placeholder='Tìm kiếm theo tên sản phẩm' className='ml-2' value={name} onChangeText={(text) => setName(text)} />
            </View>
            <View className='flex-row items-center pl-2 border-2 mx-5 mt-3 rounded-md'>
                <Icon name='dollar-sign' size={17} />
                <TextInput
                    placeholder="Giá lớn hoặc bằng"
                    value={minPrice}
                    onChangeText={text => setMinPrice(text)}
                />
            </View>
            <View className='flex-row self-center'>
                <View style={{ padding: 10, borderRadius: 10, width: 90, height: 45, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#03bafc' }}>
                    <TouchableOpacity className='flex-row items-center justify-center gap-1' onPress={() => handleSortByPrice('asc')}>
                        <Icon name='arrow-up' size={18} color={'#fff'} />
                        <Text className='font-bold text-lg text-white'>Giá tăng</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, borderRadius: 10, width: 90, height: 45, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#03bafc', marginStart: 5, marginEnd: 10 }}>
                    <TouchableOpacity className='flex-row items-center justify-center gap-1' onPress={() => handleSortByPrice('desc')}>
                        <Icon name='arrow-down' size={18} color={'#fff'} />
                        <Text className='font-bold text-lg text-white'>Giá giảm</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, borderRadius: 10, width: '43%', height: 45, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#03bafc' }}>
                    <TouchableOpacity onPress={fetchProductsByMinPrice}>
                        <Text className='font-bold text-lg text-white'>LỌC</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 10, borderRadius: 10, width: '90%', height: 45, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#03bafc' }}>
                    <TouchableOpacity onPress={() => handleFilterByName(name)}>
                        <Text className='font-bold text-lg text-white'>TÌM KIẾM THEO TÊN</Text>
                    </TouchableOpacity>
                </View>
            <FlatList
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Lab7Ex2;
