import React from 'react';
import {Popover, Tooltip, Button, Modal} from 'react-bootstrap'
export default class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      return (
        <div>
         
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            {this.props.buttonTitle}
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.children}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
  