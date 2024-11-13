"use client"
import { Fragment, useEffect, useState } from 'react';
import { CarProps, MailTemplateProps } from '@/types';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { generateCarImageUrl } from '@/utils';
import { CustomInput } from './Booking';
import { cars, uniqueCarModels } from '@/constants/cars';
import { compileWelcomeTemplate, sendMail } from "../utils/mail";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  reservation: { [key: string]: string };
}

const fieldNames: { [key: string]: string } = {
  pickupLocation: "Teslim Alma Konumu",
  deliveryLocation: "Teslim Etme Konumu",
  pickupTime: "Teslim Alma Saati",
  deliveryTime: "Teslim Etme Saati",
  pickupDate: "Teslim Alma Tarihi",
  deliveryDate: "Teslim Etme Tarihi",
};


const ReservationDetails = ({ isOpen, closeModal, reservation }: CarDetailsProps) => {
  const [car, setCar] = useState<CarProps>(cars[0]);

  const handleCarChange = (event: { name: string, value: string }) => {
    const tempCar = cars.find((car) => car.model.toLowerCase() === event.name.toLowerCase());
    if (tempCar) {
      setCar(tempCar);
    } else {
      console.warn("Car not found");
    }
    console.log(tempCar?.model);

    return
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>

              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[95vh] overflow-y-auto transform rounded-2xl bg-white p-8 text-left shadow-xl translate-x-all flex-col gap-5 bg-book-bg ">

                  <Dialog.Title className="font-extrabold text-lg">Rezervasyonunuzu tamamlayın</Dialog.Title>

                  <button
                    type='button'
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>

                  <CustomInput handleChange={handleCarChange} name='Aracınızı Seçin' otherClasses="z-30" options={uniqueCarModels} title='Some Title' />
                  {car ? (
                    <>
                      <div className='flex-1 flex flex-col gap-3'>
                        <div className='relative h-40 flex justify-end items-end rounded-lg w-full'>
                          <Image src={car.mainImage} alt='car model' fill priority className='object-contain' />
                        </div>

                        <div className='flex gap-3'>
                          <div className='flex-1 relative w-full h-40 bg-primary-blue-100 rounded-lg'>
                            <Image src={car.subImage1} alt='car model' fill priority className='object-contain' />
                          </div>
                          <div className='flex-1 relative w-full h-40 bg-primary-blue-100 rounded-lg'>
                            <Image src={car.subImage2} alt='car model' fill priority className='object-contain' />
                          </div>
                        </div>
                      </div>

                      <div className='flex-1 flex flex-col gap-2 mt-4'>
                        <div className='mt-3 flex flex-wrap gap-4'>
                          <p className='font-semibold text-lg'>
                            Lütfen bilgilerinizi girin :
                          </p>
                          <Form reservation={reservation} />
                          <h2 className='font-semibold text-xl capitalize'>
                            {car.make} {car.model}
                          </h2>

                          <div className='flex justify-between gap-5 w-full text-right'>
                            <h4 className='text-gray-500 capitalize'>Ücret</h4>
                            <p className='text-black-100 font-semibol capitalize'>{car.price} ₺</p>
                          </div>
                          <div className='flex justify-between gap-5 w-full text-right'>
                            <h4 className='text-gray-500 capitalize'>Yakıt</h4>
                            <p className='text-black-100 font-semibol capitalize'>{car.fuel_type}</p>
                          </div>
                          {Object.entries(reservation).map(([key, value]) => (
                            <div className='flex justify-between gap-5 w-full text-right' key={key}>
                              <h4 className='text-gray-500 capitalize'>{fieldNames[key]}</h4>
                              <p className='text-black-100 font-semibol capitalize'>{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>

                  ) : null}


                </Dialog.Panel>
              </Transition.Child>

            </div>
          </div>

        </Dialog>
      </Transition>
    </>
  )
}

export default ReservationDetails


const Form = ({ reservation }: { reservation: { [key: string]: string } }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const emailTemplate = {
        name: formData.firstName || "Kullanıcı",
        lastName: formData.lastName || "",
        price: reservation.price || "Bilinmiyor",
        pickupLocation: reservation.pickupLocation || "Bilinmiyor",
        pickupTime: reservation.pickupTime || "Bilinmiyor",
      };

      console.log("Final Email Template:", emailTemplate);

      const emailBody = await compileWelcomeTemplate(emailTemplate);

      await sendMail({
        to: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        subject: "Dizgin Auto Rezervasyon Bilgileri",
        body: emailBody,
      });

      alert("Rezervasyon başarıyla gönderildi!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Rezervasyon gönderilirken bir hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="form_input"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className="form_label">
          Mail Adresiniz
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form_input"
            placeholder=" "
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="firstName" className="form_label">
            Adınız
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form_input"
            placeholder=" "
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName" className="form_label">
            Soyadınız
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="form_input"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone" className="form_label">
            Numaranız
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="age"
            id="age"
            className="form_input"
            placeholder=" "
            value={formData.age}
            onChange={handleChange}
            required
          />
          <label htmlFor="age" className="form_label">
            Yaşınız
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="message"
          id="message"
          cols={50}
          rows={2}
          className="form_input"
          placeholder=" "
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="message" className="form_label">
          Mesaj Bırakın (İsteğe bağlı)
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Gönder
      </button>
    </form>
  );
};