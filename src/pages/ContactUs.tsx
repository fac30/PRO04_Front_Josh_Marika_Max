import { motion } from "framer-motion";
import ContactUsForm from "../components/common/ContactUsForm";

export default function ContactUsPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <motion.div 
      className="min-h-3.5  flex items-center justify-center px-4 my-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-4xl w-full bg-white shadow-sm rounded-lg p-8"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-3xl text-black font-bold text-center mb-4"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-gray-600 text-center mb-8"
          variants={itemVariants}
        >
          We'd love to hear from you! Whether you have a question, feedback, or 
          just want to say hello, feel free to reach out using the form below.
        </motion.p>
        <motion.div variants={itemVariants}>
          <ContactUsForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
