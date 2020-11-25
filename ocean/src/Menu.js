import React, { Component } from 'react'; 
import Aquarium from './Aquarium';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            eventsJSON: this.props.events,
            events: [
                {
                    "ID": "01",
                    "date": "12/12/20",
                    "title": "Golden Gardens Beach Trash Pickup",
                    "description": "Come out for some trash pickup on Saturday, Dec. 12 at Golden Gardens! We will be leaving from UW at 1pm from in front of Schmitz. Hope ya'll come out!",
                    "fish": "jelly"
                },
                {
                    "ID": "02",
                    "date": "12/15/20",
                    "title": "Alki Beach Trash Pickup",
                    "description": "Come out to pick up some trash on Alki Beach! It'll be on Tuesday, Dec. 15 and we will leave UW at 12pm from Willow Hall. Let's go make the world a better place!",
                    "fish": "cuttle"
                }
            ]
        }
    }

      whichMenu = () => {
          if(this.props.menuStatus === 'aquarium'){
            return (<FishMenu/>)
          } else if(this.props.menuStatus ==='events'){
            return(<EventMenu events={this.state.eventsJSON}/>)
          }
      }

    render(){
        console.log(this.state.eventsJSON) //It looks like it is here!
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


// Overall Event Page
class EventMenu extends Component{
    render() {
        return (
            <div>
                <h1>Upcoming Events</h1>
                <EventsList events={this.props.events}/>
            </div>
        );
    }
}


//All of the different events compiled within a list
class EventsList extends Component{
    render(){
        let items = this.props.events.events.map(function (event) {
            return (
                <EventListItem key={event.id} event={event} />
            )
        })
        return (
            <a>
                {items}
            </a>
        )
    }
}

// Represents a single event 
class EventListItem extends Component{
    // toggle is used to show/hide the event details page
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false
        }
        this.handleClick = this.handleClick.bind(this);
      }
    
      // changes the toggle state depending on click
      handleClick() {
        this.setState({isToggle: !this.state.isToggle})
      }

    render() {
        return (
            <div class="events">
            <div class = "date">
                <a>{this.props.event.day}</a>
                <a>{this.props.event.month}</a>
            </div>
            <div class="description">
                <a>{this.props.event.description}</a>
            </div>
        </div>

        // <div class="dropdown">
        //     <div class = "drop">
        //     <a active={false} onClick={this.handleClick} class="dropbtn">{this.props.event.date} {this.props.event.title} </a>
        //     </div>
        //     <div id="myDropdown" class="dropdown-content"  style={{display: this.state.isToggle ? 'block': 'none'}}>
        //         <a>{this.props.event.description}</a>
        //     </div>
        // </div>
        )
    }
}

export default Menu;