import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css';
import sectionImage from '../assets/section1.png';

const Section2 = () => {
  return (
    <div className="section2" id="section2">
      <motion.div
        className="left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src={sectionImage} alt="Visual" />
      </motion.div>

      <motion.div
        className="right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="typewriter">A Moon Entering my life</h2>
        <p className="section2-text">
          I still can’t believe we randomly crossed paths on Hinge on 01 February 2026. I mean… what are the odds? I sent the like randomly around 16 December 2025 with zero expectations… and then you actually matched. I’m not saying it was fate, but Hinge algorithm deserves a thank you card for actually bringing my profile to your feed.
          And now here we are… talking, laughing, sharing random thoughts like we’ve known each other longer than we actually have and how can we forget you calling me Cringe whenever I share a random reel in my IG feed (which means that IG wants us to tease each other more! :P) Not bad for two strangers who met on Hinge randomly. 
          And someone was too busy that they responded to my text after 2 days, i.e. 3rd February 2026! :( 
          But woh kehte hain naa, "If it’s meant for you, it will find its way to you". 
          Also, Do you even remember our first call? Nahi naa, chalo, i tell you, it was 26/2/26, 20:44.
          So I was thinking… instead of just being “that yet another guy from Hinge,” how about I ask you something in a different way.
        </p>
        <motion.a
          href="#section1"
          className="hero-button"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          Scroll Down
        </motion.a>      </motion.div>
    </div>
  );
};

export default Section2;
