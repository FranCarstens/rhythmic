import PropTypes from 'prop-types'

import clstr from '@/utils/clstr'

import './formItem.css'

const FormItem = ({ children, className, direction, hideLabel, itemId, label }) => {
  const directionClass = direction ? `FormItem--${direction}` : ''
  const wrapperClasses = clstr('FormItem', className, directionClass)
  const labelClasses = clstr('FormItem__Label', { 'sr-only': hideLabel })

  return (
    <div className={wrapperClasses}>
      <label htmlFor={itemId} className={labelClasses}>{label}</label>
      <div className="FormItem__Children">
        {children}
      </div>
    </div>
  )
}

export default FormItem

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.string,
  hideLabel: PropTypes.bool,
  itemId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
