import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from './Bio'
import Layout from './Layout'
import SEO from './SEO'

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
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
          <div className='column is-two-thirds'>
            <h1 className='reset post-title'>
              {post.frontmatter.title}
            </h1>
            <p className='date'>
              {post.frontmatter.date}
            </p>
            <MDXRenderer>
              {post.body}
            </MDXRenderer>
            <hr className='hr-bio' />
            <Bio />

            <ul className='change-post'>
              <li>
                {previous && (
                  <Link to={`../../blog${previous.fields.slug}`} rel='prev'>
                    ←
                    {' '}
                    {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`../../blog${next.fields.slug}`} rel='next'>
                    {next.frontmatter.title}
                    {' '}
                    →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default BlogPostTemplate
