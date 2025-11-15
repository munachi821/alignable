import AllMsgSVG from "@/components/SVG/AllMsgSVG";
import UnreadMsgSVG from "@/components/SVG/UnreadMsgSVG";
import {
  ChevronDown,
  EllipsisVertical,
  EyeOff,
  Plus,
  Search,
} from "lucide-react";

const page = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1150px] mx-auto">
        <div className="max-w-[275px] w-full">
          <div className="flex items-center justify-between my-4">
            <p className="text-[#3c3f43] font-semibold text-[17px]">Messages</p>
            <button className="flex items-center text-[#6c33d8] hover:text-[#5523b5] transition-colors font-semibold cursor-pointer">
              <Plus size={20} /> New Message
            </button>
          </div>

          <div className="border border-[#d3d3d3] bg-white rounded-xl">
            <div className="relative border-b border-[#d3d3d3]">
              <div className="px-11.5">
                <input
                  type="search"
                  name="message-search"
                  id="message-search"
                  placeholder="Search Conversations"
                  className="py-2 outline-none placeholder:font-semibold placeholder:text-[#959799]"
                />
              </div>
              <Search className="absolute top-2 left-2 text-[#87888a]" />
            </div>

            <div className="py-3 pl-3">
              <div className="w-fit">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    id="filter-msg"
                    name="filter-msg"
                  />

                  <label
                    htmlFor="filter-msg"
                    className="font-bold hover:underline flex items-center gap-2 cursor-pointer"
                  >
                    All Messages <ChevronDown size="19" />
                  </label>

                  <label
                    htmlFor="filter-msg"
                    className="fixed inset-0 z-10 hidden peer-checked:block"
                  ></label>

                  <div className="border p-1 border-[#e2e8f0] rounded-md text-[#1f2937] absolute bg-white hidden peer-checked:block left-0 z-20 w-[174px]">
                    <button className="p-1 pl-1.5 hover:bg-[#f3f5f8] w-full rounded-sm transition-colors text-left cursor-pointer flex items-center whitespace-nowrap gap-2 font-semibold">
                      <UnreadMsgSVG /> Unread (0)
                    </button>
                    <button className="p-1 pl-1.5 hover:bg-[#f3f5f8] w-full rounded-sm transition-colors text-left cursor-pointer font-semibold">
                      <div className="flex items-center whitespace-nowrap gap-2">
                        <AllMsgSVG /> All Messages
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center my-5">
                <p className="font-semibold text-[#616b79]">No Messages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
