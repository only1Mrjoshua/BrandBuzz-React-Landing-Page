import React from "react";

export default function ServiceCard({ title, text, icon: Icon, color }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white ${color}`}>
        <Icon size={22} />
      </div>

      <h3 className="mb-2 font-bold text-[#111827]">{title}</h3>

      <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">{text}</p>

      <a href="#contact" className="text-xs font-bold text-[#f05a1a]">
        Read more
      </a>
    </article>
  );
}