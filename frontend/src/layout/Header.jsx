import React, { useState } from "react";
import { Menu, X, Megaphone } from "lucide-react";
import Button from "../components/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-2 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f05a1a] text-white">
            <Megaphone size={16} />
          </span>
          BrandBuzz
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={index === 0 ? "text-[#f05a1a]" : "transition hover:text-[#f05a1a]"}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button className="hidden px-5 py-2 md:block">Sign Up</Button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <div
        className={`overflow-hidden px-6 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 text-sm font-medium">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block ${index === 0 ? "text-[#f05a1a]" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <Button className="px-5 py-2">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}