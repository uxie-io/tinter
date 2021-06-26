export const dynamicCanvasResize = (cv, img, scale) => {
  cv.width = cv.offsetWidth * scale
  cv.height = cv.offsetHeight * scale

  const cvProportion = (cv.height * 1.0) / cv.width
  const res = (img.height * 1.0) / img.width

  if (cvProportion > res) {
    cv.height = res * cv.width
  } else {
    cv.width = (cv.height * 1.0) / res
  }
  cv.style.width = 'auto'
  cv.style.height = 'auto'
  return cv
}
