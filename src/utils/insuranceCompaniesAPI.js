const apiURL = import.meta.env.VITE_API_URL

const headers = {
  Accept: 'application/json'
}

// Get all insurance companies
export const getInsuranceCompanies = async () => {
  try {
    const result = await fetch(apiURL + `/insuranceCompanies`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get insurance companies.`)
  }
}

// Get insurance company by id
export const getInsuranceCompany = async (id) => {
  try {
    const result = await fetch(apiURL + `/insuranceCompanies/${id}`, { headers: headers })
    if (result.status === 200) return result.json()
  } catch (error) {
    console.log(`Could not get insurance company with id ${id}.`)
  }
}
