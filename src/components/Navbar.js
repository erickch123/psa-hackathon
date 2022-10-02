import React from "react";

export default function Navbar() {
    return (
      <header>
        <div>
          <nav class="topnav">
            <a class="navibar" href="/Home">
              Home
            </a>
            <a class="navibar" href="/Prereq">
              PreReq
            </a>
            <a class="navibar" href="/atWorkplace">
              At Workplace
            </a>
            <a class="navibar" href="/Completion">
              Completion
            </a>
          </nav>
        </div>
      </header>
    );
  }

  /**
   * <header className="bg-sky-900 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a class="navbar" href="/Home" className="mr-5 hover:text-black">
            Home
          </a>
          <a class="navbar" href="/Prereq" className="mr-5 hover:text-black">
            PreReq
          </a>
          <a class="navbar" href="/atWorkplace" className="mr-5 hover:text-black">
            @Workplace
          </a>
          <a class="navbar" href="/Completion" className="mr-5 hover:text-black">
            Completion
          </a>
          </nav>
        </div>
      </header>
   */