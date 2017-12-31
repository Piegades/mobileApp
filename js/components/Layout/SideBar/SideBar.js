import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SideBar = ({ location, logoutUser }) => (
  <aside className="left-sidebar">
    <ul>
      <li>
        <NavLink
          className={location.pathname === '/app' ? 'active' : ''}
          activeClassName={'active'}
          to="/chat"
        >
          Chat
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={'active'} to="/myinfo">
          My info
        </NavLink>
      </li>
    </ul>
  </aside>
);

SideBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SideBar;
