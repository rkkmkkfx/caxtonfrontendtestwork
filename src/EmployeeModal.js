import React, { Component } from 'react';

import { Col, Button, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EmployeeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
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

  render() {
    const { id, firstName, lastName, departamentId } = this.props.data;

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
}

export default EmployeeModal;