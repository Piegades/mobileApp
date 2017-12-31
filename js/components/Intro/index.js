//import AppIntro from 'react-native-app-intro-v2';

import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Login from "../Login/";

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
};

export default () => (
  <Swiper style={styles.wrapper} showsButtons>
    <View style={styles.slide1}>
      <Text style={styles.text}>Welcome in Piegãdes</Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text}>
        <Login />
      </Text>
    </View>
  </Swiper>
);
