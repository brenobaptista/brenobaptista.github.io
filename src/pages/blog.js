import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogCard from '../components/BlogCard'

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const posts = data.allMdx.edges

  useEffect(() => {
    AOS.init()
  })

  return (
    <Layout>
      <SEO title='Blog' />
      <section className='hero custom-hero is-size-4-desktop is-size-5-touch'>
        <div className='hero-body'>
          <h1 className='reset title has-text-centered has-text-light'>
            Blog
          </h1>
          <hr className='custom-hr5' />
        </div>
      </section>
      <section className='section is-size-4-desktop is-size-5-touch'>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <div>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div data-aos='zoom-in-up'>
                    <BlogCard
                      key={node.fields.slug}
                      title={title}
                      description={node.frontmatter.description || node.excerpt}
                      date={node.frontmatter.date}
                      link={`../blog${node.fields.slug}`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired
}

export default Blog
