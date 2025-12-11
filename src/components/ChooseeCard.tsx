type ChooseCardProps =  {
    Icon: React.ElementType;
    heading: string;
    title: string;
}

const ChooseCard = ({ Icon, heading, title}: ChooseCardProps) => {
    return (
        <div className="flex gap-3 bg-white p-8 rounded-[10px]">
            <div className="flex items-center justify-center p-2 h-13 w-20 rounded-[10px] bg-[#F49D2533]">
                <Icon size={30} color="#f59e0b" />
            </div>
            <div className="">
                <h1 className="text-xl font-medium">{heading}</h1>
                <p className="text-gray-600 pt-2">{title}</p>
            </div>
        </div>
    )
}

export default ChooseCard;