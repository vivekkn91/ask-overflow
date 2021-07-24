import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Question from "./Question";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
} from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="container search-box">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="ask anything?"
            aria-label="ask anything?"
            aria-label="ask anything?"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            ask?
          </Button>
        </InputGroup>
        <Question />
      </div>
    );
  }
}
