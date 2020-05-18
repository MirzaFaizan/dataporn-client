import React from "react"
import ContentLoader from "react-content-loader" 

const MyLoader = () => (
  <ContentLoader 
    speed={1}
    width={300}
    height={420}
    viewBox="0 0 300 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#dadada"
  >
    <rect x="14" y="389" rx="3" ry="3" width="174" height="10" /> 
    <rect x="27" y="21" rx="0" ry="0" width="5" height="0" /> 
    <rect x="-39" y="-22" rx="0" ry="0" width="331" height="350" /> 
    <circle cx="254" cy="372" r="36" /> 
    <rect x="13" y="352" rx="3" ry="3" width="174" height="13" />
  </ContentLoader>
)

export default MyLoader