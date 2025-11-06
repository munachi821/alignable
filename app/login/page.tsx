const page = () => {
  return (
    <section className="min-h-screen min-w-screen">
      <div className="mx-auto max-w-[350px] text-center space-y-6 mt-7">
        <h1 className="text-[33px] text-[#3c3f43] font-semibold">
          Sign in to Alignable
        </h1>

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
    </section>
  );
};
export default page;
