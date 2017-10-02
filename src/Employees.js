import React, { Component } from 'react';

import Employee from './Employee';

import './Sidebar.css';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  render() {
    const data = this.state.data;
    if (data.length) {
      const emps = data.map(item => <Employee data={item} key={item.id} update={this.saveData.bind(this)}/>);
      return(
        <div>{emps}</div>
      )
    } else {
      return <span>Loading...</span>
    }
  }

  componentDidMount() {
    this.getData();
  }

  getDepartmentsName(item) {
    return fetch('/departments/' + item.departmentId, {accept: 'application/json'})
      .then(res => res.json())
      .then(data => {
        item.departmentName = data.name
        return item;
      });
  }

  getData() {
    fetch('/employees', {accept: 'application/json'})
      .then(res => res.json())
      .then(data => {
        const getDeps = Promise.all(
          data.map(item => this.getDepartmentsName(item))
        );
        getDeps.then(result => this.setState({data: result}));
      });
  }


  saveData(id) {
    const data = this.state.data.find(item => item.id === id);
    console.log(id, data);
    fetch('/employees/'+id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => this.getData());
  }
}

export default Employees;