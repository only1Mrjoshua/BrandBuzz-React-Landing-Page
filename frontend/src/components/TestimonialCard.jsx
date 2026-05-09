import React from "react";

export default function TestimonialCard({
  avatar,
  name,
  role,
  quote,
  rating,
}) {
  return (
    <article className="h-full rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1e8] text-xl">
          {avatar}
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#111827]">{name}</h4>
          <p className="text-xs text-[#6b7280]">{role}</p>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">
        {quote}
      </p>

      <div className="text-sm text-[#f05a1a]">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
    </article>
  );
}