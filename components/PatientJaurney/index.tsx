"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Activity, HeartHandshake, Rocket } from "lucide-react";

const PatientJourney = () => {
  return (
    <section
      id="patient-journey"
      className="relative py-7 px-6 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0F] dark:to-[#0F172A]"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight drop-shadow-[0_0_20px_rgba(74,108,247,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 animate-pulse"
          >
            AI-Powered Automation at Every Touchpoint
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            From first contact to lifetime loyalty, OmniDent AI orchestrates seamless patient experiences that drive practice growth.
          </motion.p>
        </div>
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-white dark:ring-[#0A0A0F] shadow-[0_0_15px_4px_rgba(99,102,241,0.7)] animate-pulse">
                {step.icon}
              </span>



              <div className="p-5 rounded-xl bg-white dark:bg-[#0D1325]/90 shadow-md hover:shadow-[0_0_15px_rgba(74,108,247,0.7)] transition-all">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const journeySteps = [
  {
    id: 1,
    icon: <MessageCircle size={28} />,
    title: "Before The Appointment",
    description:
      "Convert more leads with AI that instantly responds across SMS, web chat, and voice calls. Natural conversations that understand context and book appointments seamlessly.",
  },
  {
    id: 2,
    icon: <CalendarCheck size={28} />,
    title: "Scheduling & Preparation",
    description:
      "Patients book, reschedule, or cancel through natural conversation. Real-time PMS integration ensures accuracy while automated reminders and digital forms save hours of admin work.",
  },
  {
    id: 3,
    icon: <Activity size={28} />,
    title: "During The Appointment",
    description:
      "Optimize chair time with pre-completed forms, verified insurance, and treatment plan automation. Your team focuses on patient care while AI handles the administrative burden.",
  },
  {
    id: 4,
    icon: <HeartHandshake size={28} />,
    title: "After the Appointment",
    description:
      "AI provides 24/7 post-op support, answers questions, and ensures patients feel cared for. Automated follow-ups and payment collection happen seamlessly in the background.",
  },
  {
    id: 5,
    icon: <Rocket size={28} />,
    title: "Long-Term Growth",
    description:
      "Build lasting relationships with automated review requests, intelligent recall campaigns, and reactivation sequences. Turn satisfied patients into practice advocates.",
  },
];

export default PatientJourney;
