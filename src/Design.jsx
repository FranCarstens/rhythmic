import Button from "@/components/Buttons"
import ButtonHelp from "@/components/Buttons/ButtonHelp"
import { FormItem, Input, Range, Select, Checkbox } from '@/components/Form'
import { Trash, Contrast, Baseline } from "@/components/Icons"

const Design = () => {
  return (
    <div className="debug" style={{ display: 'flex', }}>
      <Components theme='light' />
      <Components theme='light' contrast />
      <Components theme='dark' />
      <Components theme='dark' contrast />
    </div>
  )
}

export default Design

const Components = ({ theme, contrast }) => {
  const buttonProps = {
    id: '1',
    handleClick: () => null,
    "data-tooltip": 'Button Tooltip',
    active: false
  }

  return (
    <div className={`App ${theme} ${contrast ? 'contrast' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem' }}>
      <div>
        <Button
          modifiers='button tooltip-top'
          {...buttonProps}
        >Button Default</Button>
      </div>

      <div>
        <Button
          modifiers='highlight button tooltip-top'
          {...buttonProps}
        >Button Highlight</Button>
      </div>

      <div>
        <Button
          modifiers='alternative button tooltip-top'
          {...buttonProps}
        >Button Alternative</Button>
      </div>

      <div>
        <Button
          modifiers='icon tooltip-top'
          {...buttonProps}
        >
          <Trash aria-hidden />
          <span className="sr-only">Trash</span>
        </Button>
      </div>

      <div>
        <Button
          modifiers='round tooltip-top'
          {...buttonProps}
        >
          <Contrast aria-hidden />
          <span className="sr-only">Toggle</span>
        </Button>
      </div>

      <div>
        <Button
          modifiers='round tooltip-top'
          {...buttonProps}
          active={true}
        >
          <Contrast aria-hidden />
          <span className="sr-only">Toggle</span>
        </Button>
      </div>

      <div>
        <ButtonHelp section="css" dispatch={() => null} />
      </div>

      <div>
        <Range
          id="range"
          type="range"
          min="0"
          step="0.5"
          max="4"
          onChange={() => null}
          value={0}
          dataInfo={2}
        />
      </div>

      <div>
        <div style={{ width: '2.5rem' }}>
          <Checkbox
            tooltip='Checkbox Tooltip'
            className='Checkbox'
            checked={false}
            handleChange={() => null}
            id='checkbox-checked'
            label={<Baseline />}
            name='checkbox-checked'
            type="button"
          />
        </div>
        <div style={{ width: '2.5rem' }}>
          <Checkbox
            tooltip='Checkbox Tooltip'
            className='Checkbox'
            checked={true}
            handleChange={() => null}
            id='checkbox-checked'
            label={<Baseline />}
            name='checkbox-checked'
            type="button"
          />
        </div>
        <div style={{ width: '2.5rem' }}>
          <Checkbox
            tooltip='Checkbox Tooltip'
            className='Checkbox color'
            checked={false}
            handleChange={() => null}
            id='checkbox-checked'
            label={<Baseline />}
            name='checkbox-checked'
            type="button"
          />
        </div>
        <div style={{ width: '2.5rem' }}>
          <Checkbox
            tooltip='Checkbox Tooltip'
            className='Checkbox color'
            checked={true}
            handleChange={() => null}
            id='checkbox-checked'
            label={<Baseline />}
            name='checkbox-checked'
            type="button"
          />
        </div>
      </div>
    </div >
  )
}
