import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import menuItem from "../util/util";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

  return (
    <nav className={`fixed w-full flex justify-between py-3 bg-gray-100 transition-all duration-300 px-39 ${scrolled ? "shadow-md z-999" : ""}`}>
      <img src={logo} alt="logo" className="w-11 h-12" />

      <ul className="flex items-center gap-9">
        {menuItem.map((item: any) => {
            return (
                <li key={item.id} className={`flex cursor-pointer ${item.id === 7 ? "flex items-center bg-amber-500 px-4 h-10 rounded-md text-white" : "flex items-center hover:text-amber-500"}`}>{item.label}</li>
            )
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
