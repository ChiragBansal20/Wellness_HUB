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
          
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value.trim())) {
      return showError(input, 'Please enter a valid email address');
    }
    
    return true;
  }
  
  function validatePhone(input) {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (input.value.trim() !== '' && !phoneRegex.test(input.value.trim())) {
      return showError(input, 'Please enter a valid phone number');
    }
    
    return true;
  }
  
  // Google Maps integration
  function initMap() {
    const mapContainer = document.getElementById('map');
    
    if (!mapContainer) return;
    
    // For this example, we'll use a placeholder
    // In a real application, you would use the Google Maps API
    const mapPlaceholder = mapContainer.querySelector('.map-placeholder');
    
    if (mapPlaceholder) {
      // Replace placeholder text with an iframe for demonstration
      mapPlaceholder.innerHTML = `
        <iframe 
          width="100%" 
          height="100%" 
          frameborder="0" 
          style="border:0" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.758895279326984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412037087!5m2!1sen!2sus" 
          allowfullscreen="">
        </iframe>
      `;
    }
  }
