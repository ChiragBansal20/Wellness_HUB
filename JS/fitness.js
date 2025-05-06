// Main functionality for the fitness website

// Workout plans data - Male
const maleWorkouts = [
  {
    id: 1,
    title: "Muscle Building Program",
    description: "A comprehensive 12-week program designed to build lean muscle mass and increase strength.",
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "12 weeks",
    sessions: "5 per week",
    difficulty: "intermediate"
  },
  {
    id: 2,
    title: "Strength & Power",
    description: "Focus on compound movements to develop maximum strength and explosive power.",
    image: "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "8 weeks",
    sessions: "4 per week",
    difficulty: "advanced"
  },
  {
    id: 3,
    title: "Beginner's Fitness",
    description: "The perfect starting point for men new to fitness. Builds foundational strength and habits.",
    image: "https://images.pexels.com/photos/4162450/pexels-photo-4162450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "6 weeks",
    sessions: "3 per week",
    difficulty: "beginner"
  },
  {
    id: 4,
    title: "Athletic Performance",
    description: "Enhance speed, agility, and functional strength for better sports performance.",
    image: "https://images.pexels.com/photos/3800509/pexels-photo-3800509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "10 weeks",
    sessions: "5 per week",
    difficulty: "intermediate"
  }
];

// Workout plans data - Female
const femaleWorkouts = [
  {
    id: 1,
    title: "Total Body Toning",
    description: "Sculpt and tone your entire body with this balanced program combining strength and cardio.",
    image: "https://images.pexels.com/photos/6295866/pexels-photo-6295866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "8 weeks",
    sessions: "4 per week",
    difficulty: "intermediate"
  },
  {
    id: 2,
    title: "Glute & Core Focus",
    description: "Build a stronger lower body and core with targeted exercises for glutes, hamstrings and abs.",
    image: "https://images.pexels.com/photos/4046109/pexels-photo-4046109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "6 weeks",
    sessions: "3-4 per week",
    difficulty: "intermediate"
  },
  {
    id: 3,
    title: "Beginner's Shape-Up",
    description: "Start your fitness journey with this gentle but effective program for total beginners.",
    image: "https://images.pexels.com/photos/6551136/pexels-photo-6551136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "4 weeks",
    sessions: "3 per week",
    difficulty: "beginner"
  },
  {
    id: 4,
    title: "HIIT & Strength",
    description: "The ultimate fat-burning program combining high-intensity intervals with strength training.",
    image: "https://images.pexels.com/photos/6551127/pexels-photo-6551127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "10 weeks",
    sessions: "5 per week",
    difficulty: "advanced"
  }
];

// Diet plans - Male
const maleDietPlans = [
  {
    title: "Muscle Building Diet",
    tag: "High Protein",
    description: "Optimized for maximum muscle growth with a surplus of clean calories and high protein.",
    meals: [
      { time: "7:00 AM", title: "Breakfast", description: "Eggs, oatmeal with fruits, Greek yogurt" },
      { time: "10:00 AM", title: "Snack", description: "Protein shake with banana, almonds" },
      { time: "1:00 PM", title: "Lunch", description: "Grilled chicken breast, brown rice, vegetables" },
      { time: "4:00 PM", title: "Snack", description: "Tuna wrap, apple" },
      { time: "7:00 PM", title: "Dinner", description: "Lean beef, sweet potato, broccoli" },
      { time: "9:30 PM", title: "Pre-bed", description: "Casein protein, Greek yogurt with berries" }
    ]
  },
  {
    title: "Cutting Diet",
    tag: "Calorie Deficit",
    description: "Designed to preserve muscle while shedding body fat through strategic calorie restriction.",
    meals: [
      { time: "7:00 AM", title: "Breakfast", description: "Egg whites, spinach, one slice of whole grain toast" },
      { time: "10:00 AM", title: "Snack", description: "Greek yogurt with berries" },
      { time: "1:00 PM", title: "Lunch", description: "Grilled chicken salad with olive oil dressing" },
      { time: "4:00 PM", title: "Snack", description: "Protein shake, handful of nuts" },
      { time: "7:00 PM", title: "Dinner", description: "Baked white fish, asparagus, quinoa" }
    ]
  }
];

// Diet plans - Female
const femaleDietPlans = [
  {
    title: "Balanced Toning Diet",
    tag: "Nutrient-Dense",
    description: "Perfectly balanced macros for women looking to tone up without strict restrictions.",
    meals: [
      { time: "7:00 AM", title: "Breakfast", description: "Smoothie bowl with berries, protein powder, and almond butter" },
      { time: "10:00 AM", title: "Snack", description: "Apple with a small handful of walnuts" },
      { time: "1:00 PM", title: "Lunch", description: "Quinoa bowl with roasted vegetables and grilled chicken" },
      { time: "4:00 PM", title: "Snack", description: "Greek yogurt with honey and chia seeds" },
      { time: "7:00 PM", title: "Dinner", description: "Baked salmon with sweet potato and steamed greens" }
    ]
  },
  {
    title: "Fat Loss Diet",
    tag: "Low Carb",
    description: "A strategic approach to female fat loss focusing on hormone balance and steady results.",
    meals: [
      { time: "7:00 AM", title: "Breakfast", description: "Vegetable omelet with avocado" },
      { time: "10:00 AM", title: "Snack", description: "Celery sticks with almond butter" },
      { time: "1:00 PM", title: "Lunch", description: "Large salad with tuna, olive oil and lemon dressing" },
      { time: "4:00 PM", title: "Snack", description: "Small protein shake with cinnamon" },
      { time: "7:00 PM", title: "Dinner", description: "Grilled chicken with roasted vegetables" }
    ]
  }
];

// Nutrition tips - shared
const nutritionTips = [
  {
    title: "Hydration Is Key",
    description: "Drink at least 2-3 liters of water daily. Proper hydration improves performance and recovery."
  },
  {
    title: "Eat Protein At Every Meal",
    description: "Including protein at each meal helps with muscle repair and keeps you feeling fuller longer."
  },
  {
    title: "Plan Your Meals",
    description: "Meal prepping saves time and helps you avoid making poor food choices when hungry."
  },
  {
    title: "Limit Processed Foods",
    description: "Focus on whole foods like fruits, vegetables, lean proteins, and complex carbohydrates."
  }
];

// Supplements data - Male
const maleSupplements = [
  {
    title: "Whey Protein",
    description: "Fast-absorbing protein ideal for post-workout recovery and muscle building.",
    image: "https://images.pexels.com/photos/3872368/pexels-photo-3872368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: ["Supports muscle growth", "Enhances recovery", "Convenient protein source", "Rich in BCAAs"]
  },
  {
    title: "Creatine Monohydrate",
    description: "The most researched supplement for strength and power enhancement.",
    image: "https://images.pexels.com/photos/4397831/pexels-photo-4397831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: ["Increases strength", "Improves power output", "Enhances muscle volume", "Boosts high-intensity performance"]
  },
  {
    title: "Pre-Workout",
    description: "Formula designed to boost energy, focus, and performance during workouts.",
    image: "https://images.pexels.com/photos/3625371/pexels-photo-3625371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: ["Increases energy", "Enhances focus", "Delays fatigue", "Improves training intensity"]
  }
];

// Supplements data - Female
const femaleSupplements = [
  {
    title: "Plant Protein Blend",
    description: "Complete protein from multiple plant sources, perfect for muscle recovery.",
    image: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: ["Supports lean muscle", "Dairy-free", "Complete amino acid profile", "Contains digestive enzymes"]
  },
  {
    title: "Collagen Peptides",
    description: "Supports skin elasticity, joint health, and may enhance recovery.",
    image: "https://images.pexels.com/photos/7290720/pexels-photo-7290720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: ["Supports skin health", "Promotes joint function", "Aids in recovery", "Supports hair and nail strength"]
  },
  {
    title: "BCAA + Electrolytes",
    description: "Branched-chain amino acids with added electrolytes for hydration and recovery.",
    image: "https://images.pexels.com/photos/6995215/pexels-photo-6995215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: ["Supports muscle recovery", "Prevents muscle breakdown", "Enhances hydration", "May reduce fatigue"]
  }
];

// Success stories - Male
const maleSuccessStories = [
  {
    name: "David Wilson",
    age: 32,
    text: "After years of trying various gym routines with minimal results, FitLifePro's Muscle Building Program transformed my physique in just 12 weeks. The structured approach and nutrition guidance made all the difference.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    beforeWeight: "175 lbs",
    afterWeight: "190 lbs",
    duration: "12 weeks"
  },
  {
    name: "Michael Chen",
    age: 41,
    text: "As I approached 40, I noticed my energy levels dropping and weight increasing. The Strength & Power program helped me reclaim my fitness and feel stronger than I did in my 30s.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    beforeWeight: "210 lbs",
    afterWeight: "185 lbs",
    duration: "16 weeks"
  }
];

// Success stories - Female
const femaleSuccessStories = [
  {
    name: "Sarah Johnson",
    age: 29,
    text: "The Total Body Toning program gave me the confidence I've always wanted. I not only lost weight but gained muscle definition I never thought possible. The female-specific approach really made a difference.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    beforeWeight: "156 lbs",
    afterWeight: "132 lbs",
    duration: "8 weeks"
  },
  {
    name: "Anna Martinez",
    age: 35,
    text: "After having two children, I struggled to get back in shape. The HIIT & Strength program helped me lose the stubborn baby weight and regain my energy to keep up with my kids.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    beforeWeight: "165 lbs",
    afterWeight: "138 lbs",
    duration: "12 weeks"
  }
];

// Function to initialize the fitness website
export function setupFitnessWebsite() {
  // DOM elements
  const header = document.querySelector('.main-header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  const genderTabs = document.querySelectorAll('.gender-tab');
  const sectionTabs = document.querySelectorAll('#section-tabs a');
  const contentContainer = document.getElementById('gender-content-container');
  const contentLoader = document.getElementById('content-loader');
  
  // Current state
  let currentGender = 'male';
  let currentSection = 'workout-plans';
  
  // Initialize the header scroll behavior
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
      const gender = tab.getAttribute('data-gender');
      
      // Update active tab
      genderTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update current gender and reload content
      currentGender = gender;
      document.body.className = gender === 'male' ? 'male-theme' : 'female-theme';
      
      // Show loader and load content
      showLoader();
      setTimeout(() => {
        loadContent(currentGender, currentSection);
      }, 500); // Simulate loading for better UX
    });
  });
  
  // Section tab switching
  sectionTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const section = tab.getAttribute('href').substring(1);
      
      // Update active tab
      sectionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update current section and reload content
      currentSection = section;
      
      // Show loader and load content
      showLoader();
      setTimeout(() => {
        loadContent(currentGender, currentSection);
      }, 500); // Simulate loading for better UX
    });
  });
  
  // Load initial content
  showLoader();
  setTimeout(() => {
    loadContent(currentGender, currentSection);
    document.body.className = 'male-theme'; // Set initial theme
  }, 500);
  
  // Function to show loader
  function showLoader() {
    contentLoader.style.display = 'flex';
    contentContainer.innerHTML = '';
  }
  
  // Function to hide loader
  function hideLoader() {
    contentLoader.style.display = 'none';
  }
  
  // Load content based on gender and section
  function loadContent(gender, section) {
    let html = '';
    
    switch(section) {
      case 'workout-plans':
        html = generateWorkoutPlansHTML(gender);
        break;
      case 'nutrition':
        html = generateNutritionHTML(gender);
        break;
      case 'supplements':
        html = generateSupplementsHTML(gender);
        break;
      case 'success-stories':
        html = generateSuccessStoriesHTML(gender);
        break;
      default:
        html = '<p>Content not found</p>';
    }
    
    contentContainer.innerHTML = html;
    hideLoader();
  }
  
  // Generate HTML for workout plans
  function generateWorkoutPlansHTML(gender) {
    const workouts = gender === 'male' ? maleWorkouts : femaleWorkouts;
    
    let html = `
      <div class="workout-plans-section">
        <h2 class="section-title">${gender === 'male' ? 'Men\'s' : 'Women\'s'} Workout Programs</h2>
        <div class="workout-grid">
    `;
    
    workouts.forEach(workout => {
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z"/></svg>
                ${workout.duration}
              </div>
              <div class="workout-meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"/></svg>
                ${workout.sessions}
              </div>
            </div>
            <div class="workout-card-actions">
              <span class="difficulty-badge difficulty-${workout.difficulty}">${workout.difficulty.charAt(0).toUpperCase() + workout.difficulty.slice(1)}</span>
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
  
  // Generate HTML for nutrition section
  function generateNutritionHTML(gender) {
    const dietPlans = gender === 'male' ? maleDietPlans : femaleDietPlans;
    
    let html = `
      <div class="nutrition-section">
        <h2 class="section-title">${gender === 'male' ? 'Men\'s' : 'Women\'s'} Nutrition Plans</h2>
        <div class="diet-plans">
    `;
    
    dietPlans.forEach(plan => {
      html += `
        <div class="diet-plan">
          <div class="diet-plan-header">
            <h3 class="diet-plan-title">${plan.title}</h3>
            <span class="diet-plan-tag">${plan.tag}</span>
          </div>
          <p class="diet-plan-description">${plan.description}</p>
          <div class="meal-list">
      `;
      
      plan.meals.forEach(meal => {
        html += `
          <div class="meal-item">
            <div class="meal-time">${meal.time}</div>
            <div class="meal-details">
              <div class="meal-title">${meal.title}</div>
              <div class="meal-description">${meal.description}</div>
            </div>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    });
    
    html += `
        </div>
        
        <div class="nutrition-tips">
          <h2 class="section-title">Nutrition Tips</h2>
          <div class="tips-list">
    `;
    
    nutritionTips.forEach((tip, index) => {
      html += `
        <div class="tip-item">
          <div class="tip-icon">${index + 1}</div>
          <div class="tip-content">
            <h4 class="tip-title">${tip.title}</h4>
            <p class="tip-description">${tip.description}</p>
          </div>
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
      </div>
    `;
    
    return html;
  }
  
  // Generate HTML for supplements section
  function generateSupplementsHTML(gender) {
    const supplements = gender === 'male' ? maleSupplements : femaleSupplements;
    
    let html = `
      <div class="supplements-section">
        <h2 class="section-title">Recommended ${gender === 'male' ? 'Men\'s' : 'Women\'s'} Supplements</h2>
        <div class="supplements-grid">
    `;
    
    supplements.forEach(supplement => {
      html += `
        <div class="supplement-card">
          <div class="supplement-image">
            <img src="${supplement.image}" alt="${supplement.title}">
          </div>
          <div class="supplement-content">
            <h3 class="supplement-title">${supplement.title}</h3>
            <p class="supplement-description">${supplement.description}</p>
            <div class="supplement-benefits">
              <h4 class="supplement-benefits-title">Benefits:</h4>
              <ul class="benefits-list">
      `;
      
      supplement.benefits.forEach(benefit => {
        html += `<li>${benefit}</li>`;
      });
      
      html += `
              </ul>
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
  
  // Generate HTML for success stories section
  function generateSuccessStoriesHTML(gender) {
    const stories = gender === 'male' ? maleSuccessStories : femaleSuccessStories;
    
    let html = `
      <div class="success-stories-section">
        <h2 class="section-title">${gender === 'male' ? 'Men\'s' : 'Women\'s'} Success Stories</h2>
        <div class="testimonials">
    `;
    
    stories.forEach(story => {
      html += `
        <div class="testimonial">
          <div class="testimonial-image">
            <img src="${story.image}" alt="${story.name}">
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">${story.text}</p>
            <p class="testimonial-author">${story.name}, ${story.age}</p>
            <p class="testimonial-meta">Followed our ${gender === 'male' ? 'men\'s' : 'women\'s'} program for ${story.duration}</p>
            <div class="transformation">
              <span>Transformation:</span> ${story.beforeWeight} → <span class="transformation-value">${story.afterWeight}</span>
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
}