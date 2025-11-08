"use client";
import Image from "next/image";
import rocketImg from "../../../public/images/rocket_jumpstart_logo.png";
import ViewsSVG from "@/components/SVG/ViewsSVG";
import ClickSVG from "@/components/SVG/ClickSVG";
import InfoSVG from "@/components/SVG/InfoSVG";
import { useState } from "react";
const Page = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="w-screen min-h-screen py-8">
      <div className="max-w-[1150px] mx-auto bg-[#2d3748] px-4 py-4 rounded-xl flex justify-between items-center">
        <div className="flex gap-4">
          <div>
            <Image src={rocketImg} alt="rocket image" width={50} />
          </div>
          <div>
            <p className="font-bold text-lg text-white">
              Let Us Show You Around
            </p>
            <p className="text-sm text-[#d9dce1]">
              Learn how to get referrals on Alignable. Free live sessions twice
              daily.
            </p>
          </div>
        </div>

        <a
          href="#"
          className="bg-[#10b981] font-bold text-white px-8 py-2.5 rounded-lg hover:shadow-md hover:-translate-y-px transition-all hover:bg-[#059669]"
        >
          Register
        </a>
      </div>

      <div className="flex gap-7.5 max-w-[1140px] mx-auto mt-5">
        <div className="max-w-[275px] w-full">
          <div className="border-b pb-5.5 border-[#d3d3d3]">
            <div className="flex p-3 items-center gap-3 rounded-lg mb-1">
              <span className="size-11 rounded-full flex items-center justify-center bg-[#f9f0ff] text-[#391590] border border-[#391590] text-sm font-semibold">
                CM
              </span>
              <ul className="leading-5">
                <li className="font-bold">Munachi Onyebuchi</li>
                <li className="font-semibold text-sm">Hepdex</li>
              </ul>
            </div>

            <div className="border border-[#e2e8f0] p-2 bg-[#f8fafc] rounded-md">
              <div className="w-full h-2 rounded-full bg-[#c5ced9] overflow-hidden">
                <div className="w-[18%] h-full bg-[#6c33d8] rounded-full"></div>
              </div>
              <a
                href="#"
                className="text-[#6c33d8] mt-2 text-sm font-bold hover:underline"
              >
                Your profile is 18% refferal ready
              </a>
            </div>

            <div className="flex items-center justify-between mt-8 relative">
              <div className="text-[#6c33d8] font-bold flex gap-2 items-center text-sm group">
                <ViewsSVG />{" "}
                <a href="#" className="group-hover:underline">
                  8 Views
                </a>
              </div>
              <div className="text-[#6c33d8] font-bold flex gap-2 items-center text-sm group">
                <ClickSVG />{" "}
                <a href="#" className="group-hover:underline">
                  3 Clicks
                </a>
              </div>
              <div className="text-[#616b79] p-1 rounded-full cursor-pointer hover:bg-[#e2e8f0] transition-colors group">
                <InfoSVG />
                <div className="absolute w-150 bg-[#2d3748] p-4 -left-6.5 bottom-10 font-bold text-white rounded-lg hidden group-hover:block">
                  Total views and clicks on your business profile, content and
                  services in the last 90 days.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[805px] w-full bg-white rounded-md shadow-md"></div>
      </div>
    </section>
  );
};
export default Page;
