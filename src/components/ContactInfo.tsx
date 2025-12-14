type ContactInfoProps = {
    Icon: React.ElementType;
    phone: string;
    number: string;
}

const ContactInfo = ({ Icon, phone, number}: ContactInfoProps) => {
  return (
    <div className="flex gap-5 mt-6">
      <div className="flex items-center justify-center w-12 rounded-md bg-[#ffe5b950]">
        <Icon size={25} color="#f59e0b" />
      </div>
      <div className="">
        <h2 className="font-medium">{phone}</h2>
        <p className="text-gray-600">{number}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
