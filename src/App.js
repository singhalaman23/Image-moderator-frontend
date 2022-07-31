import React from "react";
import Particle from './Components/Particles/Particle';
import Heading from './Components/Heading/Heading';
import Input from './Components/Input/Input';
import Image from './Components/Image/Image';
import Footer from './Components/Footer/Footer';
import defaultImage from './Components/Image/defaultImage.png';

class App extends React.Component{

    constructor(){
        super();
        this.state={
            inputValue:'',
            imageUrl:defaultImage
        }
    }

    onInputChange=(event)=>{
        this.setState({inputValue:event.target.value})
    }
    onClickDetect=()=>{
        if((this.state.inputValue).length === 0){
            alert("Please enter an image URL before detecting !");
            return;
        }
        this.setState({imageUrl:this.state.inputValue})
    }
    render(){
        return(
            <div>  
                <Particle/>
                <Heading/>
                <Input onInputChange={this.onInputChange} onClickDetect={this.onClickDetect}/>
                <Image urlEntered={this.state.imageUrl} />
                <Footer/>
            </div>
        );
    }
}
export default App;