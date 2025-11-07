"use client";
import { ChevronDown } from "lucide-react";
import AllignableSVG from "../SVG/AllignableSVG";
import EventsSVG from "../SVG/EventsSVG";
import GroupSVG from "../SVG/GroupSVG";
import HomeSVG from "../SVG/HomeSVG";
import MessagesSVG from "../SVG/MessagesSVG";
import NetworkSVG from "../SVG/NetworkSVG";
import NotificationSVG from "../SVG/NotificationSVG";
import SearchSVG from "../SVG/SearchSVG";
import ProfileSVG from "../SVG/ProfileSVG";
import VerifiedSVG from "../SVG/VerifiedSVG";
import AdvertiseSVG from "../SVG/AdvertiseSVG";
import SupportSVG from "../SVG/SupportSVG";
import InsightsSVG from "../SVG/InsightsSVG";
import AccountSVG from "../SVG/AccountSVG";
import { useState } from "react";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
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

            <div className="relative">
              <div
                className="flex items-center justify-center flex-col px-1 h-16 gap-1 cursor-pointer"
                onClick={() => setOpenProfile(!openProfile)}
              >
                <span className="size-6 rounded-full flex items-center justify-center bg-[#fff2db] text-[#f3b72d] text-xs font-semibold">
                  CM
                </span>
                <li className="inline-flex items-center text-xs font-semibold gap-1.5">
                  My Business{" "}
                  <ChevronDown fill="#fff" size={13.5} strokeWidth={2} />
                </li>
              </div>

              <div
                className="fixed min-w-screen min-h-screen top-12 left-0"
                onClick={() => setOpenProfile(!openProfile)}
              >
                <div
                  className={`absolute min-w-[318px] bg-white text-black p-3 rounded-xl shadow-md right-50 top-7 ${
                    openProfile ? "block" : "hidden"
                  }`}
                >
                  <div className="border-b border-[#f3f5f8]">
                    <div className="flex p-3 items-center gap-3 hover:bg-[#f3f5f8] transition-colors rounded-lg mb-1">
                      <span className="size-11 rounded-full flex items-center justify-center bg-[#fff2db] text-[#f3b72d] text-2xl font-medium">
                        CM
                      </span>
                      <ul className="leading-5">
                        <li className="font-bold text-[#1f2937]">
                          Munachi Onyebuchi
                        </li>
                        <li className="font-semibold text-[#8b95a3]">Hepdex</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-b border-[#f3f5f8]">
                    <div className="mt-1 flex items-center flex-col text-[#1f2937] mb-1">
                      <div className="px-3 h-10 flex items-center rounded-lg hover:bg-[#f3f5f8] transition-colors cursor-pointer w-full">
                        <ProfileSVG />
                        <p className="font-semibold">Profile</p>
                      </div>
                      <div className="px-3 h-10 flex items-center rounded-lg hover:bg-[#f3f5f8] transition-colors cursor-pointer w-full">
                        <VerifiedSVG />
                        <p className="font-semibold">Become Premium</p>
                      </div>
                      <div className="px-3 h-10 flex items-center rounded-lg hover:bg-[#f3f5f8] transition-colors cursor-pointer w-full">
                        <AdvertiseSVG />
                        <p className="font-semibold">Advertise</p>
                      </div>
                      <div className="px-3 h-10 flex items-center rounded-lg hover:bg-[#f3f5f8] transition-colors cursor-pointer w-full">
                        <SupportSVG />
                        <p className="font-semibold">Get Support</p>
                      </div>
                      <div className="px-3 h-10 flex items-center rounded-lg hover:bg-[#f3f5f8] transition-colors cursor-pointer w-full">
                        <InsightsSVG />
                        <p className="font-semibold">Insights</p>
                      </div>
                      <div className="px-3 h-10 flex items-center rounded-lg hover:bg-[#f3f5f8] transition-colors cursor-pointer w-full">
                        <AccountSVG />
                        <p className="font-semibold">Account</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-3 h-10 mt-1 flex items-center rounded-lg hover:bg-[#f3f5f8] transition-colors cursor-pointer w-full text-[#1f2937]">
                    <p className="font-semibold">Sign Out</p>
                  </div>
                </div>
              </div>
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
