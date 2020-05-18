import React from "react"
import share from "../images/sharepost.svg"
import "./gridItem.css"

const GridItem = ({ image, alt, title }) => {
    // Create gallery here
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={alt}/>
                <div className="card-body row">
                    <div className="col-10">
                        <p className="card-text font-weight-bold spacing">{title}</p>
                    </div>
                    <div className="col-2">
                        <img src={share} alt="share" height="30" width="30"/>
                    </div>
            </div>
        </div>
    )
  }   

export default GridItem