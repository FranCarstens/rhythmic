import { describe, it, expect } from 'vitest'
import generateRatios, { toDigits, getHeadings } from './generateRatios'

describe('generateRatios', () => {
  it('should return the correct default values if called without params', () => {
    const expectedResult = {
      h1: { fontSize: '1.728rem', lineHeight: '16px' },
      h2: { fontSize: '1.44rem', lineHeight: '16px' },
      h3: { fontSize: '1.2rem', lineHeight: '16px' },
      h4: { fontSize: '1rem', lineHeight: '16px' },
      h5: { fontSize: '0.833rem', lineHeight: '16px' },
      h6: { fontSize: '0.694rem', lineHeight: '16px' },
      p: { fontSize: '1rem', lineHeight: '16px' },
      small: { fontSize: '0.833rem', lineHeight: '16px' }
    }

    const ratios = generateRatios()
    expect(ratios).toEqual(expectedResult)
  })

  it('should return the correct font size and line-height given a set of params', () => {
    const expectedResult1 = 
    {
      "h1": { "fontSize": "1.44rem", "lineHeight": "14px" },
      "h2": { "fontSize": "1.2rem", "lineHeight": "14px" },
      "h3": { "fontSize": "1rem", "lineHeight": "14px" },
      "h4": { "fontSize": "0.833rem", "lineHeight": "14px" },
      "h5": { "fontSize": "0.694rem", "lineHeight": "14px" },
      "h6": { "fontSize": "0.579rem", "lineHeight": "14px" },
      "p": { "fontSize": "1rem", "lineHeight": "14px" },
      "small": { "fontSize": "0.833rem", "lineHeight": "14px" }
    }

    const expectedResult2 = {
      "h1": { "fontSize": "3.224rem", "lineHeight": "16px" },
      "h2": { "fontSize": "2.406rem", "lineHeight": "16px" },
      "h3": { "fontSize": "1.796rem", "lineHeight": "16px" },
      "h4": { "fontSize": "1.34rem", "lineHeight": "16px" },
      "h5": { "fontSize": "1rem", "lineHeight": "16px" },
      "h6": { "fontSize": "0.746rem", "lineHeight": "16px" },
      "p": { "fontSize": "1rem", "lineHeight": "16px" },
      "small": { "fontSize": "0.746rem", "lineHeight": "16px" }
    }

    const expectedResult3 = {
      "h1": { "fontSize": "2.744rem", "lineHeight": "18px" },
      "h2": { "fontSize": "1.96rem", "lineHeight": "18px" },
      "h3": { "fontSize": "1.4rem", "lineHeight": "18px" },
      "h4": { "fontSize": "1rem", "lineHeight": "18px" },
      "h5": { "fontSize": "0.714rem", "lineHeight": "18px" },
      "h6": { "fontSize": "0.51rem", "lineHeight": "18px" },
      "p": { "fontSize": "1rem", "lineHeight": "18px" },
      "small": { "fontSize": "0.714rem", "lineHeight": "18px" }
    }

    const ratios1 = generateRatios({ scale: 1.2, baseline: 14, heading: 3 })
    expect(ratios1).toEqual(expectedResult1)

    const ratios2 = generateRatios({ scale: 1.34, baseline: 16, heading: 5 })
    expect(ratios2).toEqual(expectedResult2)

    const ratios3 = generateRatios({ scale: 1.4, baseline: 18, heading: 4 })
    expect(ratios3).toEqual(expectedResult3)
  })
})

describe('toDigits', () => {
  it('should return the correct number of digits', () => {
    expect(toDigits(1.23456, 3)).toBe(1.235)
    expect(toDigits(1.23456, 2)).toBe(1.23)
    expect(toDigits(1.23456, 1)).toBe(1.2)
    expect(toDigits(1.23456, 0)).toBe(1)
    expect(toDigits(1.23456)).toBe(1.2)
    expect(toDigits()).toBe(0)
  })
})

describe('getHeadings', () => {
  it('should return the correct headings', () => {
    const expectedResult = {
      "h1": { "fontSize": "1.728rem", "lineHeight": "16px" },
      "h2": { "fontSize": "1.44rem", "lineHeight": "16px" },
      "h3": { "fontSize": "1.2rem", "lineHeight": "16px" },
      "h4": { "fontSize": "1rem", "lineHeight": "16px" },
      "h5": { "fontSize": "0.833rem", "lineHeight": "16px" },
      "h6": { "fontSize": "0.694rem", "lineHeight": "16px" }
    }

    const headings = getHeadings({ scale: 1.2, lineHeight: '16px', heading: 4 })
    expect(headings).toEqual(expectedResult)
    })
})

