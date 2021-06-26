import { hslToRgb } from './hslToRgb'

export const generateColors = (n) => {
  const colors = []
  let abs = Math.floor(Math.abs(n))
  let part = 1 / abs

  for (let i = 0; i < n; i++) {
    let color = { h: i * part, s: 0.9, l: 0.6 }
    let hsl = color
    let rgb = hslToRgb(color.h, color.s, color.l)
    let rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    colors.push({
      hsl,
      rgb,
      rgbString,
    })
  }

  return colors
}
