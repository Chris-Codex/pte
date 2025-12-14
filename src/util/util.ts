import type { menuItem } from "../types/menu";
import type { UpcomingItems } from "../types/upcoming";

export const menuListData: menuItem[] = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Services" },
  { id: 4, label: "Why Us" },
  { id: 5, label: "Upcoming Classes" },
  { id: 6, label: "Contact" },
  { id: 7, label: "Get Started" },
];



export const upcomingList: UpcomingItems[] = [
  {
    data_one: [
      { id: 1, title: "Read Aloud" },
      { id: 2, title: "Repeat Sentence" },
      { id: 3, title: "Describe Image" },
    ],
    data_two: [
      { id: 1, title: "Essay Writing" },
      { id: 2, title: "Summarize Written Text" },
      { id: 3, title: "Templates" },
    ],
    data_three: [
      { id: 1, title: "Complete PTE Practice" },
      { id: 2, title: "Score Analysis" },
      { id: 3, title: "Feedback Session" },
    ],
  },
];

