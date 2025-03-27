import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Idea = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
  
    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
    // Image animation variants
    const imageVariants = {
      hidden: (index) => ({
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100, // Left for even, right for odd
        scale: 0.8
      }),
      visible: { 
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { 
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };
  
    const images = [
      "https://res.cloudinary.com/dsnrp2dlj/image/upload/v1743074814/tg6x3mqhlsicnvodngsg.jpg",
      "https://res.cloudinary.com/dsnrp2dlj/image/upload/v1743074813/jtmkmsktxtuzmyqclkwu.jpg",
      "https://res.cloudinary.com/dsnrp2dlj/image/upload/v1743074813/oq2wvxy6u5jbecqdoeaz.jpg",
      "https://res.cloudinary.com/dsnrp2dlj/image/upload/v1743074813/wrd6oghkmv34s0tfvzal.jpg",
      "https://res.cloudinary.com/dsnrp2dlj/image/upload/v1743074813/a2weaa6vdhmyzv4fmm9v.jpg",
    
    ];
  
    return (
      <div className="gallery-container" ref={ref}>
        <motion.div className="gallery-wrapper">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="image-container"
              style={{
                y: index % 3 === 0 ? y1 : index % 3 === 1 ? y2 : y3
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={imageVariants}
            >
              <motion.img
                src={`${image}?w=400&h=600&fit=crop`}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
                whileHover={{ 
                  scale: 1.1, // Zoom-in effect
                  transition: { duration: 0.3 }
                }}
              />
              <motion.div 
                className="image-overlay"
                whileHover={{ opacity: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };


export default Idea;
