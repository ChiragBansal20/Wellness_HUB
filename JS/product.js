document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail Image Gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');

            // Update the main image
            const newSrc = thumbnail.getAttribute('data-image');
            mainImage.src = newSrc;
        });
    });

    // Color Selection
    const colorOptions = document.querySelectorAll('.color-option');
    const selectedColorText = document.querySelector('.selected-color');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            colorOptions.forEach(o => o.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update selected color text
            const colorName = option.getAttribute('data-color');
            selectedColorText.textContent = `Selected: ${colorName}`;
        });
    });

    // Quantity Selector
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityInput = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    quantityInput.addEventListener('change', () => {
        if (quantityInput.value < 1) {
            quantityInput.value = 1;
        }
    });

    // Collapsible Sections
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class on header
            header.classList.toggle('active');

            // Toggle icon
            const icon = header.querySelector('i');
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }

            // Toggle content visibility
            const content = header.nextElementSibling;
            content.classList.toggle('show');
        });
    });

    // Review Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const reviewItems = document.querySelectorAll('.review-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Filter reviews
            const filter = button.getAttribute('data-filter');
            
            reviewItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-rating') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Review Helpful Buttons
    const helpfulButtons = document.querySelectorAll('.helpful-btn');
    
    helpfulButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentText = button.textContent;
            const currentCount = parseInt(currentText.match(/\d+/)[0]);
            button.innerHTML = `<i class="fas fa-thumbs-up"></i> Helpful (${currentCount + 1})`;
            button.disabled = true;
            
            // Also disable the corresponding "Not helpful" button
            const notHelpfulBtn = button.nextElementSibling;
            notHelpfulBtn.disabled = true;
        });
    });

    const notHelpfulButtons = document.querySelectorAll('.not-helpful-btn');
    
    notHelpfulButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.innerHTML = `<i class="fas fa-thumbs-down"></i> Feedback recorded`;
            button.disabled = true;
            
            // Also disable the corresponding "Helpful" button
            const helpfulBtn = button.previousElementSibling;
            helpfulBtn.disabled = true;
        });
    });

    // Add to Cart Animation
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    
    addToCartBtn.addEventListener('click', () => {
        // Update cart count
        const currentCount = parseInt(cartCount.textContent);
        const quantityToAdd = parseInt(quantityInput.value);
        cartCount.textContent = currentCount + quantityToAdd;
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'add-to-cart-success';
        successMessage.innerHTML = `<i class="fas fa-check-circle"></i> Added to cart!`;
        
        // Add success message to DOM
        addToCartBtn.parentNode.appendChild(successMessage);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
        
        // Add animation to cart icon
        const cartIcon = document.querySelector('.header-icons .fa-shopping-cart');
        cartIcon.classList.add('cart-animation');
        
        setTimeout(() => {
            cartIcon.classList.remove('cart-animation');
        }, 1000);
    });

    // Quick Add to Cart for Related Products
    const quickAddButtons = document.querySelectorAll('.add-to-cart-quick-btn');
    
    quickAddButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update cart count
            const currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
            
            // Add animation to cart icon
            const cartIcon = document.querySelector('.header-icons .fa-shopping-cart');
            cartIcon.classList.add('cart-animation');
            
            setTimeout(() => {
                cartIcon.classList.remove('cart-animation');
            }, 1000);
            
            // Show mini notification
            const notification = document.createElement('div');
            notification.className = 'mini-notification';
            notification.textContent = 'Added to cart!';
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 2000);
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('show-mobile');
        
        // Toggle icon
        const icon = mobileMenuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Image Zoom Functionality
    const imageZoomOverlay = document.querySelector('.image-zoom-overlay');
    
    imageZoomOverlay.addEventListener('click', () => {
        // Create modal for zoomed image
        const modal = document.createElement('div');
        modal.className = 'image-zoom-modal';
        
        // Create zoomed image
        const zoomedImg = document.createElement('img');
        zoomedImg.src = mainImage.src;
        zoomedImg.alt = mainImage.alt;
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'zoom-close-btn';
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        
        // Add elements to modal
        modal.appendChild(closeBtn);
        modal.appendChild(zoomedImg);
        document.body.appendChild(modal);
        
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Close modal when clicking close button or outside the image
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Add CSS for image zoom modal
    const style = document.createElement('style');
    style.textContent = `
        .image-zoom-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1100;
        }
        
        .image-zoom-modal img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        }
        
        .zoom-close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }
        
        .cart-animation {
            animation: pulse 0.5s ease-in-out 2;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
        
        .add-to-cart-success {
            position: absolute;
            bottom: -40px;
            left: 0;
            right: 0;
            background-color: var(--success-color);
            color: white;
            padding: 8px;
            border-radius: var(--border-radius);
            text-align: center;
            animation: fadeInOut 3s forwards;
        }
        
        .mini-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--success-color);
            color: white;
            padding: 10px 15px;
            border-radius: var(--border-radius);
            z-index: 1000;
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.3s, transform 0.3s;
        }
        
        .mini-notification.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        .main-nav.show-mobile {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--white);
            box-shadow: var(--box-shadow);
            padding: 20px;
            z-index: 1000;
        }
        
        .main-nav.show-mobile ul {
            flex-direction: column;
            gap: 15px;
        }
    `;
    document.head.appendChild(style);
});