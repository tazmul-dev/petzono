"use client";


import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
   return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">PawNest</h2>
            <p className="mt-4 text-gray-400">
              A platform where loving pets find forever homes. Adopt, care, and
              share happiness.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>

            <div className="mt-5 space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>Bera, Rajshahi, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+880 1XXXXXXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>support@pawnest.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>

            <div className="mt-5 flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
              >
                <BsInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
              >
                <BsTwitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PawNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;