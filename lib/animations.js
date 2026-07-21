export const EASE_OUT = [0.22, 1, 0.36, 1];
export const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94];
export const defaultTransition = {
  duration: 0.6,
  ease: EASE_OUT
};
export const defaultViewport = {
  once: true,
  amount: 0.2
};
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
};
export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
};
export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -32
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition
  }
};
export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 32
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition
  }
};
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT
    }
  }
};
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: EASE_OUT
    }
  }
};
export const blurIn = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: EASE_OUT
    }
  }
};
export const slideUpScale = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE_OUT
    }
  }
};
export const staggerContainer = (stagger = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});
export const staggerContainerFast = staggerContainer(0.06, 0.05);
export const pageEntrance = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASE_OUT,
      when: 'beforeChildren',
      staggerChildren: 0.06
    }
  }
};
export const pageChild = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT
    }
  }
};
export const navbarEntrance = {
  hidden: {
    opacity: 0,
    y: -16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_OUT,
      delay: 0.05
    }
  }
};
export const mobileMenu = {
  hidden: {
    opacity: 0,
    height: 0
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: EASE_OUT
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: EASE_SMOOTH
    }
  }
};
export const mobileMenuItem = {
  hidden: {
    opacity: 0,
    x: -12
  },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
      delay: i * 0.05
    }
  })
};
export const heroBadge = {
  hidden: {
    opacity: 0,
    y: 12
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT
    }
  }
};
export const heroHeadingWord = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_OUT,
      delay: 0.15 + i * 0.04
    }
  })
};
export const heroSubheading = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
      delay: 0.55
    }
  }
};
export const heroCta = {
  hidden: {
    opacity: 0,
    y: 12
  },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
      delay: 0.7 + i * 0.08
    }
  })
};
export const heroStats = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.85
    }
  }
};
export const heroStatItem = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT
    }
  }
};
export const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};
export const floatSlowAnimation = {
  y: [0, -6, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};
export const glowPulse = {
  opacity: [0.5, 0.75, 0.5],
  scale: [1, 1.02, 1],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};
export const cardHover = {
  y: -4,
  scale: 1.03,
  transition: {
    duration: 0.35,
    ease: EASE_OUT
  }
};
export const cardTap = {
  scale: 0.98,
  transition: {
    duration: 0.15
  }
};
export const buttonHover = {
  scale: 1.03,
  transition: {
    duration: 0.25,
    ease: EASE_OUT
  }
};
export const buttonTap = {
  scale: 0.97,
  transition: {
    duration: 0.15
  }
};
export const iconHover = {
  rotate: 8,
  scale: 1.08,
  transition: {
    duration: 0.35,
    ease: EASE_OUT
  }
};
export const imageHover = {
  scale: 1.05,
  transition: {
    duration: 0.5,
    ease: EASE_OUT
  }
};
export const footerEntrance = {
  hidden: {
    opacity: 0,
    y: 32
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_OUT
    }
  }
};
export const testimonialSlide = {
  enter: dir => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT
    }
  },
  exit: dir => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    transition: {
      duration: 0.35,
      ease: EASE_SMOOTH
    }
  })
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
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.01
      }
    }
  };
}
