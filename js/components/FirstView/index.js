import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

import Intro from "../Intro";
import Home from "../Home";

const FirstView = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (rest.uport ? <Home {...props} /> : <Intro {...props} />)}
  />
);

/*
<Route
  {...rest}
  render={props =>
    rest.uport ? (
      <Home {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/intro",
          state: { from: props.location }
        }}
      />
    )}
/>
*/

FirstView.propTypes = {
  component: PropTypes.func,
  uport: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => ({
  uport: state.app.uport
});
export default withRouter(connect(mapStateToProps)(FirstView));
