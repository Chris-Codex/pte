type AccordionProps = {
    Icon: React.ElementType;
    title: string;
    size: number; 
}


const AboutAccordion = ({ Icon, title }: AccordionProps) => {
    return (
        <div className="flex items-center gap-4 pb-2">
            <Icon size={25} color="#f59e0b" />
            <p className=" text-[#1A2026]">{title}</p>
        </div>
    )
}

export default AboutAccordion;