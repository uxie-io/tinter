import { h } from 'preact'
import { useStore } from '../../hooks/useStore'
import Button from './../UI/Button'
import Checkbox from './../UI/Checkbox'
import ResetIcon from './../../assets/reset.svg'
import EditIcon from './../../assets/edit.svg'
import WandIcon from './../../assets/wand.svg'
import Slider from './../UI/Slider'
import { downloadImage } from '../../utils/downloadImage'

const ConfigBar = () => {
  const {
    showTints,
    toggleTints,
    toggleCustomize,
    toggleTone,
    monoTone,
    adjustHue,
    customize,
    adjustedHue,
    selectedImage,
    toggleToast,
    selectedFileExt,
  } = useStore()

  const onCustomHueAdjust = (e) => {
    const adjustedVal = e.target.value
    adjustHue(adjustedVal)
  }

  const handleChange = () => toggleTone()

  const download = () => {
    toggleToast()
    downloadImage(
      selectedImage,
      null,
      monoTone,
      customize,
      adjustedHue,
      selectedFileExt,
    ).then(() => {
      toggleToast()
    })
  }

  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="flex items-center justify-center mx-4 my-8 ">
        <Checkbox onChange={handleChange} checked={monoTone} text="Montone" />

        {!customize ? (
          <div className="flex cursor-pointer" onClick={toggleCustomize}>
            <p className="ml-6 mr-6 font-bold text-center text-white text-md font-plex">
              Fine tune
            </p>
            <img src={EditIcon} className="ml-2" alt="reset icon" />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <Slider
              onCustomHueAdjust={onCustomHueAdjust}
              adjustedHue={adjustedHue}
            />
            <a
              href="#"
              onClick={download}
              className="float-right m-1 text-lg font-bold text-white font-plex"
            >
              Download
            </a>
          </div>
        )}
      </div>

      <div className="flex justify-center  mb-8 text-md lg:mb-0">
        <Button
          variant="glass"
          onClick={() => {
            if (customize) {
              adjustHue(0)
              toggleCustomize()
            }

            if (showTints) {
              toggleTints()
            }
          }}
        >
          Reset
          <img src={ResetIcon} className="w-4 ml-2" alt="reset icon" />
        </Button>
        <Button
          href="#"
          onClick={() => toggleTints()}
          variant="solid"
          colorRGB="#8A539D"
        >
          {'Generate Tints'}
          <img src={WandIcon} className="w-4 ml-2" alt="wand icon" />
        </Button>
      </div>
    </div>
  )
}

export default ConfigBar
