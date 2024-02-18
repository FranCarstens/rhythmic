import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Buttons'
import { Clipboard, Check } from '../Icons'
import { jsObjToCss } from '../../utils/convertJStoCSS'
import './output.css'

const Output = ({ className, styles }) => {
  const [copied, setCopied] = useState(0)
  const style = formatCSS(jsObjToCss(styles))

  const copyText = {
    0: 'Copy to clipboard',
    1: 'Copied!',
    2: 'Something went wrong 😕.'
  }[copied]

  const handleClick = () => {
    navigator.clipboard.writeText(style).then(() => {
      setCopied(1)
      setTimeout(() => {
        setCopied(0)
      }, 3000)
    }).catch((err) => {
      setCopied(-1)
      console.error(err)

      setTimeout(() => {
        setCopied(2)
      }, 3000)
    })
  }

  return (
    <aside className={`Output ${className}`}>
      <span className="Output__Clipboard">
        <Button
          id="clipboard"
          className="Output__Button"
          modifiers="round tooltip-persist tooltip-left"
          ariaLabel={copyText}
          data-tooltip={copyText}
          handleClick={handleClick}
        >
          {copied === 1 && (
            <Check className="Output__Icon" aria-hidden />
          )}

          {copied === 0 && (
            <Clipboard className="Output__Icon" aria-hidden />
          )}
        </Button>
      </span>
      <pre>{style}</pre>
    </aside >
  )
}

export default Output

Output.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object.isRequired
}

const formatCSS = (stylesString) => {
  const newString = stylesString
    .replaceAll(':', ' : ')
    .replaceAll(';', ';\n  ')
    .replaceAll('{', ' {\n  ')
    .replaceAll('}', '\n}\n\n')
    .replaceAll('\n  \n', '\n')

  return newString
}
