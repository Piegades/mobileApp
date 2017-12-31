import React from "react";
import {
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";

import Header from "../Layout/Header/";

const styles = StyleSheet.create({
  foregroundContainer: {
    //width: Dimensions.get('window').width,
    //height: headerHeight,
    //flex: 1,
    //flexDirection: 'row',
    //alignItems: 'center',
  },
  logoutButton: {
    position: "absolute",
    top: 60,
    right: 15
  },
  goBackButton: {
    position: "absolute",
    top: 30,
    left: 5
  }
});

const HomeHeader = props => {
  return (
    <Header
      headerChildren={
        <View style={styles.foregroundContainer}>
          <Button
            onPress={() => props.history.goBack()}
            title="goBack button"
            color="#841584"
            style={styles.goBackButton}
            accessibilityLabel="It is a goBack button."
          />
        </View>
      }
    />
  );
};

export default HomeHeader;
