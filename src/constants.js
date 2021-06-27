export const FILTERS = [
  'DELPHOX',
  'BAYLEEF',
  'AZELF',
  'Lunala',
  'Archeops',
  'Virizion',
  'Deino',
  'Corsola',
]
export const DEFAULT_HUE = 15
export const OUTPUT_IMAGES = 8

export const getParams = (canvas) => ({
  x: 0,
  y: 0,
  width: canvas.width * 2,
  height: canvas.height * 2,
})

export const UNSPLASH_URI =
  'https://source.unsplash.com/random/600x350/?abstract,nature'
