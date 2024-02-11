import { useState } from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import Selector from './Selector'
import { FormItem, Input } from '../Form'
import { Plus } from '../Icons'
import Button from '../Buttons'
import ButtonHelp from '../Buttons/ButtonHelp'

import './selectors.css'

const Selectors = ({ current, dispatch, selectors, }) => {
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
      <legend>Manage Selectors <ButtonHelp section="selectors" dispatch={dispatch} /></legend>
      <FormItem id="addSelector" className="Selectors__AddSelector" label="Add Selector" direction="column">
        <Input
          id="addSelector"
          type="text"
          onChange={handleChange}
          value={value}
        />
        <Button id="add-selector" modifiers="round" handleClick={handleAdd}>
          <Plus aria-hidden /><span className="sr-only">Add</span>
        </Button>
      </FormItem>
      <ul className="Selectors__List">
        {selectors
          .slice(2)
          .map((el) => <Selector key={el} el={el} dispatch={dispatch} current={el === current} />)
        }
      </ul>
    </Fieldset>
  )
}

export default Selectors

Selectors.propTypes = {
  current: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  selectors: PropTypes.array.isRequired
}

