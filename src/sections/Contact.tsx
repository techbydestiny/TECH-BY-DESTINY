import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
export const ContactSection = () => {
  return <div className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className=" container">
      <div className="border-2 border-emerald-300 border-r-sky-200 border-t-sky-200 text-gray-300 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage})`
        }}></div>
        <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
            <p className="text-sm md:text-base mt-2">
              Ready to bring your next project to life? Let's connect and discuss how i can help you achieve your goals.
            </p>
          </div>
          <div>
            <button className="text-white bg-gray-800 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 hover:scale-110 duration-300 ease-in-out">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
