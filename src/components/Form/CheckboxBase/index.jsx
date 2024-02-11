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
  type
}) => {
  return (
    <div className={`${identifier} ${identifier}--${type} ${className || ''}`} data-tooltip={tooltip}>
      <input
        className={`${identifier}__Input`}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={id}
        name={name}
      />

      <label className={`${identifier}__Label`} htmlFor={id}>
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
  type: PropTypes.string.isRequired
}
