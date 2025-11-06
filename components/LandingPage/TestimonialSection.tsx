"use client";
import Image from "next/image";
import testimonial1 from "../public/images/testimonial1.jpeg";
import testimonial2 from "../public/images/testimonial2.jpeg";
import testimonial3 from "../public/images/testimonial3.png";
import testimonial4 from "../public/images/testimonial4.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const TestimonialSection = () => {
  const testimonials = [
    {
      img: testimonial1,
      text: "Alignable's been amazing! It's all about real connections, and it's seriously boosted my Growth Agency. I've grown my client base, met incredible people, and truly believe Alignable is the 'Sleeping Giant' every business needs. So thankful for the growth!",
      writer: "—Jannery Michelle, StrongFoundation Marketing",
    },
    {
      img: testimonial2,
      text: "Alignable is the best business networking platform on Earth (at least in North America!) I enjoy interacting with other professionals, small business owners, up-and-coming businesses, and colleagues. I am building my business as a result of the power of Alignable!",
      writer: "—Dr. Karen Fiorillo, Modern Nature",
    },
    {
      img: testimonial3,
      text: "Alignable has a greater impact and a stronger sense of community for the small business entrepreneur trying to network and connect to like minded business professionals than its larger competitors.",
      writer: "—Anthony Audain, Jazz Haz Productions",
    },
    {
      img: testimonial4,
      text: "40% of my business is from Alignable. It's all about nurturing relationships.",
      writer: "—Gretchen Mosel, Faith & Family in Friendswood",
    },
  ];
  return (
    <section className="p-15">
      <div className="border border-[#c5ccd9] px-10 py-26 rounded-3xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          className="z-10"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="flex max-w-[1000px] items-center mx-auto gap-10">
                <div className="rounded-full overflow-hidden min-w-60">
                  <Image
                    src={testimonial.img}
                    alt="testimonial"
                    className="w-full max-w-60"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-xl font-medium italic">
                    {testimonial.text}
                  </p>
                  <h3 className="font-semibold">{testimonial.writer}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-4 w-fit mx-auto">
          <button className="size-12 rounded-full flex items-center justify-center bg-white border border-[#c5ccd9] cursor-pointer hover:bg-[#eceff4] transition prev-btn">
            <ArrowLeft />
          </button>
          <button className="size-12 rounded-full flex items-center justify-center bg-white border border-[#c5ccd9] cursor-pointer hover:bg-[#eceff4] transition next-btn">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
