const apiURL = import.meta.env.VITE_API_URL

const headers = {
  Accept: 'application/json'
}

// Verify login for manufacturer
export const manufacturerVerifyLogin = async (email, password) => {
  try {
    if (email === '' || password === '') throw new Error('Please enter an email and password.')
    const result = await fetch(apiURL + '/manufacturers/verify', {
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

// Create a new manufacturer
export const createManufacturer = async (name, email, password) => {
  try {
    const result = await fetch(apiURL + `/manufacturers`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, password: password })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not add manufacturer.`)
  }
}

// Get manufacturer data
export const getManufacturer = async (id) => {
  try {
    const result = await fetch(apiURL + `/manufacturers/${id}`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get manufacturer with id ${id}.`)
  }
}

// Upate manufacturer name, email, and/or phone number
export const updateManufacturer = async (id, name, email, phone, address) => {
  try {
    const result = await fetch(apiURL + `/manufacturers/${id}/profile`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, phoneNumber: phone, address: address })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log('Could not update manufacturer.')
  }
}

// Update manufacturer password
export const updatePassword = async (id, password) => {
  try {
    const result = await fetch(apiURL + `/manufacturer/${id}/password`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: password })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log('Could not update password.')
  }
}

// Add a new product to manufacturer
export const addProduct = async (manufacturerId, productId, quantity) => {
  try {
    const result = await fetch(apiURL + `/manufacturers/${manufacturerId}/addProduct`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: productId, quantity: quantity })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log('Could not add product.')
  }
}

// Check if a manufacturer already has a certain product
export const checkProduct = async (manufacturerId, productId) => {
  try {
    const result = await fetch(
      apiURL + `/manufacturers/${manufacturerId}/checkProduct/${productId}`,
      {
        headers: headers
      }
    )
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not check product ${productId} for manufacturer with id ${manufacturerId}.`)
  }
}

// Get manufacturer orders
export const getOrders = async (id) => {
  try {
    const result = await fetch(apiURL + `/manufacturers/${id}/orders`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`could not get orders for manufacturer with id ${id}`)
  }
}

// Get manufacturer delayed orders
export const getDelayedOrders = async (id) => {
  try {
    const result = await fetch(apiURL + `/manufacturers/${id}/delayedOrders`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`could not get delayed orders for manufacturer with id ${id}`)
  }
}
