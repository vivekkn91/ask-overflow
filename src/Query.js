import React, { Component } from "react";
import "./Query.css";
import { FormControl, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Answershooks from "./Answershooks";
import { Helmet } from "react-helmet-async";
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
        console.log(result);
        document.title = result.data[0].Name;
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
        this.setState((prevState) => ({
          ...prevState,
          reloadAnswer: !prevState.reloadAnswer,
        }));
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
          {console.log(this.state.items.username)}
          {this.state.items.map((itm, k) => {
            return (
              <>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title> {itm.Name}</title>
                  <meta name="description" content={itm.Name} />
                  <meta property="og:type" content="article" />
                  <link rel="canonical" href={itm.Name} />
                </Helmet>
                <div key={k} className="Question-one">
                  <h2> {itm.Name}</h2>
                </div>
                <div className="username">
                  <span className="username2">--{itm.username}</span>
                </div>
              </>
            );
          })}
        </>
        {this.props.hide ? (
          <div className="container search-box">
            <InputGroup
              className="mb-3"
              onChange={this.question}
              value={this.state.ask}
            >
              <FormControl
                placeholder="answer this question"
                aria-label="answer this question"
                aria-label="answer this question"
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
        ) : null}
        <Answershooks reloadAnswer={this.state.reloadAnswer} />
      </>
    );
  }
}
