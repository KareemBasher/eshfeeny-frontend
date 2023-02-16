import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInputContent.css'
const PhoneInputContent = () => {
  const [value, setValue] = useState('')
  return (
    <div className="w-80 mx-[3.5rem] " dir="ltr">
      <PhoneInput country={'eg'} value={value} onChange={setValue} />
    </div>
  )
}

export default PhoneInputContent
