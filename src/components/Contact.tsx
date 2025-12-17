import ContactInfo from "./ContactInfo";
import SectionTitle from "./SectionnTitle";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { useState } from "react";
import type { formError, formType } from "../types/form";


const encode = (data: Record<string, string>) => Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")

const Contact = () => {
  const [form, setForm] = useState<formType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<formError>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validation = () => {
    const newError: formError = {};

    if (!form.name) newError.name = "Name is required";
    if (!form.email.includes("@")) newError.email = "Email is required";
    if (!form.phone) newError.phone = "Phone number is required";
    if (!form.message) newError.message = "Message is required";

    return newError;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validation();
    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      try {
        await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encode({
            "form-name": "contact",
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
          }),
        });
        console.log("Form Submitted:", form);

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("Netlify form submission error:", error);
      }
    }
  };

  return (
    <section className="pt-20 pb-20 bg-gray-100" id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Ready to start your PTE journey? Contact us today"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 mx-5 md:mx-10 lg:mx-70 mt-5 lg:mt-15">
        <div className="">
          <h1 className="text-2xl text-[#0B2752] font-semibold">
            Contact Information
          </h1>
          <p className="text-gray-600 pt-4 lg:pt-8">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>

          <ContactInfo Icon={FiPhone} phone="Phone" number="08035444998" />
          <ContactInfo
            Icon={AiOutlineMail}
            phone="Email"
            number="dptetutorials@gmail.com"
          />
          <ContactInfo
            Icon={MdOutlineLocationOn}
            phone="Location"
            number="Online - Via Zoom"
          />
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-md shadow-md"
        >
          {/* REQUIRED Netlify fields */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          {/* Name */}
          <div className="flex flex-col mb-4">
            <label className="text-[#0B2752] font-medium">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-2 border border-gray-300 rounded-md px-3 h-10"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="text-[#0B2752] font-medium">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 border border-gray-300 rounded-md px-3 h-10"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col mb-4">
            <label className="text-[#0B2752] font-medium">
              Phone Number *
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 border border-gray-300 rounded-md px-3 h-10"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col mb-4">
            <label className="text-[#0B2752] font-medium">
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mt-2 border border-gray-300 rounded-md px-3 h-28"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Success message */}
          {success && (
            <p className="text-green-600 mb-4">
              Message sent successfully! We’ll get back to you shortly.
            </p>
          )}

          <button
            type="submit"
            className="bg-[#f59e0b] w-full py-3 rounded-md text-white text-lg hover:bg-amber-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
