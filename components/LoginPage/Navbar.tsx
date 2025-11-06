import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-long-color.png";

const Navbar = () => {
  return (
    <header>
      <nav className="flex w-full bg-white items-center justify-between px-33 py-3 border-3 border-[#e2e8f0] ">
        <Link href="/">
          <Image src={logo} alt="logo" width={110} />
          <span className="text-xs font-semibold leading-relaxed block -mt-1 text-[#686868]">
            The Small Business Refferal Network
          </span>
        </Link>

        <ul className="inline-flex gap-9 text-lg font-semibold text-[#3c3f43] items-center">
          <li className="hover:text-black transition-colors cursor-pointer">
            Learn
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Blog
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Careers
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            Testimonials
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">
            About
          </li>
          <a
            href="#"
            className="text-[#6c33d8] hover:text-[#391590] transition-colors"
          >
            Sign In
          </a>
          <a
            href="#"
            className="border border-[#6c33d8] text-[#6c33d8] hover:bg-[#eceff4] transition-colors px-6 py-2.5 rounded-md"
          >
            Sign Up
          </a>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
