import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Magnitude = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}

export default Magnitude;
