import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';
import LocationList from '../containers/LocationList'
import SingleLocation from '../containers/SingleLocation';

// React Navigation can only render a single navigator component
// We're returning the navigator to use in the root navigation
// https://reactnavigation.org/docs/en/common-mistakes.html#explicitly-rendering-more-than-one-navigator

const LocationsNavigator = createStackNavigator(
  {
    Locations: LocationList,
    Detail: SingleLocation
  },
  {
    initialRouteName: 'Locations'
  }
)

export default LocationsNavigator