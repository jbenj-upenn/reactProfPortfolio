import React from "react";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"
// import "./style.css";

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
     
        <Wrapper>
          <Title>Portfolio of Projects</Title>
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
          ))}
        </Wrapper>
      );
    }
  }

export default Portfolio;
