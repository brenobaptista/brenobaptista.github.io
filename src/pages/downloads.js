import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

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
    curriculumvitae: file(relativePath: { eq: "curriculumvitae.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    medals: file(relativePath: { eq: "medals.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    certificates: file(relativePath: { eq: "certificates.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    certificates2: file(relativePath: { eq: "certificates2.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Downloads = ({ data }) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Layout>
      <SEO title="Downloads" />
      <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
        <div className="hero-body">
          <h1 className="title has-text-centered has-text-light">Downloads</h1>
          <hr className="custom-hr3" />
        </div>
      </section>
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="columns is-centered">
          <div className="column is-half">
            <div data-aos="flip-down">
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
            <div data-aos="flip-down">
              <Card
                title="Curriculum Vitae"
                subtitle="My latest curriculum vitae"
                link="https://drive.google.com/open?id=1Slk2GoK6w3KKt-eNdWdYyYEA3J6mM1rH"
                tags={['Curriculum Vitae']}
                image={(
                  <Img
                    fixed={data.curriculumvitae.childImageSharp.fixed}
                    alt="curriculum vitae"
                  />
                )}
              />
            </div>
            <div data-aos="flip-down">
              <Card
                title="Medals"
                subtitle="Science Olympiads Medals"
                link="https://drive.google.com/open?id=1MvF6eOMCpa7Xs1-Jk2g6WwEycGwC3YN-"
                tags={['Medals', 'Science Olympiads']}
                image={
                  <Img fixed={data.medals.childImageSharp.fixed} alt="medals" />
                }
              />
            </div>
            <div data-aos="flip-down">
              <Card
                title="High School Certificates"
                subtitle="Science Olympiads Certificates"
                link="https://drive.google.com/open?id=1AEKeTtAQSQzmZx1_TlNAbKO22yAipaml"
                tags={['Certificates', 'Science Olympiads']}
                image={(
                  <Img
                    fixed={data.certificates.childImageSharp.fixed}
                    alt="certificates"
                  />
                )}
              />
            </div>
            <div data-aos="flip-down">
              <Card
                title="Certificates"
                subtitle="College Certificates"
                link="https://drive.google.com/open?id=17bfdvAJm00vJgqQwRiNsJ0zyRgLIGz0v"
                tags={['Certificates']}
                image={(
                  <Img
                    fixed={data.certificates2.childImageSharp.fixed}
                    alt="free ebook"
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

Downloads.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Downloads;
