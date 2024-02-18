import PropTypes from 'prop-types';
import { Checkbox } from '../Form'

import './tool.css'

const Tool = ({ color, dispatch, icon, id, label, tools }) => {
  const labelComponent = <IconLabel icon={icon} label={label} />

  const handleChange = e => {
    const { name } = e.target
    dispatch({ type: 'TOGGLE_TOOL', payload: name })
  }

  return (
    <Checkbox
      tooltip={label}
      className={`Tools__Tool ${['preview', 'showGrid'].includes(id) ? 'Tools__Toggle' : ''} ${color ? 'color' : ''}`}
      checked={tools[id]}
      handleChange={handleChange}
      id={id}
      label={labelComponent}
      name={id}
      type="button"
    />
  )
}

export default Tool

Tool.propTypes = {
  color: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tools: PropTypes.object.isRequired,
}

const IconLabel = ({ icon: Icon, label }) => (
  <>
    <Icon />
    <span className="sr-only">{label}</span>
  </>
)

IconLabel.propTypes = {
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
