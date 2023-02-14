const apiURL = import.meta.env.VITE_API_URL

const headers = {
  Accept: 'application/json'
}

// Getting all products
export const getAll = async () => {
  try {
    const result = await fetch(apiURL + `/products`, { headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get all products from API.`)
  }
}

// Get a single product using the id
export const getProduct = async (id) => {
  try {
    const result = await fetch(apiURL + `/products/${id}`, { headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get product with id ${id} from API.`)
  }
}

// Get a single product using the id
export const addProduct = async (product) => {
  try {
    const result = await fetch(apiURL + `/products/`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not add product.`)
  }
}

// Deleting a product
export const deleteProduct = async (id) => {
  try {
    const result = await fetch(apiURL + `/products/${id}`, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application.json'
      }
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not delete product with id ${id}.`)
  }
}

// Updating a product
export const updateProduct = async (id, product) => {
  try {
    const result = await fetch(apiURL + `/products/${id}`, {
      method: 'PATCH',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not update product with id ${id}.`)
  }
}

// Get all product from a category
export const getCategory = async (category) => {
  try {
    const result = await fetch(apiURL + `/products/category/${category}`, { headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get product from category ${category} from API.`)
  }
}

// Get autocomplete for a search query
export const search = async (query) => {
  try {
    const result = await fetch(apiURL + `/products/search/${query}`, { headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not search for products using the query ${query} from API.`)
  }
}

// Get products from a users order history
export const getOrderHistoryProducts = async (userId, orderHistoryId) => {
  try {
    const result = await fetch(apiURL + `/products/user/${userId}/orderHistory/${orderHistoryId}`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(
      `Could not get products from order with id ${orderHistoryId} for user with id ${userId} from API.`
    )
  }
}

// Get products from a users favorites list
export const getFavoriteProducts = async (userId) => {
  try {
    const result = await fetch(apiURL + `/products/user/${userId}/favorites`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get products from favorites for user with id ${userId} from API.`)
  }
}

// Get products that have a certain active ingredient
export const getAlternatives = async (activeIngredient) => {
  try {
    const result = await fetch(apiURL + `/products/alternatives/${activeIngredient}`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(
      `Could not get products that have the active ingredient ${activeIngredient} from API.`
    )
  }
}

// Get products from a users favorites list
export const getCartProducts = async (userId) => {
  try {
    const result = await fetch(apiURL + `/users/${userId}/cart`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get products from cart for user with id ${userId} from API.`)
  }
}

// Check if an item is in the cart of a user
export const checkCart = async (userId, productId) => {
  try {
    const result = await fetch(apiURL + `/products/user/${userId}/cart/${productId}`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(
      `Could not check if product with id ${productId} is in cart for user with id ${userId}.`
    )
  }
}
