import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteScroll from "../components/infiniteScroll"
import "bulma/css/bulma.min.css"
import "../components/grid.css"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
      <h1 className="is-size-3">weird but you want to know more right?</h1>
      <p style={{ marginBottom: "5%" }}>
        Now this is the Law of the Jungle, as old and true as the sky, for as
        long as you keep scrolling, you shall find more data.
      </p>
      <div className="image-grid">
        {data.wpql.posts.nodes.map((post, index) =>(
          <div className="image-item" key={index}>
            <img src={`https://api.dataporn.cc/wp-content/uploads/${post.featuredImage.mediaDetails.file}`} alt={post.featuredImage.slug} />
          </div>
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

export default IndexPage
