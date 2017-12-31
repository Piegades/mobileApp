import React from "react";
import PropTypes from "prop-types";

import { Image, StyleSheet, View, StatusBar } from "react-native";

class Header extends React.Component {
  render() {
    const styles = StyleSheet.create({
      header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        overflow: "hidden"
      },
      headerBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: this.props.headerHeight,
        resizeMode: "cover"
      },
      headerChildren: {
        backgroundColor: "transparent",
        justifyContent: "center"
      },
      children: {
        paddingTop: 60,
        backgroundColor: "#FFF"
      }
    });
    return (
      <View>
        <StatusBar barStyle={this.props.statusBarTheme} />
        <View style={styles.container}>
          <View style={styles.children}>{this.props.children}</View>
        </View>
        <View style={[styles.header, { height: this.props.headerHeight }]} />
      </View>
    );
  }
}

Header.propTypes = {
  backgroundImage: PropTypes.string,
  headerHeight: PropTypes.number,
  children: PropTypes.node || PropTypes.nodes,
  headerChildren: PropTypes.node || PropTypes.nodes,
  childrenBackgroundColor: PropTypes.string,
  statusBarTheme: PropTypes.oneOf(["default", "light-content"])
};

Header.defaultProps = {
  headerHeight: 150,
  childrenBackgroundColor: "#FFF",
  statusBarTheme: "default"
};

export default Header;
