import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Header,
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
import { StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

import Flights from "./Flights";
import Luggages from "./Luggages";
import Settings from "./Settings";
import Account from "./Account";

class FooterTabsBadgeExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "settings",
      flagSelectedTab: 2
    };

    this.renderSelectedTab = this.renderSelectedTab.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    console.log(this.state);
  }

  renderSelectedTab() {
    console.log(this.state);
    switch (this.state.selectedTab) {
      case "flights":
        return <Flights />;
        break;
      case "luggages":
        return <Luggages />;
        break;
      case "settings":
        return <Settings />;
        break;
      case "account":
        return <Account />;
        break;
      default:
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#BBBBBB" }}>
        <Header iosStatusbar="#2980b9" androidStatusBarColor="#2980b9">
          <LinearGradient
            colors={["#2980b9", "#039bd3"]}
            style={styles.linearGradient}
          >
            <Body>
              <Title>Flights</Title>
            </Body>
          </LinearGradient>
        </Header>
        <Content>{this.renderSelectedTab()}</Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "black" }}>
            <Button
              vertical
              active={this.state.flagSelectedTab == 2 ? true : false}
              selected={this.state.selectedTab === "settings"}
              style={{ backgroundColor: "black" }}
              onPress={() => {
                this.setState({ selectedTab: "settings" });
                this.setState({ flagSelectedTab: 2 });
              }}
            >
              <Icon active name="settings" />
              <Text uppercase={false}>Settings</Text>
            </Button>
            <Button
              vertical
              active={this.state.flagSelectedTab == 1 ? true : false}
              selected={this.state.selectedTab === "flights"}
              style={{ backgroundColor: "black" }}
              onPress={() => {
                this.setState({ selectedTab: "flights" });
                this.setState({ flagSelectedTab: 1 });
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

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    marginLeft: -10,
    marginRight: -10
  }
});

FooterTabsBadgeExample.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => state;

//export default withRouter(connect(mapStateToProps)(FooterTabsBadgeExample));
export default FooterTabsBadgeExample;
