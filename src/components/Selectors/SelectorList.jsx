import PropTypes from 'prop-types';
import Selector from './Selector'

import './selectorList.css'

const SelectorList = ({ selectors, current, ...props }) => {
  return (
    <ul className="SelectorList">
      {selectors
        .map((el) => <Selector key={el} {...props} el={el} current={el === current} />)
      }
    </ul>
  )
}

export default SelectorList

SelectorList.propTypes = {
  selectors: PropTypes.array.isRequired,
  current: PropTypes.string
}
