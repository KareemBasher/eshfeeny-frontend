import React from 'react'
import InsuranceCard from './InsuranceCard'
import AddPrescription from './AddPrescription'

const AddContainer = () => {
  return (
    <div className=" flex w-full">
      <div className="mx-10">
        <InsuranceCard />
      </div>
      <div className="mx-10">
        <AddPrescription />
      </div>
    </div>
  )
}

export default AddContainer
