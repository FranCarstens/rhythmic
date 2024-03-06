import PropTypes from 'prop-types';
import Selector from './Selector'

import './selectorList.css'

const SelectorList = ({ current, dispatch, selectors }) => {

  return (
    <ul className="SelectorList">
      {selectors
        .map((el) => <Selector key={el} el={el} dispatch={dispatch} current={el === current} />)
      }
    </ul>
  )
}

export default SelectorList

SelectorList.propTypes = {
  selectors: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  current: PropTypes.string
}
