import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
export default class Question extends Component {
  render() {
    return (
      <div>
        <Alert className="Question-even">
          This is a alert with
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
        <Alert className="Question-odd">
          This is a alert with
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      </div>
    );
  }
}
