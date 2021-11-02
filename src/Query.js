import React, { Component } from "react";
import "./Query.css";
import { FormControl, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Answershooks from "./Answershooks";
import axios from "axios";
export default class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      question: "",
      questionarray: [],
    };
  }

  componentDidMount(props) {
    var gotid = this.props.match.params.catId;

    //console.log(gotid);
    axios
      .get("https://ask-over.herokuapp.com/questone/" + gotid)
      .then((result) => {
        //console.log(result);
        this.setState({ items: result.data });
      });
    //  console.table(this.state.items);
  }

  question = (e) => {
    this.setState({ question: e.target.value });
    this.setState({ ask: e.target.value });
  };
  clickQuestion = (e) => {
    var gotid = this.props.match.params.catId;
    e.preventDefault();
    //  let arrayForQuestion = this.state.questionarray;
    let variableQuestion = this.state.question;

    this.setState({ arrayForQuestion: variableQuestion });
    //var data = variableQuestion;
    //  console.log(data);
    axios
      .post("https://ask-over.herokuapp.com/answerpost", {
        Answers: variableQuestion,
        correctcount: 0,
        wrongcount: 0,
        question_id: gotid,
      })
      .then(() => {
        // window.location.reload();
      })
      .catch((error) => {
        console.log("handlesubmit error for blog ", error);
      });
  };

  render() {
    return (
      <>
        <>
          {this.state.items.map((itm, k) => {
            return (
              <div key={k} className="Question-one">
                {itm.Name}
              </div>
            );
          })}
        </>
        <div className="container search-box">
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
              Answer
            </Button>
          </InputGroup>
        </div>
        <Answershooks />
      </>
    );
  }
}
