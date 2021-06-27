import { Fragment, h } from 'preact'
import Navbar from './UI/Navbar'
import OutputGrid from './OutputSection/OutputGrid'
import { useStore } from '../hooks/useStore'
import { Modal } from './UI/Modal'
import { useState } from 'preact/hooks'
import ImageSection from './Main/ImageSection'
import ImageButtons from './ImageButtons/ImageButtons'
import AbstractArt from './AbstractArt/AbstractArt'
import Toast from './UI/Toast'
import GlowEffect from './AbstractArt/GlowEffect'

function Home() {
  const showTints = useStore((state) => state.showTints)
  const toast = useStore((state) => state.toast)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Fragment>
      <div
        className={`relative flex flex-col h-full bg-black ${
          isOpen && 'opacity-30'
        }`}
      >
        <Navbar />
        <div className="z-10 flex flex-col h-full mt-8 lg:flex-row">
          <ImageSection />
          <div
            className="right-0 flex flex-col flex-1 w-full h-full lg:px-4 lg:mx-8 lg:w-1/2 lg:fixed xl:w-2/5"
            id="out-grid-section"
          >
            <ImageButtons openModal={openModal} />
            <AbstractArt />
            {showTints && <OutputGrid />}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
      {toast && <Toast />}
      <GlowEffect />
    </Fragment>
  )
}

export default Home
