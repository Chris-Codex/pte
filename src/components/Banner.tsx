
import BannerCard from './BannerCard';
import CustomBtn from './CustomBtn';
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoAnalytics } from "react-icons/io5";

const Banner = () => {
    return (
        <section className="bg-gray-100 pb-30">
            <div className="flex flex-col items-center justify-center pt-10 md:pt-40">
                <h1 className="text-5xl text-center w-80 lg:w-full md:text-7xl font-bold text-[#0B2752]">Master Your PTE Exam</h1>
                <h1 className="text-5xl text-center md:text-7xl text-amber-500 font-bold">With Expert Guidance</h1>
                <p className="text-[20px] w-90 md:text-2xl text-gray-600 text-center flex justify-center md:w-160 pt-7">Achieve your dream score with personalized training, proven strategies, and comprehensive practice materials.</p>
            </div>

            <div className="flex gap-3 items-center justify-center mt-10">
                <CustomBtn text="Start Your Journey" classes='cursor-pointer w-[180px] bg-amber-500 py-2 rounded-md text-[18px] text-white' />
                <CustomBtn text="Learn More" classes='cursor-pointer w-[130px] bg-white py-1.5 rounded-md text-[18px] text-black border border-[#000] border-2 hover:bg-[#0B2752] hover:text-white' />
            </div>

            <div className='flex items-center justify-center'>
                <div className='flex flex-col mx-4 md:flex-row lg:grid lg:grid-cols-3 lg:place-items-center lg:w-[800px]  gap-8  mt-20'>
                    <BannerCard Icon={LiaCertificateSolid} score="95%" title='Succes Rate' size={0} />
                    <BannerCard Icon={AiOutlineUsergroupAdd} score="500%" title='Succes Rate' size={0} />
                    <BannerCard Icon={IoAnalytics} score="79%" title='Succes Rate' size={0} />
                </div>
            </div>
        </section>
    )
}

export default Banner;