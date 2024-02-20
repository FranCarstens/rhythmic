const initialState = {
  baseline: '24',
  baseRem: '16',
  contrast: false,
  current: null,
  fonts: [],
  heading: '4',
  help: { content: '', section: '' },
  lang: 'en',
  markdown: '',
  sample: 'Sample',
  scale: '1',
  selectors: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'],
  subgrid: '0',
  theme: 'auto',
  tools: {
    // not alphabetized
    // follows order in the UI
    'preview': false,
    'showGrid': true,
    'baseline': true,
    'fontLink': false,
    'selectors': false,
    'adjustFont': false
  },
  styles: {
    '*': {
      lineHeight: '1.5rem',
      marginTop: '1.5rem',
      fontFamily: 'serif',
    },
    '> * + *': {
      marginTop: '1.5rem',
    },
  }
}

export default initialState
