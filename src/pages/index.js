import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridItem from "../components/gridItem"
import {useQuery} from "@apollo/react-hooks"
import gql from "graphql-tag"
// import InfiniteScroll from "../components/infiniteScroll"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => {
  const {loading, error, data} = useQuery(APOLLO_QUERY)
  if (loading) return `loading`
  if (error) return `error ${error}`
  return(
    <>
    <Layout>
    <SEO title="Home" />
      <div className="card-columns pt-5 mt-5">
        {data.posts.nodes.map((post, index) =>{ return(
          <GridItem key={index} image={`https://api.dataporn.cc/wp-content/uploads/${post.featuredImage.mediaDetails.file}`} alt={post.featuredImage.slug} title={post.title}/>
        )})}
    </div>
  </Layout>
  </>
  )
}


  export const APOLLO_QUERY = gql`
  query MyQuery {
    posts {
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
