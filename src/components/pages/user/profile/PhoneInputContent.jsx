import React, { useState } from 'react'
import PI from 'react-phone-input-2'
const ReactPhoneInput = PI.default ? PI.default : PI
import 'react-phone-input-2/lib/style.css'
import './PhoneInputContent.css'

const PhoneInputContent = ({ phoneNumber, handlePhoneChange }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('')

  return (
    <div dir="ltr">
      <ReactPhoneInput
        country={'eg'}
        value={phoneNumber}
        onChange={(phone) => handlePhoneChange(phone)}
      />
    </div>
  )
}

export default PhoneInputContent
