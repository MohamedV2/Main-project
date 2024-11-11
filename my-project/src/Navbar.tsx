import React, { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="bg-[#101013] py-[7px] px-5 rounded-xl border-solid border-2 border-[#123330] shadow-lg hover:shadow-[#1c4f4a] duration-500 text-white"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#101013] text-white text-sm p-4 shadow-md rounded-xl ">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <img
            src="/vite.svg"
            alt="Logo"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-180"
          />
          <span className="font-bold text-xl transition-colors duration-300 group-hover:text-[#0d9488]">
            MohamedV3
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About Me</NavLink>
          <NavLink href="#">Projects</NavLink>
        </div>

        <div className="hidden md:block">
          <NavLink href="#">Contact Me</NavLink>
        </div>

        <button
          className="md:hidden text-white transition-transform duration-300 hover:rotate-180"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-5 mb-2 text-center flex flex-col space-y-5">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About Me</NavLink>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Contact Me</NavLink>
        </div>
      )}
    </nav>
  );
}
