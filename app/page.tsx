import { Booking, CarCard, CustomButton, CustomFilter, Features, Hero, Navbar, SearchBar, Values } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { cars } from "@/constants/cars";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {

  const allCars = cars;

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="overflow-hidden">
      <Hero />
      <Booking />
      <Values />


      <div className="mt-6 padding-x max-width" id="discover">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Araçlar
          </h1>
          <p className="font-medium">Şu anda müsait olan araçlarımızı inceleyin ve kiralayın.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) =>
                <CarCard car={car} />
              )}
            </div>

          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results
            </h2>
          </div>
        )}
        <Features />
      </div>
    </main>
  );
}
