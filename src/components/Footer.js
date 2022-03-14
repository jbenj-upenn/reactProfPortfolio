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
            height: "30px",
            width: "100%",
        }
        return (
            <>
            <footer id="sticky-footer" className="fixed-bottom bg-dark text-white-50" style={stickyFooter}>
                <div className="footer container text-center">
                    <small>Joshua Benjamin *** </small>
                   {/* <br></br> */}
                    <small>Copyright &copy; 2022</small>
                
            </footer>
            </>
        )

    }

export default Footer;