import SectionTitle from "./SectionnTitle";
import { RiBookOpenLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const Services = () => {
    return (
        <section className="bg-gray-50 w-full pt-10 pb-20 lg:pt-20">
            <SectionTitle title="Our Services" subtitle="Comprehensive training covering all aspects of the PTE Academic exam" />

            <div className="flex items-center justify-center w-full">
                <div className="w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-15 mx-5 lg:mx-0">
                    <div className="border-2 border-gray-300 hover:border-[#f59e0b] rounded-lg shadow-sm px-5 pt-5 pb-5">
                        <RiBookOpenLine size={50} color="#f59e0b" />
                        <h3 className="text-xl font-medium text-[#0B2752] pt-6">Speaking & Writing</h3>
                        <p className="text-gray-600 pt-2">Master all speaking tasks and essay writing with expert feedback and templates</p>

                        <div className="">
                            <div className="flex items-center gap-3 mt-4">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Read Aloud</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Repeat Sentence</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Describe Image</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Essay Writing</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 hover:border-[#f59e0b] rounded-lg shadow-sm px-5 pt-5 pb-5">
                        <GrNotes size={50} color="#f59e0b" />
                        <h3 className="text-xl font-medium text-[#0B2752] pt-6">Listening</h3>
                        <p className="text-gray-600 pt-2">Enhance your listening skills with targeted practice and proven techniques</p>

                        <div className="">
                            <div className="flex items-center gap-3 mt-4">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Summarize Spoken Text</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Multiple Choice</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Fill in the Blanks</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Highlight Correct Summary</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 hover:border-[#f59e0b] rounded-lg shadow-sm px-5 pt-5 pb-5">
                        <MdOutlineHeadphones size={50} color="#f59e0b" />
                        <h3 className="text-xl font-medium text-[#0B2752] pt-6">Reading</h3>
                        <p className="text-gray-600 pt-2">Develop speed reading and comprehension skills for all reading tasks</p>

                        <div className="">
                            <div className="flex items-center gap-3 mt-4">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Multiple Choice</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Re-order Paragraphs</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Fill in the Blanks</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Reading & Writing Fill</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 hover:border-[#f59e0b] rounded-lg shadow-sm px-5 pt-5 pb-5">
                        <IoVideocamOutline size={50} color="#f59e0b" />
                        <h3 className="text-xl font-medium text-[#0B2752] pt-6">Mock Tests</h3>
                        <p className="text-gray-600 pt-2">Full-length practice tests simulating actual PTE exam conditions</p>

                        <div className="">
                            <div className="flex items-center gap-3 mt-4">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Timed Practice</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Score Analysis</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Detailed Feedback</p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <GoDotFill size={13} color="#f59e0b" />
                                <p className="text-gray-600 text-[14px]">Performance Tracking</p>
                            </div>
                        </div>
                    </div>
                    


                    
                </div>
            </div>
        </section>
    )
}

export default Services;