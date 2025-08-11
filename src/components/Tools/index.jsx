import PropTypes from 'prop-types'

import { Baseline, Code, Hash, Preview, Sliders, Font } from '../Icons'
import Tool from './Tool'

import './tools.css'

const Tools = ({ tools, dispatch, i18 }) => {
  const toggleSet = [
    { id: 'preview', label: i18?.toggles?.preview, icon: Preview },
    { id: 'showGrid', label: i18?.toggles?.showGrid, icon: Hash }
  ]

  const menuSet = [
    { id: 'baseline', label: i18?.menu?.baseline, icon: Baseline },
    { id: 'fontLink', label: i18?.menu?.fontLink, icon: Font },
    { id: 'selectors', label: i18?.menu?.selectors, icon: Code },
    { id: 'adjustFont', label: i18?.menu?.adjustFont, icon: Sliders }
  ]

  return (
    <nav className="Tools">
      <div className="Tools__Toggles" aria-label={i18?.toggles?.title}>
        {toggleSet.map((tool) => <Tool {...tool} tools={tools} dispatch={dispatch} key={tool.id} color toggle i18={i18} />)}
      </div>

      <div className="Tools__Menu" aria-label={i18?.toggles?.menu}>
        {menuSet.map((tool) => <Tool {...tool} tools={tools} dispatch={dispatch} key={tool.id} i18={i18} />)}
      </div>
    </nav>
  )
}

export default Tools

Tools.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tools: PropTypes.object.isRequired,
  i18: PropTypes.object.isRequired
}
