import React, { useState } from "react";
import india from "./Images/image.png";
import second from "./Images/1719687443359-h.webp";
import third from "./Images/1719673068708-h.webp";
import fourth from "./Images/1713510465760-h.webp";
import five from "./Images/1710250182387-h (1).webp";
import first from "./Images/image2.webp";
import { FaPlay } from "react-icons/fa";
import freelancer from "./Images/freelancer.webp";
import vera from "./Images/fourth.webp";
import tabside from "./Images/secondside.webp";
import secondmain from "./Images/second.webp";
import fivemain from "./Images/first2.webp";
import free2 from "./Images/third.webp";
import { motion } from "framer-motion";
import { SideBar } from "./sideBar";

const Home = () => {
  const data = [
    {
      logo: tabside,
      mainimage: india,
      simage: first,
      info: "India showed immense grit 7 victory run to clinch up a second T20 World Cup against South Africa.",
    },
    {
      logo: tabside,
      mainimage: secondmain,
      simage: second,
      info: "A public toilet caretaker's poverty-stricken life takes a drastic U-turn when he helps an old woman. How long will fate smile upon him?",
    },
    {
      logo: freelancer,
      mainimage: free2,
      simage: third,
      info: "A single misplaced word could mean death, and a new bride finds herself in such a situation in a conflict-ridden land. Who will save her?",
    },
    {
      logo: freelancer,
      mainimage: vera,
      simage: fourth,
      info: "Wedged between a court case, a bad marriage and his girlfriend, Waghmare gets further entangled.",
    },
    {
      logo: freelancer,
      mainimage: fivemain,
      simage: five,
      info: "Mohammed Siraj cut an emotional figure after winning the T20 World Cup final against South Africa in the West Indies.",
    },
  ];

  const [selected, setSelected] = useState(data[0]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative">
      <SideBar></SideBar>
      <div className="h-[20vh] block bg-gray-900"></div>
      <div
        className="ml-10 sticky top-0 bg-gray-900  bg-cover h-[90vh] z-[]"
        style={{ backgroundImage: `url(${selected.mainimage})` }}
      >
        <div className="w-full h-full bg-black opacity-40"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="absolute top-[60%] left-[10%] z-20"
        >
          <div className="w-[40%]">
            <img src={selected.logo} alt="logo" />
          </div>
          <div className="font-semibold leading-7 tracking-wider text-white w-[40%] opacity-80">
            {selected != null && selected.info}
          </div>
          <div className="mt-10">
            <button className="align-center justify-center items-center content-center text-center w-[40%] p-2 px-5 rounded-lg bg-white/40">
              <p className="flex items-center justify-center text-lg leading-8 text-white gap-x-3">
                <FaPlay /> Subscribe to watch
              </p>
            </button>
          </div>
        </motion.div>
        <div className="flex gap-x-2 absolute right-20 top-[90%] z-20">
          {data.map((value, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(value);
              }}
              className="hover:scale-150 hover:opacity-100 opacity-90"
            >
              <img
                className="object-contain w-14 h-14"
                src={value.simage}
                alt="side"
              />
            </div>
          ))}
        </div>
        <div className="h-[50vh] block"></div>
      </div>
    </div>
  );
};

export default Home;
