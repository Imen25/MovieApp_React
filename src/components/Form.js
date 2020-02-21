import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class Form extends Component {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  state = {
    show: false
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  addMovie = () => {
    this.props.onSubmit();
    this.handleShow();
  };

  render() {
    return (
      <div>
        {/* <Button variant="primary" onClick={this.handleShow}>
          Add
        </Button> */}
        <i className="fas fa-plus" onClick={this.handleShow}></i>
        <Modal
          className="posModal"
          show={this.state.show}
          onHide={this.handleShow}
        >
          <Modal.Header className="modalForm" closeButton>
            <Modal.Title>Add New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalForm">
            <form>
              Title :
              <input
                value={this.props.title}
                placeholder="enter title"
                onChange={this.props.changeHandlerTitle}
              />
              <br />
              Movie Poster:
              <input
                value={this.props.src}
                placeholder="enter movie"
                onChange={this.props.changeHandlerMovie}
              />
              <br />
              Rating :
              <input
                value={this.props.rank}
                placeholder="enter rank"
                onChange={this.props.changeHandlerRank}
              />
            </form>
          </Modal.Body>
          <Modal.Footer className="modalForm">
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addMovie}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
