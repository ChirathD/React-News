import React, { useState } from "react"
import { popular } from "../dummyData"
import "./Content_02.css"
import Card from "./Card_content_02"

const Content2 = () => {
  const [items, setIems] = useState(popular)

  return (
    <>
      <section className='hero2'>
        <div className='container2'>
          {items.map((item) => {
            if(item.id < 10){
                return (
                <>
                  <Card key={item.id} item={item} />
                </>
                ) }
            })}
        </div>
      </section>
    </>
  )
}

export default Content2
