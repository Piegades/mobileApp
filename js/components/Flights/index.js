import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  AppRegistry,
  Image,
  Toolbar
} from "react-native";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FlightHandler from "./Flight/FlightHandler";
import Luggage from "../Luggages";

class Flights extends Component {
  render() {
    const flight1 = {
      logo: require("../../images/logo-emirates.svg.png"),
      from: "DXB",
      to: "NYC",
      fromTime: "04:20",
      travelTime: "15h 14m",
      toTime: "10:22"
    };
    const flight2 = {
      logo: require("../../images/logo-dubai.png"),
      from: "LYS",
      to: "DXB",
      fromTime: "12:36",
      travelTime: "6h 14m",
      toTime: "18:22"
    };
    const flight3 = {
      logo: require("../../images/logo-itihad.png"),
      from: "CDG",
      to: "DXB",
      fromTime: "12:36",
      travelTime: "6h 30m",
      toTime: "18:22"
    };

    const flights = [flight1, flight2, flight3];
    return (
      <FlatList
        data={flights}
        renderItem={({ item }) => (
          <FlightHandler
            {...item}
            onPress={() => this.props.history.push("/luggages")}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},
  mainContainer: {
    alignItems: "center"
  },
  linearGradient: {}
});

const mapStateToProps = state => state;

export default Flights;
// export default withRouter(connect())(Flights);
//export default withRouter(connect(mapStateToProps))(Flights);
