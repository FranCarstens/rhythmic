import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Fieldset from '../Fieldset'
import { FormItem, Input, Range, Select } from '../Form'
import CheckboxBase from '../Form/CheckboxBase'
import ButtonHelp from '../Buttons/ButtonHelp'
import './adjustFont.css'

// eslint-disable-next-line max-len
const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sem, ut dapibus mi imperdiet tincidunt. Nulla mi justo, suscipit non tortor eu, rutrum tempor tortor.'

const AdjustFont = ({ baseRem, current, dispatch, fonts, sample, style }) => {
  const [showRem, setShowRem] = useState(true)
  const toggleLabel = showRem ? 'rem' : 'px'
  const fontOptions = fonts.map((font) => ({ value: font.family, label: font.family }))

  useEffect(() => {
    if (!style?.top) {
      dispatch({
        type: 'UPDATE_STYLE', payload: { current, style: { ...style, position: 'static' } }
      })
    }
    if (style?.top && style?.position !== 'relative') {
      dispatch({
        type: 'UPDATE_STYLE', payload: { current, style: { ...style, position: 'relative' } }
      })
    }
  }, [style?.top, style?.position])

  const handleChange = (e) => {
    const { id, value } = e.target
    const suffix = id !== 'fontFamily' ? 'rem' : ''

    dispatch({
      type: 'UPDATE_STYLE', payload: { current, style: { ...style, [id]: value + suffix } }
    })
  }

  const handleSampleChange = (e) => {
    const { value } = e.target
    const sample = value.toLowerCase() === 'lorem' ? LOREM : value

    dispatch({
      type: 'UPDATE_VALUE', payload: { id: 'sample', value: sample }
    })
  }

  const handleToggle = () => {
    setShowRem(!showRem)
  }

  const getValue = (id) => {
    if (!style?.[id]) return '0'

    return style[id].slice(0, -3)
  }

  const remToPx = (1 / baseRem)
  const remStep = remToPx.toString()
  const remDisplayVal = (val) => (Number(val.toFixed(3) * 1)).toString()

  const remPxString = (val) => {
    if (!val) return '0 (0px)'

    const value = Number(val.slice(0, -3))
    const rem = remDisplayVal(value)
    const px = (value / remToPx).toFixed()

    return showRem ? `${rem}rem` : `${px}px`
  }

  return (
    <Fieldset>
      <legend>
        {current ? <>Adjusting <code>{current}</code></> : 'No selector selected'}{' '}
        <ButtonHelp section="css" dispatch={dispatch} />
      </legend>

      <FormItem id="textSample" label="Sample text" direction="column">
        <Input
          id="textSample"
          type="text"
          onChange={handleSampleChange}
          value={sample || ''}
        />
      </FormItem>

      <FormItem id="fontFamily" label="Font Family" direction="column">
        <Select
          id="fontFamily"
          type="text"
          onChange={handleChange}
          value={style?.fontFamily || ''}
          options={fontOptions}
          disabled={!current}
        />
      </FormItem>

      <FormItem id="Unit" className="AdjustFont__Unit" label="Toggle px/rem" hideLabel direction="row">
        <CheckboxBase
          tooltip="Switch between rem and px"
          className="AdjustFont-Toggle__Toggle"
          identifier="AdjustFont-Toggle"
          checked={showRem}
          handleChange={handleToggle}
          id="showRem"
          key="showRem"
          label={toggleLabel}
          name="showRem"
          type="toggle"
        />
      </FormItem>

      <FormItem id="fontSize" label="Font Size" direction="column">
        <Range
          id="fontSize"
          type="range"
          min="0"
          step={remStep}
          max="30"
          onChange={handleChange}
          value={getValue('fontSize')}
          dataInfo={remPxString(style?.fontSize)}
          disabled={!current}
        />
      </FormItem>

      <FormItem id="lineHeight" label="Line-Height" direction="column">
        <Range
          id="lineHeight"
          type="range"
          min="0"
          step={remStep}
          max="30"
          onChange={handleChange}
          value={getValue('lineHeight')}
          dataInfo={remPxString(style?.lineHeight)}
          disabled={!current}
        />
      </FormItem>

      <FormItem id="top" label="Top" direction="column">
        <Range
          id="top"
          type="range"
          min="-4"
          step={remStep}
          max="4"
          onChange={handleChange}
          value={getValue('top')}
          dataInfo={remPxString(style?.top)}
          disabled={!current}
        />
      </FormItem>

      <FormItem id="paddingTop" label="Padding Top" direction="column">
        <Range
          id="paddingTop"
          type="range"
          min="0"
          step={remStep}
          max="4"
          onChange={handleChange}
          value={getValue('paddingTop')}
          dataInfo={remPxString(style?.paddingTop)}
          disabled={!current}
        />
      </FormItem>

      <FormItem id="marginBottom" label="Margin Bottom" direction="column">
        <Range
          id="marginBottom"
          type="range"
          min="-4"
          step={remStep}
          max="4"
          onChange={handleChange}
          value={getValue('marginBottom')}
          dataInfo={remPxString(style?.marginBottom)}
          disabled={!current}
        />
      </FormItem>
    </Fieldset>
  )
}

export default AdjustFont

AdjustFont.propTypes = {
  style: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  baseRem: PropTypes.number.isRequired,
  fonts: PropTypes.array.isRequired,
  sample: PropTypes.string.isRequired
}
