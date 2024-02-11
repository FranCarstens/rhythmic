import { useState } from 'react'
import PropTypes from 'prop-types'
import ButtonRound from '../Buttons/ButtonRound'
import { Clipboard, Check } from '../Icons'
import { jsObjToCss } from '../../utils/convertJStoCSS'
import './output.css'

const Output = ({ className, styles }) => {
  const [copied, setCopied] = useState(0)
  const style = formatCSS(jsObjToCss(styles))

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
      <ButtonRound id="clipboard" className="Output__Button" handleClick={handleClick}>
        {copied === 1 && (
          <>
            <Check className="Output__Icon" aria-hidden />
            <span className="sr-only">Copied successfully</span>
          </>
        )}

        {copied === 0 && (
          <>
            <Clipboard className="Output__Icon" aria-hidden />
            <span className="sr-only">Copy to clipboard</span>
          </>
        )}

        {copied === -1 && <span>Something went wrong 😕.</span>}
      </ButtonRound>
      <pre>{style}</pre>
    </aside >
  )
}

export default Output

Output.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string).isRequired
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
