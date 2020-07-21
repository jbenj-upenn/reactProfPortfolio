import React from 'react';
// import './App';
// import Portfolio from './components/Portfolio'

function AboutMe(props) {
    return (
        <div className='row'>

            <div className='col-md-6'>
                <h2>Background Information about Josh Benjamin</h2>

                <li className='card'><strong>***In-training through the University of Pennsylvania/Trilogy Education Services</strong> to be a full-stack (front-end/back-end) computer coder</li>
                <li className='card'><strong>***</strong>Certification to be received <strong>August 2020</strong></li>
                <li className='card'><strong>***
                            Born and raised</strong> in the Bronx, NYC, <strong>living and working</strong> in Philly-/Lancaster, PA-areas</li>
                <li className='card'><strong>***</strong>Career thus far as a <strong>secondary education instructor and higher education</strong></li>
                <li className='card'><strong>***
                            Undergrad degrees</strong>: Advanced Linguistics/ESL/Spanish</li>
                <li className='card'><strong>***
                            Master's degree</strong>: TESL (Teaching English to Non-Native English Speakers)</li>
                <li className='card'><strong>***
                            Freelance artist</strong>, focused on Graffiti and Street Murals</li>
            </div>

            <div className='col-md-6 contact'>

                <div className='card profile'>
                    <img src= '../images/Joshua_Benjamin_Cropped.jpg' img alt='Josh Benjamin'></img>
                </div>
                <h2>Contact Me:</h2>
                <div className='card'>
                    <li><strong>Email:</strong>joshuasevendavid@gmail.com</li>
                    <li><strong>Phone:</strong>717.538.0866</li>
                    <li>See my <strong>Résumé <a href="../documents/JoshuaBenjamin.miscCV.ALT.2020.pdf">here</a></strong></li>
                </div>
                <br></br>
                <br></br>

                <h2>View my <a href="/portfolio">Full Portfolio</a></h2>
            </div>

        </div>
    )
}

export default AboutMe;