import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridItem from "../components/gridItem"
import {useQuery} from "@apollo/react-hooks"
import gql from "graphql-tag"
import useInfiniteScroll from "../components/useInfinteScroll"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => {
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const {loading, error, data} = useQuery(APOLLO_QUERY);
  if (loading) return `loading`
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

      {data.posts.nodes.slice(0,offset+10).map((post, index) =>{ return(
          <GridItem key={index} image={`https://api.dataporn.cc/wp-content/uploads/${post.featuredImage.mediaDetails.file}`} alt={post.featuredImage.slug} title={post.title}/>
        )})}
      </div>
      {isFetching && 'Fetching more list items...'}
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
