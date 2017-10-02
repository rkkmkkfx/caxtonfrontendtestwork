import React, { Component } from 'react';

import EmployeeModal from './EmployeeModal';

import { Col, Panel } from 'react-bootstrap';

class Employee extends Component {
  render() {
    const { id, firstName, lastName, departmentId } = this.props.data;
    const panelFooter = <EmployeeModal data={ this.props.data } update={this.update.bind(this, id)}/>;
    let departmentName;
    this.getDepartmentsName(departmentId).
      then(name => {

    });
    return (
      <Col xs={ 12 } md={ 4 }>
        <Panel footer={ panelFooter }>
          <span><b>First Name:&nbsp;</b>{ firstName }</span><br/>
          <span><b>Last Name:&nbsp;</b>{ lastName }</span>
          <span><b>Departament:&nbsp;</b>{ this.props.data.departmentName }</span>
        </Panel>
      </Col>
    )
  }

  update(id) {
    this.props.update(id);
  }

  getDepartmentsName(id) {
    return fetch('/departments/' + id, {accept: 'application/json'})
      .then(res => res.json())
      .then(item => {
        return item.name;
      });
  }
}

export default Employee;