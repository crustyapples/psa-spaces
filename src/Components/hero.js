import React from "react"
import photoGrid from "/Users/advait/Desktop/gitpositories/scrimba/airbnb/airbnb-clone/src/images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={photoGrid} alt="airbnb grid" className="ab--photogrid"></img>
            <h1>Online Experiences</h1>
            <p className="ab--desc">Join unique interactive activities led by one-of-a-kind hosts–all without leaving home</p>
        </section>
    )
}