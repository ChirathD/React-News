import React, { useState } from "react"
import { hero } from "../dummyData"
import "./Content_01.css"
import Card from "./Card_content_01"

const Content1 = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Content1
