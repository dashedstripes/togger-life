import React from 'react'
import { StyleSheet, Text, Image, View, TouchableHighlight } from 'react-native';

const LocationCard = ({ title, location, img, onPress }) => (
  <TouchableHighlight onPress={onPress} highlightColor='#fff' style={{ marginHorizontal: 20, marginVertical: 10 }}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }}>
      <Image style={{ flex: 1 }} source={{ uri: img }} style={{ width: 100, height: 100 }} />
      <View style={{ flex: 4, padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ color: '#707070' }}>{location}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

export default LocationCard