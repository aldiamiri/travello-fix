import React from "react";
import Image from "next/image";

function Rating() {
  return (
    <div className="flex gap-1 align-center">
      {Array.from({ length: 5 }).map((_, index) => {
        return <Image key={index} src="/icons/yellow-star.svg" alt="Yellow Star Image" height="20" width="20" />;
      })}
    </div>
  );
}

export default Rating;
