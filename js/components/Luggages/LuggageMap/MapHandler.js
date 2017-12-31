//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

// create a component
export default class MapHandler extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 25.2519444444,
            longitude: 55.3641666667,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 25.2519444444, longitude: 55.3641666667 }}
            title="Luggage 1/2"
            description="Luggage position for the flight ER577 from Dubai to London"
          />
        </MapView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
