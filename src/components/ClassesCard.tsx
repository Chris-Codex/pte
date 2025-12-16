import { GoBook } from "react-icons/go";
import payWithPaystack from "./PaystackButton";

type ClassesProps = {
  category: string;
  seats: string;
  title: string;
  Icon: React.ElementType;
  date_title: string;
  date: string;
  duration_title: string;
  duration: string;
  DIcon: React.ElementType;
  CIcon: React.ElementType;
  topic_one: string;
  topic_two: string;
  topic_three: string;

};




const ClassesCard = ({
  category,
  seats,
  title,
  Icon,
  DIcon,
  date_title,
  date,
  duration_title,
  duration,
  CIcon,
  topic_one,
  topic_two,
  topic_three
}: ClassesProps) => {

  const handlePayment = () => {
    payWithPaystack({
      email: "testuser@email.com",
      amount: 50000, // ₦500
      onSuccess: (reference) => {
        console.log("Payment successful:", reference);
        // TODO: send reference to backend for verification
      },
    });
  };

  return (
    <div className="border-2 border-gray-300 w-80 md:w-full lg:w-100  mt-15 hover:border-[#f59e0b] rounded-lg shadow-sm  pb-5">
      <div className="w-full px-5 pt-5 pb-5 bg-[#f49d250d]">
        <div className="flex justify-between">
          <div className="flex items-center justify-center px-2 rounded-2xl bg-[#f59e0b] text-[13px] text-white">
            {category}
          </div>
          <div className="flex items-center justify-center px-2 rounded-2xl border border-black text-[#0B2752] text-[13px]">
            {seats}
          </div>
        </div>
        <h1 className="text-xl font-medium pt-3 text-[#0B2752]">{title}</h1>
      </div>

      <div className="flex items-center px-5 pt-4 gap-3">
        <div className="flex items-center justify-center bg-[#ffe5b950] rounded-md p-2">
          <Icon size={20} color="#f59e0b" />
        </div>
        <div className="">
          <p className="text-[14px] text-gray-600">{date_title}</p>
          <h2 className="text-[17px] text-[#0B2752] font-medium">{date}</h2>
        </div>
      </div>

      <div className="flex items-center px-5 pt-4 gap-3">
        <div className="flex items-center justify-center bg-[#ffe5b950] rounded-md p-2">
          <DIcon size={20} color="#f59e0b" />
        </div>
        <div className="">
          <p className="text-[14px] text-gray-600">{duration_title}</p>
          <h2 className="text-[17px] text-[#0B2752] font-medium">{duration}</h2>
        </div>
      </div>

      <div className="border-b border-b-gray-300 mx-5 mt-4"></div>

      <div className="mt-3 mx-5">
        <div className="flex items-center gap-3">
          <GoBook size={20} color="#f59e0b" />
          <p className="font-semibold text-[14px] -mt-1">Topics Covered:</p>
        </div>

        <div className="mx-7">
          <div className="">
            <div className="flex items-center gap-3 mt-4">
              <CIcon size={13} color="#f59e0b" />
              <p className="text-gray-600 text-[14px]">{topic_one}</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <CIcon size={13} color="#f59e0b" />
              <p className="text-gray-600 text-[14px]">{topic_two}</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <CIcon size={13} color="#f59e0b" />
              <p className="text-gray-600 text-[14px]">{topic_three}</p>
            </div>
          </div>
        </div>

        <button  onClick={handlePayment} className="bg-[#f59e0b] text-white font-semibold w-full mt-4 py-3 rounded-md">Enroll Now</button>
      </div>
    </div>
  );
};

export default ClassesCard;
