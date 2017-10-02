import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return(
      <aside className="sidebar content-box">
        <ul className="nav">
          <li className="current">
            <NavLink to="/departaments" >
              <i className="glyphicon glyphicon-home"/> Departments
            </NavLink>
          </li>
          <li>
            <NavLink to="/employees">
              <i className="glyphicon glyphicon-list"/> Employees
            </NavLink>
          </li>
        </ul>
      </aside>
    )
  }
}

export default Sidebar;