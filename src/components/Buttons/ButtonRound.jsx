import PropTypes from 'prop-types'
import Button from '.'
import './buttonRound.css'

const ButtonRound = ({ className, ...props }) => {
  return (
    <Button className={`${className} Button--Round`}  {...props} />
  )
}

export default ButtonRound

ButtonRound.propTypes = {
  className: PropTypes.string
}

ButtonRound.defaultProps = {
  className: ''
}
