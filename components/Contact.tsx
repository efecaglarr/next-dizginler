import React from 'react'
import CustomButton from './CustomButton'

const Whatsapp = () => {
  return (
    <div className='fixed z-50 p-7 bottom-0 right-0'>
        <a href="https://api.whatsapp.com/send?phone=905338461515" target='_blank'>
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