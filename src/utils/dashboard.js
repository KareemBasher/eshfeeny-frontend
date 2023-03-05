import FormData from 'form-data'

const apiURL = import.meta.env.VITE_API_URL
const imgbbKey = import.meta.env.VITE_IMGBB_API_KEY
const imgbbURL = import.meta.env.VITE_IMGBB_URL

const headers = {
  Accept: 'application/json'
}

// Sending an email with a verification code for changing password
export const sendEmail = async (email) => {
  try {
    const result = await fetch(`${apiURL}/email/${email}`, { headers })
    if (result.status === 200) return result.json()
  } catch {
    console.log(`Could not send email.`)
  }
}

// Uploading an image to imgbb
export const uploadImage = async (image) => {
  try {
    const form = new FormData()
    form.append('key', imgbbKey)
    form.append('image', image)

    const result = await fetch(imgbbURL, {
      method: 'POST',
      body: form
    })
    if (result.status === 200) return result.json()
  } catch {
    console.log(`Could not upload image.`)
  }
}

// Searching for a product using an image
export const imageSearch = async (imageURL) => {
  try {
    const result = await fetch(`${apiURL}/imageSearch`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageURL: imageURL })
    })
    if (result.status === 200) return result.json()
  } catch {
    console.log(`Could not search image.`)
  }
}
