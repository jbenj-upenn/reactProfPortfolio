import React, { Component } from "react";
import Title from "../../components/Title"
// import Wrapper from "./Wrapper"
import projects from '../../projects.json';
import PortfolioComponent from '../../components/Portfolio'
// import App from '../App'
// import AboutMeContact from './pages/AboutMeContact'
// import "./style.css";

class Portfolio extends Component {
  state = {
    projects
  };
  render() {
    return (

      <div className="container">
        {/* <h1>Projects</h1> */}
        <Title>Portfolioa</Title>
        <div className="row">
          {this.state.projects.map(project => (
            <PortfolioComponent
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              dependencies={project.dependencies}
              url={project.url}
              github={project.github}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
