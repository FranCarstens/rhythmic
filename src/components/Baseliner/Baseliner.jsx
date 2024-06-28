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

const Baseliner = ({ baseline, subgrid, scale, baseRem, heading, dispatch, i18 }) => {
  const handleChange = (e) => {
    const { id, value } = e?.target || e || {}

    dispatch({ type: 'UPDATE_VALUE', payload: { id, value } })
  }

  const handleClick = (callback, clearAll) => {
    const clearMessage = {
      'reset': i18?.baseliner?.clearMessage?.reset,
      'sample': i18?.baseliner?.clearMessage?.sample,
      'default': i18?.baseliner?.clearMessage?.default
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
          data-tooltip={i18?.baseliner?.startOver}
        >
          <Trash aria-hidden />
          <span className="sr-only">{i18?.baseliner?.startOver}</span>
        </Button>

        <Button
          id="sample"
          className="Baseliner__button"
          handleClick={() => handleClick(() => dispatch({ type: 'LOAD_SAMPLE' }), 'sample')}
          modifiers="icon tooltip-top"
          data-tooltip={i18?.baseliner?.loadSample}
        >
          <Droplet aria-hidden />
          <span className="sr-only">{i18?.baseliner?.loadSample}</span>
        </Button>

        <Button
          id="golden"
          className="Baseliner__button"
          modifiers="button tooltip-top"
          handleClick={() => handleClick(() => handleChange({ id: 'scale', value: 1.618 }))}
          data-tooltip={i18?.baseliner?.goldenTip}
        >
          {i18?.baseliner?.golden}
        </Button>

        <Button
          id="minor-third"
          className="Baseliner__button"
          modifiers="button tooltip-top"
          handleClick={() => handleClick(() => handleChange({ id: 'scale', value: 1.2 }))}
          data-tooltip={i18?.baseliner?.minorTip}
        >
          {i18?.baseliner?.minor}
        </Button>
      </Wrapper>

      <FormItem itemId="customScale" label={i18?.baseliner?.customScale} direction="column">
        <Input
          id="customScale"
          type="number"
          onChange={e => handleChange({ id: 'scale', value: e.target.value })}
          value={scale}
        />
      </FormItem>

      <FormItem itemId="baseRem" label={i18?.baseliner?.baseRem} direction="column">
        <Input
          id="baseRem"
          type="number"
          onChange={handleChange}
          value={baseRem}
        />
      </FormItem>

      <FormItem itemId="heading" label={i18?.baseliner?.heading} direction="column">
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
        {i18?.baseliner?.generate}
      </Button>

      <FormItem itemId="baseline" label={i18?.baseliner?.baseline} direction="column">
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
      <FormItem itemId="subgrid" label={i18?.baseliner?.subgrid} direction="column">
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
  heading: PropTypes.string.isRequired,
  i18: PropTypes.object.isRequired
}

