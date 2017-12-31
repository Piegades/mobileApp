import React, { Component } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  AppRegistry,
  Image,
  Toolbar,
  TouchableOpacity,
  StatusBar
} from "react-native";
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
import { Header } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

import GoBackButton from "./GoBackButton";

import LuggageHandler from "./Luggage/LuggageHandler";

import Flights from "../Flights";
import Luggages from "../Luggages";
import Account from "../Account";
import Settings from "../Settings";

const deviceW = Dimensions.get("window").width;
const deviceH = Dimensions.get("window").height;

export default class LuggagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "flights",
      flagSelectedTab: 2
    };
  }

  render() {
    const luggage1 = {
      image: require("../../images/luggage1.jpeg"),
      weight: "20 kg",
      width: "30 cm",
      height: "40 cm",
      length: "20 cm"
    };
    const luggages = [luggage1, luggage1];

    return (
      <Container>
        <Header
          leftComponent={<GoBackButton history={this.props.history} />}
          centerComponent={{ text: "LUGGAGES", style: { color: "#fff" } }}
        />
        <Content>
          <FlatList
            data={luggages}
            renderItem={({ item }) => (
              <LuggageHandler {...item} history={this.props.history} />
            )}
            keyExtractor={(item, index) => index}
          />
        </Content>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    marginLeft: -10,
    marginRight: -10
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});
