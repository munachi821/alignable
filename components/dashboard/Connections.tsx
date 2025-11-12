import Image, { StaticImageData } from "next/image";
import ConnectSVG from "../SVG/ConnectSVG";
import RectruiterSVG from "../SVG/RectruiterSVG";
import { EllipsisVertical, EyeOff } from "lucide-react";

type connectionsProps = {
  id: number;
  name: string;
  img: StaticImageData;
  location: string;
};

const Connections = ({ id, name, img, location }: connectionsProps) => {
  return (
    <div className="border border-[#c5ced9] bg-white shrink-0 w-[180px] h-64 rounded-lg relative p-2">
      <div className="absolute right-0 pr-2 shrink-0">
        <div className="relative">
          <input
            type="checkbox"
            className="peer sr-only"
            id={`connect-report${id}`}
            name={`connect-report${id}`}
          />

          <label htmlFor={`connect-report${id}`} className="cursor-pointer">
            <EllipsisVertical color="#8b95a3" />
          </label>

          <label
            htmlFor={`connect-report${id}`}
            className="fixed inset-0 z-10 hidden peer-checked:block"
          ></label>

          <div className="border p-1 border-[#e2e8f0] rounded-md text-[#1f2937] absolute bg-white hidden peer-checked:block right-0 z-20">
            <button className="hover:underline p-1 pl-1.5 hover:bg-[#f3f5f8] w-full rounded-sm transition-colors text-left cursor-pointer flex items-center whitespace-nowrap gap-2 font-semibold">
              <EyeOff size={18} color="#1f2937" /> Hide Business
            </button>
          </div>
        </div>
      </div>
      <div className="w-[82px] h-[82px] rounded-full overflow-hidden mx-auto mt-1">
        <Image src={img} alt={name} />
      </div>
      <div className="mt-2.5 group">
        <a
          href="#"
          className="font-bold text-sm text-center group-hover:underline"
        >
          <p>{name}</p>
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
        {location}
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
  );
};
export default Connections;
