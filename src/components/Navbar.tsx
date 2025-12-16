import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { menuListData } from "../util/util";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile/tablet menu
  };

  return (
    <nav
      className={`fixed w-full flex justify-between items-center py-3 px-48 bg-gray-200 transition-all duration-300 
      ${scrolled ? "shadow-md z-50" : ""}`}
    >
      {/* Logo */}
      <img src={logo} alt="logo" className="w-11 h-12" />

      {/* Desktop Menu (only on large screens) */}
      <ul className="hidden lg:flex items-center gap-9">
        {menuListData.map((item: any) => (
          <li
            key={item.id}
            onClick={() => handleScroll(item.targetId)}
            className={`cursor-pointer ${
              item.id === 7
                ? "bg-amber-500 px-4 h-10 flex items-center rounded-md text-white"
                : "hover:text-amber-500"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Mobile & Tablet Menu Button (< lg) */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile & Tablet Menu Panel */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-200 shadow-md lg:hidden py-4 px-6 animate-slideDown">
          <ul className="flex flex-col gap-5">
            {menuListData.map((item: any) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.targetId)}
                className={`cursor-pointer py-2 ${
                  item.id === 7
                    ? "bg-amber-500 px-4 py-2 rounded-md text-white text-center"
                    : "hover:text-amber-500"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
