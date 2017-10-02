import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Departments from './Departments';
import Employees from './Employees';

class Main extends Component {
  render() {
    return(
      <main>
        <Route path="/departaments" component={Departments}/>
        <Route path="/employees" component={Employees}/>
      </main>
    )
  }
}

export default Main;