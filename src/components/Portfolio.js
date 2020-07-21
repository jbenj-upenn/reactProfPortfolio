import React from "react";
// import "./style.css";

function PortfolioComponent(props) {
    return (
        <div className='card col-md-6'>
            <h3 className='card-title'>
                {props.name}
            </h3>
            <hr></hr>
            <hr></hr>
            <h5> Description:
            <p>{props.description}</p>
            </h5>
            <div >
                <img src={props.image} className='card-img-top'/>
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
            <h5>
                <p><a href={props.github}>See the code on Github here</a></p>
            </h5>
            <hr></hr>
        </div>
    );
}

export default PortfolioComponent;