import PropTypes from 'prop-types'
import './range.css'

const Range = ({ id, type, min, step, max, onChange, value, dataInfo, disabled, readonly }) => {
  return (
    <div className="Range">
      <input
        className="Range__Input"
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
      />
      <span className="Range__Data">{dataInfo}</span>
    </div>
  )
}

export default Range

Range.propTypes = {
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
  ]).isRequired,
}
