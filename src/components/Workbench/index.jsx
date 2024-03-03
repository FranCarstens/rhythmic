import { Fragment } from 'react'
import rehypeRaw from 'rehype-raw'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import './workbench.css'

const Workbench = ({ current, sample }) => {
  const El = current || 'span'

  return (
    <div className="Workbench typography">
      <div className="Workbench__Box"></div>
      {sample && <El className="Workbench__Sample">
        <ReactMarkdown components={{ p: Fragment, }} rehypePlugins={[rehypeRaw]}>
          {sample}
        </ReactMarkdown>
      </El>}
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
