import React, { Component } from 'react';

import { Col, Panel, Button, FormControl, FormGroup } from 'react-bootstrap';

import './Department.css';

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }

  handleChange(event) {
    this.props.data[event.target.id] = event.target.value;
  }

  render() {
    const { name } = this.props.data;
    if (this.state.edit) {
      return(
        <Col xs={ 12 } md={ 4 }>
          <Panel>
            <form onSubmit={this.update.bind(this)}>
              <Col xs={12}>
                <FormGroup controlId="name">
                  <FormControl className="h2 text-center" type="text" placeholder="Department Name" defaultValue={name} onChange={this.handleChange.bind(this)}/>
                </FormGroup>
              </Col>
              <Button type="submit" block>Save</Button>
            </form>
          </Panel>
        </Col>
      )
    } else {
      return(
        <Col xs={ 12 } md={ 4 }>
          <Panel>
            <h2 className="text-center">{ name }</h2>
            <Button block onClick={this.toggleEditMode.bind(this)}>Edit</Button>
          </Panel>
        </Col>
      )
    }
  }

  toggleEditMode() {
    this.setState({edit: !this.state.edit});
  }

  update(event) {
    const data = this.props.data;
    event.preventDefault();
    this.toggleEditMode();
    fetch('/departments/' + data.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json());
  }

}

export default Department;