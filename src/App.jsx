import { useEffect, useReducer } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkHeadingId from 'remark-heading-id'

import AdjustFont from './components/AdjustFont'
import Baseliner, { BaselineWrapper } from './components/Baseliner'
import Selectors from './components/Selectors'
import FontLink from './components/FontLink'
import Header from './components/Header'
import Output from './components/Output'
import Persistent from './components/Persistent'
import Tools from './components/Tools'
import Typo from './components/Typo'
import Workbench from './components/Workbench'
import Wrapper from './components/Wrapper'
import Visible from './components/Visible'

import appReducer from './store/appReducer'
import initialState from './store/initialState'
import { jsObjToCss } from './utils/convertJStoCSS'
import setLanguage from './utils/setLanguage'

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
    init,
    i18,
    lang,
    markdown,
    sample,
    scale,
    selectors,
    styles,
    subgrid,
    theme,
    tools,
    unit
  } = state

  const themeClass = theme
  const contrastClass = contrast ? 'contrast' : ''
  const styledSelectors = Object.keys(styles)
  const availableSelectors = styledSelectors.length > 2 ? styledSelectors.slice(2) : selectors

  useEffect(() => {
    if (!init) {
      setLanguage(dispatch, lang)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

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

  const showHelp = help?.show
  const showWorkbench = !tools.preview && !showHelp
  const showPreview = tools.preview && !showHelp

  return (
    <div className={`App ${themeClass} ${contrastClass}`}>
      <Persistent state={state} dispatch={dispatch} i18={i18}>
        <Header contrast={contrast} dispatch={dispatch} theme={theme} i18={i18} />
        <Tools tools={tools} dispatch={dispatch} i18={i18} />
        <aside className="App__Control">
          <Wrapper>

            <Visible visible={tools.baseline}>
              <Baseliner
                baseline={baseline}
                baseRem={baseRem}
                dispatch={dispatch}
                heading={heading}
                scale={scale}
                subgrid={subgrid}
                i18={i18}
              />
            </Visible>

            <Visible visible={tools.fontLink}>
              <FontLink
                dispatch={dispatch}
                fonts={fonts}
                i18={i18}
              />
            </Visible>

            <Visible visible={tools.selectors}>
              <Selectors
                current={current}
                dispatch={dispatch}
                selectors={availableSelectors}
                i18={i18}
              />
            </Visible>

            <Visible visible={tools.adjustFont}>
              <AdjustFont
                baseline={baseline}
                baseRem={baseRem}
                current={current}
                dispatch={dispatch}
                fonts={fonts}
                sample={sample}
                selectors={availableSelectors}
                style={styles?.[current]}
                unit={unit}
                i18={i18}
              />
            </Visible>
          </Wrapper>
        </aside>

        <main className="App__View">
          <BaselineWrapper baseline={baseline} showGrid={tools.showGrid} subgrid={subgrid}>
            {showWorkbench && (
              <Workbench
                current={current}
                sample={sample}
                style={styles[current]}
              />
            )}

            {showPreview && (
              <Typo markdown={markdown} dispatch={dispatch} i18={i18}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
              </Typo>
            )}

            {showHelp && (
              <ReactMarkdown className="help__typography" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm, remarkHeadingId]}>{help.content}</ReactMarkdown>
            )}
          </BaselineWrapper>
        </main>

        <Output className="App__Output" styles={styles} i18={i18} />
      </Persistent>
    </div>
  )
}

export default App

