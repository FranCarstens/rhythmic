import PropTypes from 'prop-types'

import clstr from '@/utils/clstr'

const Wrapper = ({ className = '', children }) => (
  <div className={clstr('Wrapper', className)}>
    {children}
  </div>
)

export default Wrapper

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
