import React from 'react';
import {Image, View, Text} from 'react-native';

export default function BannerProduct() {
  return (
    <>
    <View style={{backgroundColor: "#FAFAFA" }}>
    <View
        style={{
          backgroundColor: '#3669C9',
          marginHorizontal: 20,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: 'center',
          height: 150,
          paddingHorizontal: 24
        
        }}>
        <View>
          <View>
            <Text style={{ color: "#fff", fontSize:20, fontWeight: 'bold', lineHeight: 30, width: 150}}>Modular Headphone</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: 'bold'}}>Shop now</Text>
            <Image source={require('../../assets/images/arrow-right.png')} />
          </View>
        </View>
        <View>
          <Image source={require('../../assets/images/product02.png')} />
        </View>
      </View>
    </View>

    </>
  );
}
