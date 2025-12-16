import { IoCheckmarkCircleOutline } from "react-icons/io5";
import AboutAccordion from "./AboutAccordion";
import SectionTitle from "./SectionnTitle";

const About = () => {
    return (
        <section className="bg-gray-100 w-full pt-10 pb-20 lg:pt-20" id="about">
            <SectionTitle title="About Our Training" subtitle="Your path to PTE success starts here" />

            <div className="flex justify-center mt-10 mx-5 md:px-5">
                <div className="bg-white w-[900px] px-5 py-5 lg:p-10 rounded-lg">
                    <p className="text-[#1A2026] text-lg">
                        We are dedicated to helping students achieve their dream PTE scores through comprehensive training programs. Our expert-led courses combine proven teaching methodologies with the latest exam patterns to ensure you're fully prepared for every section of the PTE Academic test.
                    </p>

                    <div className="grid grid-cols-1 lg:flex gap-10 mt-5 lg:mt-10">
                        <div className="">
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Personalized study plans tailored to your needs" size={0} />
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Comprehensive coverage of all PTE modules" size={0} />
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Flexible online and offline classes" size={0} />
                        </div>
                        <div className="-mt-10 lg:mt-0">
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Expert instructors with years of PTE experience" size={0} />
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Regular mock tests and detailed feedback" size={0} />
                            <AboutAccordion Icon={IoCheckmarkCircleOutline} title="Proven strategies to maximize your score" size={0} />
                        </div>
                    </div>

                    <div className="border border-b-0 border-gray-300 mt-7"></div>

                    <p className="italic pt-9 text-[#1A2026]">"Our mission is to empower every student with the skills, confidence, and strategies needed to excel in their PTE examination and achieve their goals."</p>
                </div>   
            </div>
        </section>
    )
}

export default About;