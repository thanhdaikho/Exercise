import React, { Component, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import CommonInput from '../../../components/TextInput'
import CommonButton from '../../../components/Button'
import { UserType } from './Main'

type BodyProps = {
    onUpdateInfor: (user: UserType) => void
    onClickChangeBgFooter: () => void
}
const Body: React.FC<BodyProps> = ({ onUpdateInfor, onClickChangeBgFooter }) => {
    const [newName, setNewName] = useState('');
    const [newUri, setNewUri] = useState('');

    const handleChangeInfo = () => {
        if (newName.length > 0) {
            onUpdateInfor({ name: newName, avatar: require('../../../assets/images/avt.png') });
        } else {
            Alert.alert('Thông báo', 'Không được để trống');
        }
    }
    return (
        <View className='flex-1'>
            <CommonInput placeholder={'Nhập tên mới'} value={newName} onChangeText={(text) => setNewName(text)} inputStyle={{ marginHorizontal: 25 }} />
            <CommonInput placeholder={'Địa chỉ Avatar mới'} value={newUri} onChangeText={(text) => setNewUri(text)} inputStyle={{ marginHorizontal: 25, marginTop: 10 }} />
            <CommonButton title={'Cập nhật thông tin'} onPress={handleChangeInfo} />
            <CommonButton title={'Đổi màu Footer'} onPress={onClickChangeBgFooter} />
        </View>
    )
}

export default Body