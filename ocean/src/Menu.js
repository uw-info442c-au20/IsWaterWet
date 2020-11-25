import React, { Component } from 'react'; 
import Aquarium from './Aquarium';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
          user: this.props.user,
          events: this.props.events
        }
      }

      whichMenu = () => {
          if(this.props.menuStatus === 'aquarium'){
            return (<FishMenu/>)
          } else if(this.props.menuStatus ==='events'){
            return(/*What ever we need for the events menu*/<div/>)
          }
      }

    render(){
        return(
            <div className = "menu">
               {this.whichMenu()}
            </div>
        )
    }
}


class FishMenu extends Component{
    render(){
        return(
            <div className = "fish-menu">
                <img className = "img" src="img/Real-Jellyfish.png" />
                <img className = "img" src="img/Real-Clownfish.png" />
                <img className = "img" src="img/Real-Cuttlefish.png" />
                <img className = "img" src="img/Real-Yellowtang.png" />
            </div>
        )
    }
}

class EventsList extends Component{
    constructor(props){
        super(props);
        this.state = {
          events: this.props.events
        }
      }


    render(){
        let items = this.props.events.map(function (event) {
            return (
                <EventListItem key={event.id} event={event} />
            )
        })
        return (
            <ul>
                {items}
            </ul>
        )
    }
}

class EventListItem extends Component{
    render() {
        return (
            <li>
                <a href={"#events/" + this.props.event.id}>
                    {this.props.event.title} {this.props.event.description}
                </a>
            </li>
        )
    }
}

export default Menu;