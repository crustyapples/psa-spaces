import React from "react"
import starLogo from "/Users/advait/Desktop/gitpositories/scrimba/airbnb/airbnb-clone/src/images/star.png"


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card--main">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={require(`../images/${props.item.coverImg}`)} alt="card live host" ></img>
            <div className="card--desc">
                
                <div className="card--stats">
                    <img className="card--star" src={starLogo} alt="star"></img>
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) • </span>
                    <span className="gray">{props.item.location}</span>
                </div>
                
                <p className="card--title">{props.item.title}</p>
                <p className="card--price"><span className="bold">From ${props.item.price} / </span><span>person</span></p>
            
            </div>
        </div>
    )
}