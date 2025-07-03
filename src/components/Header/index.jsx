import PropTypes from 'prop-types'

import Button from '../Buttons'
import { Auto, Contrast, Help, Moon, Sun } from '../Icons'

import './header.css'

const Header = ({ contrast, dispatch, help, i18, theme }) => {
  const ThemeIcon = {
    system: Auto,
    dark: Moon,
    light: Sun
  }[theme]

  const themeLabel = i18?.theme?.[theme]
  const contrastLabel = i18?.contrast?.[contrast]
  const helpLabel = i18?.help

  return (
    <header className="Header">
      <hgroup className="Header__Group">
        <h1 className="Header__Logo">
          <span style={{ fontWeight: '800' }}>r</span>
          <span style={{ fontWeight: '715' }}>h</span>
          <span style={{ fontWeight: '630' }}>y</span>
          <span style={{ fontWeight: '545' }}>t</span>
          <span style={{ fontWeight: '460' }}>h</span>
          <span style={{ fontWeight: '375' }}>m</span>
          <span style={{ fontWeight: '290' }}>i</span>
          <span style={{ fontWeight: '200' }}>c</span>
        </h1>
        <p className="Header__Tagline">{i18?.tagline}</p>
      </hgroup>

      <div className="Header__Icons">
        <Button
          id="theme"
          modifiers="round tooltip-persist tooltip-bottom"
          data-tooltip={themeLabel}
          handleClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        >
          <ThemeIcon aria-hidden /><span className="sr-only">{themeLabel}</span>
        </Button>

        <Button
          id="contrast"
          modifiers="round tooltip-persist tooltip-bottom"
          data-tooltip={contrastLabel}
          handleClick={() => dispatch({ type: 'TOGGLE_CONTRAST' })}
          active={contrast}
        >
          <Contrast aria-hidden />
          <span className="sr-only">{contrastLabel}</span>
        </Button>

        <Button
          id="help"
          modifiers="round tooltip-persist tooltip-bottom"
          data-tooltip={helpLabel}
          handleClick={() => dispatch({ type: 'TOGGLE_HELP' })}
          active={help.show}
        >
          <Help aria-hidden />
          <span className="sr-only">{helpLabel}</span>
        </Button>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  contrast: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  help: PropTypes.object.isRequired,
  i18: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}
