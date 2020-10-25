import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const bioQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { author } = data.site.siteMetadata
      return (
        <div className='bio'>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginTop: 20,
              marginBottom: 0,
              minWidth: 50,
              borderRadius: '100%',
            }}
            imgStyle={{
              borderRadius: '50%',
            }}
          />
          <p>
            Full stack engineer who learns a new thing everyday.
            Interested in everything that involves JavaScript and GNU/Linux,
            but never refuses to discover new technologies.
          </p>
        </div>
      )
    }}
  />
)

export default Bio
