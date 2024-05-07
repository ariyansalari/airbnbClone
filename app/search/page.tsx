import { InfoCard } from "@/components";
import { format } from "date-fns";
import React from "react";

const Search = async({searchParams}:{searchParams:any}) => {
    const searchResult=await fetch('https://663a5dfe1ae792804bef15cc.mockapi.io/Properties')
    const res=await searchResult.json()
    
    const {location,startDate,endDate,guest}=searchParams
    const formattedStartDate=format(new Date(startDate),'dd MMMM yy')
    const formattedEndDate=format(new Date(endDate),'dd MMMM yy')
    const range=`${formattedStartDate} - ${formattedEndDate}`

  return (
    <main className="">
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">300+ Stays - {range} - for {guest} guests</p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

        <div className=" hidden lg:inline-flex mb-5 space-x-5 text-gray-800 whitespace-nowrap">
          <p className="filterButton">Cancellation Flexbility</p>
          <p className=" filterButton">Type of Place </p>
          <p className="filterButton ">Price</p>
          <p className="filterButton ">Rooms and Beds</p>
          <p className="filterButton ">More filters</p>

        </div>
<div className="flex flex-col">
        {res.map(({img,location,title,description,star,price,total}:any)=>(
            <InfoCard key={img}  img={img} title={title} description={description} star={star} price={price} total={total} location={location}/>
        ))}
</div>

      </section>
    </main>
  );
};

export default Search;
