import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CommonHeader = ({ leftComponent, centerComponent, rightComponent }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {leftComponent || <Icon name="chevron-left" size={30} color="black" />}
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{centerComponent}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {rightComponent && <Image source={rightComponent} style={{ width: 20, height: 20 }} />}
      </View>
    </View>
  );
};

export default CommonHeader;
