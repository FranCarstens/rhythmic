import PropTypes from 'prop-types'

import './workbench.css'

const Workbench = ({ current, sample }) => {
  const El = current || 'span'

  return (
    <div className="Workbench typography">
      <div className="Workbench__Box"></div>
      {sample && <El className="Workbench__Sample">{sample}</El>}
      <div className="Workbench__Box margin"></div>
      <div className="Workbench__Box"></div>
    </div>
  )
}

export default Workbench

Workbench.propTypes = {
  current: PropTypes.string,
  sample: PropTypes.string
}
