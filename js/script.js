// اجرای کد بعد از بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    console.log('Persian Metal Art - سایت آماده است!');
    
    let cartCount = 3;
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart, .add-to-cart-detail');
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                cartCount++;
                if (cartCountElement) {
                    cartCountElement.textContent = cartCount;
                }
                
                const originalText = this.textContent;
                this.textContent = '✓ اضافه شد!';
                this.style.background = '#27ae60';
                this.style.transform = 'scale(1.05)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '#E6C34F';
                    this.style.transform = 'scale(1)';
                }, 2000);
            });
        });
    }
    
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.location.href = 'products.html';
            }, 100);
        });
    }
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px rgba(58, 36, 21, 0.3)';
            } else {
                header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.2)';
            }
        }
    });
    
    const userBtn = document.getElementById('userBtn');
    const userDisplayName = document.getElementById('userDisplayName');
    const userDropdown = document.getElementById('userDropdown');
    const loginLink = document.getElementById('loginLink');
    
    const isLoggedIn = false;
    
    if (isLoggedIn && userDisplayName && loginLink) {
        userDisplayName.textContent = 'علی رضایی';
        loginLink.textContent = 'خروج';
        loginLink.href = '#';
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('خروج از حساب کاربری');
        });
    }
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        }
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            const privacy = document.getElementById('privacy');
            
            if (name && email && subject && message && privacy) {
                if (!name.value || !email.value || !subject.value || !message.value || !privacy.checked) {
                    alert('لطفاً تمامی فیلدهای اجباری را پر کنید.');
                    return;
                }
                
                const submitButton = document.querySelector('.submit-button');
                if (submitButton) {
                    const originalText = submitButton.textContent;
                    submitButton.textContent = 'در حال ارسال...';
                    submitButton.disabled = true;
                    
                    setTimeout(() => {
                        alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
                        contactForm.reset();
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                    }, 2000);
                }
            }
        });
    }
    
    const categoryFilter = document.getElementById('category');
    const priceFilter = document.getElementById('price-range');
    const sortFilter = document.getElementById('sort');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            console.log('دسته‌بندی تغییر کرد:', this.value);
        });
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', function() {
            console.log('محدوده قیمت تغییر کرد:', this.value);
        });
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            console.log('مرتب‌سازی تغییر کرد:', this.value);
        });
    }
    
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            pageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            console.log('صفحه تغییر کرد به:', this.textContent);
        });
    });
    
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('h3');
                if (productName) {
                    alert(`مشاهده سریع محصول: ${productName.textContent}`);
                }
            }
        });
    });
    
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3');
            if (categoryName) {
                console.log('دسته‌بندی انتخاب شد:', categoryName.textContent);
            }
        });
    });
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                
                this.classList.add('active');
                
                const newImageSrc = this.getAttribute('data-image');
                if (newImageSrc) {
                    mainImage.src = newImageSrc;
                }
            });
        });
    }
    
    const decreaseBtns = document.querySelectorAll('.qty-btn.decrease');
    const increaseBtns = document.querySelectorAll('.qty-btn.increase');
    const quantityInputs = document.querySelectorAll('.qty-input');
    
    decreaseBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const input = quantityInputs[index];
            if (input) {
                let value = parseInt(input.value);
                if (!isNaN(value) && value > 1) {
                    input.value = value - 1;
                }
            }
        });
    });
    
    increaseBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const input = quantityInputs[index];
            if (input) {
                let value = parseInt(input.value);
                if (!isNaN(value) && value < 5) {
                    input.value = value + 1;
                }
            }
        });
    });
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (isNaN(value) || value < 1) {
                this.value = 1;
            } else if (value > 5) {
                this.value = 5;
            }
        });
    });
    
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const color = this.getAttribute('data-color');
            console.log('رنگ انتخاب شد:', color);
        });
    });
    
    const buyNowBtn = document.querySelector('.buy-now');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            alert('در حال انتقال به صفحه پرداخت...');
        });
    }
    
    const wishlistBtn = document.querySelector('.wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            if (this.textContent.includes('♡')) {
                this.textContent = '❤ افزودن به علاقه‌مندی‌ها';
                this.style.borderColor = '#e74c3c';
                this.style.color = '#e74c3c';
            } else {
                this.textContent = '♡ افزودن به علاقه‌مندی‌ها';
                this.style.borderColor = '#F0E6D2';
                this.style.color = '#2C2C2C';
            }
        });
    }
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    
    const addReviewBtn = document.querySelector('.add-review-btn');
    if (addReviewBtn) {
        addReviewBtn.addEventListener('click', function() {
            alert('در حال انتقال به فرم ثبت نظر...');
        });
    }
    
    const helpfulButtons = document.querySelectorAll('.helpful-btn, .not-helpful-btn');
    helpfulButtons.forEach(button => {
        button.addEventListener('click', function() {
            const countText = this.textContent.match(/\d+/);
            if (countText) {
                const currentCount = parseInt(countText[0]);
                this.textContent = this.textContent.replace(/\d+/, currentCount + 1);
                this.style.background = '#27ae60';
                this.style.color = 'white';
                this.disabled = true;
            }
        });
    });
    
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.textContent = 'در حال بارگذاری...';
            setTimeout(() => {
                this.textContent = 'مشاهده نظرات بیشتر';
                alert('نظرات بیشتر بارگذاری شدند');
            }, 1500);
        });
    }
    
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent;
            alert(`در حال اشتراک‌گذاری در ${platform}...`);
        });
    });
    
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            if (cartItem) {
                if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
                    cartItem.style.opacity = '0';
                    cartItem.style.transform = 'translateX(100px)';
                    setTimeout(() => {
                        cartItem.remove();
                        cartCount--;
                        if (cartCountElement) {
                            cartCountElement.textContent = cartCount;
                        }
                        alert('محصول از سبد خرید حذف شد');
                    }, 300);
                }
            }
        });
    });
    
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('در حال انتقال به صفحه پرداخت...');
        });
    }
    
    const applyPromoBtn = document.querySelector('.apply-promo');
    const promoInput = document.querySelector('.promo-input');
    
    if (applyPromoBtn && promoInput) {
        applyPromoBtn.addEventListener('click', function() {
            if (promoInput.value.trim() !== '') {
                alert(`کد تخفیف "${promoInput.value}" اعمال شد`);
                promoInput.value = '';
            } else {
                alert('لطفاً کد تخفیف را وارد کنید');
            }
        });
    }
    
    const viewCategoryButtons = document.querySelectorAll('.view-category');
    viewCategoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryCard = this.closest('.category-card');
            if (categoryCard) {
                const categoryName = categoryCard.querySelector('h3');
                if (categoryName) {
                    alert(`در حال انتقال به صفحه ${categoryName.textContent}...`);
                }
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.contact-card, .mission-card, .vision-card, .team-member, .achievement-item, .product-card, .product-detail-container, .product-features, .product-reviews, .category-card, .glass-card, .testimonial-item, .blog-card, .feature-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    if (testimonials.length > 1) {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index === 0 ? 'block' : 'none';
        });
        
        setInterval(() => {
            testimonials.forEach((testimonial, index) => {
                testimonial.style.display = index === currentTestimonial ? 'block' : 'none';
            });
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }, 5000);
    }
    
    const secondaryButtons = document.querySelectorAll('.secondary-button');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('درباره')) {
                window.location.href = 'about.html';
            }
        });
    });
});

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
const switchButtons = document.querySelectorAll('.switch-btn');
const authForms = document.querySelectorAll('.auth-form');
const switchIndicator = document.querySelector('.switch-indicator');

if (switchButtons.length > 0 && switchIndicator) {
    switchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formType = this.getAttribute('data-form');
            
            switchButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            if (formType === 'register') {
                switchIndicator.style.left = '5px'; // برعکس: وقتی روی "ثبت نام" کلیک می‌کنیم، ایندیکاتور به چپ بره
            } else {
                switchIndicator.style.left = 'calc(50% + 5px)'; // برعکس: وقتی روی "ورود" کلیک می‌کنیم، ایندیکاتور به راست بره
            }
            
            authForms.forEach(form => {
                form.classList.remove('active');
            });
            
            if (formType === 'login') {
                document.querySelector('.login-form').classList.add('active'); // برعکس
            } else {
                document.querySelector('.register-form').classList.add('active'); // برعکس
            }
        });
    });
}
const togglePasswordButtons = document.querySelectorAll('.toggle-password');
togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const passwordInput = document.getElementById(targetId);
        
        if (passwordInput) {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                this.textContent = '👁️';
            }
        }
    });
});

const registerPassword = document.getElementById('registerPassword');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');

if (registerPassword && strengthFill && strengthText) {
    registerPassword.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        let text = 'ضعیف';
        let color = '#e74c3c';
        
        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;
        
        if (strength >= 75) {
            text = 'قوی';
            color = '#27ae60';
        } else if (strength >= 50) {
            text = 'متوسط';
            color = '#f39c12';
        }
        
        strengthFill.style.width = `${strength}%`;
        strengthFill.className = 'strength-fill';
        if (strength >= 75) {
            strengthFill.classList.add('strong');
        } else if (strength >= 50) {
            strengthFill.classList.add('medium');
        }
        strengthText.textContent = text;
        strengthText.style.color = color;
    });
}

const loginForm = document.getElementById('loginFormSubmit');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail');
        const password = document.getElementById('loginPassword');
        
        if (email && password) {
            if (!email.value || !password.value) {
                alert('لطفاً تمامی فیلدها را پر کنید.');
                return;
            }
            
            // شبیه‌سازی ورود
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'در حال ورود...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('ورود موفقیت‌آمیز بود!');
                window.location.href = 'profile.html';
            }, 2000);
        }
    });
}

const registerForm = document.getElementById('registerFormSubmit');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('registerEmail');
        const phone = document.getElementById('registerPhone');
        const password = document.getElementById('registerPassword');
        const confirmPassword = document.getElementById('confirmPassword');
        const terms = document.getElementById('terms');
        
        if (firstName && lastName && email && phone && password && confirmPassword && terms) {
            if (!firstName.value || !lastName.value || !email.value || !phone.value || !password.value || !confirmPassword.value) {
                alert('لطفاً تمامی فیلدهای اجباری را پر کنید.');
                return;
            }
            
            if (password.value !== confirmPassword.value) {
                alert('رمز عبور و تکرار آن یکسان نیستند.');
                return;
            }
            
            if (!terms.checked) {
                alert('لطفاً با قوانین و شرایط موافقت کنید.');
                return;
            }
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'در حال ثبت نام...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('ثبت نام موفقیت‌آمیز بود! به صفحه پروفایل منتقل می‌شوید.');
                window.location.href = 'profile.html';
            }, 2000);
        }
    });
}

const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.classList.contains('google') ? 'Google' :
                        this.classList.contains('facebook') ? 'Facebook' :
                        this.classList.contains('telegram') ? 'Telegram' : '';
        
        if (platform) {
            alert(`در حال ورود با ${platform}...`);
        }
    });
});

const forgotPasswordLink = document.querySelector('.forgot-password');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = prompt('لطفاً ایمیل خود را وارد کنید:');
        if (email) {
            alert(`لینک بازیابی رمز عبور به ایمیل ${email} ارسال شد.`);
        }
    });
}