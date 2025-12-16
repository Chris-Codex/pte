type customButtonProps = {
    text: string;
    classes: string;
}

const CustomBtn = ({ text, classes }: customButtonProps) => {
    return (
        <button className={`${classes}`}>{text}</button>
    )
}

export default CustomBtn;