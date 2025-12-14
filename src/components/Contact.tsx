import ContactInfo from "./ContactInfo";
import SectionTitle from "./SectionnTitle";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { useState } from "react";
import type { formError, formType } from "../types/form";

const Contact = () => {
    const [form, setForm] = useState<formType>({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [error, setErrors] = useState<formError>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev, [name]: value
        }));
    }

    const validation = () => {
        const newError: formError = {};

        if (!form.name) newError.name = "Name is required";
        if (!form.email.includes("@")) newError.email = "Email is required";
        if (!form.phone) newError.phone = "Phone number is required";
        if (!form.message) newError.message = "Message is required";

        return newError;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationError = validation();
        setErrors(validationError)

        if (Object.keys(validationError).length === 0) {
            console.log("Form Submitted:", form)

            setForm({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
        }
    }


  return (
    <section className="pt-20 pb-20" id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Ready to start your PTE journey? Contact us today"
      />

      <div className="grid grid-cols-2 gap-15 mx-70 mt-15">
        <div className="">
          <h1 className="text-2xl text-[#0B2752] font-semibold">
            Contact Information
          </h1>
          <p className="text-gray-600 pt-8">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>

          <ContactInfo
            Icon={FiPhone}
            phone="Phone"
            number="+1 (555) 123-4567"
          />
          <ContactInfo
            Icon={AiOutlineMail}
            phone="Email"
            number="contact@pteexcellence.com"
          />
          <ContactInfo
            Icon={MdOutlineLocationOn}
            phone="Location"
            number="Online - Via Zoom"
          />
        </div>

        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-[#0B2752]                                                                                                                                            ">
              Full Name<span> *</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-2 w-full border-gray-300 border-2 h-10 rounded-md px-3"
            />
            {error && <span className="text-red-500">{error.name}</span>}
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-[#0B2752]                                                                                                                                            ">
              Email Address<span> *</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="mt-2 w-full border-gray-300 border-2 h-10 rounded-md px-3"
            />
             {error && <span className="text-red-500">{error.email}</span>}
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-[#0B2752]                                                                                                                                            ">
              Phone Number<span> *</span>
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+234898468833"
              className="mt-2 w-full border-gray-300 border-2 h-10 rounded-md px-3"
            />
             {error && <span className="text-red-500">{error.phone}</span>}
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-[#0B2752]                                                                                                                                            ">
              Message<span> *</span>
            </label>
            <textarea
              placeholder="Tell us about your PTE goals..."
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full border-gray-300 border-2 h-10 rounded-md px-3"
            ></textarea>
             {error && <span className="text-red-500">{error.message}</span>}
          </div>

          <button type="submit" className="bg-[#f59e0b] w-full py-3 cursor-pointer rounded-md mt-4 text-white text-[18px]">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
