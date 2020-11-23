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
                <TweenOne
                 animation={{ 
                    x:1000,
                    yoyo: true,
                    repeat: -1, 
                    duration: 10000
                }}>
                    <TweenOne 
                    animation={{ 
                        y:20,
                        yoyo: true,
                        repeat: -1, 
                        duration: 1000
                    }}>
                        {this.fishImg("img/Cartoon-Clownfish.png")}    
                    </TweenOne>
                </TweenOne>
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