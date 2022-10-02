import React from "react"
import Navbar from "./Components/navbar"
import Hero from "./Components/hero"
import Card from "./Components/card"
import data from "./data"

export default function App() {
    const cardDataElements = data.map(item => {
      return (
      <Card
          key={item.id}
          item={item}
      />
    )
  })

    return (
        <main>
          <Navbar/>
          <Hero/>
          <section className="card--list">
            {cardDataElements}
          </section>
        </main>
    )
}