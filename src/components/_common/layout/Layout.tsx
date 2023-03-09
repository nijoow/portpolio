import NavBar from './NavBar';
import Footer from './Footer';

import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { IChildren } from '@type/interface';
import Three from '../three/Three';

const Layout = ({ children }: IChildren) => {
  const router = useRouter();
  return (
    <div className="w-full bg-purple-100 dark:bg-gray-darker">
      <NavBar />
      <div className="w-full max-w-2xl mx-auto pt-14">
        <Three />
        <AnimatePresence initial={false}>
          <motion.div variants={variants} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'linear' }} key={router.route}>
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

export default Layout;
