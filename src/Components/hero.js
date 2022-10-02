import React from "react"
import psaHero from "../images/psa-hero.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={psaHero} alt="airbnb grid" className="ab--photogrid"></img>
            <h1>PSA Spaces</h1>
            <p className="ab--desc">Work or play, do it at your own pace at the PSA Space</p>
        </section>
    )
}