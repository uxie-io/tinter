import { downscaleDrawCanvasImage } from './downscaleCanvasImage'
import { saveAs } from 'file-saver'
import { loadElement } from './loadElement'
import { getParams } from '../constants'

export const downloadImage = (
  src,
  color,
  monoTone,
  custom,
  adjustedHue,
  ext,
) => {
  // Generating hidden canvas, then modifying its pixels, then convert to blob, finally save file
  const generateHiddenCanvas = new Promise((resolve) => {
    let hidden_canv = document.createElement('canvas')
    hidden_canv.style.display = 'none'
    document.body.appendChild(hidden_canv)
    const ctx = hidden_canv.getContext('2d')

    loadElement(src).then((img) => {
      const w = img.width
      const res = img.height / img.width
      const h = w * res
      hidden_canv.width = w
      hidden_canv.height = h
      downscaleDrawCanvasImage(
        ctx,
        img,
        0,
        0,
        hidden_canv.width,
        hidden_canv.height,
      )
      resolve({ ctx, canvas: hidden_canv })
    })
  })

  const downloader = new Promise((resolve) => {
    generateHiddenCanvas.then(({ ctx, canvas }) => {
      const params = getParams(canvas)

      if (ctx && canvas) {
        const { x, y, width, height } = params
        const imgData = ctx.getImageData(
          (x - width / 2) * 1,
          (y - height / 2) * 1,
          width * 1,
          height * 1,
        )

        if (window.Worker) {
          const worker = new Worker(
            new URL('../worker/tintWorker.js', import.meta.url),
          )
          worker.postMessage(
            { imgData, color, monoTone, custom, adjustedHue },
            [imgData.data.buffer],
          )
          worker.onerror = (err) => err
          worker.onmessage = (e) => {
            const imgData = e.data
            ctx.putImageData(
              imgData,
              (params.x - params.width / 2) * 1,
              (params.y - params.height / 2) * 1,
            )

            canvas.toBlob((blob) => {
              saveAs(blob, `download.${ext}`)
              const href = URL.createObjectURL(blob)
              worker.terminate()

              resolve(href)
            })
          }
        }
      }
    })
  })

  return downloader
}
