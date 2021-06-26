import { h } from 'preact'
import { downloadImage } from '../utils/downloadImage'
import { useStore } from './../hooks/useStore'
import OutputCanvas from './OuputCanvas'
import DownloadIcon from './../assets/download.svg'
import { DEFAULT_HUE } from '../constants'

export const AdjustedOutput = ({ color }) => {
  const selectedImage = useStore((state) => state.selectedImage)
  const monoTone = useStore((state) => state.monoTone)
  const toggleToast = useStore((state) => state.toggleToast)
  const selectedFileExt = useStore((state) => state.selectedFileExt)

  const download = () => {
    toggleToast()
    downloadImage(
      selectedImage,
      color,
      monoTone,
      false,
      DEFAULT_HUE,
      selectedFileExt,
    ).then(() => {
      toggleToast()
    })
  }

  return (
    <div
      className="flex flex-col mx-auto my-4"
      style={{
        boxShadow: '0px 17px 10px -10px rgba(0,0,0,0.4)',
      }}
    >
      <a href="#" onClick={download} className="float-right h-8 m-1 text-white">
        <img src={DownloadIcon} alt="Download icon" />
      </a>
      <OutputCanvas src={selectedImage} color={color} className="p-2 my-2" />
    </div>
  )
}
