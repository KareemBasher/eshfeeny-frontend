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
