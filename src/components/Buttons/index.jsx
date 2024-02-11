import PropTypes from 'prop-types'

import './button.css'

const Button = ({ id, handleClick, className, modifiers, active, 'data-tooltip': tooltip, children }) => {
  const modifierClasses = modifiers?.split(' ').map(modifier => `Button--${modifier}`).join(' ') || ''
  const activeClass = active ? 'Button--active' : ''
  const withTooltipClass = tooltip ? 'Button--with-tooltip' : ''
  const buttonClassNames = `Button ${className} ${modifierClasses} ${activeClass} ${withTooltipClass}`.trim()

  return (
    <button
      id={`Button--${id}`}
      className={buttonClassNames}
      onClick={handleClick}
    >
      {children}
      {tooltip && <span className="Button__tooltip">{tooltip}</span>}
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
  type: PropTypes.oneOf(['', 'primary', 'secondary']),
}

Button.defaultProps = {
  active: false,
  className: 'Button',
  'data-tooltip': '',
  modifiers: '',
  type: ''
}
