// Returns a promise - use to load image
export function loadElement(src) {
  return new Promise((resolve) => {
    const e = new Image()
    e.addEventListener('load', () => {
      resolve(e)
    })
    e.src = src
    e.crossOrigin = 'Anonymous'
  })
}
