import PropTypes from 'prop-types'

const button = ({color, text}) => {
  return (
    <button style={{backgroundColor: color}}
    className="btn">
      {text}
    </button>
  )
}



button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default button