import React, { Component } from 'react';

import { Col, Button, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EmployeeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      departments: []
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(event) {
    this.props.data[event.target.id] = event.target.value;
  }

  saveChanges() {
    this.props.update();
    this.close();
  }

  componentDidMount() {
    this.getDepartmentsName()
      .then(data => {
        this.setState({departments: data});
      })
  }

  render() {
    const { id, firstName, lastName, departmentId } = this.props.data;
    const deps = this.state.departments.map(item => <option key={item.id} value={item.id}>{item.name}</option>);

    return (
      <div>
        <Button
          bsStyle="primary"
          onClick={this.open.bind(this)}
        >
          Edit
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading {id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="firstName">
                <Col componentClass={ControlLabel} sm={2}>
                  First Name
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="First Name" defaultValue={firstName} onChange={this.handleChange.bind(this)} />
                </Col>
              </FormGroup>

              <FormGroup controlId="lastName">
                <Col componentClass={ControlLabel} sm={2}>
                  Last Name
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Last Name" defaultValue={lastName} onChange={this.handleChange.bind(this)} />
                </Col>
              </FormGroup>

              <FormGroup controlId="departmentId">
                <Col componentClass={ControlLabel} sm={2}>
                  Department
                </Col>
                <Col sm={10}>
                  <FormControl componentClass="select" placeholder="select" defaultValue={departmentId} onChange={this.handleChange.bind(this)}>
                    {deps}
                  </FormControl>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.saveChanges.bind(this)}>Save</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  getDepartmentsName() {
    return fetch('/departments', {accept: 'application/json'})
      .then(res => res.json())
      .then(data => {return data});
  }
}

export default EmployeeModal;