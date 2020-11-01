import React from 'react';
// import './App';
// import Portfolio from './components/Portfolio'

function AboutMe(props) {
    return (
        <div className='row'>

            <div className='col-md-6 background'>
                <h2 className='bkgd'>Information about Josh Benjamin</h2>
                <li className='card c2'><strong>***
                Born and raised</strong> in the Bronx, NYC, living and working in Philly-/Lancaster, PA-areas</li>
                <li className='card c3'><strong>***Receive certificate in August 2020 as a full-stack (front-end/back-end) computer coder
                through the University of Pennsylvania and Trilogy Educational Services</strong></li>
                <li className='card c4'><strong>***</strong>Have had a career of 19 years to this point as a <strong>secondary and higher education instructor</strong></li>
                <li className='card c5'><strong>***
                Have received undergraduage degrees</strong> in Advanced Linguistics/ESL/Spanish</li>
                <li className='card c6'><strong>***
                Have received Master's degree</strong> in TESL (Teaching English to Non-Native English Speakers)</li>
                <li className='card c7'><strong>***
                Work as a freelance artist,</strong> focused on Graffiti and Street Murals in my spare time</li> 
            </div>

            <div className='col-md-6 contact'>

                <div className='card profile'>
                    <img src='../images/Joshua_Benjamin_Cropped.jpg' img alt='Josh Benjamin'></img>
                </div>
                <h2>Contact Me:</h2>
                <div className='card'>
                    <li className='l1'><strong>Email:</strong> joshuasevendavid@gmail.com</li>
                    <li className='l2'><strong>Phone:</strong>717.538.0866</li>
                    <li className='l3'>See my <strong>Résumé <a href="../documents/codingCV2020.2.pdf">here</a></strong></li>
                    <li className='l4'>See my <strong>Github Page <a href="https://github.com/jbenj-upenn">here</a></strong></li>
                </div>
                <br></br>
                <br></br>

                <h2>View my <a href="/portfolio">Full Portfolio</a></h2>
            </div>

        </div>
    )
}

export default AboutMe;