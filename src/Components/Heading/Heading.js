import React from "react";
import './Heading.css';
function Heading(){
    return(
        <div>
            <h1>Image Moderator</h1>
            <div className="para">
                <p>This web app returns probability scores on the likelihood that an image contains concepts such as gore, drugs, explicit or suggestive nudity. It determines if images are “safe." </p>
            </div>

        </div>
    );
}
export default Heading;