import PropTypes from 'prop-types'

import './select.css'

const Select = ({ disabled, id, onChange, options, readonly, value }) => {
  return (
    <select
      className="Select"
      id={id}
      type="select"
      onChange={onChange}
      value={value}
      disabled={disabled}
      readOnly={readonly}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default Select

Select.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  readonly: PropTypes.bool
}
