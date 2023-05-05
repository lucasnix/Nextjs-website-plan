'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About JavaScript Web development " textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">JavaScript</span> is one of the most popular programming languages in the world, 
        and for good reason. It's a versatile language that can be used 
        on both the front-end and back-end of web development, making it a 
        valuable tool for developers of all levels.{' '}
        <span className="font-extrabold text-white">
          This website show
        </span>{' '}
        exacly how the tecnology works{' '}
        <span className="font-extrabold text-white">with practical examples</span> that works in all kind of IOT devices and you can
        easily explore the code if you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">find out</span> the best
        tecnonlogy for your business.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;