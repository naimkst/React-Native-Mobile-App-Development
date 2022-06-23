import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';

export default function Blog() {
  return (
    <>
      <View
        style={{
          paddingVertical: 30,
          marginHorizontal: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 20}}>
            Latest News
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '65%'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                lineHeight: 20,
                marginBottom: 10,
              }}>
              Philosophy That Addresses Topics Such As Goodness
            </Text>
            <Text style={{fontSize: 12, color: '#06070C'}}>
              Agar tetap kinclong, bodi motor ten...
            </Text>
            <Text
              style={{
                color: '#838589',
                fontSize: 12,
                lineHeight: 20,
                marginTop: 10,
              }}>
              13 Jan 2021
            </Text>
          </View>
          <View>
            <Image source={require('../../assets/images/blog01.png')} />
          </View>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 30,
          marginHorizontal: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '65%'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                lineHeight: 20,
                marginBottom: 10,
              }}>
              Many Inquiries Outside Of Academia Are Philosophical In The Broad
              Sense
            </Text>
            <Text style={{fontSize: 12, color: '#06070C'}}>
              Agar tetap kinclong, bodi motor ten...
            </Text>
            <Text
              style={{
                color: '#838589',
                fontSize: 12,
                lineHeight: 20,
                marginTop: 10,
              }}>
              13 Jan 2021
            </Text>
          </View>
          <View>
            <Image source={require('../../assets/images/blog02.png')} />
          </View>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 30,
          marginHorizontal: 20,
          borderBottomColor: '#EDEDED',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '65%'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                lineHeight: 20,
                marginBottom: 10,
              }}>
              Tips Merawat Bodi Mobil agar Tidak Terlihat Kusam
            </Text>
            <Text style={{fontSize: 12, color: '#06070C'}}>
              Agar tetap kinclong, bodi motor ten...
            </Text>
            <Text
              style={{
                color: '#838589',
                fontSize: 12,
                lineHeight: 20,
                marginTop: 10,
              }}>
              13 Jan 2021
            </Text>
          </View>
          <View>
            <Image source={require('../../assets/images/blog03.png')} />
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, paddingVertical: 30, alignItems: "center"}}>
        <TouchableOpacity style={{ borderColor: "#0C1A30", borderWidth: 1, borderRadius: 10, width: "100%", padding: 20}}>
          <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "600"}}>See All News</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
