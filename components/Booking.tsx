"use client"
import { useState, Fragment, useEffect } from 'react';
import { locations, times } from '@/constants'
import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import { CustomInputProps, DatePickerProps } from '@/types'
import Datepicker from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"
import CustomButton from './CustomButton';
import ReservationDetails from './ReservationDetails';

interface Reservation {
  [key: string]: string;
}
const Booking = () => {
  const [reservation, setReservation] = useState<Reservation>({ pickupLocation: '', deliveryLocation: '', pickupTime: '', deliveryTime: '', pickupDate: '', deliveryDate: '' })
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const fieldNames: { [key: string]: string } = {
    pickupLocation: "Teslim Alma Konumu",
    deliveryLocation: "Teslim Etme Konumu",
    pickupTime: "Teslim Alma Saati",
    deliveryTime: "Teslim Etme Saati",
    pickupDate: "Teslim Alma Konumu",
    deliveryDate: "Teslim Etme Saati",
  };

  const handleChange = (event: { title: string, value: string }) => {
    setReservation({...reservation, [event.title]: event.value })
  };

  const handleReservation = (reservation : Reservation) => {
    let errorText = "";

    for (const [key, value] of Object.entries(reservation)) {
      if (value === null || value === undefined || typeof value !== "string") {
        setIsError(true);
        errorText = ` ${fieldNames[key]} geçersiz veya bir yazı değil.`;
        break;
        // throw new Error(`Reservation error: ${key} is invalid or not a string.`);
      }
      
      if (value.trim() === "") {
        setIsError(true);
        errorText = ` ${fieldNames[key]} boş olamaz.`;
        break;
        // throw new Error(`Reservation error: ${key} cannot be empty.`);
      }
    }
    if (errorText !== "") {
      setIsError(true);
      setErrorText(errorText);
      return false; // Indicate an error occurred
    }

    console.log("Reservation is valid:", reservation);
    setIsError(false);
      setIsOpen(true);
      return true; 
  }

  useEffect(() => {
    console.log(reservation);
  }, [reservation]);

  return (
    <div className='flex pt-24 pb-24 justify-center items-center bg-white max-sm:pb-60'>
      <div className='max-w-[1440px] absolute z-10 border-2 border-gray-300 bg-book-bg bg-white shadow-lg pb-3'>
        <div className='max-w-[1440px] mx-auto flex items-center sm:px-16 px-6 py-4'>
          <div className="home__filter-container">
            {isError && (<p className="error-message">Bütün alanları doldurunuz! {errorText}</p>)}
            <CustomInput handleChange={handleChange} name='Teslim Alma Konumu' otherClasses="z-30" options={locations} title='pickupLocation' />
            <CustomInput handleChange={handleChange} name='Teslim Etme Konumu' otherClasses="z-20" options={locations} title='deliveryLocation'/>

            <DatePicker onChange={handleChange} name="Teslim Alma Tarihi" title="pickupDate" />
            <CustomInput handleChange={handleChange} name='Teslim Alma Saati' otherClasses="z-10" options={times} title='pickupTime'/>

            <DatePicker onChange={handleChange} name="Teslim Etme Tarihi" title="deliveryDate" />
            <CustomInput handleChange={handleChange} name='Teslim Etme Saati' otherClasses="z-0" options={times} title='deliveryTime'/>

            <CustomButton handleClick={() => {handleReservation(reservation)}} title="" containerStyles="bg-primary-blue text-white rounded-full mt-5" rightIcon="/right-arrow.svg" />
            <ReservationDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} reservation={reservation}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const DatePicker = ({ name, title, onChange }: DatePickerProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const options: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: today,
    inputDateFormatProp: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "text-black dark:text-black",
      disabledText: "",
      input: "dark:text-black dark:bg-white shadow min-w-[150px] ",
      inputIcon: "",
      selected: "",
    },
  }

  const [show, setShow] = useState(false)

  const handleChange = (selectedDate: Date) => {
    const formattedDate = selectedDate.toLocaleDateString("tr-TR", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const dateObject = {
      title: title,
      value: formattedDate
    }
    onChange(dateObject)
  }
  const handleClose = (state: boolean) => {
    setShow(state)
  }

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" htmlFor="Time">{name}</label>
      <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
    </div>
  )
}

export const CustomInput = ({ name, options, handleChange, otherClasses, title }: CustomInputProps) => {
    const [selected, setSelected] = useState({...options[0], title: title})

  return (
    <div className={`'w-fit' ${otherClasses}`}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" htmlFor="location">{name}</label>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected({...e, title: title})
          const input = {...e, title: title}
          handleChange(input)
        }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-input__btn">
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
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
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


export default Booking