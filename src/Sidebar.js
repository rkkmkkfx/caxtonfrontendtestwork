import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';


import { Nav, NavItem } from 'react-bootstrap';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return(
      <aside className="sidebar content-box">
        <Nav>
            <LinkContainer to="/departaments" activeClassName="current">
              <NavItem>
                <i className="glyphicon glyphicon-home"/> Departments
              </NavItem>
            </LinkContainer>
          <LinkContainer to="/employees" activeClassName="current">
            <NavItem>
              <i className="glyphicon glyphicon-list"/> Employees
            </NavItem>
          </LinkContainer>

        </Nav>
      </aside>
    )
  }
}

export default Sidebar;