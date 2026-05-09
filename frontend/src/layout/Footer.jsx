import React from "react";
import { Megaphone } from "lucide-react";
import { footerLinks, socialIcons } from "../utils/data";

export default function Footer() {
  return (
    <footer className="bg-[#fff1e8] pt-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-2 font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f05a1a] text-white">
              <Megaphone size={16} />
            </span>
            BrandBuzz
          </div>

          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, className }, index) => (
              <a
                key={index}
                href="#"
                className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${className}`}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map(column => (
          <div key={column.title}>
            <h4 className="mb-4 font-bold">{column.title}</h4>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              {column.links.map(link => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-wave flex items-end justify-center pb-3 text-xs text-white">
        All rights reserved 2025
      </div>
    </footer>
  );
}