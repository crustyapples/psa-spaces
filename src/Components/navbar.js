import React from "react"
import psaLogo from "/Users/advait/Desktop/gitpositories/psa-spaces/psa-spaces/src/images/psa-logo.png"

export default function Navbar() {
    return (
       <nav className="ab--nav">
        <img src={psaLogo} className="ab--logo" alt="psa logo"></img>
       </nav>
    )
}