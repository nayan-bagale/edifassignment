import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

function Carditems({ children, handleCards, data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  let id = data.h2.toLowerCase();
  useEffect(() => {
    if (isInView) {
      handleCards(id);
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        key={id}
        id={id}
        className={
          "sticky top-[7rem] bottom-[7rem] " +
          (isInView ? " z-10 " : "z-0")
        }
        animate={{
          scale: isInView ? 1.2 : 1,
          filter: isInView ? "blur(0px)" : "blur(4px)",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div className=" relative md:w-[200px] md:h-[290px] lg:w-[250px] lg:h-[310px] bg-white rounded-[8px] flex flex-col items-center justify-center">
          <div className=" left-[-2rem] top-[-2.5rem] relative bg-[#F1F8FF] rounded-full md:w-[80px] md:h-[80px] lg:w-[80.59px] lg:h-[80.59px] ">
            <Image
              src={data.svg[1].img}
              width={data.svg[1].width}
              height={115.56}
              className={" absolute " + data.svg[1].position}
              alt="svg"
            />
          </div>
          <div className=" absolute text-[#1F1F1F] font-bison scale-y-150 font-bold md:text-base lg:text-lg bottom-[25%] left-[15%]">
            {data.h2}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Carditems;