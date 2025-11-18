import NoNotificationSVG from "@/components/SVG/NoNotificationSVG";

const page = () => {
  return (
    <section className="py-16 h-screen">
      <div className="max-w-[850px] mt-8 max-h-[393px] h-full mx-auto bg-white rounded-xl border border-solid border-[#d3d3d3]">
        <header className="text-lg font-semibold border-b border-solid border-[#d3d3d3] p-3">
          Notifications
        </header>

        <div className="flex items-center justify-center h-[339px]">
          <div className="text-center flex items-center flex-col gap-3">
            <NoNotificationSVG />
            <p className="font-semibold text-lg">You have no notifications.</p>
            <p className="text-[#5d5d5d] font-semibold">
              Build your Network and get notified.
            </p>
            <a
              href="#"
              className="bg-[#6c33d8] rounded-sm text-white font-semibold text-sm px-12.5 py-[9px] border border-[#6c33d8]  hover:bg-[#5523b5] hover:border-[#999999] transition-colors"
            >
              Start Connecting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
