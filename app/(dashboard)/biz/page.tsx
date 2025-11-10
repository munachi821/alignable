import Image from "next/image";
import rocketImg from "../../../public/images/rocket_jumpstart_logo.png";
import ViewsSVG from "@/components/SVG/ViewsSVG";
import ClickSVG from "@/components/SVG/ClickSVG";
import InfoSVG from "@/components/SVG/InfoSVG";
import RocketSVG from "@/components/SVG/RocketSVG";
import LocationSVG from "@/components/SVG/LocationSVG";
import SupportsSVG from "@/components/SVG/SupportsSVG";
import InviteSVG from "@/components/SVG/InviteSVG";
import businessShop from "../../../public/images/square_default_business.png";
import BrowseSVG from "@/components/SVG/BrowseSVG";
import ShiningSVG from "@/components/SVG/ShiningSVG";
import NetworkerSVG from "@/components/SVG/NetworkerSVG";
import GetStartedSVG from "@/components/SVG/GetStartedSVG";
import { Check, ChevronRight } from "lucide-react";
import PromotionSVG from "@/components/SVG/PromotionSVG";
import ProductSVG from "@/components/SVG/ProductSVG";
import ProfileImg from "../../../public/images/ProfileImg1.png";
import Premium_tagSVG from "@/components/SVG/Premium_tagSVG";
import EventImg from "../../../public/images/EventImg.png";
import LikeSVG from "@/components/SVG/LikeSVG";
import ShareSVG from "@/components/SVG/ShareSVG";
const Page = () => {
  return (
    <section className="w-screen min-h-screen py-24">
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

          <div className="my-5.5 border-b pb-5.5 border-[#d3d3d3]">
            <p className="font-semibold text-lg mb-3">Quick Links</p>

            <ul className="space-y-3 pl-3">
              <div className="flex items-start gap-4">
                <RocketSVG />
                <li className="font-semibold group cursor-pointer">
                  <p className="group-hover:underline leading-3">Jumpstart</p>
                  <span className="text-[#616b79] group-hover:underline text-sm">
                    20 min, 3x a day, 7 days a week
                  </span>
                </li>
              </div>

              <div className="flex items-start gap-4">
                <LocationSVG color="#55575a" />
                <li className="font-semibold group cursor-pointer">
                  <p className="group-hover:underline leading-3">Enugu EG</p>
                  <span className="text-[#616b79] group-hover:underline text-sm">
                    Your Community
                  </span>
                </li>
              </div>

              <div className="flex items-start gap-4">
                <SupportsSVG />
                <li className="font-semibold group cursor-pointer">
                  <p className="group-hover:underline leading-3">Get Support</p>
                </li>
              </div>

              <div className="flex items-start gap-4 mt-4.5">
                <InviteSVG />
                <li className="font-semibold group cursor-pointer">
                  <p className="group-hover:underline leading-3">
                    Invite Business Owners
                  </p>
                </li>
              </div>
            </ul>
          </div>

          <div className="border-b pb-5.5 border-[#d3d3d3]">
            <div className="bg-white p-3 border border-[#d3d3d3] rounded-lg space-y-2">
              <div className="w-fit mx-auto border border-[#f2f2f2] p-2 relative mb-4">
                <Image src={businessShop} alt="shop image" width={112} />
                <p className="bg-[#fbedd6] text-[#7f5026] text-xs p-1 px-1.5 w-fit text-center font-extrabold rounded-sm letter absolute left-5.5 top-28">
                  PREMIUM
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold">
                  Boost your refferals in Enugu
                </p>
                <p className="text-xs font-semibold">
                  Access more business owners with Premium
                </p>
              </div>
              <button className="w-full border-[#6c33d8] border text-xs py-2.5 rounded-sm text-[#6c33d8] font-bold cursor-pointer hover:opacity-70 transition-opacity">
                See How
              </button>
            </div>
          </div>

          <div className="my-5.5">
            <p className="font-semibold text-lg mb-3">My Groups</p>
            <ul className="space-y-3 pl-3">
              <div className="flex items-center gap-4.5">
                <LocationSVG color="#6c33d8" />
                <div className="flex items-center justify-between w-full">
                  <li className="font-semibold hover:underline cursor-pointer">
                    Enugu, EN
                  </li>

                  <div className="rounded-full size-3 bg-[#c2292c] flex items-center justify-center">
                    <span className="w-0.5 h-0.5 bg-white"></span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4.5">
                <BrowseSVG />
                <li className="font-semibold hover:underline cursor-pointer">
                  Browse Groups
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="max-w-[805px] w-full">
          <div className="flex flex-col gap-10">
            <div className="bg-white rounded-xl shadow-md shadow-[#e8eaed] p-5 border border-[#f3f5f8] border-solid">
              <div className="flex gap-3">
                <ShiningSVG />
                <p className="font-bold text-[#8b95a3] text-sm">
                  Networking Coach
                </p>
              </div>
              <p className="font-bold text-[#1f2937] text-xl mt-1">
                Here&apos;s a great member to connect with
              </p>

              <div className="max-w-[500px] border-2 border-solid border-[#f3f5f8] mx-auto rounded-xl p-4 mt-6 mb-6">
                <div className="flex items-center gap-3 border-b-2 border-[#f3f5f8] pb-4">
                  <div className="size-18 rounded-full border border-[#d2d5d7] bg-[#e7f9ff] text-[#3bbfe3] flex items-center justify-center">
                    <span className="text-4xl">TC</span>
                  </div>
                  <ul>
                    <li className="text-[#1f2937] font-semibold text-xl leading-6">
                      Terrence Christgau
                    </li>
                    <li className="text-[#616b79] font-semibold">
                      Charles Wilmot Writer
                    </li>
                  </ul>
                </div>

                <div className="flex mt-5 gap-2 items-start">
                  <NetworkerSVG />
                  <p className="networking-gradient bg-clip-text text-transparent font-bold">
                    Terrence is an active networker with 18 connections. Connect
                    and build trust with them.
                  </p>
                </div>

                <div className="font-semibold space-x-3 mt-5.5">
                  <button className="py-2 px-4 shadow rounded-md cursor-pointer hover:bg-[#f3f5f8] transition-colors">
                    Dismiss
                  </button>
                  <button className="py-2 px-3.5 border border-[#6c33d8] rounded-md bg-[#6c33d8] text-white cursor-pointer hover:bg-[#391590] transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 text-center flex gap-15 border border-[#e7e8ea]">
              <div className="max-w-[320px] space-y-3.5">
                <GetStartedSVG />
                <p className="font-semibold text-xl text-[#3c3f43]">
                  Get Started on Allignable
                </p>

                <div className="w-full bg-[#f9f0ff] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#6c33d8] w-1/4 h-full rounded-full"></div>
                </div>
              </div>

              <div className="w-full">
                <div>
                  <label
                    htmlFor="create-account"
                    className="flex items-center text-base font-semibold gap-2 border-b border-b-[#e7e8ea] pb-4"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="create-account"
                        id="create-account"
                        className="peer sr-only"
                        defaultChecked={true}
                      />
                      <span className="w-5 h-5 border-2 border-[#aeb8c7] peer-checked:border-[#6c33d8] bg-white rounded-full peer-checked:bg-[#6c33d8] flex items-center justify-center transition-all duration-150 mr-1">
                        <Check className="text-white peer-checked:text-blue-600" />
                      </span>
                      <p className="peer-checked:line-through text-[#1f2937]">
                        Create your account
                      </p>
                    </div>
                  </label>

                  <label
                    htmlFor="meet"
                    className="flex items-center text-base font-semibold mt-4 border-b border-b-[#e7e8ea] pb-4 justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="meet"
                        id="meet"
                        className="peer sr-only"
                      />
                      <span className="w-5 h-5 border-2 border-[#aeb8c7] peer-checked:border-[#6c33d8] bg-white rounded-full peer-checked:bg-[#6c33d8] flex items-center justify-center transition-all duration-150 mr-1">
                        <Check className="text-white peer-checked:text-blue-600" />
                      </span>
                      <p className="peer-checked:line-through text-[#1f2937] hover:underline cursor-pointer">
                        Who do you want to meet?
                      </p>
                    </div>
                    <div>
                      <ChevronRight
                        size={20}
                        color="#374151"
                        strokeWidth={2.5}
                      />
                    </div>
                  </label>

                  <label
                    htmlFor="connect"
                    className="flex items-center text-base font-semibold mt-4 border-b border-b-[#e7e8ea] pb-4 justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="connect"
                        id="connect"
                        className="peer sr-only"
                      />
                      <span className="w-5 h-5 border-2 border-[#aeb8c7] peer-checked:border-[#6c33d8] bg-white rounded-full peer-checked:bg-[#6c33d8] flex items-center justify-center transition-all duration-150 mr-1">
                        <Check className="text-white peer-checked:text-blue-600" />
                      </span>
                      <p className="peer-checked:line-through text-[#1f2937] hover:underline cursor-pointer">
                        Connect with those you already know
                      </p>
                    </div>
                    <div>
                      <ChevronRight
                        size={20}
                        color="#374151"
                        strokeWidth={2.5}
                      />
                    </div>
                  </label>

                  <label
                    htmlFor="refferal"
                    className="flex items-center text-base font-semibold mt-4 justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="refferal"
                        id="refferal"
                        className="peer sr-only"
                      />
                      <span className="w-5 h-5 border-2 border-[#aeb8c7] peer-checked:border-[#6c33d8] bg-white rounded-full peer-checked:bg-[#6c33d8] flex items-center justify-center transition-all duration-150 mr-1">
                        <Check className="text-white peer-checked:text-blue-600" />
                      </span>
                      <p className="peer-checked:line-through text-[#1f2937] hover:underline cursor-pointer">
                        See your refferal Opporturnities
                      </p>
                    </div>
                    <div>
                      <ChevronRight
                        size={20}
                        color="#374151"
                        strokeWidth={2.5}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#e7e8ea] bg-white p-2.5 rounded-xl my-3">
            <div className="flex gap-3 p-1 border-b border-[#d3d3d3] pb-4">
              <a
                href="#"
                className="size-10 rounded-full bg-[#ebdfca] text-[#e2a61a] border border-[#efeadf] flex items-center justify-center text-xl cursor-pointer shrink-0"
              >
                CM
              </a>
              <div className="border border-[#d3d3d3] p-2 w-full rounded-sm hover:underline cursor-pointer">
                <a href="#">Post to Your Network</a>
              </div>
            </div>
            <div className="font-semibold text-[#3c3f43] flex justify-between p-2">
              <button className="flex-1 flex items-center justify-center py-1 cursor-pointer gap-2 text-sm border-r border-[#d3d3d3] hover:underline">
                <PromotionSVG /> Promotion
              </button>
              <button className="flex-1 flex items-center justify-center py-1 cursor-pointer gap-2 text-sm hover:underline">
                <ProductSVG /> Product or Service
              </button>
            </div>
          </div>

          {/* Posts */}

          {/* Register for Group Event */}
          <div className="bg-white border border-[#e7e8ea] rounded-xl p-3">
            <header className="flex items-center gap-2 pt-1.5 mb-3">
              <a
                href="#"
                className="size-10 rounded-full bg-red-300 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={ProfileImg}
                  alt="profile picture"
                  className="w-10 h-10 object-cover"
                />
              </a>

              <div className="flex items-start h-fit gap-2">
                <Premium_tagSVG />
                <div>
                  <p className="h-fit -mt-1.5">
                    <a
                      href="#"
                      className="font-bold text-[#1f2937] hover:underline"
                    >
                      Cynthia Abott
                    </a>{" "}
                    in{" "}
                    <a
                      href="#"
                      className="font-bold text-[#1f2937] hover:underline"
                    >
                      Allignable Alliance of Lower Manhattan NY
                    </a>
                  </p>
                  <a
                    href="#"
                    className="font-semibold text-[#8b95a3] hover:underline"
                  >
                    5d
                  </a>
                </div>
              </div>
            </header>

            <div className="border border-[#e7e8ea] rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-3/4 flex gap-3">
                  <a href="#" className="w-[180px]">
                    <Image
                      src={EventImg}
                      alt="event"
                      className="object-cover w-[180px] rounded-lg"
                    />
                  </a>

                  <div>
                    <a href="#" className="space-y-1">
                      <p className="text-[#1f2937] font-bold">
                        Wed, Nov 12 at 5:30 PM EST
                      </p>
                      <p className="font-semibold text-[1.125rem] leading-tight">
                        Smart Connect for Obsessed Business Leaders
                      </p>
                    </a>
                    <a href="#" className="font-bold text-[#6c33d8] mt-6">
                      62 Registered
                    </a>
                  </div>
                </div>
                <button className="w-1/4 bg-[#6c33d8] rounded-md font-bold text-white py-2.5 hover:bg-[#9d74e5] transition-colors cursor-pointer">
                  Register
                </button>
              </div>

              <div className="[&_p]:mb-2 line-clamp-6 mb-2 font-semibold text-[#1f2937] mt-4.5">
                <p>
                  🌐 Planning to Connect&nbsp;&nbsp; Weekly Smart Networking
                  Event
                </p>
                <p>
                  Join a powerful community of entrepreneurs and leaders who
                  believe in connection before commission.
                </p>
                <p>
                  Where business builders meet virtually to share ideas,
                  referrals, and real opportunities to grow together.
                </p>
                <p>
                  💬 Come ready to introduce your business, connect with
                  purpose, and build genuine relationships. No selling
                  <br />
                  📅 Every [Wednesday, at 5:30 PM ET]&nbsp; 💻 Virtual via Zoom
                </p>
                <p>Let’s plan to connect and watch our businesses multiply!</p>
                <p className="text-[#055a8c] hover:underline last:mb-0">
                  <a
                    href="#"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    (3) MVP Cynthia Abbott - YouTube
                  </a>
                </p>
              </div>
              <a
                href="#"
                className="font-bold text-[#1f2937] hover:underline leading-0"
              >
                View Event
              </a>
            </div>

            {/* Comment count */}
            <div className="text-[#6c33d8] font-semibold text-sm space-x-5 my-2">
              <a href="#">1 Comment</a>
              <a href="#">4 Likes</a>
            </div>

            <div>
              <button>
                <LikeSVG /> Like
              </button>
              <button>
                <ShareSVG /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page;
