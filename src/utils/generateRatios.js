/**
 * Rounds a number to a specified number of decimal places
 * 
 * @param {number} a - The number to round
 * @param {number} b - The number of decimal places to round to
 * @returns {number} The rounded number
 */
export const toDigits = (a = 0, b = 1) => Number(a.toFixed(b));

/**
 * Generates a set of heading ratios based on the given scale, line-height, and heading
 * 
 * @param {Object} args 
 * @param {number} args.scale - The scale to use for the headings
 * @param {string} args.lineHeight - The line-height to use for the headings
 * @param {number} args.heading - The heading level at the base font size
 * @returns {Object} An object containing the heading ratios
 */
export const getHeadings = ({ scale, lineHeight, heading }) => [...Array(6)].reduce((a, c, i) => {
  const current = i + 1
  const multiplier = Number(heading) - current
  const currentScale = [...Array(Math.abs(multiplier))]
    .reduce((a, c) => { return c === 0 ? current : a * scale }, 1)

  const size = multiplier < 0 ? toDigits(1 / currentScale, 3) : toDigits(1 * currentScale, 3)

  return {
    ...a,
    [`h${current}`]: {
      fontSize: `${size}rem`,
      lineHeight
    }
  }
}, {})

/**
 * Generates a set of ratios based on the given scale, line-height, and heading
 * 
 * @param {Object} args 
 * @param {number} args.scale - The scale to use for the headings
 * @param {string} args.lineHeight - The line-height to use for the headings
 * @param {number} args.heading - The heading level at the base font size
 * @returns {Object} An object containing the ratios
 */
const generateRatios = (args) => {
  const { scale = 1.2, baseline = 16, heading = 4 } = args || {}
  const lineHeight = baseline + 'px'
  const headings = getHeadings({ scale, lineHeight, heading })

  return {
    ...headings,
    p: {
      fontSize: `${1}rem`,
      lineHeight
    },
    small: {
      fontSize: `${toDigits(1 / scale, 3)}rem`,
      lineHeight
    }
  }
}

export default generateRatios
