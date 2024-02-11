import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import { Droplet, Trash } from '../Icons'
import { FormItem, Range, Input } from '../Form'
import Button from '../Buttons'
import ButtonHelp from '../Buttons/ButtonHelp'
import Wrapper from '../Wrapper'
import './baseliner.css'

import getSubgridSize from '../../utils/getSubgridSize'

const Baseliner = ({ baseline, subgrid, scale, baseRem, heading, dispatch }) => {
  const handleChange = (e) => {
    const { id, value } = e?.target || e || {}

    dispatch({ type: 'UPDATE_VALUE', payload: { id, value } })
  }

  const subSize = getSubgridSize(baseline, subgrid)

  return (
    <Fieldset className="Baseliner">
      <legend>Adjust grid <ButtonHelp section="grid" dispatch={dispatch} /></legend>
      <Wrapper className="Baseliner__Actions">
        <Button
          id="clear"
          className="Baseliner__button"
          handleClick={() => dispatch({ type: 'CLEAR' })}
          modifiers="icon tooltip-top"
          data-tooltip="Start over"
        >
          <Trash aria-hidden />
          <span className="sr-only">Start over</span>
        </Button>

        <Button
          id="sample"
          className="Baseliner__button"
          handleClick={() => dispatch({ type: 'LOAD_SAMPLE' })}
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
          handleClick={() => handleChange({ id: 'scale', value: 1.618 })}
          data-tooltip="Load Golden Ratio Preset"
        >
          Golden
        </Button>

        <Button
          id="minor-third"
          className="Baseliner__button"
          modifiers="button tooltip-top"
          handleClick={() => handleChange({ id: 'scale', value: 1.2 })}
          data-tooltip="Load Minor Third Preset"
        >
          Minor Third
        </Button>
      </Wrapper>

      <FormItem id="customScale" label="Custom Scale" direction="column">
        <Input
          id="customScale"
          type="number"
          onChange={e => handleChange({ id: 'scale', value: e.target.value })}
          value={scale}
        />
      </FormItem>

      <FormItem id="heading" label="Heading at Base" direction="column">
        <Input
          id="heading"
          type="number"
          onChange={handleChange}
          value={heading}
        />
      </FormItem>

      <FormItem id="baseRem" label="Set REM px" direction="column">
        <Input
          id="baseRem"
          type="number"
          onChange={handleChange}
          value={baseRem}
        />
      </FormItem>
      <Button
        className="Baseliner__button"
        handleClick={() => dispatch({ type: 'GENERATE', payload: { scale, baseRem, heading } })}
        id="generate"
        modifiers="highlight button"
      >
        Generate
      </Button>

      <FormItem id="baseline" label="Baseline" direction="column">
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
      <FormItem id="subgrid" label="Subgrid" direction="column">
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
    </Fieldset>
  )
}

export default Baseliner

Baseliner.propTypes = {
  baseline: PropTypes.number.isRequired,
  subgrid: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  baseRem: PropTypes.number.isRequired,
  heading: PropTypes.number.isRequired
}

