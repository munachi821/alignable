import { Search } from "lucide-react";

const page = () => {
  return (
    <section className="py-25">
      <div className="max-w-[600px] mx-auto">
        <div className="text-[#3c3f43] space-y-4">
          <h2 className="text-3xl font-bold">Welcome to Groups!</h2>
          <p className="text-2xl font-semibold">
            Select tags that represent your business and interests so we can
            suggest the best groups for you
          </p>
        </div>

        <div className="my-6 relative h-fit">
          <input
            type="search"
            name="group-search"
            id="group-search"
            placeholder="Search topics..."
            className="bg-white w-full h-10 rounded-full focus:outline-2 focus:outline-[#6c33d8] placeholder:text-[#aeb8c7] placeholder:font-semibold pl-10 shadow-md font-semibold text-[#374151]"
          />
          <Search
            className="absolute top-2.5 left-2.5 text-[#616b79]"
            size="19"
            strokeWidth="3"
          />
        </div>

        <div>
          <p className="text-[#616b79] text-xs letter font-extrabold">
            SUGGESTED
          </p>

          <div className="mt-4.5 space-x-3 space-y-4">
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Marketing
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Sales
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Sales Tactics
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Social Media Markerting
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Websites
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              SEO
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Email Marketing
            </button>

            <button className="text-[#6c33d8] font-bold cursor-pointer">
              See All
            </button>
          </div>

          <p className="text-[#616b79] text-xs letter font-extrabold">
            SHARED EXPERIENCES
          </p>

          <div className="mt-4.5 space-x-3.5 space-y-4">
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              LGBTQIA+ Owned
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Woman Owned
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Latinx Owned
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Black Owned
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Veteran Owned
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Christian Owned
            </button>
            <button className="text-[#1f2937] bg-[#e2e8f0] font-semibold px-4 pt-1.5 pb-2 rounded-full cursor-pointer">
              Over 65 Owned
            </button>

            <button className="text-[#6c33d8] font-bold cursor-pointer">
              See All
            </button>
          </div>
        </div>

        <p className="font-bold text-[#616b79]">No results found.</p>

        <div className="flex justify-end my-5">
          <a
            href="#"
            className="px-8 py-2.5 rounded-full font-bold text-white bg-[#6c33d8] border border-[#6c33d8] hover:bg-[#391590] transition-colors"
          >
            Next
          </a>
        </div>
      </div>
    </section>
  );
};
export default page;
