const apiURL = import.meta.env.VITE_API_URL

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
export const uploadImage = async (imagePath) => {
  try {
    const result = await fetch(`${apiURL}/upload`, {
      method: 'POST',
      body: { imagePath: imagePath }
    })
    if (result.status === 200) return result.json()
  } catch {
    console.log(`Could not upload image.`)
  }
}

// Searching for a product using an image
export const imageSearch = async (imagePath) => {
  try {
    const result = await fetch(`${apiURL}/imageSearch`, {
      method: 'POST',
      body: { imagePath: imagePath }
    })
    if (result.status === 200) return result.json()
  } catch {
    console.log(`Could not search image.`)
  }
}
