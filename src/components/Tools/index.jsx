import PropTypes from 'prop-types'
import { Checkbox } from '../Form'
import { Baseline, Code, Hash, Preview, Sliders, Font } from '../Icons'

import './tools.css'

const Tools = ({ tools, dispatch }) => {
  const handleChange = e => {
    const { name } = e.target
    dispatch({ type: 'TOGGLE_TOOL', payload: name })
  }

  const toolSet = [
    { id: 'preview', label: 'Toggle Preview', icon: Preview },
    { id: 'showGrid', label: 'Toggle Grid', icon: Hash },
    { id: 'baseline', label: 'Adjust Grid', icon: Baseline },
    // { id: 'samples', label: 'Edit Samples', icon: Edit },
    { id: 'fontLink', label: 'Manage Fonts', icon: Font },
    { id: 'selectors', label: 'Manage Selectors', icon: Code },
    { id: 'adjustFont', label: 'Adjust CSS', icon: Sliders }
  ]

  return (
    <div className="Tools" role="menu">
      <div className="Tools__Buttons" aria-label='Tools' role="group">
        {toolSet.map(tool => {
          const { id } = tool
          const label = <IconLabel icon={tool.icon} label={tool.label} />

          return (
            <Checkbox
              tooltip={tool.label}
              className={`Tools__Button ${['preview', 'showGrid'].includes(id) ? 'Tools__Toggle' : ''}`}
              checked={tools[id]}
              handleChange={handleChange}
              id={id}
              key={id}
              label={label}
              name={id}
              type="button"
            />
          )
        })}
      </div>
    </div>
  )
}

export default Tools

Tools.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tools: PropTypes.object.isRequired
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
