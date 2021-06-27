import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import useCanvas from '../../hooks/useCanvas'
import { useStore } from '../../hooks/useStore'
import { loadElement } from '../../utils/loadElement'
import { downscaleDrawCanvasImage } from '../../utils/downscaleCanvasImage'
import { dynamicCanvasResize } from '../../utils/dynamicCanvasResize'
import { getParams } from '../../constants'
import { runWorker } from '../../worker/runWorker'
import Spinner from '../UI/Spinner'
import { useWindowSize } from '../../hooks/useWindowSize'

const MainCanvas = (props) => {
  const [loading, setLoading] = useState(true)
  const { customize, monoTone, adjustedHue } = useStore()
  const { width } = useWindowSize()
  const { src } = props
  const canvasRef = useCanvas()
  const scale = width < 500 ? 0.8 : 1

  useEffect(() => {
    const updateCanvas = (src) => {
      const cv = canvasRef.current

      const ctx = cv.getContext('2d')

      loadElement(src).then((img) => {
        setLoading(false)
        dynamicCanvasResize(cv, img, scale)
        downscaleDrawCanvasImage(ctx, img, 0, 0, cv.width, cv.height)

        /*
        if customize, let worker do the job.
        */
        if (customize) {
          const params = getParams(cv)

          if (ctx && cv) {
            const { x, y, width, height } = params
            const imgData = ctx.getImageData(
              x - width / 2,
              y - height / 2,
              width,
              height,
            )
            runWorker(
              ctx,
              imgData,
              params,
              null,
              monoTone,
              customize,
              adjustedHue,
            )
          }
        }
      })
    }
    updateCanvas(src)
  }, [loading, src, canvasRef, adjustedHue, customize, monoTone])

  const content = loading ? (
    <div>
      <Spinner />
      <p>loading...</p>
      <canvas ref={canvasRef} width="0" height="0" />
    </div>
  ) : (
    <canvas
      className="m-2 rounded"
      style={{
        boxShadow: '0px 17px 10px -10px rgba(0,0,0,0.4)',
        width: '100%',
        height: '100%',
      }}
      ref={canvasRef}
    />
  )

  return (
    <div className="flex justify-center w-full mb-8 rounded-md lg:mb-0">
      {content}
    </div>
  )
}

export default MainCanvas
