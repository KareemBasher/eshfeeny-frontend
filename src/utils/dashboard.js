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
