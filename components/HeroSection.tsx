const HeroSection = () => {
  return (
    <section className="w-screen h-screen bg-white px-15 bg-image">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <div className="max-w-2xl flex flex-col gap-6 mt-12">
          <h1 className="text-[65px] leading-16 font-bold">
            Your Network <br /> Has Untapped <br />{" "}
            <span className="text-[#6c33d8]">Potential</span>
          </h1>

          <p className="text-3xl font-medium max-w-lg">
            Join the business networking platform trusted by over 10 million
            business owners
          </p>

          <a
            href="#"
            className="py-2.5 px-8.5 bg-[#11a761] rounded-md w-fit font-semibold text-lg text-white hover:bg-[#095431] transition-colors duration-300"
          >
            Get Started Now - Free Membership
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
