import { MapPin, Phone, Mail } from "lucide-react";

import { whatsapp,instagram,facebook, logo2 } from "../assets/assets";
export default function Footer() {
  return (
    <footer className="bg-[#352616] text-gray-300">
      {/* Main Footer */}
      <div className="px-20 py-14 grid grid-cols-1 md:grid-cols-4 gap-1">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img src={logo2} alt="Sahityagram Prakashan" className="w-20 object-scale-down" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
            India's leading book publisher committed to quality, creativity, and authors' success.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <img src={facebook} alt="" className="w-6"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <img src={instagram} alt="" className="w-6"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <img src={whatsapp} alt="" className="w-6"/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {["Home", "About Us", "Services", "Languages", "Portfolio", "Contact Us"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {[
              "Book Publishing",
              "Cover Designers",
              "Editorial Services",
              "Distribution Services",
              "Marketing Strategy",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-white transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#C8871A] shrink-0 mt-0.5" />
              <span>
                Mangala Rd, near S.B.T. College, Kududand, Vikas Nagar, Mangla,
                Bilaspur, Chhattisgarh 495001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#C8871A] shrink-0" />
              <a href="tel:07587680392" className="hover:text-white transition-colors">
                075878 80392
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#C8871A] shrink-0" />
              <a href="mailto:info@sahityagramprakashan.com" className="hover:text-white transition-colors">
                info@sahityagramprakashan.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3a2a1a] px-20 py-4">
        <p className="text-gray-500 text-sm text-center">
          © 2024 Sahityagram Prakashan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}