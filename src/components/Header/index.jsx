import PropTypes from 'prop-types'

import ButtonRound from '../Buttons/ButtonRound'
import { Sun, Moon, Contrast, Auto } from '../Icons'
import './header.css'

const Header = ({ dispatch, theme, contrast }) => {
  const ThemeIcon = {
    auto: Auto,
    dark: Moon,
    light: Sun
  }[theme]

  const NextThemeLabel = {
    auto: 'Toggle dark theme',
    dark: 'Toggle light theme',
    light: 'Toggle system theme'
  }[theme]

  const contrastLabel = contrast ? 'Standard Contrast' : 'High Contrast'

  return (
    <header className="Header">
      <hgroup className="Header__Group">
        <h1 className="Header__Logo">Typed</h1>
        <p className="Header__Tagline">Satisfying type made easy</p>
      </hgroup>

      <div className="Header__Icons">
        <ButtonRound id="theme" handleClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
          <ThemeIcon aria-hidden /><span className="sr-only">{NextThemeLabel}</span>
        </ButtonRound>

        <ButtonRound id="preview" handleClick={() => dispatch({ type: 'TOGGLE_CONTRAST' })} active={contrast}>
          <Contrast aria-hidden />
          <span className="sr-only">Toggle {contrastLabel}</span>
        </ButtonRound>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  contrast: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}
