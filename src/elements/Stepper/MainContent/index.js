import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainContent({ data, current }) {
  return (
    <AnimatePresence>
      <motion.div>{data[current] && data[current].content}</motion.div>
    </AnimatePresence>
  );
}
