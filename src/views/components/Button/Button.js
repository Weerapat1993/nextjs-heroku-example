import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <div>
      <p>Button Component</p> 
    </div>
  )
}

Button.propTypes = {
  data: PropTypes.object,
}

Button.defaultProps = {
  data: {},
}

export default Button
