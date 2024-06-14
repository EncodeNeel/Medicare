import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 mx-auto max-w-screen-md"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="heading text-center"
      >
        Contact Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 lg:mb-16 font-light text-center text__para"
      >
        Got a technical issue? Want to send feedback about a beta feature? Let
        us know.
      </motion.p>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        action="#"
        className="space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <label htmlFor="email" className="form__label">
            Your Email
          </label>
          <motion.input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="form__input mt-1"
            whileFocus={{
              scale: 1.05,
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
          <motion.input
            type="text"
            id="subject"
            placeholder="Let us know how we can help you"
            className="form__input mt-1"
            whileFocus={{
              scale: 1.05,
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="sm:col-span"
        >
          <label htmlFor="message" className="form__label">
            Your Message
          </label>
          <motion.textarea
            rows="6"
            type="text"
            id="message"
            placeholder="Leave a comment...."
            className="form__input mt-1"
            whileFocus={{
              scale: 1.05,
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            }}
          />
        </motion.div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="btn rounded sm:w-fit"
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
