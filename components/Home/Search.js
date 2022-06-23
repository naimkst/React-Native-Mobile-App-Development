import React from 'react';
import {
  View,
  Image,
  TextInput,
} from 'react-native';

export default function Search() {
  const [text, onChangeText] = React.useState('Search Product Name');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <>
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
          source={require('../../assets/images/search.png')}
        />
      </View>
    </>
  );
}
