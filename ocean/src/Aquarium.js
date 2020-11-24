import React, { Component } from 'react'; 
import TweenOne from 'rc-tween-one';

const windowWidth = window.innerWidth - 180
const windowHeight = window.innerHeight

class Aquarium extends Component {
    render() {
        return (
             <div className="aquarium-background">
                 <div className="fish-container">
                 <Fish fish="clown-fish"/>
                 <Fish fish="jelly-fish"/>
                 <Fish fish="yellow-tang"/>
                 <Fish fish="cuttle-fish"/>
                 </div>
                 <MenuController/>
             </div>
        );
    }
}

class Fish extends Component{
//I need to change the 10000 to a constant or something
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        let fishSpeed = 0
        if(props.fish === 'clown-fish'){
            fishSpeed = 10000
        } else  if(props.fish === 'jelly-fish'){
            fishSpeed = 50000
        } else  if(props.fish === 'yellow-tang'){
            fishSpeed = 7000
        } else if (props.fish === 'cuttle-fish'){
            fishSpeed = 25000
        }

        this.state = {
            fish : props.fish,
            speed: fishSpeed,
            img: 1
        }
      }

    componentDidMount(){
        //switch the image
       setInterval(this.switchImage, this.state.speed)
    }

    switchImage(){
           if(this.state.img === 1){
            this.setState({img: 2})
           } else {
            this.setState({img: 1})
       }
    }

    render(){
        return(
           this.fishPicker()
        )
    }

    fishPicker(fishName){


        let clownFishIMG = "img/Cartoon-Clownfish.png"
        let yellowTangIMG = "img/Cartoon-Yellowtang.png"
        let cuttleFishIMG = "img/Cartoon-Cuttlefish.png"
        let jellyFishIMG = "img/Cartoon-Jellyfish.png"

        
        if(this.state.fish=== "clown-fish"){
            if(this.state.img === 1){
                clownFishIMG = "img/Cartoon-Clownfish.png"
            } else {
                clownFishIMG = "img/Cartoon-Clownfish2.png"
            }
        }

        if(this.state.fish=== "yellow-tang"){
            if(this.state.img === 1){
                yellowTangIMG = "img/Cartoon-Yellowtang.png"
            } else {
                yellowTangIMG = "img/Cartoon-Yellowtang2.png"
            }
        }

        if(this.state.fish=== "cuttle-fish"){
            if(this.state.img === 1){
                cuttleFishIMG = "img/Cartoon-Cuttlefish.png"
            } else {
                cuttleFishIMG = "img/Cartoon-Cuttlefish2.png"
            }
        }   

        if(this.state.fish=== "jelly-fish"){
            if(this.state.img === 1){
                jellyFishIMG = "img/Cartoon-Jellyfish.png"
            } else {
                jellyFishIMG = "img/Cartoon-Jellyfish2.png"
            }
        }
       

        let clownFish = (<div className= "fish">
        <TweenOne
         animation={{ 
            x: windowWidth,
            yoyo: true,
            repeat: -1, 
            duration: this.state.speed
        }}>
            <TweenOne 
            animation={{ 
                y:20,
                yoyo: true,
                repeat: -1, 
                duration: 1000
            }}>
                <img src={clownFishIMG} alt="Clownfish"/>   
            </TweenOne>
        </TweenOne>
    </div>)

        let cuttleFish = (<div className= "fish">
        <TweenOne
        animation={{ 
            x: windowWidth,
            yoyo: true,
            repeat: -1, 
            duration: this.state.speed
        }}>
            <TweenOne 
            animation={{ 
                y:350,
                yoyo: true,
                repeat: -1, 
                duration: 1000
            }}>
                <img src={cuttleFishIMG} alt="Cuttlefish"/>    
            </TweenOne>
        </TweenOne>
    </div>)

        let jellyFish = (<div className= "fish">
        <TweenOne
        animation={{ 
            x: windowWidth,
            yoyo: true,
            repeat: -1, 
            duration: this.state.speed
        }}>
            <TweenOne 
            animation={{ 
                y:500,
                yoyo: true,
                repeat: -1, 
                duration: 3000
            }}>
                <img src={jellyFishIMG} alt="Cuttlefish"/>    
            </TweenOne>
        </TweenOne>
        </div>)

        let yellowTang = (<div className= "fish">
            <TweenOne
            animation={{ 
                x: windowWidth,
                yoyo: true,
                repeat: -1, 
                duration: this.state.speed
            }}>
                <TweenOne 
                animation={{ 
                    y:80,
                    yoyo: true,
                    repeat: -1, 
                    duration: 400
                }}>
                    <img src={yellowTangIMG} alt="YellowTang"/>    
                </TweenOne>
            </TweenOne>
        </div>)

    if(this.state.fish === 'clown-fish'){
        return clownFish
    } else if(this.state.fish === 'cuttle-fish'){
        return cuttleFish
    } else if(this.state.fish === 'jelly-fish'){
        return jellyFish
    } else if(this.state.fish === 'yellow-tang'){
        return yellowTang
    }

    }
}

class MenuController extends Component{
    render(){
        return(
            <div className="menu-controller">
                <nav>
                    <ul className="menu-list">
                        <li>
                            <h1>AQUARIUM</h1>
                        </li>
                        <li>
                            <h1>EVENTS</h1>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Aquarium;