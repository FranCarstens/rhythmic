import PropTypes from 'prop-types'

import lazyWithSuspense from '@/utils/lazyWithSuspense'

import './workbench.css'

const Markdown = lazyWithSuspense(() => import('../Markdown'))

const Workbench = ({ current, sample }) => {
  const El = current || 'span'

  return (
    <div className="Workbench typography">
      <div className="Workbench__Box"></div>
      {sample && (
        <El className="Workbench__Sample">
          <Markdown components={{ p: 'fragment', }} rehypePlugins={['rehypeRaw']}>
            {sample}
          </Markdown>
        </El>
      )}
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
