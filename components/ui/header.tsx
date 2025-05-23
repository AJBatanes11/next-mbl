"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import Container from "../reusable/snippets/container";
import CustomButton from "../reusable/snippets/custom-button";

export default function Header() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  console.log("Rendering Header, menuOpen:", menuOpen);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-auto items-center">
            <Logo />
            <Link
              href="/"
              className="ml-3 text-sm font-medium text-gray-900">
                Manila Bankers Life
            </Link>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex-auto items-center justify-end gap-3 hidden md:flex">
            <li>
              <Link
                href="/"
                className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
              >
                Contact Us
              </Link>
              <Link
                href="/development"
                className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
              >
                Development
              </Link>
            </li>
            <li>
              <Link
                href="https://manilabankerslife.net"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                My MB Life
              </Link>
            </li>
          </ul>


          <Link
            href="https://manilabankerslife.net"
            className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900 flex md:hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            My MB Life
          </Link>
          
          {/* Mobile hamburger menu */}
          <button className="flex md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
          { menuOpen && (
            <div data-aos="fade-down" className="relative flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="flex flex-col items-center justify-center gap-3 mx-auto p-2">
                  <Link
                    href="/"
                    className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)} 
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    href="/about"
                    className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)} 
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)} 
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/development"
                    className="btn-sm shadow-none text-gray-800 hover:bg-gray-200"
                  >
                    Development
                  </Link>

                  <div className="flex flex-row items-center justify-center gap-3">
                  <CustomButton label="Contact Us" variant="secondary" />
                  <CustomButton label="My MB Life" />
                  </div>
                </div>
            </div>
          )}
      </div>
    </header>
  );
}
