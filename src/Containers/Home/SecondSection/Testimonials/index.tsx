import React from "react";
import TestimonialsCard from "./TestimonialsCard";

function Testimonials() {
  return (
    <>
      <h3 className="text-heading-3 font-label font-bold pt-14 mb-1">Testimonial Pelanggan</h3>

      <p className="text-heading-4 mb-4">Pendapat Pelanggan Tentang Kami</p>

      <div className="flex justify-between">
        {Array.from({ length: 4 }).map((_, index) => {
          return <TestimonialsCard key={index} />;
        })}
      </div>
    </>
  );
}

export default Testimonials;
