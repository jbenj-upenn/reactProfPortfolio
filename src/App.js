import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMeContact from './pages/AboutMeContact';
import projects from "./projects.json";

class App extends Component {
  state = {
    projects
  };

  render() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Footer />
        <Route exact path="/" component={AboutMeContact} />
        <Route exact path="/about" component={AboutMeContact} />
        {/* <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
      </Router>
    </div>
  );
};
}

export default App;
