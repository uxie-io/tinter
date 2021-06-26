function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return { h, s, l }
}

function hslToRgb(h, s, l) {
  let r, g, b

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  if (s == 0) {
    r = g = b = l // achromatic
  } else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s
    let p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return {
    r: Math.floor(r * 255),
    g: Math.floor(g * 255),
    b: Math.floor(b * 255),
  }
}

const iteratePixels = (imgData, func, modify = false) => {
  const pixelData = imgData.data
  const len = pixelData.length

  for (let i = 0; i < len; i += 4) {
    let px = {
      r: pixelData[i],
      g: pixelData[i + 1],
      b: pixelData[i + 2],
      a: pixelData[i + 3],
    }

    // function to modify pixel data
    px = func(px)

    if (modify) {
      pixelData[i] = px.r
      pixelData[i + 1] = px.g
      pixelData[i + 2] = px.b
      pixelData[i + 3] = px.a
    }
  }
  //   return imgData
}

const setImagePixels = (imgData, convertPixel, colorOrHue) => {
  const func = (px) => {
    const _px = convertPixel(px, colorOrHue)
    return _px
  }
  iteratePixels(imgData, func, true)
}

addEventListener('message', (d) => {
  // const custom = false
  // const adjustedHue = 15

  const { imgData, color, monoTone, custom, adjustedHue } = d.data

  if (custom) {
    // converter & recolor function
    const convertPixel = (_px, adjustedHue) => {
      let hsl = rgbToHsl(_px.r, _px.g, _px.b)
      const adjustedValue = adjustedHue / 100
      hsl.h = (hsl.h + adjustedValue) % 1

      // hsl.s = 0.5
      let px = hslToRgb(hsl.h, hsl.s, hsl.l)
      _px.r = px.r
      _px.g = px.g
      _px.b = px.b
      return _px
    }

    setImagePixels(imgData, convertPixel, adjustedHue)
  } else {
    // converter & recolor function
    const convertPixel = (_px, color) => {
      let hsl = rgbToHsl(_px.r, _px.g, _px.b)

      if (monoTone) {
        //colorize
        hsl.h = color.hsl.h
      } else {
        // change hue
        hsl.h = (hsl.h + color.hsl.h) % 1
      }

      hsl.s = 0.5
      let px = hslToRgb(hsl.h, hsl.s, hsl.l)
      _px.r = px.r
      _px.g = px.g
      _px.b = px.b
      return _px
    }

    setImagePixels(imgData, convertPixel, color)
  }

  postMessage(imgData, [imgData.data.buffer])
})
