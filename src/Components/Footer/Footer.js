import React from "react";
import './footer.css';
import linkedin_logo from './linkedin_logo.png';
import github_logo from './github_logo.png';
const Footer = () =>{
    return(
        <div className="footerdiv">
            <footer>
                Made with &#9825; by Aman Singhal<br/> <br/>
                <span>
                <a href="https://www.linkedin.com/in/singhalaman23/">
                    <img alt="" src={linkedin_logo} className="logosclass"></img>
                </a>

                <a href="https://github.com/singhalaman23">
                    <img alt="" src={github_logo} className="logosclass"></img>
                </a>
                </span>
                
                
                <span>All Rights Reserved</span> 
                <span className="samples">{"(For sample image URLs, click - "}
                <a className="samplesLink" href="https://github.com/singhalaman23/Image-moderator-sampleURLs/blob/main/sampleURLs.md">
                    {"here"}
                </a>
                {" )"}
                </span>

                <span className="samples">{"(Facing any problem? click - "}
                <a className="samplesLink" href="https://github.com/singhalaman23/Image-moderator-sampleURLs/blob/main/problems.md">
                    {"here"}
                </a>
                {" )"}
                </span>

                <span className="samples">{"(For documentation, click - "}
                <a className="samplesLink" href="https://github.com/singhalaman23/Image-moderator-documentation">
                    {"here"}
                </a>
                {" )"}
                </span>
                
            </footer>
        </div>
    );
}
export default Footer;
