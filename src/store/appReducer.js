import generateRatios from '../utils/generateRatios'
import initialState from './initialState'
import sampleState from './sampleState.js'

const appReducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const newState = {
        ...state,
        ...action.data,
        init: true
      }
      return newState
    }

    case 'SET_LANG': {
      return {
        ...state,
        lang: action.payload
      }
    }

    case 'LANG': {
      return {
        ...state,
        help: {
          ...state.help,
          content: action.help
        },
        init: true
      }
    }

    case 'I18': {
      return {
        ...state,
        i18: action.i18,
        init: true
      }
    }

    // @TODO: Remove this
    case 'TOGGLE_PREVIEW':
      return {
        ...state,
        preview: !state.preview,
        help: {
          ...state.help,
          section: ''
        }
      }

    case 'TOGGLE_HELP':
      return {
        ...state,
        help: {
          ...state.help,
          show:
            !state.help.show
        }
      }

    case 'UPDATE_STYLE':
      return {
        ...state,
        styles: {
          ...state.styles,
          [action.payload.current]: {
            ...state.styles[action.payload.current],
            ...action.payload.style
          }
        }
      }

    case 'UPDATE_VALUE':
      return {
        ...state,
        [action.payload.id]: action.payload.value
      }

    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'system'
          ? 'dark'
          : state.theme === 'dark'
            ? 'light'
            : 'system'
      }

    case 'TOGGLE_CONTRAST':
      return {
        ...state,
        contrast: !state.contrast
      }

    case 'ADD_SELECTOR':
      return {
        ...state,
        styles: {
          ...state.styles,
          [action.payload]: {
            fontSize: '1rem',
            lineHeight: '16px',
            top: '0px',
            paddingTop: '0px',
            marginBottom: '0px'
          }
        }
      }

    case 'REMOVE_SELECTOR': {
      // eslint-disable-next-line no-unused-vars
      const { [action.payload]: el, ...rest } = state.styles

      return {
        ...state,
        styles: rest,
        current: null
      }
    }

    case 'TOGGLE_TOOL':

      return {
        ...state,
        tools: {
          ...state.tools,
          [action.payload]: !state.tools[action.payload]
        },
        help: {
          ...state.help,
          section: action.payload === 'showGrid' ? state.help?.section : ''
        }

      }

    case 'SELECT_TOOL': {
      const updatedSelection = Object.fromEntries(Object.entries(state.tools).map(([key, value]) => {
        if (['preview', 'showGrid'].includes(key)) {
          return [key, value]
        }

        if (key === action.payload) {
          return [key, true]
        }

        return [key, false]
      }))

      return {
        ...state,
        tools: updatedSelection
      }
    }

    case 'CLEAR': {

      return {
        ...initialState,
        contrast: state.contrast,
        lang: state.lang,
        theme: state.theme,
        i18: state.i18,
        help: {
          ...state.help,
          section: ''
        }
      }

      // const x = Object.values(state.styles)[0]
      // const y = Object.values(state.styles)[1]

      // return {
      //   ...state,
      //   ...initialState,
      //   styles: {
      //     '*': {
      //       lineHeight: x.lineHeight
      //     },
      //     '> * + *': {
      //       marginTop: y.marginTop
      //     }
      //   },
      // }
    }

    case 'TOGGLE_UNIT':
      return {
        ...state,
        unit: state.unit === 'rem' ? 'px' : 'rem'
      }

    case 'LOAD_SAMPLE':
      return {
        ...state,
        ...sampleState,
        help: {
          ...state.help,
          section: ''
        }
      }

    case 'GENERATE':
      return {
        ...state,
        current: 'h1',
        selectors: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'],
        styles: {
          ...state.styles,
          ...generateRatios({ ...action.payload, baseline: state.baseline })
        }
      }

    default:
      break
  }

  return state
}

export default appReducer
