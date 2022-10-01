import React from "react";
export default function Navbar() {
    return (
      <header className="bg-sky-900 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="/Home" className="mr-5 hover:text-black">
              Home
            </a>
            <a href="/Prereq" className="mr-5 hover:text-black">
                PreReq
           </a>
            <a href="/atWorkplace" className="mr-5 hover:text-black">
                @Workplace
           </a>
          </nav>
        </div>
      </header>
    );
  }