import React from 'react'
import PropTypes from 'prop-types'
// import 'bootstrap/dist/css/bootstrap.css'

function Card(props) {
  return (
    <div className="card my-3 mx-auto" style={{ width: '18rem' }}>
      {props.img && (
        <img
          src={props.img}
          className="card-img-top"
          alt=""
          width="100%"
          height="180"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a href="/" className="btn btn-primary">
          <strong>Go somewhere</strong>
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  props: PropTypes.objectOf({
    img: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Card
