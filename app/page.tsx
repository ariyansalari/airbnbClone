import { CityCard, LargeCard, LocationCards } from "@/components";
import { cityCard } from "@/constant";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "home | airbnb",
  description: "airbnb",
};
export default  async function Home() {
    const locationRes=await fetch("https://66375b8c288fedf693801bf8.mockapi.io/airbnblocation")
    const locationResult =await locationRes.json()
  return (
    <main className="max-w-7xl mx-auto px-8  sm:px-16 ">
   <section className="pt-6 ">
    <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>

    {/* pull some data from here  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    {
    locationResult?.map(({img,distance,location}:any)=>(
<LocationCards key={img} img={img} distance={distance} location={location} />

    ))
}
</div>

   </section>

   <section>
    <h2 className="text-4xl font-semibold py-8">Live AnyWhere</h2>
    <div className="flex space-x-3 overflow-scroll  scrollbar-hide p-3 -ml-3">
{cityCard?.map(({img,title})=>(
  <CityCard key={img} title={title} img={img}/>
))}
    </div>

   </section>
   <LargeCard img={'https://links.papareact.com/4cj'} title={'The Greatest Outdoors'} description={'Wishlists created by Airbnb.'} buttonText={'Get Inspired'} />
    </main>
  );
}
