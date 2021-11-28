import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Query from "./Query";
import Question from "./Question";

import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      question: "",
      signer: true,
      questionarray: [],
    };
  }

  question = (e) => {
    this.setState({ question: e.target.value });
    this.setState({ ask: e.target.value });
  };
  clickQuestion = (e) => {
    e.preventDefault();
    // let username = this.props.displayName;
    let arrayForQuestion = this.state.questionarray;
    let variableQuestion = this.state.question;

    this.setState({ arrayForQuestion: variableQuestion });
    var data = variableQuestion;
    console.log(this.props.sign.displayName);
    axios
      .post("https://ask-over.herokuapp.com/questionpost", {
        Name: data,
        username: this.props.sign.displayName,
        useremail: this.props.sign.email,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("handlesubmit error for blog ", error);
      });
  };

  render() {
    return (
      <div className="container search-box">
        {console.log("this is the cheker", this.props)}

        {this.props.hide ? (
          <InputGroup
            className="mb-3"
            onChange={this.question}
            value={this.state.ask}
          >
            <FormControl
              placeholder="ask anything?"
              aria-label="ask anything?"
              aria-label="ask anything?"
              aria-describedby="basic-addon2"
            />
            <Button
              type="submit"
              disabled={!this.state.ask}
              onClick={this.clickQuestion}
              variant="outline-secondary"
              id="button-addon2"
            >
              ask?
            </Button>
          </InputGroup>
        ) : null}
        <Question myProp={this.state.items} />
      </div>
    );
  }
}
