import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormControl, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Answershooks() {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  var gotid = params;
  gotid = gotid.catId;
  console.log(gotid);
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

  return (
    <div>
      {posts.map((personData, index) => {
        return (
          <Card key={index}>
            <Card.Body>{personData.Answers}</Card.Body>
            <Button className="correct" variant="primary">
              Correct
            </Button>
            <Button className="wrong" variant="primary">
              Wrong
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
