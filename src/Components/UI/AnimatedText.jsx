import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

const AnimatedText = ({ textList }) => {
  const [textIdx, setTextIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIdx < 2) {
        setTextIdx((i) => i + 1)
      } else {
        clearInterval(interval)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [textIdx])
  return <p className="text-lg font-bold font-plex">{textList[textIdx]}</p>
}

export default AnimatedText
