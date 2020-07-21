import React from 'react';
// import './App';
// import Portfolio from './components/Portfolio'

function AboutMe(props) {
    return (
        <div className='row'>

            <div className='col-md-6 background'>
                <h2 className='bkgd'>Information about Josh Benjamin</h2>

                <li className='card c1'><strong>***In-training through the University of Pennsylvania/Trilogy Education Services</strong> to be a full-stack (front-end/back-end) computer coder</li>
                <li className='card c2'><strong>***</strong>Certification to be received <strong>August 2020</strong></li>
                <li className='card c3'><strong>***
                            Born and raised</strong> in the Bronx, NYC, <strong>living and working</strong> in Philly-/Lancaster, PA-areas</li>
                <li className='card c4'><strong>***</strong>Career thus far as a <strong>secondary education instructor and higher education</strong></li>
                <li className='card c5'><strong>***
                            Undergrad degrees</strong>: Advanced Linguistics/ESL/Spanish</li>
                <li className='card c6'><strong>***
                            Master's degree</strong>: TESL (Teaching English to Non-Native English Speakers)</li>
                <li className='card c7'><strong>***
                            Freelance artist</strong>, focused on Graffiti and Street Murals</li>
            </div>

            <div className='col-md-6 contact'>

                <div className='card profile'>
                    <img src= '../images/Joshua_Benjamin_Cropped.jpg' img alt='Josh Benjamin'></img>
                </div>
                <h2>Contact Me:</h2>
                <div className='card'>
                    <li className='l1'><strong>Email:</strong>joshuasevendavid@gmail.com</li>
                    <li className='l2'><strong>Phone:</strong>717.538.0866</li>
                    <li className='l3'>See my <strong>Résumé <a href="../documents/JoshuaBenjamin.miscCV.ALT.2020.pdf">here</a></strong></li>
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