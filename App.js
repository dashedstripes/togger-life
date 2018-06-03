import React, { Component } from 'react'
import { createDrawerNavigator } from 'react-navigation';
import LocationsScreen from './screens/LocationsScreen'
import SettingsScreen from './screens/SettingsScreen'

const RootStack = createDrawerNavigator(
  {
    Locations: {
      screen: LocationsScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    initialRootName: 'Locations'
  })

class App extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}

export default App
