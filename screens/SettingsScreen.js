import React, { Component } from 'react'
import { View, Text, Platform, StatusBar } from 'react-native';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
        <Text>SettingsScreen</Text>
      </View>
    )
  }
}

export default SettingsScreen
