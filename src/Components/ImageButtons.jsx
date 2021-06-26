import { h } from 'preact'
import Button from './UI/Button'
import UploadIcon from './../assets/upload.svg'
import RandomIcon from './../assets/random.svg'
import { generateRandomURL } from './../utils/generateRandomURL'
import { useStore } from './../hooks/useStore'

const ImageButtons = ({ openModal }) => {
  const {
    showTints,
    toggleTints,
    toggleCustomize,
    toggleToast,
    selectImage,
    customize,
    toggleTone,
    monoTone
  } = useStore()

  const handleLoadRandomImage = () => {
    toggleToast({
      spinner: true,
      animated: false,
      texts: ['Loading ...'],
    })
    generateRandomURL().then((res) => {
      if (res.ok) {
        selectImage(res.url)
        toggleToast()
      } else {
        toggleToast()
        toggleToast({
          spinner: false,
          animated: false,
          texts: ['Error loading image.'],
        })
      }

      if (!monoTone) {
        toggleTone()
      }


      if (showTints) {
        toggleTints()
        
        if (customize) {
          toggleCustomize()
        }
      }
    })

  }

  return (
    <div className="flex justify-center w-full mb-8 lg:mb-0">
      <Button variant="glass" fontWeight="700" onClick={handleLoadRandomImage}>
        <img src={RandomIcon} className="mr-2" alt="Random Image" />
        <p>Random</p>
      </Button>
      <Button variant="glass" fontWeight="700" onClick={() => openModal()}>
        <img src={UploadIcon} className="mr-2" alt="Upload Image Button" />{' '}
        <p>Upload Image</p>
      </Button>
    </div>
  )
}

export default ImageButtons
