import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ReviewSection = () =>{

    return (
    <div className="py-5">
    <div className="container w-[500px]">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-200 text-gray-900 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage})`
        }}></div>
        <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
          <div>
            <h2 className="font-bold text-xl md:text-2xl">Leave Review Of Your Express Working With Me</h2>
            <form className="text-sm md:text-base mt-2">
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last Name"/>
              <textarea placeholder="Leave A Message">
              </textarea>
            </form>
          </div>
          <div>
            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900">
              <span className="font-semibold">Send</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}