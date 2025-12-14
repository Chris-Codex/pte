import ClassesCard from "./ClassesCard";
import SectionTitle from "./SectionnTitle";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { GoClock } from "react-icons/go";

const Classes = () => {
  return (
    <section className="bg-gray-50 w-full pt-10 pb-20 lg:pt-20" id="upcoming">
      <SectionTitle
        title="Upcoming Classes"
        subtitle="Join our next sessions and accelerate your PTE preparation"
      />

      <div className="flex items-center gap-10 justify-center">
        <ClassesCard
          category="All Levels"
          seats="5 seats left"
          title="Speaking Mastery Workshop"
          Icon={HiOutlineCalendarDateRange}
          date_title="Start Date"
          date="December 5, 2025"
          DIcon={GoClock}
          duration_title="Duration"
          duration="10:00 AM - 12:00 PM"
          CIcon={GoDotFill}
          topic_one="Read Aloud"
          topic_two="Repeat Sentence"
          topic_three="Describe Image"
        />
        <ClassesCard
          category="Intermediate"
          seats="8 seats left"
          title="Writing Excellence Batch"
          Icon={HiOutlineCalendarDateRange}
          date_title="Start Date"
          date="December 8, 2025"
          DIcon={GoClock}
          duration_title="Duration"
          duration="2:00 PM - 4:00 PM"
          CIcon={GoDotFill}
          topic_one="Essay Writing"
          topic_two="Summarize Written Text"
          topic_three="Templates"
        />
        <ClassesCard
          category="All Levels"
          seats="3 seats left"
          title="Full Mock Test Series"
          Icon={HiOutlineCalendarDateRange}
          date_title="Start Date"
          date="December 30, 2025"
          DIcon={GoClock}
          duration_title="Duration"
          duration="9:00 AM - 12:00 PM"
          CIcon={GoDotFill}
          topic_one="Complete PTE Practice"
          topic_two="Score Analysis"
          topic_three="Feedback Session"
        />
      </div>

      <div className="flex items-center justify-center mt-10">
        <p className="text-gray-600">
          Can't find a suitable time?{" "}
          <span className="text-[#f59e0b] font-semibold">Contact us</span> to discuss custom
          schedules.
        </p>
      </div>
    </section>
  );
};

export default Classes;
