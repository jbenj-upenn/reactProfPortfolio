// Allows React to utilize the component pages
import React from 'react';

// allows react  to render whats on my homepage
function Footer(props){

        const stickyFooter = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "10px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "62px",
            width: "100%",
        }
        return (
            <>
            <footer id="sticky-footer" className="fixed-bottom bg-dark text-white-50" style={stickyFooter}>
                <div className="footer container text-center">
                    <small>Joshua Benjamin *** </small>
                
                    <small>Copyright &copy; 2022</small>
                    
                    {/* CAN'T GET FOOTER SCRIPTS TO WORK <script type="text/JavaScript"> var theDate=new Date() document.write(theDate.getFullYear()) </script> Joshua Benjamin */}
                    
            {/* <div className="container"> */}
                
                    {/* <!-- Basic Extra Info in Footer --> */}
                    {/* <h5>About Me</h5>
                    <p>Coder-in-Training
                    </p>
                    <p>College English/Linguistics Professor
                    </p>
                    <p>Graffiti/"Street" Muralist
                    </p>
                    <p>Poker Amateur
                    </p>
                    <p>Billiards Enthusiast
                    </p>
                    <p>Bronx-Native Mecox-Beach-Sag-Summer Member
                    </p>
                    <p>Reader of Everything
                    </p>
                    <p>The Gaps are Filled in with Family, Friends, Food and Drinks. And Sleep.
                    </p>
                </div> */}
                </div>
                
                {/* CAN'T GET FOOTER SCRIPTS TO WORK: &copy; <script>new Date().getFullYear()document.write(new Date().getFullYear());</script> property and creation of Joshua Benjamin. */}
            
            </footer>

            
        )

    }

export default Footer;