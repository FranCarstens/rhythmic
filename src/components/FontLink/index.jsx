
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Fieldset from '../Fieldset'
import { FormItem, Input } from '../Form'
import { Plus } from '../Icons'
import ButtonHelp from '../Buttons/ButtonHelp'
import Button from '../Buttons'
import Wrapper from '../Wrapper'

import './fontLink.css'

const FontLink = ({ fonts, dispatch, i18 }) => {
  const [link, setLink] = useState('')
  const [family, setFamily] = useState('')
  const [defaultFont, setDefaultFont] = useState('')

  useEffect(() => {
    fonts.forEach(font => addFontLink(font))
  }, [fonts])

  const addFontLink = (font) => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = font.link
    document.head.appendChild(fontLink)
  }

  const handleInputChange = (e) => {
    e.target.id === 'fontURL' ? setLink(e.target.value) : setFamily(e.target.value)
  }

  const handleAddFont = () => {
    const hasFont = fonts.find(font => font?.family === family)

    if (family && !hasFont) {
      dispatch({ type: 'UPDATE_VALUE', payload: { id: 'fonts', value: [...fonts, { link, family }] } })
      addFontLink({ link, family })
      setLink('')
      setFamily('')
    }
  }

  const handleDefaultFont = (font) => {
    dispatch({ type: 'UPDATE_STYLE', payload: { current: '*', style: { fontFamily: font.family } } })
    setDefaultFont(font.family)
  }

  const handleRemoveFont = (font) => {
    dispatch({ type: 'UPDATE_VALUE', payload: { id: 'fonts', value: fonts.filter(f => f.family !== font.family) } })
  }

  return (
    <Fieldset className="FontLink">
      <legend>{i18?.fontLink?.manageFonts} <ButtonHelp section="fonts" dispatch={dispatch} /></legend>
      <Wrapper className="FontLink__Form">
        <FormItem itemId="fontName" label={i18?.fontLink?.family} direction="column">
          <Input
            id="fontName"
            type="text"
            onChange={handleInputChange}
            value={family}
          />
        </FormItem>

        <FormItem itemId="fontURL" label={i18?.fontLink?.url} direction="column">
          <Input
            id="fontURL"
            type="url"
            onChange={handleInputChange}
            onKeyDown={e => e.key === 'Enter' && handleAddFont()}
            value={link}
          />
        </FormItem>

        <Button id="add-font" modifiers="round" handleClick={handleAddFont} >
          <Plus aria-hidden /><span className="sr-only">{i18?.fontLink?.add}</span>
        </Button>
      </Wrapper>
      <p><strong>{i18?.fontLink?.selected}</strong></p>
      <ul className="FontLink__List">
        {fonts.map((font, i) => {
          const isDefault = defaultFont === font.family

          return (<li className="FontLink__ListItem" key={font.family}>
            <a
              href={`https://www.google.com/search?q=${font.family}%20${font.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {font.family} {isDefault ? <>&#10018;</> : ''}
            </a>

            {!isDefault && (
              <Button
                id={`set-default-${i}`}
                modifiers="inline"
                handleClick={() => handleDefaultFont(font)}
              >
                {i18?.fontLink?.setDefault}
              </Button>
            )}

            <Button
              id={`remove-font-${i}`}
              modifiers="inline"
              handleClick={() => handleRemoveFont(font)}
            >
              <span className="sr-only">{i18?.fontLink?.remove}</span>&#10005;
            </Button>
          </li>)
        })}
      </ul>
    </Fieldset>
  )
}

export default FontLink

FontLink.propTypes = {
  fonts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  i18: PropTypes.object.isRequired
}
