import PropTypes from 'prop-types'


const Button = ({ color, text }) => {
  return (     
  <button style={{backgroundColor: color }}
  ClassName='btn'>
    {text}
    </button>
    )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}


export default Button
