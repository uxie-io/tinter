export const generateRandomURL = () =>
  new Promise((resolve) => {
    try {
      fetch('https://source.unsplash.com/random/600x350').then((response) => {
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
