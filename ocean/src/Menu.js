import React, { Component } from 'react'; 

class Menu extends Component{
    render(){
        return(
            <div className = "menu">
                <FishMenu/>
            </div>
        )
    }
}


class FishMenu extends Component{
    render(){
        return(
            <div className = "fish-menu">
                <img src="img/Real-Clownfish.png" />
                <img src="img/Real-Jellyfish.png" />
                <img src="img/Real-Cuttlefish.png" />
                <img src="img/Real-Yellowtang.png" />
            </div>
        )
    }
}

class EventMenu extends Component{

}

export default Menu;

