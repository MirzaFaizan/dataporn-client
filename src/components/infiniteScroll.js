import React from "react"
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component"
import {graphql} from "gatsby"
import "./grid.css"


const Grid = ({ images, loading, fetchImages }) => {
    // Create gallery here
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => fetchImages()}
        hasMore={true}
        loader={
          <p style={{ textAlign: "center", marginTop: "1%" }}>
            More data porn incoming
          </p>
        }
      >
        <div className="image-grid">
          {!loading
            ? images.map(image => (
                <div className="image-item" key={image.id}>
                  <img src={image.urls.regular} alt={image.alt_description} />
                </div>
              ))
            : ""}
        </div>
      </InfiniteScroll>
    )
  }   

export default Grid