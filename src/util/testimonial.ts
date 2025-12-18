import image_1 from "../assets/img1.webp";
import image_2 from "../assets/image_2.jpg"
import image_3 from "../assets/img_3.jpg";
import image_4 from "../assets/image_4.webp"

type TestimonialCardProps = {
  userImg: string;
  name: string;
  occupation: string;
  testimony: string;
};

export const testimonials: TestimonialCardProps[] = [
    {
        userImg: image_1,
        name: "Shraddha",
        occupation: "Registered Nurse", 
        testimony: "Attend the live classes and do the mock test and the guided mock test. They really help you to really know all the sections of the test well and then you will feel much calmer and confident on test day."
    },
    {
        userImg: image_2,
        name: "Chandni",
        occupation: "Medical Doctor", 
        testimony: "I am super happy to share that I took the PTE test today and within two hours got this beautiful result. Listening: 82, Reading: 81, Speaking: 90, Writing: 79. Can’t thank E2 enough for this score."
    },
    {
        userImg: image_3,
        name: "Prima",
        occupation: "Registered Nurse", 
        testimony: "I scored 90. I was over the moon! I cannot explain how happy I was. ... (My advice to others is) Make that investment, it's a worthwhile investment. "
    },
    {
        userImg: image_4,
        name: "Kelvin",
        occupation: "Registered Nurse", 
        testimony: "It is a small amount (compared to the) expertise you will get from experienced PTE tutors. The main difference is the mentors."
    }
]