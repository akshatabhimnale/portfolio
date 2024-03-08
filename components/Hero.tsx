import React from 'react'
import HeroContent from './HeroContent'
import { Skill_data } from '@/constants'
import Skills from './skills'

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center w-full h-full'>
          <video
              autoPlay
              loop
              muted
              className='absolute w-full h-full bottom-[365px] z-[10] left-0 object-cover'
          >
              <source src='/gold.mp4' type='video/mp4'/>
          </video>
          <video
              autoPlay
              loop
              muted
              className='absolute w-full h-full -bottom-[365px] left-0 z-[1] rotate-180 object-cover'
          >
              <source src='/gold.mp4' type='video/mp4'/>
          </video>
          <HeroContent />
          <Skills/>
    </div>
  )
}

export default Hero
