import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CommonInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View className='flex-row justify-between items-center border-2 my-4 rounded-md border-gray-500 px-2'>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPassword ? false : secureTextEntry || false}
          className='text-black'
        />
        {secureTextEntry == null ? null : (
          <TouchableOpacity onPress={handleShowPassword}>
            {showPassword ? (
              <Icon name='eye-off' />
            ) : (
              <Icon name='eye' />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CommonInput;
