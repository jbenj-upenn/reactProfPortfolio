import React from "react";
// import "./style.css";

function PortfolioComponent(props) {
    return (<div>
    
        <h3>
            {props.name}
        </h3>
        <hr></hr>
        <div className='card'>
            <img src={props.image} />
        </div>
        <hr></hr>
        <h5> Description:
            <p>{props.description}</p>
        </h5>
        <hr></hr>
        <h5> Dependencies:
            <p>{props.dependencies}</p>
        </h5>
        <hr></hr>
        <h5> 
            <p><a href={props.url}>Check it out here</a></p>
        </h5>
        <hr></hr>
        <h5>
            <p><a href={props.github}>See the code on Github here</a></p>
        </h5>
        <hr></hr>        
    </div>);
}

export default PortfolioComponent;