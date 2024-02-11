const toDigits = (a, b) => Math.round(a * Math.pow(10, b)) / Math.pow(10, b)

const generateRatios = ({ scale, baseline, heading }) => {
  const lineHeight = baseline + 'px'

  const getHeadings = () => [...Array(6)].reduce((a, c, i) => {
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

  return {
    ...getHeadings(),
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
