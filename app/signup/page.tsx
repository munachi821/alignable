"use client";
import LockSVG from "@/components/SVG/LockSVG";
import MessageSVG from "@/components/SVG/MessageSVG";
import PencilSVG from "@/components/SVG/PencilSVG";
import PhoneSVG from "@/components/SVG/PhoneSVG";
import ShiningSVG from "@/components/SVG/ShiningSVG";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  function checktyping(e: React.ChangeEvent<HTMLInputElement>) {
    setIsButtonDisabled(e.target.value.trim() === "");
  }

  return (
    <section className="min-h-screen min-w-screen">
      <div className="max-w-lg mx-auto mt-15 p-2">
        {/* Enter your email */}
        <div className="space-y-4 hidden">
          <div className="text-3xl font-semibold space-y-2">
            <h2 className="text-black">Welcome to Alignable</h2>
            <h3 className="text-[#7e7e7e]">
              The networking platform built for business owners
            </h3>
          </div>

          <form action="#" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                className="w-full shadow-sm h-9.5 rounded-sm outline-0 focus:outline-2 focus:outline-[#6c33d8] border-[#dfdddd] border pl-2 placeholder:font-semibold placeholder:text-[#aeb8c7]"
              />
            </div>

            <label
              htmlFor="terms-agree"
              className="flex items-center text-sm font-semibold mt-2"
            >
              <input
                type="checkbox"
                name="terms-agree"
                id="terms-agree"
                className="peer sr-only"
              />
              <span className="w-5 h-5 border border-[#6c33d8] bg-[#e9e9ed] rounded-md peer-checked:bg-[#6c33d8] flex items-center justify-center transition-all duration-150 mr-1">
                <Check className="text-[#e9e9ed] peer-checked:text-blue-600" />
              </span>
              I agree to Alignable&apos;s{" "}
              <a href="#" className="ml-1">
                Terms of Service
              </a>
            </label>

            <button className="bg-[#6c33d8] px-10 h-11 my-2 rounded-full font-bold text-white hover:bg-[#391590] transition-colors cursor-pointer">
              Sign Up, It&apos;s Free
            </button>

            <p className="font-semibold my-2">
              Already have an account?{" "}
              <Link href="/login" className="text-[#6c33d8] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Enter your name */}
        <div className="space-y-4 hidden">
          <div className="flex gap-2">
            <ShiningSVG />
            <p className="font-bold text-sm text-[#8b95a3]">Networking Coach</p>
          </div>
          <p className="my-3 text-[22px] font-bold">
            What&apos;s your first and last name?
          </p>
          <form action="#" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="text"
                id="name"
                onChange={checktyping}
                className="w-full shadow-sm h-9.5 rounded-sm outline-0 focus:outline-2 focus:outline-[#6c33d8] border-[#dfdddd] border pl-2 placeholder:font-semibold placeholder:text-[#aeb8c7]"
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                disabled={isButtonDisabled}
                className="bg-[#6c33d8] px-4 h-9.5 my-2 rounded-full font-bold text-white hover:bg-[#391590] transition-colors cursor-pointer disabled:bg-[#f3f5f8] disabled:text-[#8b95a3]"
              >
                Next
              </button>
            </div>
          </form>
        </div>

        {/* Verify Phone Number */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <ShiningSVG />
            <p className="font-bold text-sm text-[#8b95a3]">Networking Coach</p>
          </div>
          <p className="my-3 text-[22px] font-bold">
            Verify your identity by entering your mobile phone number.
          </p>

          <p className="my-3 text-lg text-[#8b95a3] font-semibold">
            We do this to ensure that you’re not a robot.
          </p>
          <form action="#" className="space-y-2">
            <div className="flex flex-col relative">
              <label htmlFor="number" className="font-semibold text-sm mb-2">
                Mobile Phone Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                className="w-full shadow-sm h-9.5 rounded-sm outline-0 focus:outline-2 focus:outline-[#6c33d8] border-[#dfdddd] border pl-12.5 placeholder:font-semibold placeholder:text-[#aeb8c7]"
              />
              <span className="absolute top-[35px] left-2 font-semibold">
                +234
              </span>
            </div>
            <div className="text-sm text-[#1f2937] flex items-center font-semibold gap-1">
              <LockSVG /> This number will only be used to send you a
              verification code.
            </div>

            <div className="flex items-end justify-end flex-col ">
              <button className="bg-[#6c33d8] px-4 h-10 my-1 rounded-full font-bold text-white hover:bg-[#391590] transition-colors cursor-pointer flex items-center gap-2">
                <MessageSVG />
                Verify with SMS/Text
              </button>
              <button className="border-[#6c33d8] border px-4 h-10 my-1 rounded-full font-bold text-[#6c33d8] hover:bg-[#eceff4] transition-colors cursor-pointer flex items-center gap-2">
                <PhoneSVG />
                Verify with Phone Call
              </button>
              <button className="border-[#6c33d8] border px-4 h-10 my-1 rounded-full font-bold text-[#6c33d8] hover:bg-[#eceff4] transition-colors cursor-pointer flex items-center gap-2">
                <PencilSVG />
                Verify Manually
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Page;
