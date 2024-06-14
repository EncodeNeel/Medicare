import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="py-[30px] px-3 lg:px-5"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
        className="text-[26px] leading-9 text-headingColor font-[700]"
      >
        {name}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
        className="text-[16px] leading-7 font-[400] text-textColor mt-4"
      >
        {desc}
      </motion.p>

      <div className="flex items-center justify-between mt-[30px]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="doctors"
            className="w-[50px] h-[50px] rounded-full border border-solid border-[#181A1e] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
          >
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
          </Link>
        </motion.div>
        <motion.span
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
          className="w-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
