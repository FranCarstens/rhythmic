import markdown from './markdown.js'

const sampleState = {
  baseline: '24',
  baseRem: '16',
  contrast: false,
  current: 'h1',
  fonts: [
    {
      family: 'Abhaya Libre',
      link: 'https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;700&display=swap'
    },
    {
      family: 'Lato',
      link: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap'
    }
  ],
  heading: '4',
  help: { content: '', section: '' },
  lang: 'en',
  markdown: markdown,
  sample: 'Sample',
  scale: '1.2',
  selectors: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'],
  subgrid: '1',
  theme: 'auto',
  tools: {
    'preview': true,
    'showGrid': true,
    'baseline': true,
    'fontLink': false,
    'adjustFont': false,
    'selectors': false
  },
  styles: {
    '*': {
      lineHeight: '1.5rem',
      fontFamily: 'Lato',
    },

    '> * + *': {
      marginTop: '1.5rem',
    },

    h1: {
      fontSize: '2.074rem',
      lineHeight: '48px',
      position: 'relative',
      fontFamily: 'Abhaya Libre',
      paddingTop: '10px',
      top: '-24px',
      marginBottom: '-34px',
    },

    h2: {
      fontSize: '1.728rem',
      lineHeight: '2.25rem',
      position: 'relative',
      fontFamily: 'Abhaya Libre',
      paddingTop: '6px',
      marginBottom: '-18px',
      top: '-12px',
    },

    h3: {
      fontSize: '1.44rem',
      lineHeight: '36px',
      position: 'relative',
      paddingTop: '8px',
      marginBottom: '-20px',
      fontFamily: 'Abhaya Libre',
      top: '-12px',
    },

    h4: {
      fontSize: '1.2rem',
      lineHeight: '24px',
      position: 'static',
      paddingTop: '4px',
      marginBottom: '-4px',
      fontFamily: 'Abhaya Libre',
    },

    h5: {
      fontSize: '1rem',
      lineHeight: '24px',
      position: 'static',
      paddingTop: '7px',
      marginBottom: '-7px',
      fontFamily: 'Lato',
    },

    h6: {
      fontSize: '0.833rem',
      lineHeight: '1.5rem',
      position: 'static',
      paddingTop: '8px',
      marginBottom: '-8px',
    },

    p: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      position: 'static',
      fontFamily: 'Lato',
      paddingTop: '7px',
      marginBottom: '-7px',
    },

    small: {
      fontSize: '0.833rem',
      lineHeight: '1.5rem',
      position: 'relative',
      fontFamily: 'Lato',
      paddingTop: '0px',
      top: '7px',
    }

  }
}

export default sampleState
