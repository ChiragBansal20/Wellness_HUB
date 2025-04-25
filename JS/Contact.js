// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
      });
    }
    
    // Initialize map
    initMap();
    
    // Add input animations
    const formInputs = document.querySelectorAll('.input-group input, .input-group select, .input-group textarea');
    formInputs.forEach(input => {
      // Add focus class on focus
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });
      
      // Remove focus class on blur
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
        
        // Add filled class if the input has a value
        if (input.value.trim() !== '') {
          input.parentElement.classList.add('filled');
        } else {
          input.parentElement.classList.remove('filled');
        }
      });
      
      // Initialize filled state
      if (input.value.trim() !== '') {
        input.parentElement.classList.add('filled');
      }
    });
  });
  
  // Form validation and submission
  function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form elements
    const form = e.target;
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const interestInput = form.querySelector('#interest');
    const messageInput = form.querySelector('#message');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Reset previous validation
    resetValidation(form);
    
    // Validate inputs
    let isValid = true;
    
    if (!validateName(nameInput)) isValid = false;
    if (!validateEmail(emailInput)) isValid = false;
