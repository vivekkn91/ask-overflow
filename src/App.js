import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Service from "./Service";
import About from "./About";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./Home";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand to="/">ASk-overflow</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/About">
            <About />
          </Route>
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
