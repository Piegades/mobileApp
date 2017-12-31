import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.uport ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/intro",
            state: { from: props.location }
          }}
        />
      )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  uport: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => ({
  uport: state.app.uport
});
export default withRouter(connect(mapStateToProps)(PrivateRoute));
