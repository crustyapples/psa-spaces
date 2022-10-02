import React from "react"
import person from "../images/person.png"


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "FULL"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card--main">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={require(`../images/${props.item.coverImg}`)} alt="card live host" ></img>
            <div className="card--desc">
                
                <div className="card--stats">
                    <img className="card--star" src={person} alt="person"></img>
                    <span>{30 -  props.item.openSpots}</span>
                    <span className="gray"> /30</span>
                    {/* <span className="gray">{props.item.location}</span> */}
                </div>
                
                <p className="card--title"><span className="bold">{props.item.title}</span></p>
                {/* <p className="card--price"><span className="bold">From ${props.item.price} / </span><span>person</span></p> */}
                <p className="card--price">{props.item.description}</p>
                <button
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://psa-spaces.netlify.app/';
                    }}
                > 
                Join Room
                </button>
            
            </div>
        </div>
    )
}