import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInputContent.css'

const PhoneInputContent = ({ phoneNumber, handlePhoneChange }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('')

  return (
    <div className="w-80 mx-[3.5rem]" dir="ltr">
      <PhoneInput
        country={'eg'}
        value={phoneNumber}
        onChange={(phone) => handlePhoneChange(phone)}
      />
    </div>
  )
}

export default PhoneInputContent
