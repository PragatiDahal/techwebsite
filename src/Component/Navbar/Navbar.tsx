import photo2 from "../../assets/Menu.png";
import photo1 from "../../assets/Antarikshyawebsitelogo.png";
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
      <nav className="flex bg-[#023038] w-full h-16 text-bold text-white font-'century gothic' items-center justify-between px-8">
        <div className="flex space-x-5 items-center">
          <Link to="/" className="text-2xl text-white font-sans  hidden md:block" onClick={closeMenu}>
            HOME
          </Link>
          <Link to="/Explore" className="text-2xl text-white font-sans  hidden md:block" onClick={closeMenu}>
            EXPLORE
          </Link>
          <Link to="/Project" className="text-2xl text-white font-sans  hidden md:block" onClick={closeMenu}>
            PROJECTS
          </Link>
          <Link to="/About" className="text-2xl text-white font-sans  hidden md:block" onClick={closeMenu}>
            ABOUT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <img className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]" src={photo1} alt="logo" />
          <div className="text-xl md:text-3xl font-sans text-white">
            ANTARIKSHYA
          </div>
        </div>
        <Link to="/Contact">
        <button className="hidden md:flex justify-center items-center rounded-lg border-4 bg-[#023038] h-[45px] w-[150px] border-black text-white text-xl hover:bg-[#046F79]">
        Build with us
        </button>
        </Link>

        {/* for mobile view */}
        <img className="flex md:hidden cursor-pointer" onClick={toggleMenu} src={photo2} alt="menu" />

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#023038] rounded-md shadow-lg z-50 p-4">
            <Link to="/" className="block text-white mb-2 hover:bg-[#046F79] rounded-md p-2" onClick={closeMenu}>
              HOME
            </Link>
            <Link to="/Explore" className="block text-white mb-2 hover:bg-[#046F79] rounded-md p-2" onClick={closeMenu}>
              EXPLORE
            </Link>
            <Link to="/Project" className="block text-white mb-2 hover:bg-[#046F79] rounded-md p-2" onClick={closeMenu}>
              PROJECTS
            </Link>
            <Link to="/About" className="block text-white mb-2 hover:bg-[#046F79] rounded-md p-2" onClick={closeMenu}>
              ABOUT
            </Link>
            <Link to="/Contact" className="block text-white mb-2 hover:bg-[#046F79] rounded-md p-2" onClick={closeMenu}>
              CONTACT US
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
