"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [faqOpen1, setFaqOpen1] = useState(false);
  const [faqOpen2, setFaqOpen2] = useState(false);
  const [faqOpen3, setFaqOpen3] = useState(false);
  const [faqOpen4, setFaqOpen4] = useState(false);
  return (
    <section className="px-20 py-10">
      <h2 className="text-3xl font-bold mb-20">Frequently Asked Questions</h2>

      <div>
        <div className="text-[#616b79]">
          <div
            className="flex items-center py-5 border-b border-[#c5ced9] cursor-pointer"
            onClick={() => setFaqOpen1(!faqOpen1)}
          >
            {faqOpen1 ? (
              <Minus strokeWidth={3} size={25} color="#c5ced9" />
            ) : (
              <Plus strokeWidth={3} size={25} color="#c5ced9" />
            )}

            <p className="font-bold ml-12">About Us</p>
          </div>

          <div
            className={`ml-18 mt-4 text-lg font-semibold ${
              faqOpen1 ? "block" : "hidden"
            }`}
          >
            <p className="font-bold">
              Alignable is the networking platform for businesses.
            </p>
            <br />
            <span>
              We’re rewriting the rules of networking by creating genuine
              opportunities and encouraging meaningful relationships. That way,
              business owners can grow a network of trusted, authentic
              connections, without the sales pitches and small talk.
            </span>
            <br />
            <br />
            <p className="font-bold">What to expect</p>
            <br />
            Networking looks different here, thanks to quality events, smart
            introductions, and our authentic community of business owners.
            <br />
            Whether you want to meet genuine people to do business with, or to
            connect with like-minded people for advice or support, we’ll help
            make it happen.
            <br />
            <br />
            <p className="font-bold">Who we are</p>
            <br />
            Alignable was founded with a clear mission: to empower businesses by
            creating a vibrant, supportive, and interconnected business
            ecosystem across North America. We understand the challenges and
            opportunities that businesses face, and since 2014 our team has been
            dedicated to providing the tools and resources needed to overcome
            these challenges and succeed.
          </div>
        </div>

        <div className="text-[#616b79]">
          <div
            className="flex items-center py-5 border-b border-[#c5ced9] cursor-pointer"
            onClick={() => setFaqOpen2(!faqOpen2)}
          >
            {faqOpen2 ? (
              <Minus strokeWidth={3} size={25} color="#c5ced9" />
            ) : (
              <Plus strokeWidth={3} size={25} color="#c5ced9" />
            )}

            <p className="font-bold ml-12">
              What makes Alignable different from other social media platforms?
            </p>
          </div>

          <div
            className={`ml-18 mt-4 text-lg font-semibold ${
              faqOpen2 ? "block" : "hidden"
            }`}
          >
            <p>
              Alignable is not your average social media. In fact, we don’t
              consider it one. Alignable is the only professional space where
              business owners can connect with other entrepreneurs at a local
              level. We have put policies in place to keep our members&apos;
              conversations productive and professional- intentionally geared to
              drive value for our members. Say goodbye to spam and solicitation
              and say hello to Alignable!
            </p>
          </div>
        </div>

        <div className="text-[#616b79]">
          <div
            className="flex items-center py-5 border-b border-[#c5ced9] cursor-pointer"
            onClick={() => setFaqOpen3(!faqOpen3)}
          >
            {faqOpen3 ? (
              <Minus strokeWidth={3} size={25} color="#c5ced9" />
            ) : (
              <Plus strokeWidth={3} size={25} color="#c5ced9" />
            )}

            <p className="font-bold ml-12">
              What are the benefits of being a premium member?
            </p>
          </div>

          <div
            className={`ml-18 mt-4 text-lg font-semibold space-y-4 ${
              faqOpen3 ? "block" : "hidden"
            }`}
          >
            <p>
              Premium membership unlocks powerful resources for growing your
              network and business.
            </p>
            <p className="font-bold">Premium membership includes:</p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Greater access to your ideal customers.</li>
              <li className="ml-5 marker:text-[#c5ced9]">
                List your services on Alignable’s Marketplace where thousands of
                local business owners go to find vendors and solutions.
              </li>
              <li className="ml-5 marker:text-[#c5ced9]">
                Receive reports showing who’s viewed your profile.
              </li>
              <li className="ml-5 marker:text-[#c5ced9]">
                Gain higher visibility on your posts across discussion groups
                and events.
              </li>
            </ul>
            <ul className="list-disc ml-8 space-y-2">
              <li>Access to your ideal referral partners.</li>
              <li className="ml-5 marker:text-[#c5ced9]">
                Receive monthly connection credits which allow you to introduce
                yourself to potential partners.
              </li>
              <li className="ml-5 marker:text-[#c5ced9]">
                Smart Connect technology will connect you with the types of
                businesses owners you prefer to meet
              </li>
            </ul>
            <ul className="list-disc ml-8 space-y-2">
              <li>Establish yourself as an expert.</li>
              <li className="ml-5 marker:text-[#c5ced9]">
                Lead local or topic related groups and discussions.
              </li>
              <li className="ml-5 marker:text-[#c5ced9]">
                Participate in educational events.
              </li>
              <li className="ml-5 marker:text-[#c5ced9]">
                Your contributions to discussions will be highlighted above
                non-premium members.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-[#616b79]">
          <div
            className="flex items-center py-5 border-b border-[#c5ced9] cursor-pointer"
            onClick={() => setFaqOpen4(!faqOpen4)}
          >
            {faqOpen4 ? (
              <Minus strokeWidth={3} size={25} color="#c5ced9" />
            ) : (
              <Plus strokeWidth={3} size={25} color="#c5ced9" />
            )}

            <p className="font-bold ml-12">
              What makes Alignable valuable for my business?
            </p>
          </div>

          <div
            className={`ml-18 mt-4 text-lg font-semibold ${
              faqOpen4 ? "block" : "hidden"
            }`}
          >
            <p>
              The opportunities are endless! Alignable directly connects you
              with local business owners in a way that no other platform can. By
              using these connections, you can spark conversations and find
              value through the relationships you form. If networking isn’t all
              that you’re looking for, we have endless discussions and learning
              opportunities to fine tune your business. We help you stick to
              what you’re good at, while empowering you with resources and
              support to succeed at the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
