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
    if (phoneInput.value && !validatePhone(phoneInput)) isValid = false;
    if (!validateRequired(interestInput, 'Please select your interest')) isValid = false;
    if (!validateRequired(messageInput, 'Please enter your message')) isValid = false;
    
    if (isValid) {
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Simulate form submission (normally would be an AJAX call)
      setTimeout(() => {
        // Reset form
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        // Show success modal
        const successModal = document.getElementById('successModal');
        if (successModal) {
          successModal.classList.add('active');
        }
      }, 1500);
    }
  }
  
  // Validation helpers
  function resetValidation(form) {
    const inputs = form.querySelectorAll('.input-group');
    inputs.forEach(input => {
      input.classList.remove('error');
      const errorElement = input.querySelector('.error-message');
      if (errorElement) {
        errorElement.textContent = '';
      }
    });
  }
  
  function showError(input, message) {
    const inputGroup = input.parentElement;
    inputGroup.classList.add('error');
    
    const errorElement = inputGroup.querySelector('.error-message');
    if (errorElement) {
      errorElement.textContent = message;
    }
    
    return false;
  }
  
  function validateRequired(input, message) {
    if (input.value.trim() === '') {
      return showError(input, message);
    }
    return true;
  }
  
  function validateName(input) {
    if (input.value.trim() === '') {
      return showError(input, 'Please enter your name');
    }
    
    if (input.value.trim().length < 2) {
      return showError(input, 'Name must be at least 2 characters');
    }
    
    return true;
  }
  
  function validateEmail(input) {
    if (input.value.trim() === '') {
      return showError(input, 'Please enter your email');
    }
