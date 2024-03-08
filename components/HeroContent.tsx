"use client"

import React from 'react';
import {motion,AnimatePresence} from "framer-motion"
import { slideFromBottom, slideFromTop } from '@/motion/motion';

const HeroContent = () => {
    return (
      <AnimatePresence>
    <div className='z-[20] flex flex-col items-center justify-center h-full w-full text-white'>
                <motion.h1
                initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideFromTop}
                    className='text-[60px] md:text-[86px] z-[30] font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 yellow-shadow'
                >
                    Full Stack Developer
                </motion.h1>
                
            </div>
            </AnimatePresence>
  );
}

export default HeroContent;
