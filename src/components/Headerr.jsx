import Logo from "../assets/img/Logo.png";
import Sun from "../assets/img/sun.jpg";
import Moon from "../assets/img/mon.png";
import login from "../assets/img/login.png";
import icon from "../assets/img/icon.png";
import { useState } from "react";

const Headerr = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen); 

  return (
    <div
      className={`flex items-center justify-center transition-colors duration-300 pt-10 pb-12 ${
        darkMode
          ? "border-[#333] bg-[#1c1c1c] text-white"
          : "border-gray-200 bg-white text-gray-800"
      }`}
    >
      <div className="w-full flex items-center border-b-1 justify-center bg-[#1c1c1c] fixed z-[99998]">
        <div className="w-[1300px] m-auto pt-6 pb-4 px-3 z-[99999] flex items-center justify-between bg-[#1c1c1c]">
          <div className="flex gap-11 items-center">
            <a href="/">
              <img src={Logo} alt="logo" className="w-[120px]" />
            </a>

            <ul className="flex items-center gap-7 text-[17px] max-[942px]:hidden relative">
              <li>
                <a
                  href="/"
                  className={`flex items-center gap-3 hover:opacity-70 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Categories
                </a>
              </li>

              <li
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`flex items-center gap-2 hover:opacity-70 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  About Us <img src={icon} alt="icon" />
                </button>

                {aboutOpen && (
                  <ul
                    className={`absolute top-full left-0 mt-2 rounded-lg shadow-lg w-40 ${
                      darkMode
                        ? "bg-[#2a2a2a] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <li className="px-4 py-2 hover:bg-gray-700/30 cursor-pointer">
                      Our Team
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700/30 cursor-pointer">
                      Our Mission
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700/30 cursor-pointer">
                      Careers
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="relative"
                onMouseEnter={() => setHelpOpen(true)}
                onMouseLeave={() => setHelpOpen(false)}
              >
                <button
                  className={`flex items-center gap-2 hover:opacity-70 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Help Center <img src={icon} alt="icon" />
                </button>

                {helpOpen && (
                  <ul
                    className={`absolute top-full left-0 mt-2 rounded-lg shadow-lg w-40 ${
                      darkMode
                        ? "bg-[#2a2a2a] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <li className="px-4 py-2 hover:bg-gray-700/30 cursor-pointer">
                      FAQ
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700/30 cursor-pointer">
                      Contact Us
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700/30 cursor-pointer">
                      Support
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className="flex gap-5 items-center max-[480px]:gap-3">
            <h3
              className={`text-[18px] font-[600] max-[942px]:hidden ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              +1 855 420 0000
            </h3>

            <div
              onClick={toggleTheme}
              className={`p-3 cursor-pointer rounded-full transition-colors duration-300 ${
                darkMode
                  ? "bg-[#262626] hover:bg-[#333]"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <img
                className="rounded-full w-[2vw] min-w-[24px]"
                src={darkMode ? Sun : Moon}
                alt="theme-toggle"
              />
            </div>

            <div
              className={`pt-3 pb-3 pl-5 pr-5 rounded-full flex gap-2.5 cursor-pointer transition-all duration-300 max-[480px]:hidden ${
                darkMode
                  ? "bg-[#299663] hover:bg-[#0a7845] text-white"
                  : "bg-[#4ade80] hover:bg-[#22c55e] text-black"
              }`}
            >
              Login <img src={login} alt="login" />
            </div>

            <button
              onClick={toggleMenu}
              className={`text-2xl min-[480px]:hidden ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`z-99598949 h-full fixed top-[80px] left-0 w-full p-6 transition-all duration-500 ease-linear ${
            darkMode ? "bg-[#1c1c1c] text-white" : "bg-white text-gray-800"
          }`}
        >
          <ul className="flex flex-col gap-5 text-lg font-medium">
            <li>
              <a href="/" className="hover:opacity-70">
                Categories
              </a>
            </li>
            <li>
              <a href="/" className="hover:opacity-70">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:opacity-70">
                Help Center
              </a>
            </li>
            <li>
              <button
                className={`mt-3 w-full py-3 rounded-full ${
                  darkMode
                    ? "bg-[#299663] hover:bg-[#0a7845]"
                    : "bg-[#4ade80] hover:bg-[#22c55e]"
                }`}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Headerr;
