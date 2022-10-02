import React from "react"
import Navbar from "./Components/navbar"
import Hero from "./Components/hero"
import Card from "./Components/card"
import data from "./data"
import Split from "react-split"

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
          <Split
            sizes={[30, 70]} 
            direction="horizontal" 
            className="split"
          >
          <Hero/>
          <section className="card--list">
            {cardDataElements}
          </section>
          </Split>
        </main>
        
    )
}