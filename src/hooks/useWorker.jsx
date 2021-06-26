import { useEffect, useState } from 'preact/hooks'

export const useWorker = (file, onMessageCallback, postMessage, buffer) => {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!postMessage || !postMessage.imgData || !buffer) {
      return
    }

    const runWorker = () => {
      const worker = new Worker(new URL(file, import.meta.url))
      worker.postMessage(postMessage, buffer)
      worker.onerror = (err) => {
        setStatus('error')
        throw err
      }
      worker.onmessage = (e) => {
        onMessageCallback(e)
        setStatus('success')
        worker.terminate()
      }
    }
    if (window.Worker) {
      runWorker()
    }
  }, [buffer, file, onMessageCallback, postMessage])

  return status
}
