import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className="min-h-screen bg-[#d7f1f1] px-3 py-8 text-[#111827]">
      <div className="mx-auto max-w-6xl overflow-hidden bg-white shadow-2xl">
        <Header />
        <Home />
        <Footer />
      </div>
    </main>
  );
}