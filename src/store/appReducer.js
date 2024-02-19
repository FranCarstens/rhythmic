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

    case 'TOGGLE_HELP': {
      console.log('TOGGLE_HELP', action.payload, state.help?.section);

      return {
        ...state,
        help: {
          ...state.help,
          section:
            state.help?.section === action.payload
              ? ''
              : action.payload
        }
      }
    }

    case 'UPDATE_STYLE':
      return {
        ...state,
        styles: {
          ...state.styles,
          [action.payload.current]: action.payload.style
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
        theme: state.theme === 'auto'
          ? 'dark'
          : state.theme === 'dark'
            ? 'light'
            : 'auto'
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
            fontFamily: 'Arial',
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
        console.log(state.tools);
        if (['preview', 'showGrid'].includes(key)) {
          return [key, value]
        }

        if (key === action.payload) {
          return [key, true]
        }

        return [key, false]
      }))

      console.log('SELECT_TOOL', updatedSelection, action.payload, state.tools);

      return {
        ...state,
        tools: updatedSelection
      }
    }

    case 'CLEAR': {
      const x = Object.values(state.styles)[0]

      return {
        ...state,
        ...initialState,
        styles: {
          '*': x
        },
      }
    }

    case 'LOAD_SAMPLE':
      return {
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
