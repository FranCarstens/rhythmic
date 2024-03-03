import PropTypes from 'prop-types'
import clstr from '../../utils/clstr'

// layout
import './button.css'
import './button-icon.css'
import './button-round.css'
import './button-tooltip.css'
import './button-inline.css'
// colors
import './button-default.css'
import './button-highlight.css'
import './button-alternative.css'
import './button-subtle.css'

const Button = ({ id, handleClick, className, modifiers, active, 'data-tooltip': tooltip, children }) => {
  const isDefault = ['highlight', 'alternative', 'subtle'].every(modifier => !modifiers.includes(modifier))
  const modifierClasses = `${modifiers} ${isDefault ? 'default' : ''}`?.split(' ').filter(Boolean).join(' ') || ''
  const activeClass = active ? 'active' : ''
  const withTooltipClass = tooltip ? 'tooltip' : ''
  const buttonClassNames = clstr(`btn ${className} ${modifierClasses} ${activeClass} ${withTooltipClass}`)

  return (
    <button
      id={`btn--${id}`}
      className={buttonClassNames}
      onClick={handleClick}
    >
      {children}
      {tooltip && <span className="btn__tooltip">{tooltip}</span>}
    </button >
  )
}

export default Button

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  'data-tooltip': PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modifiers: PropTypes.string,
}

Button.defaultProps = {
  active: false,
  className: '',
  'data-tooltip': '',
  modifiers: '',
  type: ''
}
