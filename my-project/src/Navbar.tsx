"use client";

import React, { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="bg-[#101013] py-1.5 px-5 rounded-lg border-solid border-[1px] border-[#00fe9c] shadow-lg hover:shadow-[#1c4f4a] duration-500 text-white"
    >
      {children}
    </a>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const ShoppingBagIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const UserCircleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <nav className="bg-[#101013] text-white p-4 shadow-md text-sm rounded-lg">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <img
            src="/public/logo_ym.png"
            alt="Logo"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-180"
          />
          <span className="font-bold text-xl transition-colors duration-300 group-hover:text-[#1c4f4a]">
            YM SCRIPTS
          </span>
        </a>

        <div className="hidden lg:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/list">Products</NavLink>
          <NavLink href="#">Documentation</NavLink>
          <NavLink href="#">Support</NavLink>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <NavLink href="#">
            <ShoppingBagIcon />
          </NavLink>
          <NavLink href="#">
            <UserCircleIcon />
          </NavLink>
        </div>

        <div className="flex items-center lg:hidden space-x-2">
          <NavLink href="#">
            <ShoppingBagIcon />
          </NavLink>
          <NavLink href="#">
            <UserCircleIcon />
          </NavLink>
          <button
            className="ml-4 text-white transition-transform duration-300 hover:rotate-180"
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
      </div>

      {isOpen && (
        <div className="xl:hidden my-5 flex flex-col space-y-6 text-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/list">Products</NavLink>
          <NavLink href="#">Documentation</NavLink>
          <NavLink href="#">Support</NavLink>
        </div>
      )}
    </nav>
  );
}
