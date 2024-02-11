import PropTypes from 'prop-types'

const Legend = ({ children, ...props }) => {
  return (
    <legend {...props}>
      {children}
    </legend>
  )
}

export default Legend

Legend.propTypes = {
  children: PropTypes.node.isRequired
}
