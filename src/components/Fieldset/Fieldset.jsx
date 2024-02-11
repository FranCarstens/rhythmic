import PropTypes from 'prop-types'
import Wrapper from '../Wrapper'

const Fieldset = ({ children }) => {
  const Legend = children[0]
  const ChildNodes = children.slice(1)

  return (
    <fieldset>
      {Legend}
      <Wrapper>
        {ChildNodes}
      </Wrapper>
    </fieldset>
  )
}

export default Fieldset

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
}
