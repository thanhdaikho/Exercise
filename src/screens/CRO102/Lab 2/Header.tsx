// Header.tsx
import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';
import { UserType } from './Main';

type HeaderProps = {
    user: UserType;
}

const Header: React.FC<HeaderProps> = memo((props) => {
    const { user } = props; // Truy cập vào props.user để lấy thông tin của user
    return (
        <View style={{height: 100, backgroundColor: 'white', padding: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Image 
                resizeMode='center'
                source={user.avatar}
                style={{width: 60, height: 60, marginEnd: 15, marginStart: 10}}/>
            <View>
                <Text className='font-semibold text-base'>Chào ngày mới</Text>
                <Text className='font-bold text-xl text-black'>{user.name}</Text>
            </View>
        </View>
    );
});

export default Header;
