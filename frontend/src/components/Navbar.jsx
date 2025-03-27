import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > previous && latest > 150);
    setAtTop(latest < 50);
  });

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Ideas', href: '/ideas' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          atTop ? 'py-4 md:py-6' : 'py-3 md:py-4 bg-dark/80 backdrop-blur-lg shadow-lg'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2"
            >
              <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Detroit Developer
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-gray-300 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-64 bg-dark-light z-40 md:hidden shadow-lg"
      >
        <div className="flex flex-col pt-20 px-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-300 hover:text-primary py-3 transition-colors border-b border-gray-700 last:border-none"
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/project-specification"
            className="bg-gradient-to-r from-primary to-secondary text-dark font-bold py-3 px-4 rounded-lg mt-4 text-center hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow"
            onClick={handleNavClick}
          >
            Start Project
          </Link>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;