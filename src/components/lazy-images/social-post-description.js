import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SocialImg = styled(Img)`
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
`

const SocialPostDescription = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "social-media-description.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <SocialImg fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
export default SocialPostDescription
