type TestimonialCardProps = {
  userImg: string;
  name: string;
  occupation: string;
  testimony: string;
};

const TestimonialCard = ({
  userImg,
  name,
  occupation,
  testimony,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 md:p-7 rounded-md shadow-sm mb-14 w-100 lg:w-full">
      <div className="flex gap-4">
        <div className="">
          <img src={userImg} alt="image" className="w-18 h-18 object-cover rounded-[100%]" />
        </div>
        <div className="">
          <h1 className="font-bold text-[#0B2752] text-[20px]">{name}</h1>
          <p className="text-[#f59e0b]">{occupation}</p>
        </div>
      </div>
      <p className="text-gray-600 pt-5">{testimony}</p>
    </div>
  );
};

export default TestimonialCard;
