import React, { Component } from "react";
import "./Query.css";

import axios from "axios";
export default class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    let gotid = this.props.match.params.catId;
    //console.log(gotid);
    axios.get("http://localhost:5002/questone/" + gotid).then((result) => {
      //console.log(result);
      this.setState({ items: result.data });
    });
    //  console.table(this.state.items);
  }

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
      </>
    );
  }
}
