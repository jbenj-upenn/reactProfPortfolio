import React from "react";
import Title from "./Title.js"
// import "./style.css";

const styles = {
    sectionStyles: {
      background: "rgb(195,195,195)",
      padding: "35px",
    }
};


function PortfolioComponentNoGH(props) {
    return (
        <>
        <Title />
        <div style={styles.sectionStyles} className='card col-md-6'>
            <h3 className='card-title'>
                {props.name}
            </h3>
            <hr></hr>
            <hr></hr>
            <h5> Description:
            <p>{props.description}</p>
            </h5>
            <div >
                <img alt={props.name}img src={props.image} className='card-img-top'/>
            </div>
            <hr></hr>
            <h5> Dependencies:
            <p>{props.dependencies}</p>
            </h5>
            <hr></hr>
            <h5>
                <p><a href={props.url}>Check it out here</a></p>
            </h5>
            <hr></hr>
        </div>
        </>
    );
}

export default PortfolioComponentNoGH;