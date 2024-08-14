import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import RSVP from "./views/RSVP";
import Menu from "./views/Menu";
import FAQ from "./views/FAQ";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/rsvp">RSVP</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rsvp" component={RSVP} />
        <Route path="/menu" component={Menu} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </Router>
  );
}

export default App;
