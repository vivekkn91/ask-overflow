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
  console.log(gotid);
  useEffect(() => {
    axios
      .get("http://localhost:5002/answersapi", {
        params: {
          id: gotid,
        },
      })
      .then((result) => {
        //  console.table(result.data);
        setPosts({ items: result.data });
      });
  }, []);

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
