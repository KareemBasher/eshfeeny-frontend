const apiURL = import.meta.env.VITE_API_URL

const headers = {
  Accept: 'application/json'
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
