export const runWorker = (
  ctx,
  imgData,
  params,
  color,
  monoTone,
  custom,
  adjustedHue,
) => {
  return new Promise((resolve) => {
    if (window.Worker) {
      const worker = new Worker(new URL('./tintWorker.js', import.meta.url))
      worker.postMessage({ imgData, color, monoTone, custom, adjustedHue }, [
        imgData.data.buffer,
      ])
      worker.onerror = (err) => resolve({ ok: false, err })
      worker.onmessage = (e) => {
        const imgData = e.data
        ctx.putImageData(
          imgData,
          (params.x - params.width / 2) * 1,
          (params.y - params.height / 2) * 1,
        )
        worker.terminate()
        resolve({ ok: true })
      }
    }
  })
}
