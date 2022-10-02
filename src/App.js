import React from "react"
import Navbar from "./Components/navbar"
import Hero from "./Components/hero"
import Card from "./Components/card"
import Profile from "./Components/profile"

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
            sizes={[70, 30]} 
            direction="horizontal" 
            className="split"
          >
          <section>
          <Hero/>
          <section className="card--list">
            {cardDataElements}
          </section>
          </section>
          <Profile></Profile>
          </Split>
          

        </main>
        
    )
}