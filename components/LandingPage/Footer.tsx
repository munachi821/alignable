import { Facebook, Twitter } from "lucide-react";
import Logo1SVG from "../SVG/Logo1SVG";
import Logo2SVG from "../SVG/Logo2SVG";

const Footer = () => {
  return (
    <footer className="bg-[#374151] pt-8 flex flex-col">
      <div className="grid grid-cols-[220px_1fr_1fr] items-start px-20 pb-5.5 gap-4">
        <div className="flex w-fit">
          <Logo1SVG />
          <Logo2SVG />
        </div>

        <div className="font-bold text-white grid grid-cols-2 max-w-[550px] gap-3">
          <ul className="space-y-1.5 max-w-[250px]">
            <li>Sign Up</li>
            <li>About Us</li>
            <li>Carrers</li>
            <li>Our Communities</li>
          </ul>

          <ul className="space-y-1.5 max-w-[250px]">
            <li>Help Center</li>
            <li>Learn</li>
            <li>Business Tools</li>
            <li>How to Build a Powerful Business Network</li>
            <li>Advertise</li>
          </ul>

          <ul className="space-y-1.5 max-w-[250px]">
            <li>Why Business Networking is Essential</li>
            <li>Business Networking News</li>
            <li>What is Alignable</li>
          </ul>

          <div className="self-end">
            <p>Find Networking Events</p>
            <div className="flex gap-2">
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>

        <form className="flex flex-col max-w-full  gap-y-2">
          <label
            htmlFor="join"
            className="text-xl font-bold text-white text-left"
          >
            Join 9+ Million Members
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="join"
              className="bg-white h-12 rounded-2xl w-full text-xs px-2 outline-0"
              placeholder="Enter your email"
            />
            <button className="px-4 py-3 block mx-auto w-fit bg-[#6c33d8] text-white font-bold rounded-md hover:bg-[#391590] transition-colors duration-200 ease-in border hover:border-[#6c33d8]">
              Join
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center w-full justify-between text-white font-bold bg-[#616b79] px-20 py-5">
        <p>© Copyright {new Date().getFullYear()}</p>

        <ul className="inline-flex gap-4">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Code of Conduct</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
