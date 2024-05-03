import React from 'react'
import CustomButton from './CustomButton'

const Whatsapp = () => {
  return (
    <div className='fixed z-50 p-10 bottom-5 right-5'>
        <a href="https://api.whatsapp.com/send?phone=1234567890" target='_blank'>
          <CustomButton
            title='Whatsapp ile bize ulaşın'
            btnType='button'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] shadow-lg'
            rightIcon='/whatsapp.png'
          />
        </a>
      </div>
  )
}

export default Whatsapp