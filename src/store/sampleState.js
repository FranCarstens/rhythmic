import markdown from './markdown.js'

const sampleState = {
  baseline: '24',
  baseRem: '16',
  contrast: false,
  current: 'h1',
  fonts: [
    {
      family: 'Playfair Display',
      link: 'https://fonts.googleapis.com/css2?family=Playfair+Display'
    },
    {
      family: 'Alice',
      link: 'https://fonts.googleapis.com/css2?family=Alice'
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
  unit: 'px',
  styles: {
    "*": {
      lineHeight: "1.5rem",
      fontFamily: "Alice"
    },
    "> * + *": { marginTop: "1.5rem" },
    h1: {
      fontSize: "2.744rem",
      lineHeight: "3rem",
      position: "relative",
      fontFamily: "Playfair Display",
      top: "0.4375rem",
      marginBottom: "0rem"
    },
    h2: {
      fontSize: "1.96rem",
      lineHeight: "2.25rem",
      position: "relative",
      fontFamily: "Playfair Display",
      top: "-0.375rem",
      marginBottom: "-0.75rem"
    },
    h3: {
      fontSize: "1.4rem",
      lineHeight: "24px",
      position: "relative",
      fontFamily: "Playfair Display",
      top: "0.25rem",
      marginBottom: "0rem"
    },
    h4: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      position: "relative",
      fontFamily: "Playfair Display",
      top: "0.375rem"
    },
    h5: {
      fontSize: "0.714rem",
      lineHeight: "1.5rem",
      position: "relative",
      fontFamily: "Playfair Display",
      top: "0.5rem"
    },
    h6: {
      fontSize: "0.51rem",
      lineHeight: "0.75rem",
      position: "relative",
      fontFamily: "Playfair Display",
      top: "0.1875rem"
    },
    p: {
      fontSize: "1rem",
      lineHeight: "24px",
      position: "relative",
      fontFamily: "Alice",
      top: "0.4375rem"
    },
    small: {
      fontSize: "0.714rem",
      lineHeight: "24px",
      position: "relative",
      fontFamily: "Alice",
      top: "0.5625rem",
      marginBottom: "-1.9375rem"
    },
    ul: {
      fontSize: "1rem",
      lineHeight: "16px",
      top: "0rem",
      paddingTop: "0px",
      marginBottom: "0rem",
      position: "relative"
    },
    ol: {
      fontSize: "1rem",
      lineHeight: "16px",
      top: "0rem",
      paddingTop: "0px",
      marginBottom: "0px",
      position: "relative"
    },
    li: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      top: "0.4375rem",
      paddingTop: "0px",
      marginBottom: "0px",
      position: "relative",
      fontFamily: "Alice"
    }
  }
}

export default sampleState
