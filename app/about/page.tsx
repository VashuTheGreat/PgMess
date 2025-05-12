import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 text-black">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">About MessMate</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
          Hi, we are <span className="text-yellow-500">MessMate</span>, a dedicated team focused on providing high-quality, home-like meals for students and working professionals. Our goal is to deliver nutritious and delicious meals that fit into your busy schedule, ensuring you always have a fresh and wholesome dining experience.
        </p>
      </div>

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/messmate.png" // Replace with your logo or relevant image
          alt="MessMate"
          width={500}
          height={500}
          className="mx-auto rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-purple-500">Who Are We?</h2>
          <p className="text-gray-700 mt-4 text-lg">
            At MessMate, we specialize in providing convenient and healthy meal options that cater to a variety of tastes and dietary needs. We understand the importance of good food and aim to make your meals hassle-free while maintaining quality, taste, and nutritional value. Our service focuses on fast delivery, customization, and most importantly, customer satisfaction.
          </p>
          <div className="mt-6 flex gap-6 justify-center">
            <Link href='/contact'>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
            <a href='/Menu.pdf' download>
              <button className=" hover:text-white bg-transparent hover:bg-blue-500 text-blue-500 font-semibold py-2 px-6 border-2 border-blue-500 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                Download Menu
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Our Mission & Services Section */}
     <div className="container mx-auto px-6 py-12 bg-white bg-opacity-75 bg-gradient-to-t from-gray-100 to-gray-200 text-black rounded-lg shadow-lg mt-12">
  <h2 className="text-3xl font-bold text-yellow-500 text-center">Our Mission & Services</h2>
  <div className="grid md:grid-cols-2 gap-8 mt-6">
    {/* Our Mission */}
    <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-90">
      <h3 className="text-xl font-semibold text-blue-400">Our Mission</h3>
      <p className="mt-3 text-gray-700">
        Our mission is to provide timely, affordable, and nutritious meals to students, professionals, and anyone in need of a hassle-free dining experience. With an emphasis on customer satisfaction and health-conscious meal options, we aim to revolutionize the way people think about meal delivery.
      </p>
    </div>

    {/* Services Offered */}
    <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-90">
      <h3 className="text-xl font-semibold text-blue-400">What We Offer</h3>
      <ul className="mt-3 text-gray-700 list-disc list-inside">
        <li>Customized Meal Plans</li>
        <li>Healthy and Nutritious Ingredients</li>
        <li>Fast Delivery Services</li>
        <li>Affordable Pricing</li>
        <li>Special Dietary Needs (Vegan, Gluten-Free, etc.)</li>
      </ul>
    </div>
  </div>

  {/* Special Offers & Features */}
  <div className="mt-8 bg-white p-6 rounded-lg shadow-md bg-opacity-90">
    <h3 className="text-xl font-semibold text-blue-400 mt-6 text-center">Special Features</h3>
    <div className="flex flex-col md:flex-row justify-evenly items-start bg-white p-6 rounded-xl shadow-md gap-8">
      {/* Features Section */}
      <div>
        <h3 className="text-xl font-bold text-black mb-2 underline">Key Features</h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Home Delivery in 30 Minutes</li>
          <li>Multiple Payment Options</li>
          <li>Fresh and Hygienic Ingredients</li>
          <li>Customer Satisfaction Guarantee</li>
        </ul>
      </div>

      {/* Service Areas */}
      <div>
        <h3 className="text-xl font-bold text-black mb-2 underline">Service Areas</h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Campus Locations</li>
          <li>Office Complexes</li>
          <li>Residential Areas</li>
          <li>Local Communities</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
