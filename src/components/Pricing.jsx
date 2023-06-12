import { useState } from "react";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Find Your Perfect Fit
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Choose your best plan
              </h2>
              <p className="mb-6 text-customGrayText">
                Select the plan that suits your needs.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 justify-center items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Standard License
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $34
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-customSecondary leading-loose text-left">
                    Use, by you or one client, in a single end product which end users <span className="font-bold">ARE NOT</span> charged for
                  </p>
                  <a href="https://codecanyon.net/item/food-star-react-native-food-delivery-template/28398069" target="_blank">
                    <div
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-4"
                    >
                      Get Started
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Extended License
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $85
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-customSecondary leading-loose text-left">
                    Use, by you or one client, in a single end product which end users CAN BE charged for.
                  </p>
                  <a href="https://codecanyon.net/item/food-star-react-native-food-delivery-template/28398069" target="_blank">
                    <div
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-4"                    
                    >
                      Get Started
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
