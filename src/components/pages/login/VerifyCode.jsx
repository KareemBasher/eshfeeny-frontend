import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { sendEmail } from '../../../utils/dashboard'

const VerifyCode = () => {
  const [code, setCode] = useState('')
  const params = useParams()

  useEffect(() => {
    const getCode = async () => {
      setCode(await sendEmail(params.email))
    }

    getCode()
  }, [])

  return <div>VerifyCode</div>
}

export default VerifyCode
