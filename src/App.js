import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Sidebar from './Sidebar';
import Main from './Main';

import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid className="page-content" fluid>
          <Row>
            <Col xs={ 12 } md={ 2 }>
              <Sidebar/>
            </Col>
            <Col xs={ 12 } md={ 10 }><Main/></Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
