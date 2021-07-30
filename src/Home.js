import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Query from "./Query";
import Question from "./Question";

import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      questionarray: [],
    };
  }

  question = (e) => {
    this.setState({ question: e.target.value });
  };
  clickQuestion = (e) => {
    e.preventDefault();
    let arrayForQuestion = this.state.questionarray;
    let variableQuestion = this.state.question;

    this.setState({ arrayForQuestion: variableQuestion });
    var data = variableQuestion;
    console.log(data);
    axios
      .post("http://localhost:5002/questionpost", {
        Name: data,
        // Age: "23",
      })
      .then((response) => {
        // this.props.handleSuccessfullFormSubmission(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("handlesubmit error for blog ", error);
      });
  };

  render() {
    return (
      <div className="container search-box">
        <InputGroup className="mb-3" onChange={this.question}>
          <FormControl
            placeholder="ask anything?"
            aria-label="ask anything?"
            aria-label="ask anything?"
            aria-describedby="basic-addon2"
          />
          <Button
            type="submit"
            onClick={this.clickQuestion}
            variant="outline-secondary"
            id="button-addon2"
          >
            ask?
          </Button>
        </InputGroup>

        <Question myProp={this.state.items} />
      </div>
    );
  }
}
