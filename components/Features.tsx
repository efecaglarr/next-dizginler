import React from 'react'
import Image from 'next/image'
import { features } from '@/constants'

const Features = () => {
    return (
<section className="flex-col flex items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat pt-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
        <div className="flex flex-1">
          <Image
            src="/features-bg-1.png"
            alt="car rental"
            width={600}
            height={700}
            className="absolute top-[10%] z-0 hidden max-w-[1500px] md:-left-16 lg:flex  3xl:[-left-20 w-[800px]] ml-12"
          />
        </div>

        <div className="z-0 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <h2 className="text-[40px] font-[700] leading-[120%] lg:[text-[64px] leading-[120%]]">KKTC Araç Kiralama</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {features.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
    )
}

interface FeatureItemProps {
    title: string,
    icon: string,
    variant: string,
    description: string,
}

const FeatureItem = ({ title, icon, variant, description }: FeatureItemProps) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full p-4 bg-grey mb-3">
                <Image src={icon} alt="map" width={28} height={28}/>
            </div>
            <h2 className="text-[20px] font-[700] lg:[text-[32px] leading-[120%]]">
                {title}
            </h2>
            <p className="text-[16px] font-[400] mt-2 bg-white/80 text-gray-30 lg:mt-[10px] lg:bg-none">
                {description}
            </p>
        </li>
    )
}

export default Features