import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridItem from "../components/gridItem"
import {useQuery} from "@apollo/react-hooks"
import gql from "graphql-tag"
import useInfiniteScroll from "../components/useInfinteScroll"
import "bootstrap/dist/css/bootstrap.min.css"
import MyLoader from "../components/loader"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


const IndexPage = () => {
  const [offset, setOffset] = useState(0);
  const [image, setImage] = useState(`https://via.placeholder.com/150`)
  const [openImage, setOpenImage] = useState(false)
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const {loading, error, data} = useQuery(APOLLO_QUERY);
  
  if (error) return `error ${error}`

  function fetchMoreListItems() {
    setOffset(offset+10);
    setIsFetching(false);
  }

  return(
    <>
    <Layout>
    <SEO title="Home" />
      <div className="card-columns pt-5 mt-5">
      {
      loading ?
        <div>
          <div className="col mx-auto">
            <center><MyLoader/></center>
          </div>
          <div className="col mx-auto">
            <center><MyLoader/></center>
          </div>
          <div className="col mx-auto">
            <center><MyLoader/></center>
          </div>
          <div className="col mx-auto">
            <center><MyLoader/></center>
          </div>
          <div className="col mx-auto">
            <center><MyLoader/></center>
          </div>
        </div>:
        data.posts.nodes.slice(0,offset+10).map((post, index) =>{ return(
          <GridItem key={index} image={`https://api.dataporn.cc/wp-content/uploads/${post.featuredImage.mediaDetails.file}`} setImage={setImage} setOpenImage={setOpenImage}  alt={post.featuredImage.slug} title={post.title}/>
        )})}
      </div>
      {isFetching && <div className="col">
            <MyLoader/>
          </div>}

      {openImage && (
      <Lightbox
        mainSrc={image}
        onCloseRequest={() => setOpenImage(false)}
      />
    )}
  </Layout>
  </>
  )
}


  export const APOLLO_QUERY = gql`
  query MyQuery {
    posts (first : 500){
      nodes {
        title
        id
        date
        featuredImage {
          mediaDetails {
            file
          }
        }
      }
    }
  }
  `;
export default IndexPage
