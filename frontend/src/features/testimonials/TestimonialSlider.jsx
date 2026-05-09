import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../utils/data";

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const maxSlide = testimonials.length - 1;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 33}%)`,
          }}
        >
          {testimonials.map(item => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#f05a1a] shadow"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full bg-white text-[#f05a1a] shadow"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}