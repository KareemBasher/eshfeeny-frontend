import React from 'react'
import { useParams } from 'react-router-dom'

const CompanyPage = () => {
  const {company} = useParams()
  return <div>{company}</div>
}

export default CompanyPage
