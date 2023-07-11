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
      <TypingText title="| About Cyb3rverse" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The metaverse </span>
        is a virtual world where people can interact, create, and explore using
        digital devices. It's a collective space where individuals can engage in
        various activities such as gaming, socializing, working, and shopping.
        It blends the{' '}
        <span className="font-extrabold text-white">
          real world with virtual reality
        </span>
        , allowing users to immerse themselves in a simulated environment. The
        metaverse aims to revolutionize
        <span className="font-extrabold text-white">
          how we connect, collaborate, and experience digital content,
        </span>
        offering new possibilities for communication and entertainment in a
        highly interactive and shared online realm.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow_down"
        className="w-[128px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
