import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const Footer = () => (
  
    <div className="bg-dark text-center text-white">
    
    <div className="footer">

   
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://icaf2.netlify.app/icaf">SLIIT </a>
      </MDBContainer>
    </div>
 
  </div>
  </div>
);

export default Footer;