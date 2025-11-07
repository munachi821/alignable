import { ChevronDown } from "lucide-react";
import AllignableSVG from "../SVG/AllignableSVG";
import EventsSVG from "../SVG/EventsSVG";
import GroupSVG from "../SVG/GroupSVG";
import HomeSVG from "../SVG/HomeSVG";
import MessagesSVG from "../SVG/MessagesSVG";
import NetworkSVG from "../SVG/NetworkSVG";
import NotificationSVG from "../SVG/NotificationSVG";
import SearchSVG from "../SVG/SearchSVG";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full bg-[#391590] ">
        <div className="flex text-white py-0.5 items-center justify-between max-w-[1140px] mx-auto">
          <div className="flex h-fit gap-2 relative">
            <AllignableSVG />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Alignable"
              className="w-56 bg-white text-black outline-0 rounded-md pl-8 placeholder:font-semibold placeholder:text-[#a9afb6]"
            />
            <SearchSVG />
          </div>

          <ul className="flex">
            <div className="flex items-center justify-center flex-col px-5 h-16 dashboard-active gap-1 cursor-pointer">
              <HomeSVG />
              <li className="text-xs font-semibold">Home</li>
            </div>
            <div className="flex items-center justify-center flex-col px-5 h-16 gap-1 cursor-pointer">
              <NetworkSVG />
              <li className="text-xs font-semibold">My Network</li>
            </div>
            <div className="flex items-center justify-center flex-col px-5 h-16 gap-1 cursor-pointer">
              <EventsSVG />
              <li className="text-xs font-semibold">Events</li>
            </div>
            <div className="flex items-center justify-center flex-col px-5 h-16 gap-1 cursor-pointer">
              <GroupSVG />
              <li className="text-xs font-semibold">Groups</li>
            </div>
            <div className="flex items-center justify-center flex-col px-5 h-16 gap-1 cursor-pointer">
              <MessagesSVG />
              <li className="text-xs font-semibold">Messages</li>
            </div>
            <div className="flex items-center justify-center flex-col px-5 h-16 gap-1 cursor-pointer">
              <NotificationSVG />
              <li className="text-xs font-semibold">Notifications</li>
            </div>

            <div className="flex items-center justify-center flex-col px-1 h-16 gap-1">
              <span className="size-6 rounded-full flex items-center justify-center bg-[#fff2db] text-[#f3b72d] text-xs font-semibold">
                CM
              </span>
              <li className="inline-flex items-center text-xs font-semibold gap-1.5">
                My Business{" "}
                <ChevronDown fill="#fff" size={13.5} strokeWidth={2} />
              </li>
            </div>

            <div className="flex items-center justify-center flex-col mx-1 h-16 px-2">
              <a
                href="#"
                className="w-full rounded-full border border-[#ddbf91] px-3 py-2 text-[#ddbf91] hover:bg-[#ecd6b4] hover:text-[#7f5026] font-semibold transition-colors text-base"
              >
                Go Premium
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
