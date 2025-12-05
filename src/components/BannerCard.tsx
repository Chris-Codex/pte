type BannerCardProps = {
    Icon: React.ElementType;
    score: string;
    title: string;
    size: number;
}

const BannerCard = ({Icon, score, title}: BannerCardProps) => {
    return (
        <div className="w-full bg-white md:w-[200px] flex flex-col items-center justify-center py-4 rounded-md">
            <Icon size={40} color="#F59E0B" />
            <h1 className="text-[30px] font-semibold text-[#0B2752]">{score}</h1>
            <p className="text-gray-600">{title}</p>
        </div>
    )
}

export default BannerCard;