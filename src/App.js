import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import AboutMeContact from './pages/AboutMeContact';

function App() {
    return (
      <div className="App">
        <Router >
          <Header />
          <Footer />
          <Route exact path="/" component={AboutMeContact} />
          <Route exact path="/about" component={AboutMeContact} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Portfolio /> */}
        </Router>
        {/* <Title>Portfolio of Projects</Title>
        {this.state.projects.map(project => (
          <Portfolio
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            dependencies={project.dependencies}
            url={project.url}
            github={project.github}
          />
        ))} */}

      </div>
    )
  }


  export default App;
