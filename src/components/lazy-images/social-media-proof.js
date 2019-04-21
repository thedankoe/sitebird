import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SocialProofImg = styled(Img)`
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
`

const SocialMediaProof = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "social-media-proof.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <SocialProofImg fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
export default SocialMediaProof
