import photo2 from "../assets/Menu.png";
import photo1 from "../assets/Antarikshyawebsitelogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="flex bg-[#023038] w-full h-16 text-bold text-white font-'century gothic' items-center space-x-5 justify-between px-8">
        <div className="flex space-x-5">
          <Link to="/" className="text-2xl text-white font-sans font-bold " onClick={closeMenu}>
            HOME
          </Link>
          <Link to="/" className="text-2xl text-white font-sans font-bold" onClick={closeMenu}>
            EXPLORE
          </Link>
          <Link to="/" className="text-2xl text-white font-sans font-bold" onClick={closeMenu}>
            PROJECTS
          </Link>
          <Link to="/" className="text-2xl text-white font-sans font-bold" onClick={closeMenu}>
            ABOUT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <img className="h-[200px] w-[200px]" src={photo1} alt="logo" />
          <div className="text-3xl font-sans text-white">
            ANTARIKSHYA
          </div>
        </div>
        <button className="flex justify-center items-center rounded-lg border-4 bg-[#023038] h-[45px] w-[150px] border-black text-white text-xl hover:bg-[#046F79]">
          Build with us
        </button>

        {/* for mobile view */}
        <img className="flex justify-center md:hidden" onClick={toggleMenu} src={photo2} alt="menu" />

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-2 rounded-md w-full bg-red-400 pl-10 py-5 shadow-lg z-50">
            <Link
              to="/"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              HOME
            </Link>

            <Link
              to="/"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              EXPLORE
            </Link>
            <Link
              to="/"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              PROJECT
            </Link>
            <Link
              to="/"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              ABOUT US
            </Link>
            <Link
              to="/"
              className="block text-white mb-2 hover:bg-red-200 rounded-md"
              onClick={closeMenu}
            >
              CONTACT US
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
