import PropTypes from 'prop-types'

import Wrapper from '../Wrapper'

const Fieldset = ({ className, children }) => {
  const Legend = children[0]
  const ChildNodes = children.slice(1)

  return (
    <fieldset className={className}>
      {Legend}
      <Wrapper>
        {ChildNodes}
      </Wrapper>
    </fieldset>
  )
}

export default Fieldset

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
