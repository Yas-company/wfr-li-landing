// Reusable Alpine.js Counter Component
// Usage: Add x-data="counterComponent()" to any element with counter stats

function counterComponent(options = {}) {
  return {
    isVisible: false,
    stats: {},
    
    // Default configuration
    config: {
      duration: 2000,
      staggerDelay: 150,
      observerDelay: 300,
      easing: 'easeOutCubic',
      ...options
    },
    
    // Initialize stats from data attributes
    initStats() {
      const elements = this.$el.querySelectorAll('[data-num]');
      elements.forEach(el => {
        const key = el.dataset.key;
        const num = parseInt(el.dataset.num);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        
        if (key) {
          this.stats[key] = {
            current: 0,
            target: num,
            suffix: suffix,
            prefix: prefix
          };
        }
      });
    },
    
    // Easing functions
    easingFunctions: {
      easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
      easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
      easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      linear: (t) => t
    },
    
    // Animate individual counter
    animateCounter(statKey) {
      const stat = this.stats[statKey];
      if (!stat) return;
      
      const startTime = performance.now();
      const easingFn = this.easingFunctions[this.config.easing] || this.easingFunctions.easeOutCubic;
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / this.config.duration, 1);
        
        const easedProgress = easingFn(progress);
        stat.current = Math.floor(stat.target * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          stat.current = stat.target;
        }
      };
      
      requestAnimationFrame(animate);
    },
    
    // Animate all counters with stagger
    animateStats() {
      this.initStats();
      
      Object.keys(this.stats).forEach((key, index) => {
        setTimeout(() => {
          this.animateCounter(key);
        }, index * this.config.staggerDelay);
      });
    },
    
    // Get formatted counter value
    getCounterValue(key) {
      const stat = this.stats[key];
      if (!stat) return '0';
      
      return `${stat.prefix}${Math.floor(stat.current)}${stat.suffix}`;
    },
    
    // Initialize intersection observer
    init() {
      this.$nextTick(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.isVisible) {
              this.isVisible = true;
              setTimeout(() => {
                this.animateStats();
              }, this.config.observerDelay);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });
        
        observer.observe(this.$el);
      });
    }
  };
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { counterComponent };
}

// Make available globally
if (typeof window !== 'undefined') {
  window.counterComponent = counterComponent;
}