import Image from "next/image";
import networkImg from "../../../../public/images/networkImg1.webp";
import LocksSVG from "@/components/SVG/LocksSVG";
import suggestedConnectionsImg1 from "../../../../public/images/suggestedConnectionsImg1.jpg";
import { EllipsisVertical } from "lucide-react";
import RectruiterSVG from "@/components/SVG/RectruiterSVG";
import ConnectSVG from "@/components/SVG/ConnectSVG";

const page = () => {
  return (
    <section className="py-17">
      <div className="w-full bg-white border-b border-[#d8dde3] fixed">
        <ul className="flex h-12 w-fit mx-auto items-center font-semibold text-[#1f2937]">
          <li className="h-full flex items-center cursor-pointer px-3">
            Connections
          </li>
          <li className="h-full flex items-center cursor-pointer px-3">
            Requests
          </li>
          <li className="h-full flex items-center cursor-pointer px-3">
            Contacts
          </li>
          <li className="border-b-4 border-[#6c33d8] text-[#6c33d8] h-full flex items-center cursor-pointer px-3">
            Discover
          </li>
        </ul>
      </div>

      <div className="max-w-[1110px] w-full mx-auto mt-16.5">
        <div className="rounded-2xl border border-[#e8eaed] bg-white shadow-sm p-3">
          <div className="mx-auto w-fit mt-2">
            <Image src={networkImg} alt="networkImg" width={236} />
          </div>
          <div className="my-2 text-[#3c3f43] space-y-1 text-center w-fit mx-auto">
            <h2 className="text-2xl font-bold">
              Search our 10 million member database for people you know
            </h2>
            <p className="text-lg font-semibold">
              And unlock new referral opportunities
            </p>
          </div>
          <form action="#" className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Email"
              defaultValue="munaonye4@gmail.com"
              className="shadow-sm w-full h-10 p-1 pl-2 rounded-md border border-[#e2e8f0] duration-100 ease-linear focus:outline-2 focus:outline-[#6c33d8] font-semibold text-[#3c3f43]"
            />
            <button className="whitespace-nowrap px-3 py-2 font-bold text-white bg-[#6c33d8] rounded-md cursor-pointer border border-[#6c33d8] hover:bg-[#391590] transition-colors">
              Find Connections
            </button>
          </form>
          <div className="flex items-center text-[#374151] font-semibold w-fit mx-auto my-5">
            <LocksSVG />
            <p>
              Our promise to you: Alignable will never spam your connections or
              send invites without your approval.
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-[990px] mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[#3c3f43] font-bold text-2xl">
                Suggested Connections
              </h2>
              <p className="font-semibold text-[#727476]">
                Connect with these business owners to strengthen your network
              </p>
            </div>

            <a
              href="#"
              className="text-[#5c4c87] font-bold underline underline-offset-2"
            >
              See More »
            </a>
          </div>

          <div className="mt-2.5">
            <div className="border border-[#c5ced9] bg-white max-w-[180px] h-64 rounded-lg relative p-2">
              <div className="absolute right-0 pr-2 shrink-0">
                <EllipsisVertical color="#8b95a3" />
              </div>
              <div className="w-[82px] h-[82px] rounded-full overflow-hidden mx-auto mt-1">
                <Image
                  src={suggestedConnectionsImg1}
                  alt="suggestedConnectionsImg1"
                />
              </div>
              <div className="mt-2.5 group">
                <a
                  href="#"
                  className="font-bold text-sm text-center group-hover:underline"
                >
                  <p>Lisa Ann Wade</p>
                  <p className="text-[#8b95a3] text-xs">WadeOrbachLTD</p>
                </a>
              </div>

              <div className="flex items-center gap-1 border border-[#c5ced9] w-fit rounded-full font-bold text-xs p-0.5 px-2 mx-auto my-1">
                <RectruiterSVG />
                <span>Recruiter</span>
              </div>

              <a
                href="#"
                className="text-[#8b95a3] text-xs font-bold block text-center"
              >
                Rosylyn, Ny
              </a>

              <div>
                <a
                  href="#"
                  className="border border-[#6c33d8] text-[#6c33d8] font-semibold flex items-center justify-center gap-2 rounded-md py-[3px] my-6.5 hover:bg-[#eceff4] hover:text-[#5023b0] transition-colors"
                >
                  <ConnectSVG />
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
