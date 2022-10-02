import React from "react"
import psaLogo from "../images/psa-logo.png"

export default function Navbar() {
    return (
       <nav className="ab--nav">
        <img src={psaLogo} className="ab--logo" alt="psa logo"></img>
       </nav>
    )
}