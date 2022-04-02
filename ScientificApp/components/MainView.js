import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  TextInput
} from 'react-native';

import Category from './Category';
import Magnitude from './Magnitude';

const magnitudes = [
  {
    title: 'Fundamentals',
    data: [
      'Longitud',
      'Masa',
      'Tiempo',
      'Intensidad de corriente eléctrica',
      'Temperatura termodinámica',
      'Cantidad de sustancia',
      'Intensidad luminosa'
    ]
  }
];

const MainView = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={magnitudes}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Category name={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

export default MainView;
