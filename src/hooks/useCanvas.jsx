import { useRef, useEffect } from 'preact/hooks'

const useCanvas = (draw, options = {}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext(options.context || '2d')
    let frameCount = 0
    let animationFrameId
    const render = () => {
      frameCount++
      if (draw) {
        draw(context, frameCount)
      }
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, options.context])
  return canvasRef
}
export default useCanvas
