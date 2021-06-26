import create from 'zustand'
import { DEFAULT_HUE } from '../constants'
import img from './../assets/default.webp'

export const useStore = create((set) => ({
  showTints: true,
  toggleTints: () => set((state) => ({ showTints: !state.showTints })),
  monoTone: false,
  toggleTone: () => set((state) => ({ monoTone: !state.monoTone })),
  customize: false,
  toggleCustomize: () => set((state) => ({ customize: !state.customize })),
  selectedImage: img,
  selectImage: (src) => set(() => ({ selectedImage: src })),
  adjustedHue: DEFAULT_HUE,
  adjustHue: (num) => set(() => ({ adjustedHue: num })),
  toast: false,
  toastContent: {
    spinner: true,
    animated: true,
    texts: ['Processing', 'Generating', 'Downloading..'],
  },
  toggleToast: (content) =>
    set((state) => {
      if (content) {
        return {
          toast: !state.toast,
          toastContent: content,
        }
      }
      return {
        toast: !state.toast,
      }
    }),

  selectedFileExt: 'png',
  setSelectedFileExt: (ext) => set(() => ({ selectedFileExt: ext })),
}))
