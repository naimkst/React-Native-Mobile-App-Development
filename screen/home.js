import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

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

      <View style={{ paddingHorizontal: 20, alignItems: "center", justifyContent: "space-between", flexDirection: "row", marginTop: 20}}>
        <TextInput style={{ height: 50, backgroundColor: "#fafafa", borderRadius: 10, paddingLeft: 20, width: "100%", alignSelf: "stretch", color: "#C4C5C4", fontWeight: "600"}} onChangeText={onChangeText} value={text} />
        <Image style={{ position: "absolute", right: 40}} source={require('../assets/images/search.png')} />
      </View>

      
    </>
  );
}
