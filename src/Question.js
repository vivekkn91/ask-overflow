import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
//import Query from "./Query";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import Signin from "./signin";
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    document.title = "wixten";
    axios.get("https://ask-over.herokuapp.com/questapi").then((result) => {
      // console.table(result.data);
      this.setState({ items: result.data });
    });
  }

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title> wixten</title>
          <meta name="description" content="wixten" />
          <meta property="og:type" content="article" />
        </Helmet>
        {this.state.items.map((itm, k) => {
          return (
            <div className="Question-even">
              <Link
                to={{
                  pathname: `query/${itm._id}`,
                  query: { id: itm._id },
                }}
              >
                <Alert className="question13"> {itm.Name}</Alert>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}
