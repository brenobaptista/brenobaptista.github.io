import React, { useEffect } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero custom-hero">
        <div className="hero-body">
          <figure className="photo image is-128x128">
            <StaticQuery
              query={graphql`
                query {
                  photo: file(relativePath: { eq: "freelancer.png" }) {
                    childImageSharp {
                      fixed(width: 128, height: 128) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              `}
              render={(data) => (
                <Img
                  fixed={data.photo.childImageSharp.fixed}
                  imgStyle={{
                    borderRadius: '100%',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    padding: '.5rem',
                    borderColor: '#181A1B',
                    backgroundColor: '#181A1B',
                  }}
                  alt="Breno Baptista"
                />
              )}
            />
          </figure>
          <h1 className="title is-1 has-text-centered has-text-light">
            Breno Baptista
          </h1>
          <h2 className="subtitle is-4 has-text-centered has-text-light">
            Full Stack Engineer
          </h2>
          <div className="has-text-centered">
            <a
              href="https://drive.google.com/open?id=1MAAqz7jJmALj78pWShX3GU6N3Xi-Jpcd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="curriculum vitae"
            >
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
            </a>
            <a
              href="mailto:brenomb07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email"
            >
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/breno-baptista"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
            <a
              href="https://github.com/brenobaptista"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              href="https://www.instagram.com/breno.mabapt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
            <a
              href="https://wa.me/5585981830084"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
            >
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="container section content is-size-4-desktop is-size-5-touch">
        <h3 className="title has-text-light">About Me</h3>
        <p className="has-text-justified paragraph">
          I love studying about Linux (Arch Linux) and programming in general.
          I like reading, playing video games and traveling.
          My favorite series of all times is Friends.
          I could play the ocarina (I forgot how to play it).
          I love coffee and spicy food.
          Every month, I invest in stock market here in Brazil (buy and hold).
        </p>
        <p className="has-text-justified paragraph">
          For a year, I worked as a web
          {' '}
          <Link to="/stack/">developer</Link>
          {' '}
          and as an English teacher. Now, I work as a Full Stack
          Engineer at The Privacy Police.
          I study Computer Science at Unifacvest University Center.
        </p>
        <p className="has-text-justified paragraph">
          I&apos;ve developed some personal
          {' '}
          <Link to="/projects/">projects</Link>
          {' '}
          for myself. Also, check out more nice
          {' '}
          <Link to="/downloads/">things</Link>
          {' '}
          about me!
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;
