import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Query from "./Query";

import axios from "axios";
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5002/questapi").then((result) => {
      //console.table(result.data);
      this.setState({ items: result.data });
    });
  }

  render() {
    return (
      <>
        {this.state.items.map((itm, k) => {
          return (
            <>
              <Alert className="Question-even">{itm.Name}</Alert>
            </>
          );
        })}
      </>
    );
  }
}
