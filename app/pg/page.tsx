'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from "@/context/UserContext";


const Page = () => {
  const [about, setabout] = useState<{
    name: string;
    image: string;
    smallAdress: string;
    ratings: number;
    reviews: number;
    minimum_price: number;
    max_price: number;
  }>({
    name: "",
    image: "a",
    smallAdress: "",
    ratings: 0,
    reviews: 0,
    minimum_price: 0,
    max_price: 0
  });


const {handleSetcon } = useUser();


  const handleClick=()=>{
    console.log("clicked");
    handleSetcon(about);

  }

  useEffect(() => {
    setabout({
      name: "OYO Hotel Alice TX Hwy 281 West",
      image: "https://images.oyoroomscdn.com/uploads/hotel_image/219311/medium/dbd1a4653c2f80e3.JPG",

      smallAdress: "Hwy S 281, Alice TX",
      ratings: 4,
      reviews: 2,
      minimum_price: 400,
      max_price: 900,
    })




  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap gap-6 justify-center items-start p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={about.image}
          alt="OYO Hotel Alice TX Hwy 281 West"
          className="w-full h-48 object-cover"
        />

        <Link href="/abpg"><div className="p-4 space-y-2" onClick={handleClick}>
          <h2 className="text-lg font-bold text-gray-800 truncate">
            {about.name}
          </h2>
          <p className="text-gray-500 truncate">{about.smallAdress}</p>

          <div className="flex items-center space-x-2">
            <span className={`text-sm font-bold text-white flex items-center bg-green-${400} p-1 rounded-b-sm`}>
              4
              <svg
                className="w-4 h-4 ml-1 fill-current text-yellow-500"
                viewBox="0 0 9 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.25 9.5a.238.238 0 01-.12-.032L4.5 7.948l-2.63 1.52a.238.238 0 01-.265-.017.271.271 0 01-.102-.26l.48-3.042-1.91-2.021a.276.276 0 01-.061-.268.255.255 0 01.197-.18l2.874-.508L4.276.646A.25.25 0 014.5.5c.094 0 .181.057.223.146l1.194 2.526 2.874.508a.255.255 0 01.197.18.275.275 0 01-.061.268l-1.91 2.021.48 3.042c.015.1-.024.201-.102.26a.242.242 0 01-.145.049z" />
              </svg>
            </span>
            <span className="text-sm text-gray-600">
              ({about.reviews} reviews) • {about.ratings >= 4 ? "Very Good" : "Fair"}
            </span>
          </div>

          <div className="flex items-center  mt-2">
            <div className="text-xl font-bold text-gray-800 pr-4 ">&#8377;
              {about.minimum_price}</div>
            <div className="text-right flex gap-4">
              <div className="line-through text-gray-400 text-sm font-semibold">&#8377;
                {about.max_price}</div>
              <div className="text-green-600 text-sm font-semibold">{((about.minimum_price / about.max_price) * 100).toFixed(0)}% off</div>
            </div>
          </div>

          <div className="text-sm text-gray-500">including Taxes</div>

          <button className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-200">
            Book Now
          </button>
        </div></Link>
      </div>

    </div>
  );
}; export default Page;