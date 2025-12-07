import { RiBookOpenLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const ServiceCard = () => {
  return (
    <div className="border-2 border-gray-300 hover:border-[#f59e0b] rounded-lg shadow-sm px-5 pt-5 pb-5">
      <RiBookOpenLine size={50} color="#f59e0b" />
      <h3 className="text-xl font-medium text-[#0B2752] pt-6">
        Speaking & Writing
      </h3>
      <p className="text-gray-600 pt-2">
        Master all speaking tasks and essay writing with expert feedback and
        templates
      </p>

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
  );
};

export default ServiceCard;
