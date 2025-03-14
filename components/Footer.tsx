"use client";

import Link from "next/link";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 py-8 text-muted-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 text-center sm:flex-row">
        {/* Left Section - Branding */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-lg font-bold text-primary">Love'sKollection</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center Section - Navigation */}
        <nav className="flex gap-6">
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="/privacy-policy" className="transition-colors hover:text-primary">
            Privacy
          </Link>
        </nav>

        {/* Right Section - Social Media */}
        <div className="flex gap-4">
          <Link href="#" className="transition-colors hover:text-primary">
            <LuFacebook  size={20} />
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            <FaInstagram  size={20} />
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
          <FaXTwitter size={20} />
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
          <FaWhatsapp  size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
