import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CommonInput = ({ placeholder, value, onChangeText, secureTextEntry, error, valid, inputStyle }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View
        style={[{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          marginTop: 4,
          marginBottom: 4,
          borderRadius: 10,
          borderColor: error ? 'red' : valid ? 'green' : 'gray',
          marginHorizontal: 15
        }, inputStyle]}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPassword ? false : secureTextEntry || false}
          style={{paddingStart: 10}}
          className='text-black'
        />
        {secureTextEntry == null ? null : (
          <TouchableOpacity onPress={handleShowPassword} className='mr-4'>
            {showPassword ? (
              <Icon name='eye-off' size={16}/>
            ) : (
              <Icon name='eye' size={16}/>
            )}
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text className='text-red-600 pl-5'>{error}</Text> : null}
      {valid ? <Text className='text-green-600 pl-5'>{valid}</Text> : null}
    </View>
  );
};

export default CommonInput;
