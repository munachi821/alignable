import Image from "next/image";
import globe from "../public/images/world-smallpng.png";
import company1 from "../public/images/company1.png";
import company2 from "../public/images/company2.png";
import company3 from "../public/images/company3.png";
import company4 from "../public/images/company4.png";
import company5 from "../public/images/company5.png";

const DiscoverSection = () => {
  const discover = [
    {
      percentage: "100%",
      percentageText: "built for entrepreneurs",
    },
    {
      percentage: "25%",
      percentageText: "of total US business owners",
    },
    {
      percentage: "10 Million",
      percentageText: "members in North America",
    },
    {
      percentage: "140 Million",
      percentageText: "relationships formed",
    },
  ];

  const comapanyImage = [company1, company2, company3, company4, company5];
  return (
    <div>
      <section className="max-w-full bg-gradient pl-30 pr-10 py-20 border-b border-solid border-white">
        <div className="grid grid-cols-2 items-center">
          <div>
            <Image src={globe} alt="alignable globe" width={500} />
          </div>

          <div className="max-w-2xl text-white space-y-18">
            <h2 className="text-5xl leading-12 font-medium">
              Discover why millions of business owners trust Alignable as their
              business networking platform.
            </h2>
            <div className="grid grid-cols-2 gap-y-7">
              {discover.map((discoverText, i) => (
                <div className="border-l-2 border-white pl-5" key={i}>
                  <h3 className="text-3xl font-bold mb-2.5">
                    {discoverText.percentage}
                  </h3>
                  <p className="text-lg font-semibold">
                    {discoverText.percentageText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient h-30 flex items-center justify-evenly px-20">
        <Image src={company1} alt="hufferpost" width={250} />
        <Image src={company2} alt="hufferpost" width={250} />
        <Image src={company3} alt="hufferpost" width={250} />
        <Image src={company4} alt="hufferpost" width={250} />
        <Image src={company5} alt="hufferpost" width={250} />
      </section>
    </div>
  );
};
export default DiscoverSection;
