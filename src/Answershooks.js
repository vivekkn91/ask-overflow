import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormControl, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Answershooks() {
  const [posts, setPosts] = useState([]);
  const [increment, setincrement] = useState(0);
  const [decrement, setdecrement] = useState(0);
  const params = useParams();

  var gotid = params;
  gotid = gotid.catId;
  // console.log(gotid);
  useEffect(() => {
    axios.get("http://localhost:5002/answersapi/" + gotid).then((result) => {
      console.table(result.data);
      var somevariable = result;

      setPosts((data) => {
        return [...data, somevariable];
      });

      setPosts(result.data);
    });
  }, []);

  function decrementCounter(props) {
    console.log("thsis", props);
    axios
      .post("http://localhost:5002/decrementer", {
        //Answers: props,
        Answer_id: props._id,
        wrongcount: props.wrongcount,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("handlesubmit error for blog ", error);
      });
    // setincrement(increment + 1);
  }
  function incrementCounter(props) {
    console.log("thsis", props);
    axios
      .post("http://localhost:5002/increment", {
        //Answers: props,
        Answer_id: props._id,
        correctcount: props.correctcount,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("handlesubmit error for blog ", error);
      });
    //setincrement(increment + 1);
  }

  return (
    <div>
      {posts.map((personData, index) => {
        return (
          <Card key={index}>
            <Card.Body>{personData.Answers}</Card.Body>
            <Button
              onClick={() => incrementCounter(personData)}
              className="correct"
              variant="primary"
            >
              Correct {personData.correctcount}
            </Button>
            <Button
              onClick={() => decrementCounter(personData)}
              //onClick={decrementCounter}
              className="wrong"
              variant="primary"
            >
              Wrong {personData.wrongcount}
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
