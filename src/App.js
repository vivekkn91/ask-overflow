import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Service from "./Service";
import { firebase } from "./firebase";
import Query from "./Query";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./Home";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const fire = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
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
              <button onClick={fire()}>signin</button>
            </Nav>
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

          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
