import React from "react"
import airbnbLogo from "/Users/advait/Desktop/gitpositories/scrimba/airbnb/airbnb-clone/src/images/airbnb-logo.png"

export default function Navbar() {
    return (
       <nav className="ab--nav">
        <img src={airbnbLogo} className="ab--logo" alt="airbnb logo"></img>
       </nav>
    )
}