import CustomBtn from "./CustomBtn";
import banner_img from "../assets/banner-img.png";
import pearson_img from "../assets/pearson.png";

const Banner = () => {
  return (
    <section className="bg-[#0A1B3A] pb-16 lg:pb-24" id="home">
      <div className="mx-auto pt-20 max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-10 lg:pt-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="pt-16 sm:pt-24 lg:pt-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-500">
              Master Your PTE Exam
            </h1>

            <h2 className="text-4xl sm:text-5xl mt-4 font-bold text-amber-500">
              With Expert Guidance
            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white max-w-xl">
              Achieve your dream score with personalized training, proven
              strategies, and comprehensive practice materials.
            </p>

            <div className="mt-8 w-full sm:w-auto">
              <CustomBtn
                text="Start Your Journey"
                classes="cursor-pointer w-full sm:w-[220px] bg-amber-500 py-2.5 rounded-md text-[18px] text-white"
              />
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex items-center justify-center bg-white mt-20 rounded-md p-3">
            <img
              src={banner_img}
              alt="banner"
              className="w-[560px] h-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Pearson block */}
        <div className="mt-10 border-2 border-white rounded-md p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex items-center justify-center  rounded-md p-3 w-full lg:w-40">
            <img src={pearson_img} alt="logo" className="w-32 h-auto" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-white">
              Pearson Certified PTE Trainer – Level 2 (Professional)
            </h3>

            <p className="mt-3 text-base sm:text-lg lg:text-xl text-white">
              Achieve PTE Academic Score improvement you need, or your money
              back!
            </p>

            <div className="mt-5">
              <CustomBtn
                text="Learn More"
                classes="cursor-pointer w-full sm:w-[220px] bg-white py-2.5 rounded-md text-[18px] text-black hover:bg-[#f59e0b] hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
