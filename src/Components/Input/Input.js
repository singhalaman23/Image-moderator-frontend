import React from "react";
import './input.css';

const Input = ({onInputChange,onClickDetect})=>{
    return(
        <div className="container">
//             <form action='https://shielded-temple-21044.herokuapp.com/ans' method="get" target="displayAns" >
        <form action='https://image-moderator-backend.onrender.com/ans' method="get" target="displayAns" >
                <div className="inputdiv">
                    <label htmlFor="URL"></label><br/>
                    <input  type="text" id="URL" name="URL" placeholder="Paste the URL of image here" className="URLinput" onChange={onInputChange}/>
                </div>
                <div className="buttonsdiv">
                    <input className="buttons" type="button" value={"Detect"} onClick={onClickDetect}/>
                    <input className="buttons" type="submit" value={"Result"}/> 
                </div>
            </form> 
            <div className="iframediv">
                <iframe name="displayAns" className="iframeDisplay" title="finalAns"></iframe>
            </div>
        </div>
    );
}
export default Input;
