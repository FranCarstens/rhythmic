import PropTypes from 'prop-types'

const CheckboxBase = ({
  checked,
  className,
  handleChange,
  id,
  identifier,
  label,
  name,
  tooltip,
  type,
  hide
}) => {
  return (
    <div className={`${identifier} ${identifier}--${type} ${className || ''}`}>
      <input
        className={`${identifier}__Input ${hide ? 'sr-only' : ''}`}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={id}
        name={name}
      />

      <label className={`${identifier}__Label`} htmlFor={id} data-tooltip={tooltip}>
        {label}
      </label>
    </div >
  )
}

export default CheckboxBase

CheckboxBase.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  name: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  type: PropTypes.string.isRequired,
  hide: PropTypes.bool
}
