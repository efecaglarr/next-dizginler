"use client"
import { useState, Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps, OptionsProps } from '@/types'
import { updateSearchParams } from '@/utils'
import router from 'next/router'
import Image from 'next/image'

const CustomFilter = ({ title, options } : CustomFilterProps) => {
  const [ selected, setSelected ] = useState(options[0])
  const router = useRouter();

  const handleUpdateParams = (e: OptionsProps) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    
    router.push(newPathName, {scroll: false})
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e)=>{
          setSelected(e)
          handleUpdateParams(e);
        }}
      >
        <div className='relative w-fit'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.name}</span>
            <Image src="/chevron-up-down.svg" alt='chevron-up-down' width={20} height={20} className='ml-4 object-contain' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.name}
                  value={option}
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${ active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}
                    >{option.name}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter