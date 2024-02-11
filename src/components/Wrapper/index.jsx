import PropTypes from 'prop-types'

const Wrapper = ({ className = '', children }) => (
  <div className={`Wrapper ${className}`.trim()}>
    {children}
  </div>
)

export default Wrapper

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}
