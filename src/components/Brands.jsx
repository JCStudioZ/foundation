import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                Try before you buy
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
                <a href="https://codecanyon.net/item/food-star-react-native-food-delivery-template/28398069" target="_blank">
                  <div
                    className="py-2 px-4 w-full rounded-xl rounded-t-xl border-customApple border-2 text-white font-bold leading-loose mt-4 justify-center items-center flex"
                  >
                    <img src="https://developer.apple.com/assets/elements/icons/testflight/testflight-64x64.png" className="w-[40px] h-[40px]"/>
                    <span className="ml-3">Try on Testflight</span>
                  </div>
                </a>
                <a href="https://codecanyon.net/item/food-star-react-native-food-delivery-template/28398069" target="_blank" className="ml-4">
                  <div
                    className="py-2 px-4 w-full rounded-xl rounded-t-xl border-customGoogle border-2 text-white font-bold leading-loose mt-4 justify-center items-center flex"                    
                  >
                    <svg className="w-[40px] h-[40px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path></svg>
                    <span className="ml-3">Download APK file</span>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
