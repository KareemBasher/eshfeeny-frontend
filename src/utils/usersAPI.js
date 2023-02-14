const apiURL = import.meta.env.VITE_API_URL

const headers = {
  Accept: 'application/json'
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
      body: JSON.stringify({ productID: productID })
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
