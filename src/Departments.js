import React, { Component } from 'react';

import Department from './Department';

import {Row} from 'react-bootstrap';

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const data = this.state.data;
    if (data.length) {
      const deps = data.map(item => <Department key={item.id} data={item} refresh={this.getData}/>);
      return(
        <Row>{deps}</Row>
      )
    } else {
      return(
        <span>Loading...</span>
      )
    }
  }

  getData() {
    fetch('/departments', {accept: 'application/json'})
      .then(res => res.json())
      .then(result => {
        this.setState({data: result})
      });
  }
}

export default Departments;