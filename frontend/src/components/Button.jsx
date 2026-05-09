import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles =
    variant === "outline"
      ? "border border-[#f05a1a] text-[#f05a1a] hover:bg-white"
      : "bg-[#f05a1a] text-white shadow-lg hover:scale-105";

  return (
    <button
      className={`rounded-lg px-6 py-3 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}