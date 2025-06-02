"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Swiper Slider */}
            <div className="w-full max-w-6xl mx-auto py-6 px-4">
                <Swiper
                    pagination={{ type: "fraction" }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 1.2 },
                        768: { slidesPerView: 1.5 },
                        1024: { slidesPerView: 2.2 },
                    }}
                >
                    {[
                        "https://images.oyoroomscdn.com/uploads/hotel_image/219311/large/dbd1a4653c2f80e3.JPG",
                        "https://images.oyoroomscdn.com/uploads/hotel_image/219311/large/2d82b192d6e86ad1.JPG",
                        "https://images.oyoroomscdn.com/uploads/hotel_image/219311/large/630e06fc907b3e62.jpg",
                        "https://images.oyoroomscdn.com/uploads/hotel_image/219311/large/c05e7d10951bcefd.jpg",
                        "https://images.oyoroomscdn.com/uploads/hotel_image/219311/large/4bc11c2917fe0b2c.JPG",
                    ].map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                                <Image
                                    src={img}
                                    alt={`Hotel ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Hotel Details */}
           <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
  {/* Hotel Info Section */}
  <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6 font-sans">
    <h1 className="text-3xl font-bold text-red-600">
      OYO Hotel Alice TX Hwy 281 West
    </h1>

    <p className="text-sm text-gray-600 mt-1">
      815, Hwy S 281, Alice TX, Texas, 78332, United States
    </p>

    <div className="flex items-center mt-3 space-x-2">
      <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
        2.8 ⭐
      </span>
      <span className="text-gray-500 text-sm">(271 Ratings)</span>
    </div>

    <p className="mt-4 text-gray-700">
      The OYO Hotel Alice TX Hwy 281 West is a budget hotel with standardised amenities at the best value.
      Enjoy a superior check-in experience with our free Wi-Fi, 24/7 check-in, and a pet-friendly environment.
    </p>

    {/* What's Nearby */}
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        What's Nearby
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Dubose Elementary School</li>
        <li>Memorial Stadium</li>
        <li>Alice Airport</li>
        <li>First Baptist Church</li>
        <li>Circle V Meat Company</li>
        <li>Allen Samuels CDJR</li>
      </ul>
    </div>

    {/* Amenities */}
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Top Amenities
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
        <span>Free WiFi</span>
        <span>Pet Friendly</span>
        <span>Wheelchair Accessible</span>
        <span>Card Payment</span>
        <span>24/7 Checkin</span>
        <span>TV</span>
      </div>
    </div>
  </div>

  {/* Booking Card */}
  <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6 space-y-4 text-black border border-gray-200 self-start">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">Room Pricing</h2>

    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-700">1: Single</span>
        <span className="text-amber-600 font-bold">₹200</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-700">2: Double</span>
        <span className="text-amber-600 font-bold">₹400</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-700">3: Triple</span>
        <span className="text-amber-600 font-bold">₹600</span>
      </div>
    </div>

   <Link href="/bookingpg"><button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
      Book Now
    </button></Link> 
  </div>
</div>


                </div>
    );
}
