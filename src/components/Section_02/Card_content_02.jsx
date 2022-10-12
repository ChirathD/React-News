import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { id,desc, cover, catgeory, title, authorName, time } }) => {
  
  return (
    
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>

        <Link className="para-link" to={`/${catgeory}`}>
          <div className="text">
            <h4 >{catgeory}</h4>
          </div>
        </Link>

        <Link className="para-link" to={`/post/${id}`}>
          <div className="para">
            <div>
              <h3>{title}</h3>
            </div>
            <p>
              {desc}
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Card
