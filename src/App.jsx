import { useEffect, useReducer } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import AdjustFont from './components/AdjustFont'
import Baseliner, { BaselineWrapper } from './components/Baseliner'
import Selectors from './components/Selectors'
import FontLink from './components/FontLink'
import Header from './components/Header'
import Output from './components/Output'
import Tools from './components/Tools'
import Typo from './components/Typo'
import Workbench from './components/Workbench'
import Wrapper from './components/Wrapper'

import appReducer from './store/appReducer'
import initialState from './store/initialState'
import { jsObjToCss } from './utils/convertJStoCSS'

import './App.css'

function App () {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const {
    baseline,
    baseRem,
    contrast,
    current,
    fonts,
    heading,
    help,
    lang,
    markdown,
    sample,
    scale,
    styles,
    subgrid,
    theme,
    tools,
  } = state

  const themeClass = theme
  const contrastClass = contrast ? 'contrast' : ''
  const selectors = Object.keys(styles)

  useEffect(() => {
    const stylesheet = document.getElementById('typography')
    const stylesStr = jsObjToCss(styles, '.typography')

    if (stylesheet) stylesheet.innerHTML = stylesStr
    if (!stylesheet) {
      const style = document.createElement('style')
      style.id = 'typography'
      style.innerHTML = stylesStr
      document.head.appendChild(style)
    }
  }, [styles])

  const setConfig = () => {
    import(`./store/help/${lang}.js`).then((module) => {

      dispatch({ type: 'INIT', help: module.default })
    })
  }

  useEffect(() => {
    setConfig()
  }, [lang])
  console.log(help);
  return (
    <div className={`App ${themeClass} ${contrastClass}`}>
      <Header contrast={contrast} dispatch={dispatch} theme={theme} />
      <Tools tools={tools} dispatch={dispatch} />
      <aside className="App__Control">
        <Wrapper>
          {tools.baseline && (
            <Baseliner
              baseline={baseline}
              baseRem={baseRem}
              dispatch={dispatch}
              heading={heading}
              scale={scale}
              subgrid={subgrid}
            />
          )}

          {tools.fontLink && (
            <FontLink
              dispatch={dispatch}
              fonts={fonts}
            />
          )}

          {tools.selectors && (
            <Selectors
              dispatch={dispatch}
              selectors={selectors}
              current={current}
            />
          )}

          {tools.adjustFont && current && (
            <AdjustFont
              baseline={baseline}
              baseRem={baseRem}
              current={current}
              dispatch={dispatch}
              fonts={fonts}
              sample={sample}
              style={styles?.[current]}
            />
          )}

        </Wrapper>
      </aside>

      <main className="App__View">
        <BaselineWrapper baseline={baseline} showGrid={tools.showGrid} subgrid={subgrid}>
          {!tools.preview && !help?.section && (
            <Workbench
              current={current}
              sample={sample}
              style={styles[current]}
            />
          )}

          {tools.preview && !help?.section && (
            <Typo markdown={markdown} dispatch={dispatch}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} >{markdown}</ReactMarkdown>
            </Typo>
          )}

          {help?.section && (
            <ReactMarkdown rehypePlugins={[rehypeRaw]} >{help.content[help?.section]}</ReactMarkdown>
          )}
        </BaselineWrapper>
      </main>

      <Output className="App__Output" styles={styles} />
    </div>
  )
}

export default App

