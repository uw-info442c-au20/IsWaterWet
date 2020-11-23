import React, { Component } from 'react'; 
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

class Aquarium extends Component {
    render() {
        return (
             <div className="aquarium-background">
                 <Fish/>
                 <MenuController/>
             </div>
        );
    }
}


class Fish extends Component{
    render(){
        return(
            <div className= "fish">
                {this.fishImg("img/Cartoon-Clownfish.png")}              
            </div>
        )
    }

    fishImg(imgPath){
        return (<img src={imgPath} alt="fish"/>)
    }

    movement(){
        
    }


}

class MenuController extends Component{
    render(){
        return(
            <div class="menu-controller">
                <h1>AQUARIUM     EVENTS</h1>
            </div>
        )
    }
}

export default Aquarium;