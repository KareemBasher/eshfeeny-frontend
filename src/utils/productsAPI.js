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

// Add a product
export const addProduct = async (product) => {
  try {
    const result = await fetch(apiURL + `/products/`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product: product })
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

// Get all product from a type
export const getType = async (type) => {
  try {
    const result = await fetch(apiURL + `/products/type/${type}`, { headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get product from type ${type} from API.`)
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

// Get products from a pharmacy's favorites list
export const getFavoriteProductsPharmacy = async (pharmacyId) => {
  try {
    const result = await fetch(apiURL + `/products/pharmacy/${pharmacyId}/favorites`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(
      `Could not get products from favorites for pharmacy with id ${pharmacyId} from API.`
    )
  }
}

// Get products that have a certain active ingredient
export const getAlternatives = async (id) => {
  try {
    const result = await fetch(apiURL + `/products/alternatives/${id}`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get alternatitives to item with id ${id} from API.`)
  }
}

export const getMany = async (IDs) => {
  try {
    const result = await fetch(apiURL + `/products/getMany/${IDs}`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get products from API.`)
  }
}

// Get products from a users cart list
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

// Check if an item is in the cart of a pharmacy
export const checkCartPharmacy = async (pharmacyId, productId) => {
  try {
    const result = await fetch(apiURL + `/products/pharmacy/${pharmacyId}/cart/${productId}`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(
      `Could not check if product with id ${productId} is in cart for pharmacy with id ${pharmacyId}.`
    )
  }
}

// Get all product from a brand
export const getBrand = async (brand) => {
  try {
    const result = await fetch(apiURL + `/products/brand/${brand}`, { headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get product from brand ${brand} from API.`)
  }
}

// Get all product from certain brands
export const getBrands = async (brands) => {
  try {
    const result = await fetch(apiURL + `/products/brand/collective/brands`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ brands: brands })
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get product from brands ${brands} from API.`)
  }
}

// Get brands and their product counts for a category or a type
export const getBrandCounts = async (category_type, value) => {
  try {
    const result = await fetch(apiURL + `/products/brandCounts/${category_type}/${value}`, {
      headers
    })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get brands and their product counts from API.`)
  }
}

// Get all product from a pharmacy
export const getPharmacyProducts = async (pharmacyId) => {
  try {
    const result = await fetch(apiURL + `/products/pharmacy/${pharmacyId}`, { headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get products from pharmacy ${pharmacyId} from API.`)
  }
}
