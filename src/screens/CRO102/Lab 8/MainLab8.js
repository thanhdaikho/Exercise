import React, { useEffect } from 'react';
import { PermissionsAndroid, View, Text, Button, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const MainLab8 = () => {
    const requestNotificationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Notification Permission',
                    message: 'Allow the app to use notifications.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (error) {
            console.error('Error requesting permission:', error);
            return false;
        }
    };

    const handleRequestPermission = async () => {
        const hasPermission = await requestNotificationPermission();
        if (hasPermission) {
        } else {
        }
    };

    useEffect(() => {
        handleRequestPermission();

        messaging()
            .getToken()
            .then(token => {
                console.log('FCM Token:', token);
            })
            .catch(error => {
                console.error('Error getting FCM token:', error);
            });

    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
        </View>
    );
};

export default MainLab8;
