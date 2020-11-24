import React, { Component } from 'react'; 

class Menu extends Component{
    render(){

        // placeholder events array. need to pull from events.json
        let events = [
            {title: 'Golden Gardens', description: 'Come out for some trash pickup on Saturday, Dec. 12 at Golden Gardens! We will be leaving from UW at 1pm from in front of Schmitz. Hope yall come out!'},
            {title: 'Alki Beach', description: '"Come out to pick up some trash on Alki Beach! Itll be on Tuesday, Dec. 15 and we will leave UW at 12pm from Willow Hall. Lets go make the world a better place!"'},
        ]

        return(
            <div className = "menu">
                <FishMenu/>
                <EventsList events={events}/>
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

