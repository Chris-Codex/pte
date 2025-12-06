type SectionTitleProps = {
    title: string;
    subtitle: string;
}

const SectionTitle = ({ title, subtitle}: SectionTitleProps) => {
    return (
        <div className="flex flex-col items-center justify-center px-5">
            <h1 className="text-3xl lg:text-5xl font-semibold text-[#0B2752]">{title}</h1>
            <p className="text-gray-600 text-xl pt-3">{subtitle}</p>
        </div>
    )
}

export default SectionTitle;