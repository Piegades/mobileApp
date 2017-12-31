import React, { Component } from "react";
import { Icon } from "react-native-elements";

export default class GoBackButton extends Component {
  render() {
    return (
      <Icon
        name="arrow-back"
        //  type="font-awesome"
        color="#fff"
        onPress={() => this.props.history.goBack()}
      />
    );
  }
}
