import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

const SectionView = () => {
    const eventInfo = [
        {
            id: 1,
            title: 'Lịch Trình',
            location: 'Hồ Gươm, Hà Nội',
            schedule: '9:00 AM - 12:00 PM, 12/12/2024',
            transport: 'Bus',
            time: '21:00 - 22:00',
            image: require('../assets/images/hoguom.jpg'),
        }
    ];

    const renderSection = (data) => {
        return (
            <View key={data.id}>
                <Text className='text-3xl font-bold ml-4 my-4'>{data.title}</Text>
                <View className='mx-4 w-10/12 self-center pl-4 p-3 rounded-2xl shadow-md mb-5'>
                    <Text className='text-gray-500 text-base'>Địa điểm: </Text>
                    <Text className='font-bold text-xl text-black'>{data.location}</Text>
                    <Text className='text-gray-500 text-base'>Thời gian: </Text>
                    <Text className='font-bold text-xl text-black'>{data.schedule}</Text>
                    <Text className='text-gray-500 text-base'>Phương tiện di chuyển: </Text>
                    <Text className='font-bold text-xl text-black'>{data.transport}</Text>
                    <Text className='text-gray-500 text-base'>Thời gian: </Text>
                    <Text className='font-bold text-xl text-black'>{data.time}</Text>
                    <Text className='text-gray-500 text-base'>Hình ảnh</Text>
                    <Image source={data.image} style={{ width: '100%', height: 200, marginTop: 7, borderRadius: 7, marginBottom: 10 }} />
                </View>
            </View>
        );
    };

    return (
        <View>
            {eventInfo.map((data) => renderSection(data))}
        </View>
    );
};

export default SectionView;
