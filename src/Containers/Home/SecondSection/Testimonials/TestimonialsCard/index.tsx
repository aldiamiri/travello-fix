import React from "react";
import Image from "next/image";
import Rating from "./Rating";

function TestimonialsCard() {
  return (
    <article className="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4">
      <div className="flex mb-4">
        <figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
          <Image src="/home/profile.png" alt="Profil Image" layout="fill" objectFit="cover" objectPosition="center" />
        </figure>

        <div className="flex flex-col">
          <p className="text-heading-4 text-gray-100 font-label font-bold mb-1">Bagas Putra</p>
          <p className="text-heading-5 text-gray-50 font-bold">Manado, Sulawesi Utara</p>
        </div>
      </div>

      <Rating />

      <p className="text-heading-5 text-gray-70 my-4">Nyari Makanan Halal gampang banget udah ada tour guidnya, tour guidenya ramah enak diajak ngobrol, dan penginapannya pun nyaman</p>

      <p className="text-heading-5 text-gray-100 font-bold">Nusa Penida, Bali</p>
      <p className="text-heading-6 text-gray-50">23-01-2023</p>
    </article>
  );
}

export default TestimonialsCard;
