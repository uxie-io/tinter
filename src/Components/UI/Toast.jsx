import { Fragment, h } from 'preact'
import { Transition } from '@headlessui/react'
import { useStore } from '../../hooks/useStore'
import Spinner from './Spinner'
import AnimatedText from './AnimatedText'

export default function Toast() {
  const { toast: show, toggleToast: setShow, toastContent } = useStore()

  return (
    <Fragment>
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-start px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        style={{
          zIndex: 1,
        }}
      >
        <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="flex mr-6 text-sm font-medium text-gray-900">
                      {toastContent.spinner && <Spinner />}
                      {toastContent.animated ? (
                        <AnimatedText textList={toastContent.texts} />
                      ) : (
                        <p className="text-lg font-bold font-plex">
                          {toastContent.texts[0]}
                        </p>
                      )}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 ml-4">
                    <button
                      className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow()
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Fragment>
  )
}
