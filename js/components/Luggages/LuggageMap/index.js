import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import {
  Container,
  Content,
  FooterTab,
  Button,
  Icon,
  Text,
  Tabs,
  Tab,
  Badge,
  Left,
  Body,
  Right,
  Footer,
  Title
} from "native-base";

import GoBackButton from "../GoBackButton";
import MapHandler from "./MapHandler";

// create a component
export default class LuggageMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "flights",
      flagSelectedTab: 2
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<GoBackButton history={this.props.history} />}
          centerComponent={{ text: "LUGGAGE", style: { color: "#fff" } }}
        />
        <View style={styles.imageHandler}>
          <MapHandler />
        </View>
        <Footer>
          <FooterTab style={{ backgroundColor: "black" }}>
            <Button
              vertical
              active={this.state.flagSelectedTab == 1 ? true : false}
              selected={this.state.selectedTab === "settings"}
              style={{ backgroundColor: "black" }}
              onPress={() => {
                this.setState({ selectedTab: "settings" });
                this.setState({ flagSelectedTab: 1 });
                this.props.history.push("/settings");
              }}
            >
              <Icon active name="settings" />
              <Text uppercase={false}>Settings</Text>
            </Button>
            <Button
              vertical
              active={this.state.flagSelectedTab == 2 ? true : false}
              selected={this.state.selectedTab === "flights"}
              style={{ backgroundColor: "black" }}
              onPress={() => {
                this.setState({ selectedTab: "flights" });
                this.setState({ flagSelectedTab: 2 });
              }}
            >
              <Icon name="plane" />
              <Text uppercase={false}>Flights</Text>
            </Button>
            <Button
              vertical
              active={this.state.flagSelectedTab == 3 ? true : false}
              selected={this.state.selectedTab === "account"}
              style={{ backgroundColor: "black" }}
              onPress={() => {
                this.setState({ selectedTab: "account" });
                this.setState({ flagSelectedTab: 3 });
                this.props.history.push("/accounts");
              }}
            >
              <Icon name="person" />
              <Text uppercase={false}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageHandler: {
    flex: 1
  },
  luggage: {
    flex: 1
  }
});
