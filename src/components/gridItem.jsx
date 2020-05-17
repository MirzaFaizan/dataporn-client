import React from "react"
import share from "./image"

const GridItem = ({ image, alt, title }) => {
    // Create gallery here
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={alt}/>
                <div className="card-body">
    <p className="card-text text-muted">{title} <span>{share}</span></p>
            </div>
        </div>
    )
  }   

export default GridItem