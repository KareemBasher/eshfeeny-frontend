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

// Get pharmacy data
export const getPharmacy = async (id) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${id}`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get pharmacy with id ${id}.`)
  }
}

// Add a product to favorites
export const addToFavorites = async (id, productID) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${id}/favorites`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId: productID })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not add product with id ${id} to favorites.`)
  }
}

// Add a product to cart
export const addToCart = async (id, productID) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${id}/cart`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId: productID })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not add product with id ${id} to cart.`)
  }
}

// Remove a product from favourites
export const removeFromFavorites = async (userID, productID) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${userID}/favorites/${productID}`, {
      method: 'DELETE',
      headers: headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not remove product.`)
  }
}

// Remove a product from cart
export const removeFromCart = async (userID, productID) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${userID}/cart/${productID}`, {
      method: 'DELETE',
      headers: headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not remove product.`)
  }
}

// Increment the quantity of a product in the cart
export const incrementQuantity = async (userID, productID) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${userID}/cart/${productID}/1`, {
      method: 'PATCH',
      headers: headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not increment quantity.`)
  }
}

// Decrement the quantity of a product in the cart
export const decrementQuantity = async (userID, productID) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${userID}/cart/${productID}/-1`, {
      method: 'PATCH',
      headers: headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not decrement quantity.`)
  }
}

// Upate pharmacy name, email, and/or phone number
export const updatePharmacy = async (id, name, email, phone, address) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${id}/profile`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, phoneNumber: phone, address: address })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log('Could not update pharmacy.')
  }
}

// Update pharmacy password
export const updatePassword = async (id, password) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${id}/password`, {
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

// Add a new product to pharmacy
export const addProduct = async (pharmacyId, productId, quantity) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${pharmacyId}/addProduct`, {
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

// Get cart items for a pharmacy
export const getCart = async (id) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${id}/cart`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get cart for pharmacy with id ${id}.`)
  }
}

// Check if a pharmacy already has a certain product
export const checkProduct = async (pharmacyId, productId) => {
  try {
    const result = await fetch(apiURL + `/pharmacies/${pharmacyId}/checkProduct/${productId}`, {
      headers: headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not check product ${productId} for pharmacy with id ${pharmacyId}.`)
  }
}

export const sendOrder = async (pharmacyId, manufacturerName, product, quantity) => {
  try {
    const result = await fetch(
      apiURL + `/pharmacies/${pharmacyId}/sendOrder/manufacturer/${manufacturerName}`,
      {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product: product, quantity: quantity })
      }
    )

    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(
      `Could not send order with product ${product._id} for pharmacy with id ${pharmacyId} to manufacturer ${manufacturerName}.`
    )
  }
}
