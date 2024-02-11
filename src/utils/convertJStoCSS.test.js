import { jsKeyToCssProperty, jsEntriesToCssBlock, jsObjToCss } from './convertJStoCSS'

describe('jsKeyToCssProperty', () => {
  it('should convert camelCase to kebab-case', () => {
    expect(jsKeyToCssProperty('fontSize')).toBe('font-size')
  })
  it('should not convert kebab-case', () => {
    expect(jsKeyToCssProperty('font-size')).toBe('font-size')
  })
})

describe('jsEntriesToCssBlock', () => {
  it('should convert js object to css block', () => {
    const jsObj = {
      color: 'red',
      fontSize: '12px',
    }

    const cssString = jsEntriesToCssBlock(jsObj)
    expect(cssString).toBe('{color:red;font-size:12px;}')
  })

  it('should ignore undefined values', () => {
    const jsObj = {
      color: 'red',
      fontSize: undefined,
    }

    const cssString = jsEntriesToCssBlock(jsObj)
    expect(cssString).toBe('{color:red;}')
  })
})

describe('jsObjToCss', () => {
  it('should convert js object to css string', () => {
    const jsObj = {
      h4: {
        color: 'red',
        fontSize: '12px',
      },
      p: {
        color: 'blue',
        fontSize: '14px',
      }
    }

    const cssString = jsObjToCss(jsObj)
    expect(cssString).toBe('h4{color:red;font-size:12px;}p{color:blue;font-size:14px;}')
  })
})