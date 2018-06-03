import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';
import LocationList from '../containers/LocationList'
import SingleLocation from '../containers/SingleLocation';

const RootStack = createStackNavigator(
  {
    Locations: LocationList,
    Detail: SingleLocation
  },
  {
    initialRouteName: 'Locations'
  }
)

class LocationsScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Locations',
  }

  render() {
    return (
      <RootStack />
    )
  }
}

export default LocationsScreen
