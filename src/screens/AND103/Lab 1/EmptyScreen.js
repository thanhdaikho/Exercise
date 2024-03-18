import React from 'react';
import { Text, View } from 'react-native';
import CommonButton from '../../../components/Button';
import auth from '@react-native-firebase/auth';

const EmptyScreen = ({ navigation }) => {
  const user = auth().currentUser;
  const userMail = user?.email;
  const userPhoneNumber = user?.phoneNumber;

  const handleSignout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('Lab1');
      });
  };

  return (
    <View>
      {userMail && (
        <Text className='font-bold text-3xl text-black text-center my-10'>
          Hallo {userMail}
        </Text>
      )}
      {userPhoneNumber && (
        <Text className='font-bold text-3xl text-black text-center my-10'>
          Hallo {userPhoneNumber}
        </Text>
      )}
      <CommonButton title={'Sign out'} onPress={handleSignout} />
    </View>
  );
};

export default EmptyScreen;
