import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: [] // Initialize tasks state as an empty array
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = () => {
    if (this.state.newTask !== "") {
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: ""
      });
    }
  };

  handleDeleteTask = (index) => {
    this.setState({
      tasks: this.state.tasks.filter((task, i) => i !== index)
    });
    alert("You deleted a task!");
  };

  render() {
    return (
      <Container fluid className="bg-dark  rounded h-100vh  mx-auto">
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
            color: "white",
            fontFamily: "times new roman"
          }}
        >
          TODO LIST
        </Container>
        <Row className="mt-5">
          <Col md={{ span: 4, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                className="w-500 h-100"
                placeholder="Enter new task"
                aria-label="Enter new task"
                aria-describedby="basic-addon2"
                value={this.state.newTask}
                onChange={this.handleInputChange}
              />
              <Button variant="outline-secondary" id="button-addon2" onClick={this.handleAddTask}>
                Add Task
              </Button>
            </InputGroup>
            <ListGroup className="mb-3">
              {this.state.tasks.map((task, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between">
                  {task}
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={() => this.handleDeleteTask(index)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;