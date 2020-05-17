import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridItem from "../components/gridItem"
import {Query} from "react-apollo"
import gql from "graphql-tag"
import InfiniteScroll from "../components/infiniteScroll"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
      <div className="card-columns pt-5 mt-5">
        {data.wpql.posts.nodes.map((post, index) =>(
          <GridItem key={index} image={`https://api.dataporn.cc/wp-content/uploads/${post.featuredImage.mediaDetails.file}`} alt={post.featuredImage.slug} title={post.title}/>
        ))}
    </div>
  </Layout>
)

export const query = graphql`
  query myQuery {
    wpql {
      posts {
        nodes {
          featuredImage {
            mediaDetails {
              file
            }
            slug
          }
          title
        }
      }
    }
  }`

  export const APOLLO_QUERY = gql`
  query myQuery {
    wpql {
      posts {
        nodes {
          featuredImage {
            mediaDetails {
              file
            }
            slug
          }
          title
        }
      }
    }
  }
  `

export default IndexPage
