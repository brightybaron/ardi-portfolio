import { useState } from "react";
import MenuList from "@components/MenuList";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="sm:hidden block fixed top-8 left-6 right-6 z-10 bg-white/60 backdrop-blur-md rounded-3xl p-2 border border-gray-200 text-xs">
      <div className="flex justify-between">
        <div className="w-8">
          <a href="/">
            <img
              src="/profile.png"
              className="rounded-full"
              alt="profile-image"
              width={32}
              height={32}
            />
          </a>
        </div>
        <button onClick={toggleMenu} id="toggle-button">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#282828"
            id="icon-svg"
            className={menuOpen ? "hidden" : ""}
          >
            <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"></path>
            <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"></path>
            <path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#282828"
            viewBox="0 0 16 16"
            id="x-icon"
            className={menuOpen ? "" : "hidden"}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
          </svg>
        </button>
      </div>
      <div className={menuOpen ? "p-2" : "hidden"} id="header-item">
        <MenuList />
      </div>
    </header>
  );
}
