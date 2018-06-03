import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Platform,
  Alert,
  Button
} from 'react-native';
import Fuse from 'fuse.js'
import { createStackNavigator } from 'react-navigation';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import LocationCard from '../components/LocationCard';

const defaultLocations = [
  {
    id: 1,
    title: 'London Eye',
    location: 'London, UK',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  },
  {
    id: 2,
    title: 'Big Ben',
    location: 'London, UK',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  },
  {
    id: 3,
    title: 'Eiffel Tower',
    location: 'Paris, France',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  },
  {
    id: 4,
    title: 'Golden Gate Bridge',
    location: 'San Francisco, CA, USA',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  },
  {
    id: 5,
    title: 'London Eye',
    location: 'London, UK',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  },
  {
    id: 6,
    title: 'Big Ben',
    location: 'London, UK',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  },
  {
    id: 7,
    title: 'Eiffel Tower',
    location: 'Paris, France',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  },
  {
    id: 8,
    title: 'Golden Gate Bridge',
    location: 'San Francisco, CA, USA',
    description: 'A wonderful place to visit',
    img: {
      url: 'https://placehold.it/1000x600'
    }
  }
]

export default class LocatonList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Locations',
      headerStyle: {
        backgroundColor: '#7FD8CA',
      },
      headerTintColor: '#2e504b',
      headerLeft: (
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="Menu"
        />
      )
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      locations: defaultLocations
    }

    this.onLocationPress = this.onLocationPress.bind(this)
  }

  onLocationPress(item, e) {
    this.props.navigation.navigate('Detail', {
      item
    })
  }

  render() {
    return (
      <View style={{ flex: 1, paddingVertical: 10 }}>
        <ScrollView>
          <FlatList
            data={this.state.locations}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) =>
              <LocationCard
                title={item.title}
                location={item.location}
                img={item.img.url}
                onPress={this.onLocationPress.bind(this, item)}
              />}
          />
        </ScrollView>
      </View>
    );
  }
}

