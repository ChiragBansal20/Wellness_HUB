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
  
      // First, update the theme class
      document.body.classList.remove('male-theme', 'female-theme');
      document.body.classList.add(`${gender}-theme`);
  
      // Simulate loading time (would normally fetch from an API)
      setTimeout(() => {
        // Generate content based on gender and section
        let content = '';
        
        switch (section) {
          case 'workout-plans':
            content = generateWorkoutPlans(gender);
            break;
          case 'nutrition':
            content = generateNutritionContent(gender);
            break;
          case 'supplements':
            content = generateSupplementsContent(gender);
            break;
          case 'success-stories':
            content = generateSuccessStories(gender);
            break;
          default:
            content = generateWorkoutPlans(gender);
        }
  
        // Update container content
        contentContainer.innerHTML = content;
        
        // Hide loader
        if (contentLoader) {
          contentLoader.style.display = 'none';
        }
      }, 800); // Simulate network delay
    }
  
    /**
     * Generate workout plans content
     * @param {string} gender - 'male' or 'female'
     * @returns {string} HTML content
     */
    function generateWorkoutPlans(gender) {
      const isMale = gender === 'male';
      
      const workouts = [
        {
          title: isMale ? "Muscle Building Program" : "Lean Muscle Toning",
          description: isMale 
            ? "Build significant muscle mass with this hypertrophy-focused program. Designed for intermediate lifters looking to maximize growth."
            : "Develop lean, defined muscles without bulk. This program focuses on toning while maintaining a feminine physique.",
          image: isMale 
            ? "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            : "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          duration: "12 weeks",
          frequency: isMale ? "5 days/week" : "4 days/week",
          difficulty: isMale ? "Intermediate" : "Beginner-Intermediate"
        },
        {
          title: isMale ? "Strength & Power" : "Full Body Sculpt",
          description: isMale 
            ? "Focus on building functional strength and explosive power with compound movements and progressive overload."
            : "A balanced approach to full-body fitness that sculpts and defines while improving overall strength and endurance.",
          image: isMale 
            ? "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            : "https://images.pexels.com/photos/6456301/pexels-photo-6456301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          duration: "8 weeks",
          frequency: "4 days/week",
          difficulty: "Advanced"
        },
        {
          title: isMale ? "Fat Loss & Conditioning" : "Cardio & Core Blast",
          description: isMale 
            ? "Shred fat while maintaining muscle mass with this high-intensity conditioning program combined with targeted resistance training."
            : "Intensive cardio and core-focused workouts that burn calories and define your midsection for a toned appearance.",
          image: isMale 
            ? "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            : "https://images.pexels.com/photos/6456216/pexels-photo-6456216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          duration: "6 weeks",
          frequency: "5 days/week",
          difficulty: "Intermediate"
        },
        {
          title: isMale ? "Functional Fitness" : "Flexibility & Tone",
          description: isMale 
            ? "Improve everyday movement patterns and build practical strength with this functional training program."
            : "Combine yoga-inspired flexibility work with toning exercises for a balanced approach to fitness.",
          image: isMale 
            ? "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            : "https://images.pexels.com/photos/4498562/pexels-photo-4498562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          duration: "10 weeks",
          frequency: "3 days/week",
          difficulty: "Beginner"
        }
      ];
  
      let html = `
        <div class="workout-plans-section">
          <h2 class="section-title">${isMale ? 'Men\'s Workout Programs' : 'Women\'s Workout Programs'}</h2>
          <div class="workout-grid">
      `;
  
      workouts.forEach(workout => {
        const difficultyClass = workout.difficulty.toLowerCase().includes('beginner') 
          ? 'difficulty-beginner' 
          : (workout.difficulty.toLowerCase().includes('intermediate') 
            ? 'difficulty-intermediate' 
            : 'difficulty-advanced');
  
        html += `
          <div class="workout-card">
            <div class="workout-card-image">
              <img src="${workout.image}" alt="${workout.title}">
            </div>
            <div class="workout-card-content">
              <h3 class="workout-card-title">${workout.title}</h3>
              <p class="workout-card-description">${workout.description}</p>
              <div class="workout-meta">
                <div class="workout-meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/></svg>
                  <span>${workout.duration}</span>
                </div>
                <div class="workout-meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 6.757l-2 2V4h-3v4.757l-2-2v3.241l2 2V22h3v-9.243l2-2V6.757zm-2 3.241l-2 2V12h3v-2.003l-1-1zM8 4v4H4v2h4v12h2V4H8z"/></svg>
                  <span>${workout.frequency}</span>
                </div>
              </div>
              <div class="workout-card-actions">
                <span class="difficulty-badge ${difficultyClass}">${workout.difficulty}</span>
                <a href="#" class="btn primary-btn">View Plan</a>
              </div>
            </div>
          </div>
        `;
      });
  
      html += `
          </div>
        </div>
      `;
  
      return html;
    }
