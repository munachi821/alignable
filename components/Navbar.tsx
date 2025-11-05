import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo-long-color.png";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white fixed w-full flex px-15 py-4 items-center justify-between shadow-md shadow-[#ebe2e2] border-b-2 border-b-[#d9dadd]">
        <Link href="/">
          <Image src={logo} alt="logo" width={136} />
        </Link>

        <ul className="flex font-semibold gap-4 items-center">
          <li className="hover:bg-[#f9f0ff] p-2.5 rounded-[10px] hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
            Home
          </li>
          <div className="relative group">
            <li className="inline-flex items-center gap-1.5 group-hover:bg-[#f9f0ff] p-2.5 rounded-[10px] group-hover:text-[#391590] group-hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
              Features{" "}
              <ChevronDown
                size={13.5}
                strokeWidth={2}
                className="group-hover:rotate-180 transition-all duration-300"
              />
            </li>

            <ul className="bg-white border border-[#d9dadd] absolute p-3 text-nowrap rounded-xl flex-col gap-2 mt-2 hidden group-hover:flex">
              <li className="p-2 hover:bg-[#f9f0ff] rounded-xl hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
                Alignable platform
              </li>
              <li className="p-2 hover:bg-[#f9f0ff] rounded-xl hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
                Alignable 360
              </li>
            </ul>
          </div>
          <li className="hover:bg-[#f9f0ff] p-2.5 rounded-[10px] hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
            About Us
          </li>
          <li className="hover:bg-[#f9f0ff] p-2.5 rounded-[10px] hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
            Testimonials
          </li>
          <div className="relative group">
            <li className="inline-flex items-center gap-1.5 group-hover:bg-[#f9f0ff] p-2.5 rounded-[10px] group-hover:text-[#391590] group-hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
              Resources{" "}
              <ChevronDown
                size={13.5}
                strokeWidth={2}
                className="group-hover:rotate-180 transition-all duration-300"
              />
            </li>

            <ul className="bg-white border border-[#d9dadd] absolute p-3 text-nowrap rounded-xl flex-col gap-2 mt-2 hidden group-hover:flex">
              <li className="p-2 hover:bg-[#f9f0ff] rounded-xl hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
                Find Networking Events
              </li>
              <li className="p-2 hover:bg-[#f9f0ff] rounded-xl hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
                Alignable University
              </li>
              <li className="p-2 hover:bg-[#f9f0ff] rounded-xl hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
                Help Center
              </li>
              <li className="p-2 hover:bg-[#f9f0ff] rounded-xl hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
                Blog
              </li>
              <li className="p-2 hover:bg-[#f9f0ff] rounded-xl hover:text-[#391590] hover:text-shadow-xs transition-colors cursor-pointer duration-300 ease-in">
                Learning Center
              </li>
            </ul>
          </div>
        </ul>

        <div className="font-bold flex items-center gap-2">
          <a
            href="#"
            className="border rounded-full border-solid border-[#6c33d8] text-[#6c33d8] active:border-purple-600 px-4 py-1.5 bg-white hover:bg-[#eceff4] transition-colors duration-100 ease-in inline-flex items-center justify-center"
          >
            Log in
          </a>

          <a
            href="#"
            className="bg-[#6c33d8] border border-solid border-[#6c33d8] px-4 py-1.5 rounded-full text-white hover:bg-[#391590] transition-colors duration-100 ease-in inline-flex items-center justify-center"
          >
            Join Now
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
