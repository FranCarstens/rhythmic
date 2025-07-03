import PropTypes from 'prop-types'

import clstr from '@/utils/clstr'

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
    <div className={clstr(identifier, `${identifier}--${type}`, { [className]: className })}>
      <input
        className={clstr(`${identifier}__Input`, { 'sr-only': hide })}
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
