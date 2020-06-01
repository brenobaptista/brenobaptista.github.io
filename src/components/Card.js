import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, subtitle, link, tags, image }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="reset image is-96x96">
              {image}
            </figure>
          </div>
          <div className="media-content no-scroll">
            <h4 className="reset title is-size-5-desktop is-size-6-touch has-text-light">
              {title}
            </h4>
            <p className="subtitle is-size-5-desktop is-size-6-touch has-text-light">
              {subtitle}
            </p>
            <div className="tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.node,
};

Card.defaultProps = {
  link: null,
  tags: [],
  image: null,
};

export default Card;
