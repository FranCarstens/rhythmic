import { useEffect } from 'react'
import PropTypes from 'prop-types'
import getSubgridSize from '@/utils/getSubgridSize'
import clstr from '@/utils/clstr'

import './baselineWrapper.css'

const BaselineWrapper = ({ baseline, showGrid, subgrid, children }) => {
  useEffect(() => {
    const subSize = getSubgridSize(baseline, subgrid)
    const root = document.documentElement

    root.style.setProperty('--workbox-baseline', baseline + 'px')
    root.style.setProperty('--workbox-subgrid', subSize + 'px')
  }, [baseline, subgrid])

  return (
    <div
      className={clstr({ BaselineWrapper: true, withSubgrid: Number(subgrid), hideGrid: !showGrid })}
    >
      {children}
    </div>
  )
}

export default BaselineWrapper

BaselineWrapper.propTypes = {
  baseline: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showGrid: PropTypes.bool.isRequired,
  subgrid: PropTypes.string.isRequired,
}
