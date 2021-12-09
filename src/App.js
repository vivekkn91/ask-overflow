import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Service from "./Service";
import React from "react";
import ReactDOM from "react-dom";
import { firebase } from "./firebase";
import Query from "./Query";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./Home";
import Signin from "./signin";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [SignIn, setsignIn] = useState(true);
  const [userNAme, setuserNAme] = useState([]);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      setuserNAme(user);
      return setsignIn(true);
    }

    setsignIn(false);
  });

  const signout = () => {
    firebase.auth().signOut();
  };

  // const fire = () => {
  //   var google_provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(google_provider)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand to="/">
                <h1 className="logomain">wixten</h1>
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              {/* <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer> */}
              {/* <LinkContainer to="/Query">
                <Nav.Link>Query</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer> */}
            </Nav>
            {console.log(SignIn)}
            {SignIn ? (
              <>
                <img src={userNAme.photoURL} alt="Avatar" className="avatar" />
                <button
                  onClick={signout}
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  {userNAme.displayName}
                </button>
              </>
            ) : (
              <Signin className="googlebutton" />
            )}
          </Container>
        </Navbar>
        <Switch>
          <Route path="/Service">
            <Service />
          </Route>
          <Route
            exact
            path="/Query/:catId"
            render={(props) => (
              <Query {...props} sign={userNAme} hide={SignIn} />
            )}
          />
          {/* <Route path="/sign"></Route> */}
          <Route path="/Home">
            <Home sign={userNAme} hide={SignIn} />
          </Route>
          <Route path="/">
            <Home sign={userNAme} hide={SignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
