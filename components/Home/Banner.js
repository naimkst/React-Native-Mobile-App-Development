import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Banner() {
  return (
    <>
            <View style={{marginTop: 30, paddingHorizontal: 20}}>
        <ScrollView
          style={{width: '100%', height: 150}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{borderRadius: 10}}>
            <ImageBackground
              style={{
                width: '100%',
                height: 150,
                marginRight: 20,
                paddingRight: 10,
              }}
              source={require('../../assets/images/banner01.png')}
              resizeMode="cover"
              position="center"
              borderRadius={10}>
              <View
                style={{
                  backgroundColor: '#3669C9',
                  flex: 1,
                  borderBottomRightRadius: 100,
                  borderTopEndRadius: 100,
                  width: '65%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: 'bold',
                    lineHeight: 30,
                  }}>
                  Gatis Ongkir Selama PPKM!
                </Text>
                <Text style={{color: '#fff', fontSize: 12, marginTop: 8}}>
                  Periode Mei - Agustus 2021
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{borderRadius: 10}}>
            <ImageBackground
              style={{
                width: '100%',
                height: 150,
                marginRight: 20,
                paddingRight: 10,
              }}
              source={require('../../assets/images/banner02.png')}
              resizeMode="cover"
              position="center"
              borderRadius={10}>
              <View
                style={{
                  backgroundColor: '#3669C9',
                  flex: 1,
                  borderBottomRightRadius: 100,
                  borderTopEndRadius: 100,
                  width: '65%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: 'bold',
                    lineHeight: 30,
                  }}>
                  Gatis Ongkir Selama PPKM!
                </Text>
                <Text style={{color: '#fff', fontSize: 12, marginTop: 8}}>
                  Periode Mei - Agustus 2021
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
