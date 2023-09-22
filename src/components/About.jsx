import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "src/constants";
import { fadeIn } from "src/utils/motion";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const Card = ({ title, icon, index }) => {
    return (
      <Tilt>
        <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
          <div className="flex justify-center items-center h-[260px] w-[260px] blue-pink-gradient rounded-[16px] mb-6">
            <div className="flex flex-col justify-center items-center h-[254px] w-[254px] bg-blue-200 rounded-[14px] p-4">
              <img src={icon} alt={icon} className="w-16 h-16 mb-6" />
              <p className="text-[20px] text-center font-semibold font-mono">
                {title}
              </p>
            </div>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  return (
    <>
      <section className="w-full flex flex-col justify-start px-4">
        <p className="text-[14px] sm:text-[18px] font-mono text-blue-800">
          Introduction
        </p>
        <p className="text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] font-mono text-white">
          Overview.
        </p>
        <p className="text-[16px] text-blue-800 w-full md:max-w-[70%] leading-7">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>

        <div className="w-full flex flex-wrap justify-around mt-12">
          {services.map((data, index) => {
            return (
              <Card
                key={data.title}
                title={data.title}
                icon={data.icon}
                index={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export { About };
