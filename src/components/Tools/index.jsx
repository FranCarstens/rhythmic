import PropTypes from 'prop-types'
import { Baseline, Code, Hash, Preview, Sliders, Font } from '../Icons'
import Tool from './Tool'

import './tools.css'

const Tools = ({ tools, dispatch }) => {

  const toggleSet = [
    { id: 'preview', label: 'Toggle Preview', icon: Preview },
    { id: 'showGrid', label: 'Toggle Grid', icon: Hash }
  ]

  const menuSet = [
    { id: 'baseline', label: 'Adjust Grid', icon: Baseline },
    { id: 'fontLink', label: 'Manage Fonts', icon: Font },
    { id: 'selectors', label: 'Manage Selectors', icon: Code },
    { id: 'adjustFont', label: 'Adjust CSS', icon: Sliders }
  ]

  return (
    <div className="Tools" role="menu">
      <div className="Tools__Toggles" aria-label='Toggles' role="group">
        {toggleSet.map((tool) => <Tool {...tool} tools={tools} dispatch={dispatch} key={tool.id} color />)}
      </div>
      <nav className="Tools__Menu" aria-label='Menu' role="group">
        {menuSet.map((tool) => <Tool {...tool} tools={tools} dispatch={dispatch} key={tool.id} />)}
      </nav>
    </div>
  )
}

export default Tools

Tools.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tools: PropTypes.object.isRequired
}

