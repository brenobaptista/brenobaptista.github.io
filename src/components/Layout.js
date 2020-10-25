import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Navbar/Header'
import '../styles/index.scss'

const Layout = ({ children }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div>
        <main>
          {children}
        </main>
        <footer className='has-text-centered'>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Breno Baptista.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
