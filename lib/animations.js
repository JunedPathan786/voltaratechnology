export const EASE_OUT = [0.22, 1, 0.36, 1];
export const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94];

export const defaultTransition = {
  duration: 0.45,
  ease: EASE_OUT
};

export const defaultViewport = {
  once: true,
  amount: 0.15
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: defaultTransition }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: defaultTransition }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0, transition: defaultTransition }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: defaultTransition }
};

export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: defaultTransition }
};

export const slideUpScale = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: defaultTransition }
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const floatSlowAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const glowPulse = {
  opacity: [0.4, 0.7, 0.4],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const heroBadge = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: defaultTransition }
};

export const heroHeadingWord = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: EASE_OUT
    }
  })
};

export const heroSubheading = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { ...defaultTransition, delay: 0.2 } }
};

export const heroCta = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.1,
      ease: EASE_OUT
    }
  })
};

export const heroStats = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4
    }
  }
};

export const heroStatItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: defaultTransition }
};

export const mobileMenu = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: EASE_OUT }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const mobileMenuItem = {
  hidden: { opacity: 0, x: -12 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.2 }
  })
};

export const footerEntrance = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: defaultTransition }
};

export const pageEntrance = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT }
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const pageChild = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: defaultTransition }
};

export const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

export const cardTap = {
  scale: 0.98
};

export const testimonialSlide = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
};

export const sectionVariants = {
  fadeUp: fadeInUp,
  fadeLeft: fadeInLeft,
  fadeRight: fadeInRight,
  scale: scaleIn,
  blur: blurIn,
  slideUpScale: slideUpScale
};

export function getReducedMotionVariants(variants) {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } }
  };
}
