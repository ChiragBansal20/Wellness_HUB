// BMI Calculator Functionality
document.addEventListener('DOMContentLoaded', function () {
    const bmiForm = document.getElementById('bmi-form');
    const bmiResult = document.getElementById('bmi-result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const bmiMessage = document.getElementById('bmi-message');

    bmiForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
        const weight = parseFloat(document.getElementById('weight').value);
        const gender = document.getElementById('gender').value;
        const age = parseInt(document.getElementById('age').value);

        // Calculate BMI
        const bmi = weight / (height * height);

        // Display result
        bmiValue.textContent = bmi.toFixed(1);

        // Determine BMI category and message
        let category, message, categoryClass;

        if (bmi < 18.5) {
            category = "Underweight";
            message = "Your BMI indicates you are underweight. Consider consulting with a nutritionist for a personalized plan to gain healthy weight.";
            categoryClass = "underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal Weight";
            message = "Congratulations! Your BMI is within the normal range. Maintain your healthy lifestyle with regular exercise and balanced nutrition.";
            categoryClass = "normal";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
            message = "Your BMI indicates you are overweight. Focus on balanced nutrition and regular exercise to move toward a healthier weight.";
            categoryClass = "overweight";
        } else {
            category = "Obesity";
            message = "Your BMI indicates obesity. We recommend consulting with a healthcare professional for personalized advice on improving your health.";
            categoryClass = "obesity";
        }

        // Set category and message
        bmiCategory.textContent = "Category: " + category;
        bmiCategory.className = "bmi-category " + categoryClass;
        bmiMessage.textContent = message;

        // Show result
        bmiResult.style.display = "block";
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth < 768) {
                navLinks.style.display = 'none';
            }
        });
    });
});