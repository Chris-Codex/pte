import type {menuItem} from "../types/menu";
import { RiBookOpenLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { IoMdVideocam } from "react-icons/io";

const menuListData: menuItem[] = [
    { id: 1, label: "Home" },
    { id: 2, label: "About" },
    { id: 3, label: "Services" },
    { id: 4, label: "Why Us" },
    { id: 5, label: "Upcoming Classes" },
    { id: 6, label: "Contact" },
    { id: 7, label: "Get Started" }
]

export default menuListData;


const serviceCardData = [
    {id: 1, title: "A", Icon: RiBookOpenLine},
    {id: 2, title: "B", Icon: GoDotFill},
    {id: 3, title: "", Icon: GrNotes},
    {id: 4, title: "", Icon: IoMdVideocam}
]