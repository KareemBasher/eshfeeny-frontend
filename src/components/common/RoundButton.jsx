import React from 'react'
import { Link } from 'react-router-dom'

const RoundButton = ({ onGetLogo, onGetText, onGetPath }) => {
  return (
    <div className="flex mr-5 min-w-fit">
      <Link to={onGetPath} className="flex justify-center rounded-full shadow-md w-10 h-10">
        <img className="self-center" src={onGetLogo} />
      </Link>
      <Link to={onGetPath} className="self-center px-2">
        <p className="text-[20px]">{onGetText}</p>
      </Link>
    </div>
  )
}

export default RoundButton
