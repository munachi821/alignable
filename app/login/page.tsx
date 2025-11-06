import { ArrowLeft } from "lucide-react";

const page = () => {
  return (
    <section className="min-h-screen min-w-screen">
      <div className="mx-auto max-w-[350px] text-center space-y-6 mt-7">
        <h1 className="text-[33px] text-[#3c3f43] font-semibold">
          Sign in to Alignable
        </h1>

        {/* Enter Your Email */}
        <div className="hidden">
          <div className="max-w-full border border-[#d3d3d3] rounded-md p-3">
            <form action="#" className="space-y-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="w-full h-11 border border-[#d3d3d3] rounded-sm pl-2 outline-0 bg-[#f3f5f8]"
              />
              <button className="bg-[#6c33d8] w-full h-9.5 text-sm font-semibold text-white rounded-md hover:bg-[#391590] transition-colors cursor-pointer">
                Next
              </button>
              <div className="space-x-1 text-left">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="text-sm text-[#3c3f43]">
                  Remember me
                </label>
              </div>
            </form>
          </div>
          <p className="text-sm font-semibold text-[#3c3f43]">
            Not an Alignable Member?{" "}
            <a
              href="#"
              className="text-[#6c33d8] hover:text-[#391590] transition-colors"
            >
              Sign Up
            </a>
          </p>
        </div>

        {/* Enter your password */}
        <div>
          <div className="max-w-full border border-[#d3d3d3] rounded-md p-3">
            <div className="flex w-full mb-3 relative">
              <div className="text-[#7f7f7f] hover:text-[#666666] transition-colors cursor-pointer w-fit absolute">
                <ArrowLeft />
              </div>
              <div className="space-y-2 w-full">
                <div className="size-24 rounded-full bg-[#fff2db] text-[45px] font-semibold text-[#f3b82f] flex items-center justify-center mx-auto">
                  MO
                </div>
                <p className="font-semibold text-[#3e3e3e]">
                  munaonye4@gmail.com{" "}
                </p>
              </div>
            </div>
            <form action="#" className="space-y-2">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full h-11 border border-[#d3d3d3] rounded-sm pl-2 outline-0 bg-[#f3f5f8]"
              />
              <button className="bg-[#6c33d8] w-full h-9.5 text-sm font-semibold text-white rounded-md hover:bg-[#391590] transition-colors cursor-pointer">
                Continue to sign in
              </button>
              <p className="text-sm font-semibold text-[#3c3f43] mt-3">
                <a
                  href="#"
                  className="text-[#6c33d8] hover:text-[#391590] transition-colors underline"
                >
                  Forgot password?
                </a>{" "}
                or{" "}
                <a
                  href="#"
                  className="text-[#6c33d8] hover:text-[#391590] transition-colors underline"
                >
                  Sign in via Email
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
