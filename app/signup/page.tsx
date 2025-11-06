import { Check } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <section className="min-h-screen min-w-screen">
      <div className="max-w-lg mx-auto mt-15 p-2 space-y-4">
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
              className="w-full shadow-sm h-9.5 rounded-sm border-[#dfdddd] border pl-2 placeholder:font-semibold placeholder:text-[#aeb8c7]"
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
    </section>
  );
};
export default page;
