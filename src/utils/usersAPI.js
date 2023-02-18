const apiURL = import.meta.env.VITE_API_URL

const headers = {
  Accept: 'application/json'
}

// Get user data
export const getUser = async (id) => {
  try {
    const result = await fetch(apiURL + `/users/${id}`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get user with id ${id}.`)
  }
}

// Check if user exists using email
export const checkUserEmail = async (email) => {
  try {
    const result = await fetch(apiURL + `/users/checkEmail/${email}`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not check user email.`)
  }
}

// Add a product to favorites
export const addToFavorites = async (id, productID) => {
  try {
    const result = await fetch(apiURL + `/users/${id}/favorites`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productID)
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not add product with id ${id} to favorites.`)
  }
}

// Add a product to cart
export const addToCart = async (id, productID) => {
  try {
    const result = await fetch(apiURL + `/users/${id}/cart`, {
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
    const result = await fetch(apiURL + `/users/${userID}/favorites/${productID}`, {
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
    const result = await fetch(apiURL + `/users/${userID}/cart/${productID}`, {
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
    const result = await fetch(apiURL + `/users/${userID}/cart/${productID}/1`, {
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
    const result = await fetch(apiURL + `/users/${userID}/cart/${productID}/-1`, {
      method: 'PATCH',
      headers: headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not decrement quantity.`)
  }
}

// Verify login for user
export const verifyLogin = async (email, password) => {
  try {
    const result = await fetch(apiURL + '/users/verify', {
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

// Upate user name, email, and/or phone number
export const updateUser = async (id, name, email, phone) => {
  try {
    const result = await fetch(apiURL + `/users/${id}/profile`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, phoneNumber: phone })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log('Could not update user.')
  }
}

// Update user password
export const updatePassword = async (id, password) => {
  try {
    const result = await fetch(apiURL + `/users/${id}/password`, {
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
