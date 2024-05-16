"use client";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import React, { ChangeEvent, useState } from "react";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { format } from "date-fns";
export const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");


  const [numberofGuest, setNumberOfGuest] = useState<number>(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const newParams = new URLSearchParams();
  newParams.set("location", searchInput);
  newParams.set("startDate", startDate.toISOString());
  newParams.set("endDate", endDate.toISOString());
  newParams.set("guest", numberofGuest.toString());

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const restInput = () => {
    setSearchInput("");
  };
  
  const params=useSearchParams()

  const search = () => {
    router.push(
      `/search?location=${newParams.get("location")}&startDate=${newParams.get(
        "startDate"
      )}&endDate=${newParams.get("endDate")}&guest=${newParams.get("guest")}`
    );
    setSearchInput("");
    
  };
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          onClick={() => router.push("/")}
          src={"https://links.papareact.com/qd3"}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="aribnbLogo"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full overflow-hidden py-2  md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={
            params.get('location')
              ? ` ${params.get('location')} | ${range} | ${params.get(
                  "guest"
                )}`
              : "Start your search"
          }
        />
        <MagnifyingGlassIcon className="hidden md:flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2  " />
      </div>

      <div className="flex  space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6 text-gray-400" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-0">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberofGuest}
              min={1}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNumberOfGuest((e.target as any).value)
              }
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          {/* emet for react */}
          <div className="flex ">
            <button onClick={restInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
