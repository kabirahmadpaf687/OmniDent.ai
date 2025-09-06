'use client'
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const  Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-7 px-6 md:py-20 lg:py-28 bg-[url('/images/feature/features-bg-white.jpg')]
    dark:bg-[url('/images/feature/features-bg.jpg')]
    bg-cover bg-left lg:bg-center"
      >
        <div className="container ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Transforming Your Patient Journey Experience"
              paragraph="At OmniDent.ai, we revolutionize the patient journey with our AI-driven solutions. Experience seamless engagement from initial contact to ongoing care."
              center
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
