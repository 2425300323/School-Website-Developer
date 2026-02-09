// ===== ADMISSION FEES =====
const admissionFees = {
    nursery: 500,
    primary: 600,
    jhs: 700
};

// ===== UPDATE FEES BASED ON PROGRAM SELECTION =====
function updateFees() {
    const programSelect = document.getElementById('program');
    const selectedProgram = programSelect.value;
    const programDisplay = document.getElementById('programDisplay');
    const feeDisplay = document.getElementById('feeDisplay');

    const programNames = {
        nursery: 'Nursery',
        primary: 'Primary School',
        jhs: 'Junior High School'
    };

    if (selectedProgram) {
        programDisplay.textContent = programNames[selectedProgram];
        const fee = admissionFees[selectedProgram];
        feeDisplay.textContent = 'GHS ' + fee.toFixed(2);
    } else {
        programDisplay.textContent = 'Select a program';
        feeDisplay.textContent = 'GHS 0.00';
    }
}

// ===== PAYMENT METHOD HANDLER =====
document.addEventListener('DOMContentLoaded', function () {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const mtnDetails = document.getElementById('mtnDetails');
    const cardDetails = document.getElementById('cardDetails');

    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener('change', function () {
            const selectedMethod = this.value;

            // Hide all payment details
            mtnDetails.style.display = 'none';
            cardDetails.style.display = 'none';

            // Show relevant payment details
            if (selectedMethod === 'mtn' || selectedMethod === 'vodafone' || selectedMethod === 'airtel') {
                mtnDetails.style.display = 'block';
                // Update label based on provider
                const mobileNumberLabel = mtnDetails.querySelector('label');
                const provider = selectedMethod.charAt(0).toUpperCase() + selectedMethod.slice(1);
                mobileNumberLabel.textContent = provider + ' Mobile Number *';
            } else if (selectedMethod === 'card') {
                cardDetails.style.display = 'block';
            }
        });
    }

    // ===== FORM SUBMISSION =====
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate form
            if (!validateForm()) {
                return;
            }

            // Collect form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Show success message
            showSuccessMessage(data);

            // Reset form
            this.reset();
            updateFees();
        });
    }
});

// ===== FORM VALIDATION =====
function validateForm() {
    const studentName = document.getElementById('studentName').value.trim();
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('gender').value;
    const program = document.getElementById('program').value;
    const parentName = document.getElementById('parentName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const reason = document.getElementById('reason').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;
    const terms = document.getElementById('terms').checked;

    // Validate required fields
    if (!studentName) {
        alert('Please enter student name');
        return false;
    }

    if (!dateOfBirth) {
        alert('Please select date of birth');
        return false;
    }

    if (!gender) {
        alert('Please select gender');
        return false;
    }

    if (!program) {
        alert('Please select a program');
        return false;
    }

    if (!parentName) {
        alert('Please enter parent/guardian name');
        return false;
    }

    if (!email) {
        alert('Please enter email address');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!phone) {
        alert('Please enter phone number');
        return false;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return false;
    }

    if (!address) {
        alert('Please enter residential address');
        return false;
    }

    if (!reason) {
        alert('Please provide reason for application');
        return false;
    }

    if (!paymentMethod) {
        alert('Please select a payment method');
        return false;
    }

    // Validate payment-specific fields
    const selectedMethod = paymentMethod;
    if (selectedMethod === 'mtn' || selectedMethod === 'vodafone' || selectedMethod === 'airtel') {
        const mobileNumber = document.getElementById('mtnNumber').value.trim();
        if (!mobileNumber) {
            alert('Please enter mobile number for ' + selectedMethod);
            return false;
        }
    } else if (selectedMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const expiryDate = document.getElementById('expiryDate').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (!cardNumber || cardNumber.length < 13) {
            alert('Please enter a valid card number');
            return false;
        }

        if (!expiryDate || !expiryDate.match(/^\d{2}\/\d{2}$/)) {
            alert('Please enter expiry date in MM/YY format');
            return false;
        }

        if (!cvv || cvv.length < 3) {
            alert('Please enter a valid CVV');
            return false;
        }
    }

    if (!terms) {
        alert('Please agree to the terms and conditions');
        return false;
    }

    return true;
}

// ===== SUCCESS MESSAGE =====
function showSuccessMessage(data) {
    const message = `
    ✅ Admission Application Submitted Successfully!
    
    Student Name: ${data.studentName}
    Program: ${document.getElementById('program').options[document.getElementById('program').selectedIndex].text}
    
    A confirmation email will be sent to: ${data.email}
    
    Thank you for applying to Great Kwame Nkrumah Memorial School!
    Our admissions team will contact you within 2-3 business days.
    `;

    alert(message);
    
    // Log to console as well
    console.log('[v0] Admission form submitted:', data);
}

// ===== QUICK CONTACT FORM =====
document.addEventListener('DOMContentLoaded', function () {
    const quickForm = document.getElementById('quickForm');
    if (quickForm) {
        quickForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });

            if (!isValid) {
                alert('Please fill in all fields');
                return;
            }

            alert('Thank you for your inquiry! We will get back to you soon.');
            this.reset();
        });
    }
});

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// ===== CARD NUMBER FORMATTING =====
document.addEventListener('DOMContentLoaded', function () {
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }

    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
        });
    }
});

// ===== SMOOTH SCROLL ENHANCEMENT =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
