import React from "react";
import './image.css';

const Image = ({urlEntered})=>{
    return(
        <div className="imagediv">
            <img src={urlEntered} alt=""></img>
        </div>
    );
}
export default Image;