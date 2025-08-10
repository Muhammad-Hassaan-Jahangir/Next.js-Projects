"use client";
import React from "react";
import imageBanner from "../../assets/singup.svg";
import Image from "next/image";

const ActionSection = () => {
  return (
    <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageBanner}
          alt="Action Background"
          className="object-cover w-full h-full"
          fill
          priority
        />
        <div className="absolute inset-0 bg-blue-700 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Take Control of Your Tasks
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Start managing your tasks efficiently with our task manager app.
        </p>
        <button
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          onClick={() => {
            console.log("Get Started button clicked!");
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ActionSection;
