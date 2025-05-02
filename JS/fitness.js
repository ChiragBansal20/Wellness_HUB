// Fitness Website JavaScript

/**
 * Initialize the fitness website functionality
 */
export function setupFitnessWebsite() {
    // DOM elements
    const header = document.querySelector('.main-header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const genderTabs = document.querySelectorAll('.gender-tab');
    const sectionTabs = document.querySelectorAll('#section-tabs a');
    const contentContainer = document.getElementById('gender-content-container');
    const contentLoader = document.getElementById('content-loader');
  
    // Initialize event listeners
    initEventListeners();
    
    // Load initial content (male workout plans)
    loadContent('male', 'workout-plans');
  
    /**
     * Initialize all event listeners
     */
    function initEventListeners() {
      // Header scroll effect
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
  
      // Mobile menu toggle
      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
          mobileMenuBtn.classList.toggle('active');
          mainNav.classList.toggle('active');
        });
      }
  
      // Gender tab switching
      genderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Update active tab
          genderTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          // Get current section from active tab
          const activeSection = document.querySelector('#section-tabs a.active').getAttribute('href').substring(1);
          
          // Load content for the selected gender and section
          loadContent(tab.dataset.gender, activeSection);
        });
      });
  
      // Section tab switching
      sectionTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Update active tab
          sectionTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          // Get current gender from active tab
          const activeGender = document.querySelector('.gender-tab.active').dataset.gender;
          const sectionId = tab.getAttribute('href').substring(1);
          
          // Load content for the selected gender and section
          loadContent(activeGender, sectionId);
        });
      });
  
      // Smooth scroll for hero button
      const heroBtn = document.querySelector('.hero .btn');
      if (heroBtn) {
        heroBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = heroBtn.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      }
    }
  
    /**
     * Load content based on gender and section
     * @param {string} gender - 'male' or 'female'
     * @param {string} section - 'workout-plans', 'nutrition', 'supplements', 'success-stories'
     */
    function loadContent(gender, section) {
      // Show loader
      if (contentLoader) {
        contentLoader.style.display = 'flex';
      }
  
