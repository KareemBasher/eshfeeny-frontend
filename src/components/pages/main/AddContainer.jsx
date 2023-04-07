import React from 'react'
/*    Components    */
import InsuranceCard from './InsuranceCard'
import AddPrescription from './AddPrescription'

const AddContainer = () => {
  return (
    <div className="mx-36 flex justify-between mb-10">
      <div className="w-[49%]">
        <InsuranceCard />
      </div>

      <div className="w-[49%]">
        <AddPrescription />
      </div>
    </div>
  )
}

export default AddContainer
