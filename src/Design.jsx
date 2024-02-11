import Button from "./components/Buttons"
import ButtonHelp from "./components/Buttons/ButtonHelp"

import { Trash, Contrast } from "./components/Icons"

const Design = () => {
  const buttonProps = {
    id: '1',
    handleClick: () => null,
    dataTooltip: 'Button Tooltip',
    active: false
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem' }}>
      <div>
        <Button
          modifiers={'button'}
          {...buttonProps}
        >Button Default</Button>
      </div>

      <div>
        <Button
          modifiers='highlight button'
          {...buttonProps}
        >Button Highlight</Button>
      </div>

      <div>
        <Button
          modifiers='alternative button'
          {...buttonProps}
        >Button Alternative</Button>
      </div>

      <div>
        <Button
          modifiers='icon'
          {...buttonProps}
        >
          <Trash aria-hidden />
          <span className="sr-only">Trash</span>
        </Button>
      </div>

      <div>
        <Button
          modifiers={'round'}
          {...buttonProps}
        >
          <Contrast aria-hidden />
          <span className="sr-only">Toggle</span>
        </Button>
      </div>

      <div>
        <Button
          modifiers={'round'}
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
    </div >
  )
}

export default Design
