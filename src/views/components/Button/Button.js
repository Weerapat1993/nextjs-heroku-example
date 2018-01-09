import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <div>
    <button>Button Component</button> 
  </div>
)

Button.propTypes = {
  data: PropTypes.object,
}

Button.defaultProps = {
  data: {},
}

export default Button
