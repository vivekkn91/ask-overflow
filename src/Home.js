import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
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
    arrayForQuestion.push(variableQuestion);
    this.setState({ arrayForQuestion: variableQuestion });

    axios
      .post("http://localhost:7000", variableQuestion, {
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((response) => {
        console.log(response);
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
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    );
  }
}
