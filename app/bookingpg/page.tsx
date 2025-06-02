"use client";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { useUser } from "@/context/UserContext";


const BuyPage = () => {
    const {maincon}=useUser();
    const image = maincon.image; // Replace with actual image path  const name = "Aloo PG";
  const price = 299;
  const color = 300;
  const size = 500;

  const message = `Order Details:%0AProduct: ${name}%0APrice: ₹${price}%0AColor: ${color}%0ASize: ${size}`;
  const phoneNumber = "919354703303";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <div className="flex max-sm:flex-col items-center justify-center min-h-screen p-4 bg-gray-100 gap-6">
        {/* Google Map */}
        <div className="w-full max-w-lg overflow-hidden rounded-2xl shadow-lg">
          <a
            href="https://maps.app.goo.gl/ZxEMTXVJfsNnRAmk9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <MapPin size={20} />
            Google Map
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092316832512!2d77.48132141164699!3d28.615863050895264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z28.615863050895264N77.48132141164699E!5e0!3m2!1sen!2sin!4v1679909812345"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Card */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-black">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>
          <img src={image} alt={maincon.name} width={160} height={160} className="rounded-lg mx-auto mb-4" />
          <p className="text-lg"><strong>PG:</strong> {maincon.name}</p>
          <p className="text-lg"><strong>Single:</strong> &#8377;{price}</p>
          <p className="text-lg"><strong>Double:</strong>&#8377; {color}</p>
          <p className="text-lg"><strong>Triple:</strong> &#8377;{size}</p>

          <div className="flex flex-col gap-1">
            <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-green-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-600 transition"
          >
            Send Order to WhatsApp
          </a>
           <Link
              href="tel:+919354703303"
              className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              <Phone /> Call Now
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Order Summary */}
      
    </>
  );
};

export default BuyPage;
