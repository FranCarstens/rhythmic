import { useState } from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'

import { FormItem, Input } from '../Form'
import { Plus } from '../Icons'
import SelectorList from './SelectorList'
import Button from '../Buttons'
import ButtonHelp from '../Buttons/ButtonHelp'

import './selectors.css'

const Selectors = ({ current, dispatch, selectors, i18 }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => setValue(e.target.value)

  const handleAdd = () => {
    if (value) {
      dispatch({ type: 'ADD_SELECTOR', payload: value })
      setValue('')
    }
  }

  return (
    <Fieldset className="Selectors">
      <legend>{i18?.selectors?.manage}<ButtonHelp section="selectors" dispatch={dispatch} /></legend>
      <FormItem itemId="addSelector" className="Selectors__AddSelector" label={i18?.selectors?.addSelector} direction="column">
        <Input
          id="addSelector"
          type="text"
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          value={value}
        />
        <Button id="add-selector" modifiers="round" handleClick={handleAdd}>
          <Plus aria-hidden /><span className="sr-only">{i18?.selectors?.addLabel}</span>
        </Button>
      </FormItem>
      <SelectorList current={current} dispatch={dispatch} selectors={selectors} i18={i18} />
    </Fieldset>
  )
}

export default Selectors

Selectors.propTypes = {
  current: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  selectors: PropTypes.array.isRequired,
  i18: PropTypes.object.isRequired,
}

