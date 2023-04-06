import signin from "./signin.mjs"
import upload from "./upload.mjs"
import config from "./config.mjs"

main()

function main () {
  const buttonSignin = document.querySelector('#buttonSignin')
  const buttonUpload = document.querySelector('#buttonUpload')

  const onClickButtonSignin = (event) => {
    event.preventDefault()
    signin(config)
  }

  const onClickButtonUpload = async (event) => {
    event.preventDefault()

    const {hash} = window.location
    const pattern = /^#access_token=/

    if (!pattern.test(hash)) {
      return
    }

    const params = new URLSearchParams(hash.slice(1))
    const accessToken = params.get('access_token')
    const blob = new Blob(['test'], {
      type: 'text/plain'
    })

    const response = await upload(accessToken, 'name', blob)

    if (200 <= response.status && response.status < 300) {
      console.log('OK')
    }
  }

  buttonSignin.addEventListener('click', onClickButtonSignin)
  buttonUpload.addEventListener('click', onClickButtonUpload)
}