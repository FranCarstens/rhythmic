import PropTypes from 'prop-types'

import './input.css'

const Input = ({ dataInfo, disabled, id, max, min, onChange, readonly, step, type, value, ...props }) => {
  return (
    <input
      className="Input"
      id={id}
      type={type}
      min={min}
      step={step}
      max={max}
      onChange={onChange}
      value={value}
      data-info={dataInfo}
      disabled={disabled}
      readOnly={readonly}
      {...props}
    />
  )
}

export default Input

Input.propTypes = {
  dataInfo: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  max: PropTypes.string,
  min: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
  step: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}
