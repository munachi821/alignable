import Image from "next/image";
import rocketImg from "../../../public/images/rocket_jumpstart_logo.png";
const page = () => {
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

      <div className="flex gap-7.5 max-w-[1140px] mx-auto">
        <div className="max-w-[275px] w-full">
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
            <p className="text-[#6c33d8] mt-2 text-sm font-bold">
              Your profile is 18% refferal ready
            </p>
          </div>
        </div>

        <div className="max-w-[805px]"></div>
      </div>
    </section>
  );
};
export default page;
