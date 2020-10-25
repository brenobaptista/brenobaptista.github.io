import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Card = ({
  key, title, description, date, link
}) => (
  <div key={key}>
    <Link to={link}>
      <div className='card'>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content no-scroll'>
              <h3 className='reset post-title'>
                {title}
              </h3>
              <p className='date'>
                {date}
              </p>
              <p className='description'>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

Card.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string
}

Card.defaultProps = {
  link: null
}

export default Card
