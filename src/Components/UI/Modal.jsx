import { Dialog, Transition } from '@headlessui/react'
import { Fragment, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import { useStore } from './../../hooks/useStore'
import { getFileType } from '../../utils/getFileType'

export function Modal({ isOpen, closeModal }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const selectImage = useStore((state) => state.selectImage)
  const {
    showTints,
    toggleTints,
    customize,
    toggleCustomize,
    monoTone,
    toggleTone,
    setSelectedFileExt,
  } = useStore()

  useEffect(() => {
    if (selectedFile) {
      selectImage(selectedFile)
      if (showTints) {
        toggleTints()
        if (customize) {
          toggleCustomize()
        }
      }
      // disable monoTone if new image uploaded
      if (monoTone) {
        toggleTone()
      }
    }
  }, [selectImage, selectedFile])

  const onFileChange = (evt) => {
    const file = evt.target.files[0]
    const srcURL = URL.createObjectURL(file)
    setSelectedFile(srcURL)
    setSelectedFileExt(getFileType(file.name))
    closeModal()
  }

  return (
    <Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div class="border border-dashed border-gray-500 relative">
                  <input
                    type="file"
                    onChange={onFileChange}
                    class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                  />
                  <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto flex h-full flex-col justify-center">
                    <h3>
                      Drop Image anywhere to upload
                      <br />
                      or
                    </h3>
                    <div className="mx-auto">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Choose File.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  )
}
