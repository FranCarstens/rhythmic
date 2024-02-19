import PropTypes from 'prop-types';

const Visible = ({ children, visible }) => {
  if (!visible) {
    return (
      <span style={{ display: 'none' }}>{children}</span>
    )
  }

  return children;
}

export default Visible;

Visible.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
}
