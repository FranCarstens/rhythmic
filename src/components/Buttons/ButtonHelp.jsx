import PropTypes from 'prop-types'
import { Help } from '../Icons'
import './button-help.css'

// eslint-disable-next-line no-unused-vars
const ButtonHelp = ({ section, dispatch }) => {
  const handleClick = () => {
    dispatch({ type: 'TOGGLE_HELP', payload: section })
  }

  return (
    <button
      id={`help-${section}`}
      className="ButtonHelp"
      onClick={handleClick}
    >
      <Help aria-hidden />
      <span className="sr-only">Help</span>
    </button>
  )
}

export default ButtonHelp

ButtonHelp.propTypes = {
  section: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}
