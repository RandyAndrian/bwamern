import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Controller(props) {
  return (
    <AnimatePresence>
      <motion.div>
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-3">{props.children}</div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
