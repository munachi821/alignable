"use client";
import Image from "next/image";
import networkImg from "../../../../public/images/networkImg1.webp";
import LocksSVG from "@/components/SVG/LocksSVG";
import suggestedConnectionsImg1 from "../../../../public/images/suggestedConnectionsImg1.jpg";
import Connections from "@/components/dashboard/Connections";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const page = () => {
  const connections = [
    {
      id: 1,
      img: suggestedConnectionsImg1,
      name: "Lisa Ann Wade",
      company: "WadeOrbachLTD",
      location: "Roselyn, NY",
    },
    {
      id: 2,
      img: suggestedConnectionsImg1,
      name: "David Chen",
      company: "TechSolutions Inc.",
      location: "San Francisco, CA",
    },
    {
      id: 3,
      img: suggestedConnectionsImg1,
      name: "Maria Garcia",
      company: "Innovate Co.",
      location: "Miami, FL",
    },
    {
      id: 4,
      img: suggestedConnectionsImg1,
      name: "James Smith",
      company: "Apex Logistics",
      location: "Chicago, IL",
    },
    {
      id: 5,
      img: suggestedConnectionsImg1,
      name: "Aisha Khan",
      company: "Quantum Creatives",
      location: "Austin, TX",
    },
    {
      id: 6,
      img: suggestedConnectionsImg1,
      name: "Kenji Tanaka",
      company: "Horizon Digital",
      location: "Seattle, WA",
    },
  ];

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

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={15}
              slidesPerView={5}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className="mt-2.5"
            >
              {connections.map((connection) => (
                <SwiperSlide key={connection.id}>
                  <Connections
                    id={connection.id}
                    name={connection.name}
                    img={connection.img}
                    location={connection.location}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="size-8 [&.swiper-button-disabled]:bg-transparent rounded-full border [&.swiper-button-disabled]:border-[#eceff4] [&.swiper-button-disabled]:text-[#8b95a3] prev-btn cursor-pointer flex items-center justify-center border-[#6c33d8] bg-[#6c33d8] hover:bg-[#391590] text-white transition-colors absolute -left-10 top-1/2 -translate-y-1/2 z-20">
              <ArrowLeft size={17} />
            </button>
            <button className="size-8 border-[#6c33d8] bg-[#6c33d8] rounded-full hover:bg-[#391590] transition-colors flex items-center justify-center text-white cursor-pointer next-btn absolute -right-10 top-1/2 -translate-y-1/2 z-20">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
