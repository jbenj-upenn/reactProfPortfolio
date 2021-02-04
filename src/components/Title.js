import React from "react";
// import "./style.css";

const styles = {
  sectionStyles: {
    height: "65px"
  }
};

function Title(props) {
  return <h1  style={styles.sectionStyles} className="title">{props.children}</h1>;
}

export default Title;
