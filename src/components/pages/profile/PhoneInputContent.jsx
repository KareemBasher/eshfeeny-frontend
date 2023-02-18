import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInputContent.css'

const PhoneInputContent = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('')

  return (
    <div className="w-80 mx-[3.5rem]" dir="ltr">
      <PhoneInput country={'eg'} value={user.phoneNumber} onChange={setValue} />
    </div>
  )
}

export default PhoneInputContent
