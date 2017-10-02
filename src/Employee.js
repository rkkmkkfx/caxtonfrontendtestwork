import React, { Component } from 'react';

import EmployeeModal from './EmployeeModal';

import { Col, Panel } from 'react-bootstrap';

class Employee extends Component {
  render() {
    const { id, firstName, lastName, departmentId, departmentName } = this.props.data;
    const panelFooter = <EmployeeModal data={ this.props.data } update={this.update.bind(this, id)}/>;
    return (
      <Col xs={ 12 } md={ 4 }>
        <Panel footer={ panelFooter }>
          <span><b>First Name:&nbsp;</b>{ firstName }</span><br/>
          <span><b>Last Name:&nbsp;</b>{ lastName }</span><br/>
          <span><b>Departament:&nbsp;</b>{ departmentName }</span>
        </Panel>
      </Col>
    )
  }

  update(id) {
    this.props.update(id);
  }
}

export default Employee;