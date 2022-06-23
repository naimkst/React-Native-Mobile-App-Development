import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default function Categories() {
  return (
    <>
      <View style={{marginTop: 30, paddingHorizontal: 20}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#0C1A30'}}>
              Categories
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 12, color: '#3669C9', fontWeight: '600'}}>
              Sell All
            </Text>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#E4F3EA',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Vegetable1.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#FFECE8',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Fruits.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#FFF6E4',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Eggs.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#F1EDFC',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Meat.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#E4F3EA',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Group.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#E4F3EA',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Vegetable1.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#FFECE8',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Fruits.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#FFF6E4',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Eggs.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#F1EDFC',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Meat.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>

            <View style={{marginRight: 30}}>
              <View
                style={{
                  backgroundColor: '#E4F3EA',
                  width: 48,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../../assets/images/Group.png')} />
              </View>
              <View
                style={{
                  width: 48,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Foods</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
