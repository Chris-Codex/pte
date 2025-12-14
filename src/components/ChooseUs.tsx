import SectionTitle from "./SectionnTitle";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import ChooseCard from "./ChooseeCard";

const ChooseUs = () => {
    return (
        <section className="bg-gray-100 w-full pt-10 pb-20 lg:pt-20">
            <SectionTitle title="Why Choose Us" subtitle="What makes our PTE training program stand out" />

            <div className="flex items-center justify-center w-full">
                <div className="w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-15 mx-5 lg:mx-0">
                    <ChooseCard Icon={FiTarget}
                        heading="Result-Oriented Approach" 
                        title="Our teaching methodology is specifically designed to help you achieve your target score efficiently."
                    />

                    <ChooseCard Icon={FaRegClock}
                        heading="Flexible Scheduling" 
                        title="Choose from various batch timings and study at your own pace with our flexible learning options."
                    />

                    <ChooseCard Icon={MdOutlineGroups2}
                        heading="Small Batch Size" 
                        title="Limited students per batch ensure personalized attention and better learning outcomes."
                    />

                    <ChooseCard Icon={IoTrophyOutline}
                        heading="Proven Track Record" 
                        title="Join hundreds of successful students who achieved their dream scores with our guidance."
                    />   
                </div>
            </div>
        </section>
    )
}

export default ChooseUs;