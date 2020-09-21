import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Card from '../components/Card'

export const queryImage = graphql`
  query {
    pomodoro: file(relativePath: { eq: "pomodoro.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    spectacles: file(relativePath: { eq: "spectacles.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    calculator: file(relativePath: { eq: "calculator.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    libretutors: file(relativePath: { eq: "libretutors.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    aeon: file(relativePath: { eq: "aeon.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Projects = ({ data }) => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <Layout>
      <SEO title='Projects' />
      <section className='hero custom-hero is-size-4-desktop is-size-5-touch'>
        <div className='hero-body'>
          <h1 className='reset title has-text-centered has-text-light'>
            Projects
          </h1>
          <hr className='custom-hr2' />
          <p className='reset has-text-centered'>
            See more projects on my
            {' '}
            <a href='https://github.com/brenobaptista'>
              GitHub
            </a>
          </p>
        </div>
      </section>
      <section className='section is-size-4-desktop is-size-5-touch'>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <div data-aos='zoom-in-up'>
              <Card
                title='Pomodoro'
                subtitle='Pomodoro App (iOS and Android)'
                link='https://github.com/brenobaptista/pomodoro-react-native'
                tags={['React Native', 'Redux', 'Unit Testing']}
                image={(
                  <Img
                    fixed={data.pomodoro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt='pomodoro'
                  />
                )}
              />
            </div>
            <div data-aos='zoom-in-up'>
              <Card
                title='Spectacles Finances'
                subtitle='My Personal Finance App (iOS and Android)'
                link='https://github.com/brenobaptista/spectacles-finances-react-native'
                tags={['React Native', 'Firebase', 'Expo']}
                image={(
                  <Img
                    fixed={data.spectacles.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt='spectacles'
                  />
                )}
              />
            </div>
            <div data-aos='zoom-in-up'>
              <Card
                title='iOS Calculator'
                subtitle='iOS Calculator clone (iOS and Android)'
                link='https://github.com/brenobaptista/ios-calculator-react-native'
                tags={['React Native', 'Expo', 'iOS Design']}
                image={(
                  <Img
                    fixed={data.calculator.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt='calculator'
                  />
                )}
              />
            </div>
            <div data-aos='zoom-in-up'>
              <Card
                title='LibreTutors'
                subtitle='LibreTutors - Connecting Tutors and Pupils'
                link='https://github.com/brenobaptista/libretutors-react-native'
                tags={['Full Stack', 'Node', 'React Native', 'Maps']}
                image={(
                  <Img
                    fixed={data.libretutors.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt='libretutors'
                  />
                )}
              />
            </div>
            <div data-aos='zoom-in-up'>
              <Card
                title='Aeon Planner'
                subtitle='Personal Planner React PWA'
                link='https://aeonplanner.netlify.com/'
                tags={['PWA', 'React', 'Redux', 'Node', 'Full Stack']}
                image={(
                  <Img
                    fixed={data.aeon.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt='aeon'
                  />
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Projects.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Projects
