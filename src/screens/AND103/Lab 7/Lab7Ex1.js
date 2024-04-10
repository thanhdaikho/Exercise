import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const Lab7Ex1 = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const renderItem = ({ item }) => (
        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: item.image }} style={{ width: 150, height: 150, marginStart: 5, marginEnd: 2 }} />
            <View className='flex-col'>
                <Text style={{ fontWeight: 'bold', fontSize: 19, width: 200, color: 'black' }} numberOfLines={2}>{item.name}</Text>
                <View className='flex-row gap-3 items-center my-1'>
                    <Text className='line-through font-bold text-red-600 text-base'>${item.old_price}</Text>
                    <Text className='font-bold text-lg text-red-600'>${item.new_price}</Text>
                </View>
            </View>
        </View>
    )
    const loadMoreProducts = async () => {
        if (loading) return; // Tránh gọi API nếu đang tải

        try {
            setLoading(true);
            const response = await axios.get(`http://192.168.137.1:4000/products?page=${page + 1}`);
            if (response.data && response.data.length > 0) {
                // Lấy dữ liệu mới
                const newData = response.data.map(item => ({
                    ...item,
                    image: item.image.replace('localhost', '192.168.137.1')
                }));
                // Thêm dữ liệu mới vào danh sách products
                setProducts(prevProducts => [...prevProducts, ...newData]);
                // Tăng trang lên sau khi load thành công
                setPage(page + 1);
            }
        } catch (error) {
            console.error('Error loading more products:', error);
        } finally {
            setLoading(false);
        }
    };


    const renderFooter = () => {
        return loading ? (
            <ActivityIndicator size="large" color="blue" />
        ) : (
            <Text style={{ textAlign: 'center', paddingVertical: 20 }}>Loading...</Text>
        );
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://192.168.137.1:4000/products?page=1`);
                const modifiedData = response.data.map(item => ({
                    ...item,
                    image: item.image.replace('localhost', '192.168.137.1')
                }));
                setProducts(modifiedData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            onEndReached={loadMoreProducts}
            onEndReachedThreshold={0.1} // Khoảng cách từ cuối danh sách để bắt đầu load thêm (0-1)
            ListFooterComponent={renderFooter} // Hiển thị indicator khi đang tải thêm dữ liệu
        />
    );
};

export default Lab7Ex1;
