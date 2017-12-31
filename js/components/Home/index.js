import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  //Header,
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

import Flights from "../Flights";
import Luggages from "../Luggages";
import Account from "../Account";
import Settings from "../Settings";

//import Header from "./header";
import { Header } from "react-native-elements";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "flights",
      flagSelectedTab: 2
    };

    this.renderSelectedTab = this.renderSelectedTab.bind(this);
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case "flights":
        return <Flights history={this.props.history} />;
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
        <Header
          centerComponent={{ text: "FLIGHTS", style: { color: "#fff" } }}
        />
        {/*    <LinearGradient
            colors={["#2980b9", "#039bd3"]}
            style={styles.linearGradient}
          >
            <Text style={styles.title}>Flights</Text>
          </LinearGradient>*/}

        <Content>{this.renderSelectedTab()}</Content>
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

/*import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Text,
  Image,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";

import * as appActions from "../../actions/appActions";

import Header from "./header.js";

const headerHeight = 150;

class Home extends React.Component {
  render() {
    return (
      <View>
        <Header
          avatar={this.props.uport.avatar.uri}
          logoutUport={this.props.logoutUport}
          history={this.props.history}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: Dimensions.get("window").height - headerHeight
          }}
        />
      </View>
    );
  }
}
*/
Home.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Home));
