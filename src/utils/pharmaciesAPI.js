const apiURL = import.meta.env.VITE_API_URL

const headers = {
  Accept: 'application/json'
}

export const getAvailable = async (products) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/available`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ products: products })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log('Could not get available pharmacies.')
  }
}

// Verify login for pharmacy
export const pharmacyVerifyLogin = async (email, password) => {
  try {
    if (email === '' || password === '') throw new Error('Please enter an email and password.')
    const result = await fetch(apiURL + '/pharmacies/verify', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log('Could not verify login.')
  }
}

// Create a new pharmacy
export const createPharmacy = async (name, email, password) => {
  try {
    const result = await fetch(apiURL + `/pharmacies`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, password: password })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not add pharmacy.`)
  }
}
