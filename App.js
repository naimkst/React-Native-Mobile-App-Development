import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Home from './screen/home';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}
