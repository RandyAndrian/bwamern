import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <AnimatePresence>
                <motion.div>
                  <div className="card h-100">
                    <figure className="img-wrapper">
                      <img src={item.url} alt={item.id} className="img-cover" />
                    </figure>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
