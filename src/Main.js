import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Departaments from './Departaments';
import Employees from './Employees';

class Main extends Component {
  render() {
    return(
      <main>
        <Route path="/departaments" component={Departaments}/>
        <Route path="/employees" component={Employees}/>
      </main>
    )
  }
}

export default Main;