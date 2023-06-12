import { motion } from "framer-motion";

import app1 from "../assets/images/app1.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">Embrace Innovation</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Built with latest technologies
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                We’re incredibly passionate about our work. Building on our experience, talent, skills and core values has made this team what it is today. A solid source for a strikingly beautiful premium mobile app template collection.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>React 18</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>React Native 0.71</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Expo 48</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>CI Integration with Github Actions and EAS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <img
              src={app1}
              alt="f1"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
