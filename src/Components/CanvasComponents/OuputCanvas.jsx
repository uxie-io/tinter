import { h } from 'preact'
import useCanvas from '../../hooks/useCanvas'
import { useEffect, useState } from 'preact/hooks'
import { downscaleDrawCanvasImage } from '../../utils/downscaleCanvasImage'
import { useStore } from '../../hooks/useStore'
import { runWorker } from '../../worker/runWorker'
import { loadElement } from '../../utils/loadElement'
import { getParams } from '../../constants'
import Spinner from './../UI/Spinner'
import { useWindowSize } from './../../hooks/useWindowSize'

const OutputCanvas = (props) => {
  const [loading, setLoading] = useState(true)
  const { width } = useWindowSize()
  const monoTone = useStore((state) => state.monoTone)
  const { src, color, index, allowNextToRender } = props
  const canvasRef = useCanvas()
  const scale = width < 500 ? 0.8 : 1

  useEffect(() => {
    const updateCanvas = (src) => {
      const generateCanvasOutput = new Promise((resolve) => {
        const cv = canvasRef.current
        const ctx = cv.getContext('2d')

        loadElement(src).then((img) => {
          let canvasDefaultWidth = 250

          if ((width < 1124 && width > 1024) || width < 650) {
            canvasDefaultWidth = 200
          }
          if (width < 400) {
            canvasDefaultWidth = 175
          }

          const w = Math.min(img.width, canvasDefaultWidth)
          const res = img.height / img.width
          const h = w * res
          cv.width = w * scale
          cv.height = h * scale

          downscaleDrawCanvasImage(ctx, img, 0, 0, cv.width, cv.height)
          resolve({ ctx, canvas: cv })
        })
      })

      generateCanvasOutput.then(({ ctx, canvas }) => {
        const params = getParams(canvas)

        if (ctx && canvas) {
          const { x, y, width, height } = params
          const imgData = ctx.getImageData(
            x - width / 2,
            y - height / 2,
            width,
            height,
          )

          runWorker(ctx, imgData, params, color, monoTone).then(() => {
            setLoading(false)
          })
        }
      })
    }
    updateCanvas(src)
  }, [
    loading,
    src,
    canvasRef,
    color,
    monoTone,
    allowNextToRender,
    index,
    width,
    scale,
  ])

  const content = loading ? (
    <div className="flex items-center justify-center text-white">
      <Spinner />
      <p>loading...</p>{' '}
      <canvas className="hidden" ref={canvasRef} width="0" height="0" />
    </div>
  ) : (
    <canvas className="rounded" ref={canvasRef} />
  )
  return <div>{content}</div>
}

export default OutputCanvas
