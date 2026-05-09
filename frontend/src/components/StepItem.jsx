import React from "react";

export default function StepItem({ number, title, text }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f05a1a] font-bold text-white">
        {number}
      </span>

      <div>
        <h4 className="font-bold text-[#111827]">{title}</h4>
        <p className="text-sm text-[#6b7280]">{text}</p>
      </div>
    </div>
  );
}