import { UNSPLASH_URI } from '../constants'

export const generateRandomURL = () =>
  new Promise((resolve) => {
    try {
      fetch(UNSPLASH_URI).then((response) => {
        if (response.ok) {
          resolve({
            ok: true,
            url: response.url,
          })
        } else {
          resolve({
            ok: false,
            err: 'Error Fetching',
          })
        }
      })
    } catch (e) {
      resolve({
        ok: false,
        err: e.message,
      })
    }
  })
