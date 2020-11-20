import React, { Component } from 'react'; 

class Aquarium extends Component {
    render() {
        return (
             <div className="aquarium-background">
                 <MenuController/>
             </div>
        );
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