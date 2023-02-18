import React from 'react'
import { useParams } from 'react-router-dom'

const AlternativesPage = () => {
  const params = useParams()
  return (
    <div>
      <p>{params.type}</p>
      <p>{params.category}</p>
      <p>{params.name}</p>
      <p>{params.activeIngredient}</p>
    </div>
  )
}

export default AlternativesPage
