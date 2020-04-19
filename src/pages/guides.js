import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';

export const queryImage = graphql`
  query {
    ebookaguia: file(relativePath: { eq: "ebookaguia.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    husky: file(relativePath: { eq: "husky.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    manjaro: file(relativePath: { eq: "manjaro.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Guides = ({ data }) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Layout>
      <SEO title="Guides" />
      <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
        <div className="hero-body">
          <h1 className="title has-text-centered has-text-light">Guides</h1>
          <hr className="custom-hr5" />
        </div>
      </section>
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="columns is-centered">
          <div className="column is-half">
            <div data-aos="zoom-in-up">
              <Card
                title="Free Ebook (in Portuguese)"
                subtitle="The Eagle Negotiator's Guide - Coauthor: Angeliano Sousa"
                link="https://drive.google.com/open?id=1EyaNsn_rpdBki7S5lalSI9l73u-QUKBb"
                tags={['Ebook', 'Angeliano Sousa']}
                image={(
                  <Img
                    fixed={data.ebookaguia.childImageSharp.fixed}
                    alt="free ebook"
                  />
                )}
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Husky + ESLint"
                subtitle="Integrating Husky and ESLint"
                link="https://github.com/brenobaptista/husky-eslint"
                tags={['Husky', 'ESLint']}
                image={(
                  <Img
                    fixed={data.husky.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt="husky eslint"
                  />
                )}
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Manjaro i3"
                subtitle="Recommended software for Mi3"
                link="https://github.com/brenobaptista/software-manjaro-i3"
                tags={['Linux', 'Manjaro', 'Arch Linux']}
                image={(
                  <Img
                    fixed={data.manjaro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt="manjaro i3"
                  />
                )}
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Manjaro i3 - Troubleshooting"
                subtitle="Manjaro i3 common problems"
                link="https://github.com/brenobaptista/troubleshooting-manjaro-i3"
                tags={['Linux', 'Manjaro', 'Arch Linux', 'Troubleshooting']}
                image={(
                  <Img
                    fixed={data.manjaro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt="manjaro i3 troubleshooting"
                  />
                )}
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Manjaro KDE"
                subtitle="Recommended software for Manjaro KDE"
                link="https://github.com/brenobaptista/software-manjaro-kde"
                tags={['Linux', 'Manjaro', 'Arch Linux']}
                image={(
                  <Img
                    fixed={data.manjaro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: '10%',
                    }}
                    alt="manjaro kde"
                  />
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

Guides.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Guides;
