import { IoCheckmarkCircleOutline } from "react-icons/io5";
import AboutAccordion from "./AboutAccordion";

const About = () => {
    return (
        <section className="bg-gray-50 w-full pt-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-semibold text-[#0B2752]">About Our Training</h1>
                <p className="text-gray-600 text-[20px] pt-3">Your path to PTE success starts here</p>
            </div>

            <div className="flex justify-center mt-10 rounded-md">
                <div className="bg-white w-[900px] p-10">
                    <p className="text-[#1A2026] text-[18px]">
                        We are dedicated to helping students achieve their dream PTE scores through comprehensive training programs. Our expert-led courses combine proven teaching methodologies with the latest exam patterns to ensure you're fully prepared for every section of the PTE Academic test.
                    </p>

                    <div className="flex gap-10 mt-10">
                        <div className="">
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Personalized study plans tailored to your needs" size={0} />
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Comprehensive coverage of all PTE modules" size={0} />
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Flexible online and offline classes" size={0} />
                        </div>
                        <div className="">fdfdff</div>
                    </div>
                </div>   
            </div>

           
        </section>
    )
}

export default About;