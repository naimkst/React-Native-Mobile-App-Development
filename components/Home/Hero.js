import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

export default function Hero() {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginTop: 20,
          paddingBottom: 20,
          borderBottomColor: '#FAFAFA',
          borderBottomWidth: 1,
        }}>
        <Text style={{color: '#3669C9', fontSize: 18, fontWeight: 'bold'}}>
          Mega Mail
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{marginRight: 15}}
            source={require('../../assets/images/bell.png')}
          />
          <Image source={require('../../assets/images/shopping-cart.png')} />
        </View>
      </View>
    </>
  );
}
