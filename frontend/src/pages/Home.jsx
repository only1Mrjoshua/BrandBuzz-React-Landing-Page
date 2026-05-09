import React from "react";
import { ArrowDown, BarChart3, Eye, Laptop, MessageCircle } from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import StepItem from "../components/StepItem";
import TestimonialSlider from "../features/testimonials/TestimonialSlider";
import useScrollReveal from "../hooks/useScrollReveal";
import { services, steps } from "../utils/data";
import firstIllustration from "../assets/1st.png";
import secondIllustration from "../assets/2nd.png";
import thirdIllustration from "../assets/3rd.png";

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="fade-up relative mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2"
      >
        <span className="dot left-5 top-20" />
        <span className="dot left-14 top-32" />
        <span className="dot right-20 bottom-12" />

        <div>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
            We create <br />
            <span className="text-[#f05a1a]">solutions</span> for <br />
            your business
          </h1>

          <p className="mb-7 max-w-md text-[#6b7280]">
            Our team keeps a keen eye on emerging trends and technologies to
            ensure your marketing campaigns remain cutting-edge.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button>Get Started</Button>

            <a href="#services" className="flex items-center gap-3 text-sm font-semibold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-[#f05a1a] shadow">
                <ArrowDown size={17} />
              </span>
              Explore more
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={firstIllustration}
            alt="Business Illustration"
            className="w-full max-w-[520px] object-contain float"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="fade-up mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold">
            We Provide The Best <span className="text-[#f05a1a]">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#6b7280]">
            Let us unleash the full potential of your business with our
            data-driven strategies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* SIMPLE SOLUTIONS */}
      <section className="fade-up bg-[#fff1e8] py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <img
              src={secondIllustration}
              alt="Simple Solutions Illustration"
              className="w-full max-w-[450px] object-contain float"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-extrabold">
              Simple <span className="text-[#f05a1a]">Solutions!</span>
            </h2>

            <p className="mb-8 max-w-md text-[#6b7280]">
              We understand that no two businesses are alike. That’s why we take
              time to understand.
            </p>

            <div className="mb-8 space-y-5">
              {steps.map((step, index) => (
                <StepItem key={step.title} number={index + 1} {...step} />
              ))}
            </div>

            <div className="flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Read more</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY */}
      <section
        id="about"
        className="fade-up mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-2"
      >
        <div>
          <h2 className="mb-5 text-3xl font-extrabold">
            Our <span className="text-[#f05a1a]">Agency</span>
          </h2>

          <p className="mb-7 max-w-md leading-relaxed text-[#6b7280]">
            We believe in the power of data. Our analytics-driven approach
            allows us to make informed decisions and optimize your marketing
            efforts for maximum ROI. Let’s turn your data into actionable
            insights.
          </p>

          <Button>Read more</Button>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={thirdIllustration}
            alt="Agency Analytics Illustration"
            className="w-full max-w-[450px] object-contain float"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="blog" className="fade-up mx-auto max-w-5xl overflow-hidden px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold">What Clients Say!</h2>
          <p className="mt-3 text-sm text-[#6b7280]">
            See how our digital marketing agency helped clients achieve their goals.
          </p>
        </div>

        <TestimonialSlider />
      </section>

      {/* CTA */}
      <section id="contact" className="fade-up mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-5 rounded-xl bg-[#f05a1a] px-8 py-6 text-white shadow-xl sm:flex-row">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <button className="rounded-lg border border-white px-6 py-2 transition hover:bg-white hover:text-[#f05a1a]">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}