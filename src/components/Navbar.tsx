import type Nav from "../Typescript/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const navlinks: Nav[] = [
  { name: "Home", path: "/" },
  { name: "about", path: "/about-us" },
  { name: "contact", path: "/contact" },
];
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 inset-x-0 border-gray-800 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* desktop */}
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="./favicon.svg" alt="logo" />
            <span className="text-lg font-semibold hidden sm:block">Logo</span>
          </Link>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navlinks.map((navlink) => (
              <NavLink
                key={navlink.path}
                to={navlink.path}
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              >
                {navlink.name}
              </NavLink>
            ))}
          </div>

          {/* mobile button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navlinks.map((navlink) => (
                <NavLink
                  key={navlink.path}
                  to={navlink.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                >
                  {navlink.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
