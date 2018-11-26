import React from "react"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"


const testPage = (props) => (
//export default ({ data }) => (
    <div>      
      <h1>Hello gatsby-image</h1>
      <Img fixed={props.data.imageOne.childImageSharp.fixed} /><br />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} /><br />
      <Img fixed={props.data.imageThree.childImageSharp.fixed} />
    </div>
)

export default testPage

export const pageQuery = graphql`
query {
  imageOne: file(relativePath: { eq: "ishan-seefromthesky.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  imageTwo: file(relativePath: { eq: "remi-yuan-560057-unsplash.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  imageThree: file(relativePath: { eq: "sam-beasley-1176700-unsplash.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  } 
}
`