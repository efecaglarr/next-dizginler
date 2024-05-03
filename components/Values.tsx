import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20 px-20">
      <p className="text-base lg:text-xl font-medium text-gray-700 text-center">
        Neden bizi seçmelisiniz ?
      </p>
      <h2 className=" text-3xl lg:text-5xl font-semibold text-gray-800 text-center mt-3">
      Kıbrıs Araç Kiralama
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 pt-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-extrabold">Müşteri Memnuniyeti</p>
          <p className="text-gray-500 text-center">
            Araçlarımızı her zaman temiz ve bakımlı tutarak,
           müşterilerimize güvenli ve konforlu bir sürüş deneyimi sunmayı amaçlıyoruz. Siz değerli müşterilerimizin memnuniyeti,
           bizim için en büyük motivasyon kaynağıdır.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-extrabold">İletişim</p>
          <p className="text-gray-500 text-center">
          Araç kiralama konusunda tecrubemiz ile her <br />türlü soru veya endişeniz konusunda her zaman yardıma hazırız. <br />
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-extrabold">Beklentileriniz</p>
          <p className="text-gray-500 text-center">
            
İster kısa süreli bir yolculuk, ister uzun bir tatil için olsun, kiralık araçlarımızla size en iyi deneyimi sunmaya çalışıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;