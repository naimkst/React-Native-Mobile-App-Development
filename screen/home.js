import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';

export default function Home() {
  const [text, onChangeText] = React.useState('Search Product Name');
  const [number, onChangeNumber] = React.useState(null);
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
            source={require('../assets/images/bell.png')}
          />
          <Image source={require('../assets/images/shopping-cart.png')} />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <TextInput
          style={{
            height: 50,
            backgroundColor: '#fafafa',
            borderRadius: 10,
            paddingLeft: 20,
            width: '100%',
            alignSelf: 'stretch',
            color: '#C4C5C4',
            fontWeight: '600',
          }}
          onChangeText={onChangeText}
          value={text}
        />
        <Image
          style={{position: 'absolute', right: 40}}
          source={require('../assets/images/search.png')}
        />
      </View>

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
              source={require('../assets/images/banner01.png')}
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
              source={require('../assets/images/banner02.png')}
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
                <Image source={require('../assets/images/Vegetable1.png')} />
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
                <Image source={require('../assets/images/Fruits.png')} />
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
                <Image source={require('../assets/images/Eggs.png')} />
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
                <Image source={require('../assets/images/Meat.png')} />
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
                <Image source={require('../assets/images/Group.png')} />
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
                <Image source={require('../assets/images/Vegetable1.png')} />
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
                <Image source={require('../assets/images/Fruits.png')} />
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
                <Image source={require('../assets/images/Eggs.png')} />
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
                <Image source={require('../assets/images/Meat.png')} />
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
                <Image source={require('../assets/images/Group.png')} />
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

      <View
        style={{
          marginTop: 30,
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
              Featured Product
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
                <Image source={require('../assets/images/headphone.png')} />
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
                      source={require('../assets/images/star.png')}
                    />
                    <Text style={{fontSize: 10}}>4.6</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>86 Reviews </Text>
                  </View>
                </View>
                <View>
                  <Image source={require('../assets/images/vector.png')} />
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
                <Image source={require('../assets/images/product02.png')} />
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
                      source={require('../assets/images/star.png')}
                    />
                    <Text style={{fontSize: 10}}>4.6</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>86 Reviews </Text>
                  </View>
                </View>
                <View>
                  <Image source={require('../assets/images/vector.png')} />
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
                <Image source={require('../assets/images/product03.png')} />
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
                      source={require('../assets/images/star.png')}
                    />
                    <Text style={{fontSize: 10}}>4.6</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 10}}>86 Reviews </Text>
                  </View>
                </View>
                <View>
                  <Image source={require('../assets/images/vector.png')} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
