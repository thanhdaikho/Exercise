import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export type UserType = {
    name: string,
    avatar: string
};

const Main = () => {
    const colors = ['white', 'gray', 'yellow', 'blue', 'red', 'orange'];
    const [user, setUser] = useState<UserType>({
        name: 'Chưa có tên',
        avatar: require('../../../assets/images/avt.png')
    });
    const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');
    const [footerColor, setFooterColor] = useState(colors[0]);
    const handleUpdateInfor = useCallback((_user: UserType) => {
        setUser(_user);
    }, [])
    const handleRandomColor = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[randomIndex]);
    }, []);

    useEffect(() => {
        const currentDate = new Date()
        const dateTime =
            currentDate.getDate() + '/'
            + (currentDate.getMonth() + 1) + '/'
            + currentDate.getFullYear() + ' '
            + currentDate.getHours() + ':'
            + currentDate.getMinutes() + ':'
            + currentDate.getSeconds()
        setLastTimeUpdate(dateTime)
    }, [user])

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}>
            <Header user={user} />
            <Body
                onUpdateInfor={handleUpdateInfor}
                onClickChangeBgFooter={handleRandomColor} />
            <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
        </KeyboardAvoidingView>
    );
}

export default Main;
