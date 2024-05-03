import Image from 'next/image'
import NextLink from 'next/link'

import { CustomButton, Footer } from '.'


const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex flex-wrap justify-content items-center  px-16 py-4'>
                <div className='flex justify-center items-center md:justify-start max-md:w-full'>

                <NextLink href="./" className="flex justify-center items-center" >
                    <Image
                        src="/logo.svg"
                        alt="Dizginler Auto Logo"
                        width={118}
                        height={18}
                        className="object-contain" 
                        priority={false}
                        />
                        
                </NextLink>
                </div>
                <div className='flex-1 w-full flex justify-center flex-wrap max-md:mt-5 gap-20'>
                    <div className='flex text-base min-w-[170px]'>
                        <h3 className='font-bold pr-4 max-md:pt-2'>İletişim Bilgileri</h3>
                        <div className='flex max-md:flex-col flex-wrap justify-between gap-5'>
                            <NextLink
                                href="dizginlerrentacar@gmail.com"
                                className="text-gray-500">
                                dizginlerrentacar@gmail.com
                            </NextLink>
                            <NextLink
                                href="+90 533 846 15 15"
                                className="text-gray-500 ml-2">
                                +90 533 846 15 15
                            </NextLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar