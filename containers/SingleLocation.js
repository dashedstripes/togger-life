import React, { Component } from 'react'
import { View, Text, Platform, StatusBar, Image, Dimensions } from 'react-native';

class SingleLocation extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item', 'Location').title,
      headerStyle: {
        backgroundColor: '#7FD8CA',
      },
      headerTintColor: '#2e504b'
    }
  }

  render() {

    const item = this.props.navigation.getParam('item', 'No item.')

    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="cover"
          source={{ uri: item.img.url }}
          style={{ width: Dimensions.get('window').width, height: 250, marginBottom: 20 }} />
        <Text>{item.title}</Text>
        <Text>{item.location}</Text>
        <Text>{item.description}</Text>
      </View>
    )
  }
}

export default SingleLocation
