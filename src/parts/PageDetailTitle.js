import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <AnimatePresence>
        <motion.div>
          <div className="row align-items-center">
            <div className="col">
              <Breadcrumb data={breadcrumb} />
            </div>
            <div className="col-auto text-center">
              <h1 className="h2">{data.name}</h1>
              <span className="text-gray-400">
                {data.city}, {data.country}
              </span>
            </div>
            <div className="col"></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
