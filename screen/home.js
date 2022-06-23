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
import Banner from '../components/Home/Banner';
import BannerProduct from '../components/Home/BannerProduct';
import Categories from '../components/Home/Categories';
import FeatureProduct from '../components/Home/FeatureProduct';
import Hero from '../components/Home/Hero';
import Search from '../components/Home/Search';

export default function Home() {
  return (
    <>
      <Hero />
      <Search />
      <Banner />
      <Categories />
      <FeatureProduct title={"Feature Product"} marginTop={30} />
      <BannerProduct/>
      <FeatureProduct title={"New Arrivals"} marginTop={0} />
      <FeatureProduct title={"Top Rated Product"} marginTop={0} />
    </>
  );
}
