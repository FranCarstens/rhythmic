
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'

import { FormItem, Input } from '../Form'
import { Plus } from '../Icons'
import ButtonHelp from '../Buttons/ButtonHelp'
import Button from '../Buttons'
import Wrapper from '../Wrapper'

import './fontLink.css'

const FontLink = ({ fonts, dispatch }) => {
  const [link, setLink] = useState('')
  const [family, setFamily] = useState('')

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
    e.target.id === 'fontLink' ? setLink(e.target.value) : setFamily(e.target.value)
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

  return (
    <Fieldset className="FontLink">
      <legend>Manage fonts <ButtonHelp section="fonts" dispatch={dispatch} /></legend>
      <Wrapper>
        <FormItem itemId="fontName" label="Family" direction="column">
          <Input
            id="fontName"
            type="text"
            onChange={handleInputChange}
            value={family}
          />
        </FormItem>
        <form>
          <FormItem itemId="fontLink" label="Link" direction="column">
            <Input
              id="fontLink"
              type="url"
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleAddFont()}
              value={link}
            />
          </FormItem></form>

        <Button id="add-font" modifiers="round" handleClick={handleAddFont} >
          <Plus aria-hidden /><span className="sr-only">Add</span>
        </Button>
      </Wrapper>
      <p><strong>Selected Fonts</strong></p>
      <ul>
        {fonts.map(font => (
          <li key={font.family}>
            <a
              href={`https://www.google.com/search?q=${font.family}%20${font.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {font.family}
            </a>
          </li>
        ))}
      </ul>
    </Fieldset>
  )
}

export default FontLink

FontLink.propTypes = {
  fonts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}
