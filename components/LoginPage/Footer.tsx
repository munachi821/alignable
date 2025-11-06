import FacebookSVG from "../SVG/FacebookSVG";
import LinkedinSVG from "../SVG/LinkedinSVG";
import Logo1SVG from "../SVG/Logo1SVG";
import Logo2SVG from "../SVG/Logo2SVG";
import TwitterSVG from "../SVG/TwitterSVG";

const Footer = () => {
  return (
    <footer className="bg-[#4a3770] pt-12">
      <div className="w-fit mx-auto flex items-start gap-10 pb-12">
        <div className="flex w-fit">
          <Logo1SVG />
          <Logo2SVG />
        </div>

        <div className="flex items-center gap-10">
          <ul className="font-semibold text-white space-y-1.5">
            <li>About</li>
            <li className="text-sm hover:underline cursor-pointer">
              Testimonial
            </li>
            <li className="text-sm hover:underline cursor-pointer">About Us</li>
            <li className="text-sm hover:underline cursor-pointer">Press</li>
            <li className="text-sm hover:underline cursor-pointer">Careers</li>
            <li className="text-sm hover:underline cursor-pointer">Blog</li>
          </ul>

          <ul className="font-semibold text-white space-y-1.5">
            <li>Support</li>
            <li className="text-sm hover:underline cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-sm hover:underline cursor-pointer">
              Terms of Privacy
            </li>
            <li className="text-sm hover:underline cursor-pointer">
              Code of Conduct
            </li>
            <li className="text-sm hover:underline cursor-pointer">
              Visitor Cookie Policy
            </li>
            <li className="text-sm hover:underline cursor-pointer">
              Help Center
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <FacebookSVG />
          <TwitterSVG />
          <LinkedinSVG />
        </div>
      </div>
      <div className="bg-[#352b3c] text-[#727476] text-sm font-semibold px-30 py-5">
        <p>2024 Alignable, Inc. All rights reserved. </p>
      </div>
    </footer>
  );
};
export default Footer;
