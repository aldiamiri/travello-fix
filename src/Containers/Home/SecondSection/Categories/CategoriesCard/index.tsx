import React from "react";
import Image from "next/image";

function CategoriesCard() {
  return (
    <article className="flex flex-col w-[182px]">
      <figure className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
        <Image src="/home/bromo.png" alt="Bromo Image" layout="fill" objectFit="cover" objectPosition="center" />
      </figure>

      <p className="text-heading-3 text-gray-100 font-bold">Gunung</p>
    </article>
  );
}

export default CategoriesCard;
