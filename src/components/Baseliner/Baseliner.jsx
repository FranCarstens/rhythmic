import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import { Droplet, Trash } from '../Icons'
import { FormItem, Range, Input } from '../Form'
import Button from '../Buttons'
import ButtonHelp from '../Buttons/ButtonHelp'
import Wrapper from '../Wrapper'
import './baseliner.css'

import getSubgridSize from '../../utils/getSubgridSize'
import { remove } from '../../utils/storage'

const Baseliner = ({ baseline, subgrid, scale, baseRem, heading, dispatch }) => {
  const handleChange = (e) => {
    const { id, value } = e?.target || e || {}

    dispatch({ type: 'UPDATE_VALUE', payload: { id, value } })
  }

  const handleClick = (callback, clearAll) => {
    const clearMessage = {
      'reset': 'Do you want to reset the app to its default state? You will lose all your work.',
      'sample': 'Do you want to replace all your current data with sample data? You will lose all your styles',
      'default': 'Do you want to replace your current styles with new, generated styles?'
    }[clearAll || 'default']

    if (confirm(clearMessage)) {
      callback()
    }
  }

  const subSize = getSubgridSize(baseline, subgrid)

  return (
    <Fieldset className="Baseliner">
      <legend>Adjust grid <ButtonHelp section="grid" dispatch={dispatch} /></legend>
      <Wrapper className="Baseliner__Actions">
        <Button
          id="clear"
          className="Baseliner__button"
          handleClick={() => handleClick(() => {
            dispatch({ type: 'CLEAR' })
            remove('rhythmic')
          }, 'reset')}
          modifiers="icon tooltip-top"
          data-tooltip="Start over"
        >
          <Trash aria-hidden />
          <span className="sr-only">Start over</span>
        </Button>

        <Button
          id="sample"
          className="Baseliner__button"
          handleClick={() => handleClick(() => dispatch({ type: 'LOAD_SAMPLE' }), 'sample')}
          modifiers="icon tooltip-top"
          data-tooltip="Load Sample Data"
        >
          <Droplet aria-hidden />
          <span className="sr-only">Load Sample Data</span>
        </Button>

        <Button
          id="golden"
          className="Baseliner__button"
          modifiers="button tooltip-top"
          handleClick={() => handleClick(() => handleChange({ id: 'scale', value: 1.618 }))}
          data-tooltip="Load Golden Ratio Preset"
        >
          Golden
        </Button>

        <Button
          id="minor-third"
          className="Baseliner__button"
          modifiers="button tooltip-top"
          handleClick={() => handleClick(() => handleChange({ id: 'scale', value: 1.2 }))}
          data-tooltip="Load Minor Third Preset"
        >
          Minor Third
        </Button>
      </Wrapper>

      <FormItem itemId="customScale" label="Custom Scale" direction="column">
        <Input
          id="customScale"
          type="number"
          onChange={e => handleChange({ id: 'scale', value: e.target.value })}
          value={scale}
        />
      </FormItem>

      <FormItem itemId="baseRem" label="Set REM px" direction="column">
        <Input
          id="baseRem"
          type="number"
          onChange={handleChange}
          value={baseRem}
        />
      </FormItem>

      <FormItem itemId="heading" label="Heading at Root" direction="column">
        <Input
          id="heading"
          type="number"
          onChange={handleChange}
          value={heading}
        />
      </FormItem>

      <Button
        className="Baseliner__button"
        handleClick={() => handleClick(() => dispatch({ type: 'GENERATE', payload: { scale, baseRem, heading } }))}
        id="generate"
        modifiers="highlight button"
      >
        Generate
      </Button>

      <FormItem itemId="baseline" label="Baseline" direction="column">
        <Range
          id="baseline"
          type="range"
          min="4"
          step="1"
          max="64"
          onChange={handleChange}
          value={baseline}
          dataInfo={baseline + 'px'}
        />
      </FormItem>
      <FormItem itemId="subgrid" label="Subgrid" direction="column">
        <Range
          id="subgrid"
          type="range"
          min="0"
          step="1"
          max="32"
          onChange={handleChange}
          value={subgrid}
          dataInfo={Number(subgrid) + 1 + ' : ' + Math.round(subSize * 10) / 10 + 'px'}
        />
      </FormItem>
    </Fieldset >
  )
}

export default Baseliner

Baseliner.propTypes = {
  baseline: PropTypes.string.isRequired,
  subgrid: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  scale: PropTypes.string.isRequired,
  baseRem: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

