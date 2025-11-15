import Image, { StaticImageData } from "next/image";
import AllignableSmallSVG from "../SVG/AllignableSmallSVG";
import EventGroupSVG from "../SVG/EventGroupSVG";
import EventLocationSVG from "../SVG/EventLocationSVG";
import EventRegisteredSVG from "../SVG/EventRegisteredSVG";
type EventProps = {
  img: StaticImageData;
  date: string;
  eventName: string;
  eventDetails: string;
  eventLocation?: string;
  eventGroup?: string;
  inPerson: boolean;
  online: boolean;
  eventRegistered?: string;
  businessOwners?: string;
};
const NetworkingEvents = ({
  img,
  date,
  eventName,
  eventDetails,
  eventLocation,
  eventGroup,
  inPerson,
  online,
  eventRegistered,
  businessOwners,
}: EventProps) => {
  return (
    <div className="w-80 bg-white rounded-lg border border-[#e2e8f0] relative">
      <div className="border-b border-[#eaeaea] border-solid">
        <Image
          src={img}
          className="rounded-t-lg object-cover"
          alt={eventDetails}
        />
      </div>
      <div className="px-3 pb-3 mt-2">
        <div>
          <p className="font-bold text-[#6c33d8]">{date}</p>
          <p className="font-bold text-[#374151]">{eventName}</p>

          {inPerson && (
            <div className="mt-2">
              <div className="flex items-center text-[#3c3f43] gap-2 font-semibold">
                <EventLocationSVG /> <p>{eventLocation}</p>
              </div>
              <div className="flex items-center text-[#3c3f43] gap-2 font-semibold">
                <EventGroupSVG />
                <p className="w-full truncate">{eventGroup}</p>
              </div>
            </div>
          )}

          {online && (
            <div className="mt-2">
              <div className="flex items-center text-[#3c3f43] gap-2 font-semibold">
                <EventRegisteredSVG />
                <p className="w-full truncate">
                  Meet 1-on-1 with {businessOwners}+ business owners
                </p>
              </div>
              <div className="flex items-center text-[#3c3f43] gap-2 font-semibold">
                <AllignableSmallSVG />{" "}
                <p className="truncate w-full">{eventRegistered}</p>
              </div>
            </div>
          )}
        </div>
        <button className="w-full py-2 rounded-md border border-[#6c33d8] hover:border-[#391590] text-[#6c33d8] hover:text-[#391590] transition-colors cursor-pointer font-semibold text-[15px] mt-2">
          Register
        </button>
        {inPerson && (
          <p className="letter bg-[#f8e6da] text-[#b66230] font-extrabold w-fit text-xs rounded-md p-1 absolute m-2 top-0 right-0">
            IN-PERSON
          </p>
        )}

        {online && (
          <p className="letter bg-[#e4f0f6] text-[#094c72] font-extrabold w-fit text-xs rounded-md p-1 absolute m-2 top-0 right-0">
            ONLINE
          </p>
        )}
      </div>
    </div>
  );
};
export default NetworkingEvents;
