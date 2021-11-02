import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
//import Query from "./Query";
import { Link } from "react-router-dom";
import axios from "axios";
import Signin from "./signin";
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios.get("https://ask-over.herokuapp.com/questapi").then((result) => {
      // console.table(result.data);
      this.setState({ items: result.data });
    });
  }

  render() {
    return (
      <>
        {this.state.items.map((itm, k) => {
          return (
            <div className="Question-even">
              <Link
                to={{
                  pathname: `query/${itm._id}`,
                  query: { id: itm._id },
                }}
              >
                <Alert>{itm.Name}</Alert>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}
