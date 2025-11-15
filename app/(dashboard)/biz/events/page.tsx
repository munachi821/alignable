"use client";
import Shining2SVG from "@/components/SVG/Shining2SVG";
import Image from "next/image";
import FeaturedEventImg1 from "../../../../public/images/FeaturedEvent1.png";
import AllignableSmallSVG from "@/components/SVG/AllignableSmallSVG";
import RegisteredSVG from "@/components/SVG/RegisteredSVG";
import MorningSVG from "@/components/SVG/MorningSVG";
import AfternoonSVG from "@/components/SVG/AfternoonSVG";
import EveningSVG from "@/components/SVG/EveningSVG";
import NetworkingImg from "../../../../public/images/netorkingImg.jpg";
import { ChevronLeft, ChevronRight, Key } from "lucide-react";
import NetworkingEvents from "@/components/dashboard/NetworkingEvents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import meetImg1 from "../../../../public/images/meet1.png";
import EventRegisteredSVG from "@/components/SVG/EventRegisteredSVG";
import HostedSVG from "@/components/SVG/HostedSVG";

const page = () => {
  const eventDetails = [
    {
      id: 1,
      img: NetworkingImg,
      date: "Tue, Nov 18 at 6 PM EST",
      eventName: "Business Accelerator",
      eventDetails:
        "Business Accelerator with 💰 Steve Kent - Financial Literacy Educator",
      eventLocation: "Near New York",
      eventGroup: "Alignable Alliance of Queens & N. Hempstead NY",
      inPerson: true,
      online: false,
    },
    {
      id: 2,
      img: NetworkingImg,
      date: "Tue, Nov 18 at 6 PM EST",
      eventName: "Business Accelerator",
      eventDetails:
        "Business Accelerator with 💰 Steve Kent - Financial Literacy Educator",
      eventLocation: "Near New York",
      eventGroup: "Alignable Alliance of Queens & N. Hempstead NY",
      inPerson: false,
      online: true,
      eventRegistered: "60 Registered",
      businessOwners: "11",
    },
    {
      id: 3,
      img: NetworkingImg,
      date: "Tue, Nov 18 at 6 PM EST",
      eventName: "Business Accelerator",
      eventDetails:
        "Business Accelerator with 💰 Steve Kent - Financial Literacy Educator",
      eventLocation: "Near New York",
      eventGroup: "Alignable Alliance of Queens & N. Hempstead NY",
      inPerson: true,
      online: false,
    },
    {
      id: 4,
      img: NetworkingImg,
      date: "Tue, Nov 18 at 6 PM EST",
      eventName: "Business Accelerator",
      eventDetails:
        "Business Accelerator with 💰 Steve Kent - Financial Literacy Educator",
      eventLocation: "Near New York",
      eventGroup: "Alignable Alliance of Queens & N. Hempstead NY",
      inPerson: true,
      online: false,
    },
    {
      id: 5,
      img: NetworkingImg,
      date: "Tue, Nov 18 at 6 PM EST",
      eventName: "Business Accelerator",
      eventDetails:
        "Business Accelerator with 💰 Steve Kent - Financial Literacy Educator",
      eventLocation: "Near New York",
      eventGroup: "Alignable Alliance of Queens & N. Hempstead NY",
      inPerson: true,
      online: false,
    },
    {
      id: 6,
      img: NetworkingImg,
      date: "Tue, Nov 18 at 6 PM EST",
      eventName: "Business Accelerator",
      eventDetails:
        "Business Accelerator with 💰 Steve Kent - Financial Literacy Educator",
      eventLocation: "Near New York",
      eventGroup: "Alignable Alliance of Queens & N. Hempstead NY",
      inPerson: true,
      online: false,
    },
    {
      id: 7,
      img: NetworkingImg,
      date: "Tue, Nov 18 at 6 PM EST",
      eventName: "Business Accelerator",
      eventDetails:
        "Business Accelerator with 💰 Steve Kent - Financial Literacy Educator",
      eventLocation: "Near New York",
      eventGroup: "Alignable Alliance of Queens & N. Hempstead NY",
      inPerson: true,
      online: false,
    },
  ];
  return (
    <section className="py-17">
      <div className="w-full bg-white border-b border-[#d8dde3] fixed">
        <ul className="flex h-12 w-fit mx-auto items-center font-semibold text-[#1f2937]">
          <li className="border-b-4 border-[#6c33d8] text-[#6c33d8] h-full flex items-center cursor-pointer px-3">
            Discover Events
          </li>
          <li className="h-full flex items-center cursor-pointer px-3">
            My Events
          </li>
        </ul>
      </div>

      <div className="max-w-[1110px] w-full mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shining2SVG />
            <h2 className="text-[#1f2937] text-2xl font-semibold">
              Check out this upcoming featured event
            </h2>
          </div>
          <a href="#" className="text-[#6c33d8] font-bold hover:underline">
            My Events
          </a>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex items-center justify-between mt-6">
          <div className="flex items-center gap-5">
            <div className="border border-[#eaeaea] py-0.5 w-[252px] rounded-md relative">
              <Image src={FeaturedEventImg1} alt="featured event" width={251} />
              <p className="absolute text-[#094c72] bg-[#e4f0f6] font-bold text-xs px-2 py-1 rounded-lg letter top-0 right-0 mt-3.5 mr-2">
                ONLINE
              </p>
            </div>
            <div>
              <p className="font-bold text-lg text-[#6c33d8]">
                Today at 1PM EST
              </p>
              <h2 className="text-2xl font-bold text-[#374151] mb-2">
                Smart Connect Hosted by John Paduchak
              </h2>

              <div>
                <p className="flex items-center gap-2 text-[#374151] font-semibold">
                  <AllignableSmallSVG /> Meet 1-on-1 with 7+ business owners
                </p>
                <p className="flex items-center gap-2 text-[#374151] font-semibold">
                  <RegisteredSVG /> 76 Registered
                </p>
              </div>
            </div>
          </div>

          <button className="px-10 py-2.5 text-white bg-[#6c33d8] rounded-lg font-bold hover:bg-[#9d74e5] cursor-pointer transition-colors">
            Register
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white border border-[#e2e8f0] rounded-xl flex items-center p-3 group gap-2 cursor-pointer">
            <div className="size-10 rounded-full flex items-center justify-center bg-purple-100">
              <MorningSVG />
            </div>
            <p className="group-hover:underline text-[#374151] font-semibold">
              Morning Networking Events
            </p>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-xl flex items-center p-3 group gap-2 cursor-pointer">
            <div className="size-10 rounded-full flex items-center justify-center bg-purple-100">
              <AfternoonSVG />
            </div>
            <p className="group-hover:underline text-[#374151] font-semibold">
              Afternoon Networking Events
            </p>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-xl flex items-center p-3 group gap-2 cursor-pointer">
            <div className="size-10 rounded-full flex items-center justify-center bg-purple-100">
              <EveningSVG />
            </div>
            <p className="group-hover:underline text-[#374151] font-semibold">
              Evening Networking Events
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[#1f2937] font-bold text-xl">
                Meet 1-on-1 with business owners in online Smart Connect℠ Events
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-[#6c33d8] font-bold hover:underline"
                >
                  See All
                </a>

                <div className="flex gap-3">
                  <div className="size-7 flex items-center justify-center [&.swiper-button-disabled]:bg-none rounded-full text-[#3c3f43] [&.swiper-button-disabled]:text-[#e2e8f0] hover:bg-[#d3d3d3] cursor-pointer transition-colors prev-btn [&.swiper-button-disabled]:hover:bg-transparent">
                    <ChevronLeft size={18} strokeWidth={3} />
                  </div>
                  <div className="size-7 flex items-center justify-center rounded-full text-[#3c3f43] hover:bg-[#d3d3d3] cursor-pointer transition-colors next-btn">
                    <ChevronRight size={18} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              /* spaceBetween={280} */
              slidesPerView={3.37}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className="mt-3"
            >
              {eventDetails.map((event) => (
                <SwiperSlide key={event.id}>
                  <NetworkingEvents
                    img={event.img}
                    date={event.date}
                    eventName={event.eventName}
                    eventDetails={event.eventDetails}
                    eventLocation={event.eventLocation}
                    eventGroup={event.eventGroup}
                    inPerson={event.inPerson}
                    online={event.online}
                    eventRegistered={event.eventRegistered}
                    businessOwners={event.businessOwners}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-[#1f2937] font-bold text-xl">
              Meet 1-on-1 with business owners in online Smart Connect℠ Events
            </p>

            <a href="#" className="text-[#6c33d8] font-bold hover:underline">
              See All
            </a>
          </div>
        </div>
        <h2 className="text-[#616b79] mt-8 font-bold">TODAY</h2>

        <div>
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex items-center justify-between mt-2">
            <div className="flex items-center gap-5">
              <div className="rounded-lg overflow-hidden">
                <Image src={meetImg1} alt="featured event" width={158} />
              </div>
              <div>
                <p className="font-bold text-[#6c33d8]">
                  Today from 12 - 1PM EST
                </p>
                <h2 className="font-bold text-[#374151] mb-2">
                  Smart Connect℠ Virtual Networking for Wellness Professionals
                </h2>

                <div>
                  <p className="flex items-center gap-2 text-[#374151] font-semibold">
                    <EventRegisteredSVG /> 76 Registered
                  </p>
                  <p className="flex items-center gap-2 text-[#374151] font-semibold">
                    <HostedSVG /> Hosted by Kimberly Henrie
                  </p>
                </div>
              </div>
            </div>

            <button className="px-10 py-[7px] text-[#6c33d8] border border-[#6c33d8] hover:border-[#391590] rounded-lg font-bold cursor-pointer transition-colors">
              Register
            </button>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex items-center justify-between mt-2">
            <div className="flex items-center gap-5">
              <div className="rounded-lg overflow-hidden">
                <Image src={meetImg1} alt="featured event" width={158} />
              </div>
              <div>
                <p className="font-bold text-[#6c33d8]">
                  Today from 12 - 1PM EST
                </p>
                <h2 className="font-bold text-[#374151] mb-2">
                  Smart Connect℠ Virtual Networking for Wellness Professionals
                </h2>

                <div>
                  <p className="flex items-center gap-2 text-[#374151] font-semibold">
                    <EventRegisteredSVG /> 76 Registered
                  </p>
                  <p className="flex items-center gap-2 text-[#374151] font-semibold">
                    <HostedSVG /> Hosted by Kimberly Henrie
                  </p>
                </div>
              </div>
            </div>

            <button className="px-10 py-[7px] text-[#6c33d8] border border-[#6c33d8] hover:border-[#391590] rounded-lg font-bold cursor-pointer transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
