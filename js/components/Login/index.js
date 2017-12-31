import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-native";

import { uport } from "../../modules/uportSetup";
import * as appActions from "../../actions/appActions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      connected: false
    };
    this.connect = this.connect.bind(this);
  }

  connect() {
    if (this.props.uport === null) {
      if (this.props.isConnected === true) {
        uport
          .requestCredentials({
            requested: ["name", "phone", "country", "avatar"],
            notifications: true
          })
          .then(userProfile => {
            this.props.connectUport(userProfile);
            this.props.history.push("/home");
          });
        this.props.history.push("/home");
      } else {
        alert("You are currently offline");
      }
    } else {
      this.setState({ redirectToReferrer: true, connected: true });
      this.props.history.push("/home");
    }
  }

  render() {
    return <Button onPress={this.connect} title="Connect with uPort" />;
  }
}

Login.propTypes = {
  uport: PropTypes.object,
  connectUport: PropTypes.func,
  history: PropTypes.object
  //isConnected: PropTypes.boolean
};

const mapStateToProps = state => ({
  uport: state.app.uport,
  isConnected: state.network.isConnected
});
const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
