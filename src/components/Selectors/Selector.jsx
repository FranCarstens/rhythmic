import PropTypes from 'prop-types'
import { Close } from '../Icons'

import './selector.css'

const Selector = ({ current, dispatch, el }) => {
  const currentClass = current ? 'Selector--current' : ''

  const updateCurrent = (e) => {
    dispatch({ type: 'UPDATE_VALUE', payload: { id: 'current', value: e.target.value } })
  }

  const removeSelector = () => {
    dispatch({ type: 'REMOVE_SELECTOR', payload: el })
  }

  return (
    <span className={`Selector ${currentClass}`}>
      <button className="Selector__Select" onClick={updateCurrent} value={el}>{el}</button>
      <button className="Selector__Remove" onClick={removeSelector} value={el}>
        <Close aria-hidden /><span className="sr-only">Remove Selector</span>
      </button>
    </span>
  )
}

export default Selector

Selector.propTypes = {
  current: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  el: PropTypes.string.isRequired
}
