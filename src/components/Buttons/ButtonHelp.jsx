import PropTypes from 'prop-types'
import Button from '.'
import { Help } from '../Icons'
import './buttonHelp.css'

// eslint-disable-next-line no-unused-vars
const ButtonHelp = ({ section, dispatch }) => {
  const handleClick = () => {
    dispatch({ type: 'TOGGLE_HELP', payload: section })
  }

  return (
    <Button
      id={`help-${section}`}
      className="Button--Help"
      handleClick={handleClick}
      modifiers="help"
    >
      <Help aria-hidden />
      <span className="sr-only">Help</span>
    </Button>
  )
}

export default ButtonHelp

ButtonHelp.propTypes = {
  section: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}
