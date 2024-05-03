"use client"
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title z-10">
        Kuzey Kıbrıs'ta araç kiralamak için en doğru adres biziz.
        
        </h1>
        <p className="hero__subtitle">
        Zahmetsiz kiralama sürecimizle araç kiralama deneyiminizi kolaylaştırın.
        
        </p>
        <CustomButton 
        title="Araçları Gör"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" priority={true}/>
        </div>
        <div className="hero__image-overlay"/>
      </div>
    </div>
  )
}

export default Hero