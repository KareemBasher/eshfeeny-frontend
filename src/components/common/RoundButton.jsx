import React from 'react'
import Heart from '../../assets/common/HeartDark.svg'

const RoundButton = ({Icon, Text}) => {
  return (
    <div className='flex'>
        <div className='flex justify-center rounded-full shadow-md w-10 h-10'>
            <img className='h-5 self-center' src={Heart}/>
        </div>
        <p className='self-center px-2' dir='rtl'>المفضلة</p>
    </div>
  )
}

export default RoundButton