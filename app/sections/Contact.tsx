"use client";
import { RefObject } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn } from "@/constants/motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef: RefObject<HTMLFormElement> = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_by2trvo",
        "template_jjegxdr",
        {
          from_name: form.name,
          to_name: "Om Patel",
          from_email: form.email,
          to_email: "omunite21@gmail.com",
          message: form.message,
        },
        "VeFeVdEHL9F9_i6xp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thankyou!! I will respond to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Sorry!! Something went wrong");
        }
      );
  };
  return (
    <section
      className="flexBetween font-poppins py-6 lg:px-0 px-5 xl:mt-12 sm:flex-row flex-col-reverse sm:gap-0 gap-10"
      id="Contact"
    >
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-7 p-6 bg-YellowPrimaryBg dark:bg-zinc-900 rounded"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <label className="flex flex-col space-y-1">
          <span className=" text-PinkTheme font-semibold">Your Name</span>
          <input
            type="text"
            name="name"
            placeholder="What's your Name?"
            value={form.name}
            onChange={handleChange}
            className=" py-4 px-2 placeholder:text-gray-400 bg-stone-50 dark:bg-zinc-950 text-slate-900 dark:text-stone-50 w-full rounded-md "
          />
        </label>
        <label className=" flex flex-col space-y-1 ">
          <span className=" text-PinkTheme font-semibold ">Your E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="What's your e-mail?"
            value={form.email}
            onChange={handleChange}
            className="py-4 px-2 w-full rounded-md placeholder:text-gray-400 bg-stone-50 dark:bg-zinc-950 text-slate-900 dark:text-stone-50"
          />
        </label>
        <label className=" flex flex-col space-y-1 ">
          <span className=" text-PurpleTheme font-semibold ">Your Message</span>
          <textarea
            name="message"
            cols={30}
            rows={7}
            placeholder="Enter Project Details, any Portfolio improvements and suggestions."
            value={form.message}
            onChange={handleChange}
            className=" py-4 px-2 w-full rounded-md bg-stone-50 dark:bg-zinc-950 text-slate-900 dark:text-stone-50 "
          />
        </label>
        <button
          type="submit"
          className="font-medium text-center px-5 py-3 buttonTransition text-stone-50 dark:text-slate-900 rounded"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </motion.form>
      <motion.div
        className="sm:text-left text-center flex flex-col sm:items-start items-center sm:space-y-5 space-y-10 sm:w-[50%] w-full "
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className=" font-bold text-[36px] w-[80%] dark:text-stone-50 text-slate-900 ">
          Let&lsquo;s&nbsp;
          <span className=" font-kepler italic text-PurpleTheme ">
            talk
          </span>{" "}
          for something special
        </h1>
        <p className="w-[70%] text-gray-500">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences
        </p>
        <Link href="mailto:omunite21@gmail.com" className="mt-5 text-blue-600">
          omunite21@gmail.com
        </Link>
      </motion.div>
    </section>
  );
};

export default Contact;
