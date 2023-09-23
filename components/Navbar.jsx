'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative h-max flex items-center`}
  >

    <div className="absolute w-1/2 inset-0 grayscale-01 mx-auto" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="Search" className="w-[24px] h-[24px] object-contain cursor-pointer" />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">metaversus</h2>
      <img src="/menu.svg" alt="Menu" className="w-[24px] h-[24px] object-contain cursor-pointer" />
    </div>
  </motion.nav>
);

export default Navbar;
