import React, { useEffect, useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Ex2 = () => {
    const [user, setUser] = useState(null);

    async function onGoogleButtonPress() {
        try {
            // Kiểm tra nếu thiết bị của bạn hỗ trợ Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Đăng nhập bằng Google và lấy mã thông báo của người dùng
            const { idToken } = await GoogleSignin.signIn();
            console.log(idToken);
            Alert.alert('Thành công', 'Bạn đã đăng nhập');

            // Tạo một Google credential từ mã thông báo
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Đăng nhập người dùng vào Firebase bằng Google credential
            const firebaseUserCredential = await auth().signInWithCredential(googleCredential);

            // Lấy thông tin người dùng từ credential
            setUser(firebaseUserCredential.user);
        } catch (error) {
            console.log(error);
            Alert.alert('Lỗi', 'Đăng nhập thất bại');
        }
    }

    const handleSignout = async () => {
        try {
            await GoogleSignin.signOut();
            setUser(null);
            Alert.alert('Thành công', 'Bạn đã đăng xuất');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // Cấu hình GoogleSignin
        GoogleSignin.configure({
            webClientId: '429668136718-q8b57it91tf5ppebt1rhms9aaahmn05b.apps.googleusercontent.com',
        });
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {user && (
                <View style={{ marginBottom: 20 }}>
                    <Text>Email người dùng: {user.email}</Text>
                </View>
            )}
            <GoogleSigninButton
                onPress={() =>
                    onGoogleButtonPress().then(() => console.log('Đăng nhập thành công bằng Google!'))
                }
            />
            <View style={{ marginVertical: 10 }} />
            <Button title="Đăng xuất" onPress={handleSignout} />
        </View>
    );
};

export default Ex2;
