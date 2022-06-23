import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default function FeatureProduct({ title, marginTop }) {
  return (
    <>
      <View
        style={{
          marginTop: {marginTop},
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: '#FAFAFA',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#0C1A30'}}>
              { title }
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 12, color: '#3669C9', fontWeight: '600'}}>
              See All
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 20,
                width: 156,
                marginRight: 15,
              }}>
              <View>
                <Image source={require('../../assets/images/headphone.png')} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#0C1A30',
                    marginTop: 20,
                  }}>
                  TMA-2 HD Wireless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: '#FE3A30',
                    marginTop: 7,
                  }}>
                  Rp. 1.500.000
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Image
                      style={{marginRight: 7}}
                      source={require('../../assets/images/star.png')}
                    />
                    <Text style={{fontSize: 10}}>4.6</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>86 Reviews </Text>
                  </View>
                </View>
                <View>
                  <Image source={require('../../assets/images/vector.png')} />
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 20,
                width: 156,
                marginRight: 15,
              }}>
              <View>
                <Image source={require('../../assets/images/product02.png')} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#0C1A30',
                    marginTop: 20,
                  }}>
                  TMA-2 HD Wireless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: '#FE3A30',
                    marginTop: 7,
                  }}>
                  Rp. 1.500.000
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Image
                      style={{marginRight: 7}}
                      source={require('../../assets/images/star.png')}
                    />
                    <Text style={{fontSize: 10}}>4.6</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>86 Reviews </Text>
                  </View>
                </View>
                <View>
                  <Image source={require('../../assets/images/vector.png')} />
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 12,
                paddingVertical: 20,
                width: 156,
                marginRight: 15,
              }}>
              <View>
                <Image source={require('../../assets/images/product03.png')} />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#0C1A30',
                    marginTop: 20,
                  }}>
                  TMA-2 HD Wireless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: '#FE3A30',
                    marginTop: 7,
                  }}>
                  Rp. 1.500.000
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Image
                      style={{marginRight: 7}}
                      source={require('../../assets/images/star.png')}
                    />
                    <Text style={{fontSize: 10}}>4.6</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>86 Reviews </Text>
                  </View>
                </View>
                <View>
                  <Image source={require('../../assets/images/vector.png')} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
