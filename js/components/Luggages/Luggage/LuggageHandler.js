//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Button
} from "react-native";

const deviceW = Dimensions.get("window").width;
const deviceH = Dimensions.get("window").height;

const basePx = 375;

function px2dp(px) {
  return px * deviceW / basePx;
}

export default class LuggageHandler extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={this.props.image}
            style={{
              width: 0.2 * deviceW,
              height: 0.05 * deviceH,
              flex: 1,
              alignSelf: "stretch"
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.dimens}>
            <Text style={styles.value}>{this.props.weight}</Text>
            <Text style={styles.text}>Weight</Text>
          </View>
          <View style={styles.dimens}>
            <Text style={styles.value}>{this.props.width}</Text>
            <Text style={styles.text}>Width</Text>
          </View>
          <View style={styles.dimens}>
            <Text style={styles.value}>{this.props.height}</Text>
            <Text style={styles.text}>Height</Text>
          </View>
          <View style={styles.dimens}>
            <Text style={styles.value}>{this.props.length}</Text>
            <Text style={styles.text}>Length</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.history.push("/luggagemap")}
            title="Locate"
            color="#2ecc71"
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 0.15 * deviceH,
    width: deviceW,
    marginTop: 0.01 * deviceH,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  dimens: {
    flexDirection: "column",
    alignItems: "center"
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 14,
    marginTop: 0.01 * deviceH
  },
  value: {
    marginLeft: 0.02 * deviceW,
    marginRight: 0.02 * deviceW,
    marginBottom: 0.01 * deviceH,
    fontWeight: "bold",
    fontSize: 16,
    color: "black"
  }
});
