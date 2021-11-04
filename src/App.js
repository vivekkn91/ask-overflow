import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Service from "./Service";
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

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setsignIn(true);
    }
    console.log(user);
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
              <Navbar.Brand to="/">ask-over</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Query">
                <Nav.Link>Query</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>
            </Nav>
            {console.log(SignIn)}
            {SignIn ? (
              <button
                onClick={signout}
                type="button"
                class="btn btn-primary btn-sm"
              >
                signout
              </button>
            ) : (
              <Signin />
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
            render={(props) => <Query {...props} />}
          />
          {/* <Route path="/sign"></Route> */}
          <Route path="/Home">
            <Home sign={SignIn} />
          </Route>
          <Route path="/">
            <Home sign={SignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
