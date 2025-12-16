import logo from "../assets/logo.png";
import pearson from "../assets/pearson.png"

const Footer = () => {
  return (
    <footer className="bg-[#0A1B3A] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
       
        <div>
          <div className="bg-white w-20 h-20 flex justify-center items-center rounded-md">
            <img src={logo} alt="PTE Excellence Logo" className="w-15 h-15" />
          </div>
          <p className="mt-4 opacity-80">
            Your trusted partner for <br></br> PTE exam preparation.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-[#F4B544] cursor-pointer">About</li>
            <li className="hover:text-[#F4B544] cursor-pointer">
              Why Choose Us
            </li>
            <li className="hover:text-[#F4B544] cursor-pointer">
              Upcoming Classes
            </li>
            <li className="hover:text-[#F4B544] cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact</h4>
          <p className="opacity-80">Email: contact@pteexcellence.com</p>
          <p className="opacity-80 mt-1">Phone: +1 (555) 123-4567</p>
          <p className="opacity-80 mt-1">Online – Via Zoom</p>
        </div>
      </div>

      <div className="w-full h-px bg-white/10 my-10"></div>

      {/* Certification Badge Section */}
      <div className="text-center pb-6">
        <img
          src={pearson}
          alt="Pearson PTE Trainer Certification"
          className="w-30 mx-auto mb-3"
        />
        <p className="opacity-80">
          Pearson Certified PTE Trainer – Level 2 (Professional)
        </p>
      </div>

      <div className="text-center pt-4 opacity-70 text-sm">
        © 2025 PTE Excellence. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
