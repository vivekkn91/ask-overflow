import React, { Component } from "react";
import { FormControl, Button } from "react-bootstrap";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";

import Card from "react-bootstrap/Card";
export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount(props) {
    var gotid = this.props.match.params.catId;
    //const params = useParams();
    //  console.log(params);
    axios.get("http://localhost:5002/answersapi" + gotid).then((result) => {
      console.table(result.data);
      this.setState({ items: result.data });
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
          <Button className="correct" variant="primary">
            Correct
          </Button>
          <Button className="wrong" variant="primary">
            Wrong
          </Button>
        </Card>
      </div>
    );
  }
}
