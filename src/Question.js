import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
export default class Question extends Component {
  render() {
    return (
      <div>
        <Alert>
          This is a alert with
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      </div>
    );
  }
}
