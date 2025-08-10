"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Welcome to Work Manager
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-blue-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ab!
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-3">Important Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="#!"
                className="hover:text-blue-200 transition duration-200"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="#!"
                className="hover:text-blue-200 transition duration-200"
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                href="#!"
                className="hover:text-blue-200 transition duration-200"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 py-3 text-center text-sm text-blue-200 border-t border-blue-500">
        © {new Date().getFullYear()} Work Manager. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
