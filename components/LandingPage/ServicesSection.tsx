import Image from "next/image";
import services1 from "../../public/images/services1.png";
import services2 from "../../public/images/services2.jpg";
import services3 from "../../public/images/services3.jpg";
import services4 from "../../public/images/services4.jpg";
import services5 from "../../public/images/services5.png";
import services6 from "../../public/images/services6.jpg";
import services7 from "../../public/images/services7.jpeg";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="space-y-8">
        <div className="px-25 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <Image src={services1} alt="services" width={500} />
            </div>

            <div className="max-w-[470px] space-y-4">
              <h3 className="text-3xl font-bold">
                Discover New Opportunities from Existing Contacts
              </h3>
              <h4 className="text-lg font-bold">
                Because business networking isn&apos;t just about who you know —
                it&apos;s about who they know
              </h4>
              <p className="font-semibold text-lg leading-tight">
                Our technology connects you to your existing contacts, and shows
                you the opportunities their networks can give you. Your next
                best customer could be just one introduction away. Join now to
                unlock the power of your connections!
              </p>
              <a
                href="#"
                className="px-8 py-3 block w-fit bg-[#6c33d8] text-white font-bold rounded-md hover:bg-[#391590] transition-colors duration-200 ease-in"
              >
                Join for Free
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between flex-row-reverse">
            <div>
              <Image src={services2} alt="services" width={500} />
            </div>

            <div className="max-w-[470px] space-y-4">
              <h3 className="text-3xl font-bold">Grow Your Network</h3>
              <h4 className="text-lg font-bold">
                Meet business owners who&apos;ll help you reach your goals
              </h4>
              <p className="font-semibold text-lg leading-tight">
                Alignable is the go-to network for over 9 million business
                owners. These are the people who become clients, customers, and
                partners — or who introduce you to them.
              </p>
              <a
                href="#"
                className="px-8 py-3 block w-fit bg-[#6c33d8] text-white font-bold rounded-md hover:bg-[#391590] transition-colors duration-200 ease-in"
              >
                Unlock Growth
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Image src={services3} alt="services" width={500} />
            </div>

            <div className="max-w-[470px] space-y-4">
              <h3 className="text-sm leading-0 font-bold">Grow Your Network</h3>
              <h4 className="text-lg font-bold">
                Join groups relevant to your business
              </h4>
              <p className="font-semibold text-lg leading-tight">
                Meet like-minded business owners in networking groups that range
                from industry and location-based, to people who share your
                background or interests.
              </p>
              <a
                href="#"
                className="px-8 py-3 block w-fit border border-[#6c33d8] bg-white text-[#6c33d8] font-bold rounded-md hover:text-[#391590] hover:bg-[#eceff4] transition-colors duration-300 ease-in"
              >
                Unlock Growth
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between flex-row-reverse">
            <div>
              <Image src={services4} alt="services" width={500} />
            </div>

            <div className="max-w-[470px] space-y-4">
              <h3 className="text-sm leading-0 font-bold">Grow Your Network</h3>
              <h4 className="text-lg font-bold">Make real connections</h4>
              <p className="font-semibold text-lg leading-tight">
                Join high quality networking events where you can start building
                meaningful relationships, rather than navigating sales pitches
                and small talk.
              </p>
              <a
                href="#"
                className="px-8 py-3 block w-fit border border-[#6c33d8] bg-white text-[#6c33d8] font-bold rounded-md hover:text-[#391590] hover:bg-[#eceff4] transition-colors duration-300 ease-in"
              >
                Unlock Growth
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-row-reverse service-gradient max-w-7xl rounded-3xl mx-auto px-25 py-5">
          <div>
            <Image src={services5} alt="services" width={500} />
          </div>

          <div className="max-w-xl space-y-4">
            <h3 className="text-3xl font-bold">Grow Your Business</h3>
            <h4 className="text-lg font-bold">
              Discover untapped business potential in your network
            </h4>
            <p className="font-semibold text-lg leading-tight">
              Experience the power of precision networking on Alignable. Our
              technology takes your specific business goals, and helps you
              connect with the most valuable people. And our AI tools help you
              make personalized introductions at scale.
            </p>
            <h4 className="font-semibold text-lg leading-tight">
              Join for free to see for yourself!
            </h4>
            <a
              href="#"
              className="px-8 py-3 block w-fit bg-[#6c33d8] text-white font-bold rounded-md hover:bg-[#391590] transition-colors duration-200 ease-in"
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="px-25 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <Image src={services6} alt="services" width={500} />
            </div>

            <div className="max-w-[470px] space-y-4">
              <h3 className="text-3xl font-bold">Gain a Competitive Edge</h3>
              <h4 className="text-lg font-bold">
                Keep developing your skills as a business owner to set yourself
                apart
              </h4>
              <p className="font-semibold text-lg leading-tight">
                From industry-specific to broader business operations, we have
                articles, videos, and events led by experts to learn from.
                Elevate your knowledge today!
              </p>
              <a
                href="#"
                className="px-8 py-3 block w-fit bg-[#6c33d8] text-white font-bold rounded-md hover:bg-[#391590] transition-colors duration-200 ease-in"
              >
                Join for Free
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between flex-row-reverse">
            <div>
              <Image src={services7} alt="services" width={500} />
            </div>

            <div className="max-w-[440px] space-y-4">
              <h3 className="text-3xl font-bold">
                Your Business Problems, Solved
              </h3>
              <h4 className="text-lg font-bold">
                Get professional support from fellow small business owners
              </h4>
              <p className="font-semibold text-lg leading-tight">
                Use our technology dedicated to finding personalized solutions
                for your specific business needs. Whether you want to use a DIY
                tool or hire a trusted professional, we can point you in the
                right direction.
              </p>
              <a
                href="#"
                className="px-8 py-3 block w-fit bg-[#6c33d8] text-white font-bold rounded-md hover:bg-[#391590] transition-colors duration-200 ease-in"
              >
                Try it Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
