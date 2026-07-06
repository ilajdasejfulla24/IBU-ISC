// Enhanced security and functionality for International Student Conference website

// Security Headers and HTTPS Enforcement
(function() {
    'use strict';
    
    // Force HTTPS redirect
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        location.replace('https:' + window.location.href.substring(window.location.protocol.length));
        return;
    }
    
    // Disable right-click context menu on production
    if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }
    
    // Disable drag and drop for security
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
    
    // Disable text selection on sensitive areas
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return true;
        }
        if (e.target.closest('.nav-menu, .cta-button, .submit-btn')) {
            e.preventDefault();
        }
    });
    
    // Monitor for suspicious activity
    let suspiciousActivityCount = 0;
    
    document.addEventListener('keydown', function(e) {
        // Block common hacking key combinations
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) { // View source
            e.preventDefault();
            suspiciousActivityCount++;
            if (suspiciousActivityCount > 3) {
            }
        }
        
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) { // Developer tools
            e.preventDefault();
            suspiciousActivityCount++;
        }
    });
    
    // Check for browser security features
    if ('serviceWorker' in navigator) {
    }
    
    if (location.protocol === 'https:') {
    }
    
    if (window.crypto && window.crypto.subtle) {
    }
    
    
    // Mobile Security Enhancements
    if ('ontouchstart' in window) {
        
        // Prevent zooming (security measure)
        document.addEventListener('gesturestart', function(e) {
            e.preventDefault();
        });
        
        // Disable text selection on mobile for sensitive areas
        document.addEventListener('touchstart', function(e) {
            if (e.target.closest('.nav-menu, .cta-button, .submit-btn')) {
                e.preventDefault();
            }
        });
    }
    
    // Form Security Enhancements
    document.addEventListener('DOMContentLoaded', function() {
        // Disable autocomplete on sensitive fields
        const sensitiveFields = document.querySelectorAll('input[type="email"], input[type="tel"]');
        sensitiveFields.forEach(field => {
            field.setAttribute('autocomplete', 'off');
            field.setAttribute('spellcheck', 'false');
        });
        
        // Add form validation security
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                // Check if honeypot field is filled
                const honeypot = form.querySelector('input[name="website"]');
                if (honeypot && honeypot.value.trim() !== '') {
                    e.preventDefault();
                    return false;
                }
            });
        });
    });
    
    // Performance and Security Monitoring
    if ('performance' in window && 'timing' in window.performance) {
        window.addEventListener('load', function() {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            if (loadTime > 10000) { // 10 seconds
            }
        });
    }
})();

// N8N Webhook Configuration with Security 
const N8N_CONFIG = {
    baseURL: atob('aHR0cHM6Ly95c25tLnh5eg=='),
    endpoints: {
        abstract: atob('L3dlYmhvb2svc3VibWl0LWFic3RyYWN0'),
        fullpaper: atob('L3dlYmhvb2svc3VibWl0LWZ1bGxwYXBlcg==')
    }
};

// Security Configuration
const SECURITY_CONFIG = {
    rateLimitMinutes: 5, // Allow 1 submission per 5 minutes
    maxRequestAge: 10 * 60 * 1000, // 10 minutes max request age
    honeypotFieldName: 'website' // Honeypot field name
};

// Faculty Topics Data
const FACULTY_TOPICS = {
    law: [
        'Regulating Artificial Intelligence: Challenges for Data Protection and Privacy Law',
        'Sustainable Development and Environmental Law: Legal Tools for Climate-Resilient Policies',
        'Ethical Dilemmas in AI and the Role of Human Rights Law',
        'Corporate Responsibility and Sustainability Reporting: From Voluntary Ethics to Legal Obligations',
        'Intellectual Property Rights in the Age of AI: Ownership and Protection of AI-Generated Innovations',
        'Artificial Intelligence and the Future of Democratic Governance',
        'Global Sustainability Policy: Bridging the Gap Between Climate Agreements and National Politics',
        'Green Politics in the Digital Age: The Role of Political Parties and Movements in Shaping a Sustainable Future',
        'Geopolitics of Artificial Intelligence: Competing Strategies Between Global Powers',
        'AI and Democratic Integrity: How Algorithms Impact Elections and Political Discourse'
    ],
    humanities: [
        'AI and Child Development: The Effects of Smart Technologies on Cognitive, Emotional, and Social Growth',
        'AI in the Workplace: Psychological Impacts on Employee Well-being, Motivation, and Job Identity',
        'Human-AI Interaction: Cognitive Bias, Trust, and Decision-Making in a Technologically Mediated Environment',
        'AI in Mental Health Care: Ethical and Therapeutic Implications of Chatbots and Digital Therapists',
        'AI in Education: Cognitive Load, Motivation, and Learning Outcomes in Intelligent Learning Environments',
        'AI-Driven Persuasion: Ethical Challenges and Psychological Effects of Algorithmic Messaging in Modern PR and Marketing'
    ],
    economics: [
        'AI-Driven Consumer Behavior & Ethical Digital Transformation in E-Commerce',
        'Blockchain, AI & Green Logistics: The Triple Revolution in E-Business',
        'AI and Global Trade: Disruptions, Opportunities, and Ethical Dilemmas',
        'Digital Colonialism or Development? AI\'s Role in Global Economic Equity',
        'AI-Enhanced Decision-Making: Ethical Leadership for a Sustainable Future',
        'Managing AI-Driven Change: Sustainability as a Strategic Imperative',
        'Green Fintech and AI: Ethical Innovation for Sustainable Finance',
        'Algorithmic Bias in Financial Decision-Making: A Threat to Inclusive Growth?'
    ],
    education: [
        'AI-Powered Language Learning Tools',
        'Exploring Adaptive Learning Platforms and Chatbots',
        'Combining Text, Video, and AI-Generated Materials Responsibly',
        'Ethical Implications of AI-Mediated Therapy',
        'Confidentiality and Data Security in Tele-Counseling Platforms'
    ],
    art: [
        'Post-Human Aesthetics: How AI Shapes the Visual Language of Contemporary Art',
        'Ethics by Design: AI Tools and the Future of Sustainable Visual Communication',
        'Smart Textiles and AI: Designing the Future of Sustainable and Ethical Fashion',
        'AI-Driven Living: Designing Ethical and Sustainable Smart Spaces',
        'Synthetic Realities: The Ethics of AI in Filmmaking and Visual Storytelling',
        'Animating the Future: AI-Assisted 2D Animation for Ethical and Sustainable Storytelling'
    ],
    engineering: [
        'AI-Driven Edge Computing for Sustainable Smart Cities',
        'Ethical Decision-Making in AI-Powered Supply Chains',
        'Federated Learning for Sustainable Data Privacy in IoT Networks',
        'Ethical and Sustainable Practices in Generative Architectural AI'
    ]
};

// Generate browser fingerprint for basic user identification
function generateFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Browser fingerprint', 2, 2);
    
    const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset(),
        canvas.toDataURL()
    ].join('|');
    
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
        const char = fingerprint.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    
    return Math.abs(hash).toString(36);
}

// Check rate limiting
function checkRateLimit(formType) {
    const now = Date.now();
    const lastSubmission = localStorage.getItem(`lastSubmission_${formType}`);
    
    if (lastSubmission) {
        const timeDiff = now - parseInt(lastSubmission);
        const minInterval = SECURITY_CONFIG.rateLimitMinutes * 60 * 1000;
        
        if (timeDiff < minInterval) {
            const remainingMinutes = Math.ceil((minInterval - timeDiff) / (60 * 1000));
            return {
                allowed: false,
                message: `Please wait ${remainingMinutes} more minute(s) before submitting again. This helps prevent spam.`
            };
        }
    }
    
    return { allowed: true };
}

// Update rate limit tracking
function updateRateLimit(formType) {
    localStorage.setItem(`lastSubmission_${formType}`, Date.now().toString());
}

// Check for suspicious activity
function checkSuspiciousActivity() {
    const suspiciousPatterns = [
        // Check if multiple tabs are open (basic check)
        document.visibilityState === 'hidden',
        // Check if user interacted with page
        document.hasFocus && !document.hasFocus()
    ];
    
    return suspiciousPatterns.some(pattern => pattern);
}

// Validate referrer (basic check)
function validateReferrer() {
    const referrer = document.referrer;
    const currentDomain = window.location.hostname;
    
    // Allow direct access or same domain
    if (!referrer || referrer.includes(currentDomain)) {
        return true;
    }
    
    return true; // Don't block, just log for now
}

// Initialize dynamic dropdowns
function initDynamicDropdowns() {
    try {
        // Initialize for both forms
        const abstractFaculty = document.getElementById('abstractFaculty');
        const abstractTopic = document.getElementById('abstractTopic');
        const paperFaculty = document.getElementById('paperFaculty');
        const paperTopic = document.getElementById('paperTopic');
        
        if (abstractFaculty && abstractTopic) {
            abstractFaculty.addEventListener('change', function() {
                updateTopicDropdown(this.value, abstractTopic);
            });
        }
        
        if (paperFaculty && paperTopic) {
            paperFaculty.addEventListener('change', function() {
                updateTopicDropdown(this.value, paperTopic);
            });
        }
        
    } catch (error) {
    }
}

// Update topic dropdown based on selected faculty
function updateTopicDropdown(facultyValue, topicSelect) {
    try {
        // Clear existing options
        topicSelect.innerHTML = '<option value="">Select a topic</option>';
        
        if (!facultyValue) {
            topicSelect.disabled = true;
            topicSelect.innerHTML = '<option value="">First select a faculty</option>';
            return;
        }
        
        // Get topics for selected faculty
        const topics = FACULTY_TOPICS[facultyValue];
        
        if (topics && topics.length > 0) {
            topicSelect.disabled = false;
            
            topics.forEach((topic, index) => {
                const option = document.createElement('option');
                option.value = topic;
                option.textContent = `${index + 1}. ${topic}`;
                topicSelect.appendChild(option);
            });
        } else {
            topicSelect.disabled = true;
            topicSelect.innerHTML = '<option value="">No topics available</option>';
        }
    } catch (error) {
        topicSelect.disabled = true;
        topicSelect.innerHTML = '<option value="">Error loading topics</option>';
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize functions
    initCountdown();
    initSmoothScrolling();
    initFormSubmissions();
    initFileValidation();
    initMobileMenu();
    initAccordions();
    initTabs();
    initDynamicDropdowns();
    initQRCode();
    initImageModal();
    
    // Set initial tab state
    const firstTabButton = document.querySelector('.tab-button');
    const firstTabContent = document.querySelector('.tab-content');
    
    if (firstTabButton) firstTabButton.classList.add('active');
    if (firstTabContent) firstTabContent.classList.add('active');
    
    // Add page load animation
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Conference Timeline Countdown
function initCountdown() {
    // Define all conference dates
    const dates = {
        abstract: new Date("October 17, 2025 23:59:59").getTime(),
        notification: new Date("October 21, 2025 23:59:59").getTime(),
        fullpaper: new Date("November 5, 2025 23:59:59").getTime(),
        congress: new Date("November 24, 2025 09:00:00").getTime()
    };
    
    function updateCountdown(targetDate, prefix) {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            // If deadline has passed, show "Completed" or next phase
            const daysElement = document.getElementById(`${prefix}-days`);
            const hoursElement = document.getElementById(`${prefix}-hours`);
            const minutesElement = document.getElementById(`${prefix}-minutes`);
            const secondsElement = document.getElementById(`${prefix}-seconds`);
            
            if (daysElement) daysElement.textContent = "00";
            if (hoursElement) hoursElement.textContent = "00";
            if (minutesElement) minutesElement.textContent = "00";
            if (secondsElement) secondsElement.textContent = "00";
            
            // Add completed class for styling
            const milestoneElement = document.querySelector(`[data-milestone="${prefix}"]`);
            if (milestoneElement) {
                milestoneElement.classList.add('completed');
            }
            return false;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysElement = document.getElementById(`${prefix}-days`);
        const hoursElement = document.getElementById(`${prefix}-hours`);
        const minutesElement = document.getElementById(`${prefix}-minutes`);
        const secondsElement = document.getElementById(`${prefix}-seconds`);
        
        if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
        if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
        if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
        if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');
        
        return true;
    }
    
    // Update all countdowns every second
    const timer = setInterval(function() {
        const abstractActive = updateCountdown(dates.abstract, 'abstract');
        const notificationActive = updateCountdown(dates.notification, 'notification');
        const fullpaperActive = updateCountdown(dates.fullpaper, 'fullpaper');
        const congressActive = updateCountdown(dates.congress, 'congress');
        
        // If all deadlines have passed, we could clear the timer
        if (!abstractActive && !notificationActive && !fullpaperActive && !congressActive) {
            // Keep timer running to show completed state
            // clearInterval(timer);
        }
    }, 1000);
}

// Tab Switching
function showTab(tabName) {
    try {
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all buttons
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Show selected tab content
        const selectedTab = document.getElementById(tabName + '-tab');
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        // Add active class to clicked button
        if (event && event.target) {
            event.target.classList.add('active');
        }
    } catch (error) {
    }
}

// Form Submission Handler with Enhanced Security
async function handleFormSubmission(formType) {
    
    try {
        // Security checks first
        
        // 1. Rate limiting check
        const rateLimitCheck = checkRateLimit(formType);
        if (!rateLimitCheck.allowed) {
            showMessage('error', rateLimitCheck.message);
            return false;
        }
        
        // 2. Referrer validation
        if (!validateReferrer()) {
            showMessage('error', 'Security check failed. Please refresh the page and try again.');
            return false;
        }
        
        // 3. Generate security metadata
        const fingerprint = generateFingerprint();
        const timestamp = Date.now();
        const nonce = Math.random().toString(36).substring(2, 15);
        
        
        const formId = formType === 'abstract' ? 'abstractForm' : 'paperForm';
        const form = document.getElementById(formId);
        if (!form) {
            return false;
        }
        
        
        // Get form data
        const formData = new FormData(form);
        
        // 4. Honeypot check (bot detection)
        const honeypotValue = formData.get(SECURITY_CONFIG.honeypotFieldName);
        if (honeypotValue && honeypotValue.trim() !== '') {
            showMessage('error', 'Please refresh the page and try again.');
            return false;
        }
        
        // 5. Add security metadata to form data
        formData.append('security_fingerprint', fingerprint);
        formData.append('security_timestamp', timestamp.toString());
        formData.append('security_nonce', nonce);
        formData.append('security_referrer', document.referrer || 'direct');
        
        for (let [key, value] of formData.entries()) {
            if (key === 'abstract_file' || key === 'full_paper_file' || key === 'file') {
            } else if (key === 'email') {
            } else if (key === 'phone') {
            } else {
            }
        }
        
        // Update file field name for N8N workflow compatibility
        if (formType === 'abstract') {
            // Abstract form already uses 'abstract_file'
            const file = formData.get('abstract_file');
            if (!file || file.size === 0) {
                showMessage('error', 'Please select an abstract Microsoft Word document to upload.');
                return false;
            }
        } else {
            // Full paper form uses 'file', but N8N workflow expects 'full_paper_file'
        const file = formData.get('file');
            if (file) {
                formData.delete('file');
                formData.append('full_paper_file', file);
            } else {
                showMessage('error', 'Please select a full paper Microsoft Word document to upload.');
                return false;
            }
        }
        
        // Validate required fields
        if (!validateFormData(formData, formType)) {
            return false;
        }
        
        
        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;
        
        
        // Determine N8N webhook endpoint
        const endpoint = formType === 'abstract' ? 
            N8N_CONFIG.endpoints.abstract : 
            N8N_CONFIG.endpoints.fullpaper;
        
        const fullUrl = N8N_CONFIG.baseURL + endpoint;
        
        // Convert file to base64
        let file, fileBase64, jsonPayload;
        
        if (formType === 'abstract') {
            file = formData.get('abstract_file');
            fileBase64 = await convertFileToBase64(file);
            
            jsonPayload = {
                author_names: formData.get('author_names'),
                faculty: formData.get('faculty'),
                topic: formData.get('topic'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                paper_title: formData.get('paper_title'),
                agreement: formData.get('agreement'),
                abstract_file_base64: fileBase64,
                abstract_file_name: file.name,
                abstract_file_size: file.size,
                // Security metadata
                security_fingerprint: formData.get('security_fingerprint'),
                security_timestamp: formData.get('security_timestamp'),
                security_nonce: formData.get('security_nonce'),
                security_referrer: formData.get('security_referrer')
            };
        } else {
            file = formData.get('full_paper_file') || formData.get('file');
            fileBase64 = await convertFileToBase64(file);
            
            jsonPayload = {
                author_names: formData.get('author_names') || formData.get('author'),
                faculty: formData.get('faculty'),
                topic: formData.get('topic'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                paper_title: formData.get('paper_title') || formData.get('title'),
                agreement: formData.get('agreement'),
                full_paper_file_base64: fileBase64,
                full_paper_file_name: file.name,
                full_paper_file_size: file.size,
                // Security metadata
                security_fingerprint: formData.get('security_fingerprint'),
                security_timestamp: formData.get('security_timestamp'),
                security_nonce: formData.get('security_nonce'),
                security_referrer: formData.get('security_referrer')
            };
        }
        
        
        // Submit to N8N workflow
        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonPayload)
        });
        
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            // Success
            
            // Update rate limiting after successful submission
            updateRateLimit(formType);
            
            // Handle submission ID - fix template literal issue
            let submissionId = result.submissionId;
            
            // Check if the submission ID is a template literal (N8N configuration issue)
            if (!submissionId || submissionId.includes('{{') || submissionId.includes('$(Code)')) {
                // Generate a fallback submission ID
                const timestamp = Date.now();
                const prefix = formType === 'abstract' ? 'ABS' : 'FP';
                submissionId = `${prefix}-${timestamp}`;
            }
            
            const successMessage = `Submission Successful!\n\nYour ${formType} has been submitted successfully.\nSubmission ID: ${submissionId}\n\nYou'll receive a confirmation email shortly.`;
            
            showMessage('success', successMessage);
                
                // Reset form
                form.reset();
                
                // Reset dropdowns
                const facultySelect = form.querySelector('select[name="faculty"]');
                const topicSelect = form.querySelector('select[name="topic"]');
                if (topicSelect) {
                    topicSelect.disabled = true;
                    topicSelect.innerHTML = '<option value="">First select a faculty</option>';
                }
                
                
        } else {
            // Error from N8N workflow
            let errorMessage = result.error || 'An error occurred during submission.';
            
            let fullErrorMessage = `❌ Submission Failed\n\n${errorMessage}`;
            
            if (result.details && Array.isArray(result.details)) {
                fullErrorMessage += '\n\nDetails:\n' + result.details.map(detail => `• ${detail}`).join('\n');
            }
            
            fullErrorMessage += '\n\nPlease try again or contact support if the problem persists.';
            
            showMessage('error', fullErrorMessage);
        }
        
    } catch (error) {
        
        let errorTitle = 'Connection Error';
        let errorMessage = 'Unable to connect to the submission service.';
        let suggestion = 'Please try again later or contact support.';
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorTitle = 'Network Error';
            errorMessage = 'Please check your internet connection.';
            suggestion = 'Make sure you\'re connected to the internet and try again.';
        }
        
        const fullErrorMessage = `❌ ${errorTitle}\n\n${errorMessage}\n\n${suggestion}`;
        
        showMessage('error', fullErrorMessage);
        
    } finally {
        // Restore button state
        const formId = formType === 'abstract' ? 'abstractForm' : 'paperForm';
        const form = document.getElementById(formId);
        const submitBtn = form?.querySelector('.submit-btn');
        
        if (submitBtn) {
            const originalText = formType === 'abstract' ? 
                '<i class="fas fa-paper-plane"></i> Submit Abstract' :
                '<i class="fas fa-upload"></i> Submit Full Paper';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }
    
    return false; // Prevent default form submission
}

// Client-side form validation
// Input sanitization helper
function sanitizeInput(input, maxLength = 1000) {
    if (!input || typeof input !== 'string') return '';
    
    return input
        .trim()
        .substring(0, maxLength)
        .replace(/[<>]/g, '') // Remove HTML tags
        .replace(/javascript:/gi, '') // Remove JavaScript
        .replace(/data:/gi, '') // Remove data URIs
        .replace(/\s+/g, ' '); // Normalize whitespace
}

function validateFormData(formData, formType) {
    const errors = [];
    
    try {
        // Get and sanitize field values
        const authorNames = sanitizeInput(formData.get('author_names') || formData.get('author') || '', 200);
        const faculty = sanitizeInput(formData.get('faculty') || '', 100);
        const topic = sanitizeInput(formData.get('topic') || '', 500);
        const email = sanitizeInput(formData.get('email') || '', 254);
        const paperTitle = sanitizeInput(formData.get('paper_title') || formData.get('title') || '', 500);
        const agreement = formData.get('agreement');
        const phone = sanitizeInput(formData.get('phone') || '', 20);
        
        
        // Validate required fields
        if (!authorNames.trim()) {
            errors.push('Author full name(s) is required');
        }
        
        if (!faculty.trim()) {
            errors.push('Faculty selection is required');
        }
        
        if (!topic.trim()) {
            errors.push('Topic of interest selection is required');
        }
        
        if (!email.trim()) {
            errors.push('Email address is required');
        } else if (!isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!paperTitle.trim()) {
            errors.push('Paper title is required');
        }
        
        if (!agreement) {
            errors.push('You must agree to the submission guidelines');
        }
        
        // Validate phone number if provided
        if (phone && !isValidPhone(phone)) {
            errors.push('Please enter a valid phone number');
        }
        
        // Show validation errors (secure, user-friendly)
        if (errors.length > 0) {
            
            // Create secure error message
            const errorMessage = `Please fix the following issues:\n${errors.map(error => `• ${error}`).join('\n')}`;
            
            showMessage('error', errorMessage);
            return false;
        }
        
        return true;
        
    } catch (error) {
        showMessage('error', 'An error occurred while validating your submission. Please try again.');
        return false;
    }
}

// Enhanced email validation helper
function isValidEmail(email) {
    if (!email || typeof email !== 'string') return false;
    
    // Remove potential dangerous characters
    const cleanEmail = email.trim();
    
    // Basic length checks
    if (cleanEmail.length < 5 || cleanEmail.length > 254) return false;
    
    // Enhanced regex for better email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
        /[<>]/,  // HTML tags
        /javascript:/i,  // JavaScript injection
        /data:/i,  // Data URI
        /\s{2,}/,  // Multiple spaces
        /\.{2,}/,  // Multiple dots
        /@{2,}/,  // Multiple @ symbols
    ];
    
    if (suspiciousPatterns.some(pattern => pattern.test(cleanEmail))) {
        return false;
    }
    
    return emailRegex.test(cleanEmail);
}

// File to Base64 converter
function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            // Remove data URL prefix (data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,)
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Enhanced phone validation helper
function isValidPhone(phone) {
    if (!phone || phone.trim() === '') return true; // Phone is optional
    
    const cleanPhone = phone.trim();
    
    // Basic length checks
    if (cleanPhone.length < 7 || cleanPhone.length > 20) return false;
    
    // Enhanced regex for international phone numbers
    const phoneRegex = /^[\+]?[1-9]\d{1,14}$|^[\+]?[1-9][\d\s\-\(\)]{6,18}$/;
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
        /[<>]/,  // HTML tags
        /javascript:/i,  // JavaScript injection
        /[a-zA-Z]/,  // Letters (except in country codes)
        /[\.\,\;]/,  // Dangerous punctuation
    ];
    
    if (suspiciousPatterns.some(pattern => pattern.test(cleanPhone))) {
        return false;
    }
    
    return phoneRegex.test(cleanPhone.replace(/[\s\-\(\)]/g, ''));
}

// Show modern success/error messages with animations
function showMessage(type, message) {
    try {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.modern-message');
        existingMessages.forEach(msg => {
            msg.style.opacity = '0';
            msg.style.transform = 'translateY(-20px)';
            setTimeout(() => msg.remove(), 300);
        });
        
        // Create new modern message
        const messageDiv = document.createElement('div');
        messageDiv.className = `modern-message ${type === 'success' ? 'modern-success' : 'modern-error'}`;
        
        const icon = type === 'success' ? '🎉' : '⚠️';
        const bgColor = type === 'success' ? '#10b981' : '#ef4444';
        const textColor = '#ffffff';
        
        // Create message elements safely using DOM methods
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        const iconElement = document.createElement('div');
        iconElement.className = 'message-icon';
        iconElement.textContent = icon;
        
        const textElement = document.createElement('div');
        textElement.className = 'message-text';
        textElement.textContent = message; // Use textContent to prevent XSS
        
        const closeButton = document.createElement('button');
        closeButton.className = 'message-close';
        closeButton.textContent = '✕';
        closeButton.type = 'button';
        
        // Add click event listener instead of onclick attribute
        closeButton.addEventListener('click', function() {
            this.parentElement.parentElement.remove();
        });
        
        messageContent.appendChild(iconElement);
        messageContent.appendChild(textElement);
        messageContent.appendChild(closeButton);
        messageDiv.appendChild(messageContent);
        
        // Add modern styling
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 400px;
            background: ${bgColor};
            color: ${textColor};
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            opacity: 0;
            transform: translateX(400px);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;
        
        // Style message content
        const messageContentElement = messageDiv.querySelector('.message-content');
        messageContentElement.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
        `;
        
        // Style icon
        const iconElementStyle = messageDiv.querySelector('.message-icon');
        iconElementStyle.style.cssText = `
            font-size: 24px;
            flex-shrink: 0;
        `;
        
        // Style text
        const textElementStyle = messageDiv.querySelector('.message-text');
        textElementStyle.style.cssText = `
            flex: 1;
            font-size: 14px;
            line-height: 1.4;
            font-weight: 500;
        `;
        
        // Style close button
        const closeButtonStyle = messageDiv.querySelector('.message-close');
        closeButtonStyle.style.cssText = `
            background: none;
            border: none;
            color: ${textColor};
            font-size: 18px;
            cursor: pointer;
            padding: 4px;
            border-radius: 50%;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
            transition: all 0.2s;
        `;
        
        closeButtonStyle.addEventListener('mouseenter', () => {
            closeButtonStyle.style.opacity = '1';
            closeButtonStyle.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        closeButtonStyle.addEventListener('mouseleave', () => {
            closeButtonStyle.style.opacity = '0.8';
            closeButtonStyle.style.background = 'none';
        });
            
        // Add to document
        document.body.appendChild(messageDiv);
        
        // Animate in
        setTimeout(() => {
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateX(0)';
        }, 10);
        
        // Auto remove after delay
        const autoRemoveDelay = type === 'success' ? 5000 : 8000;
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0';
                messageDiv.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
                }, 400);
            }
        }, autoRemoveDelay);
        
    } catch (error) {
        // Fallback to alert with safe message handling
        const safeMessage = typeof message === 'string' ? 
            message.replace(/<[^>]*>/g, '').replace(/[<>&'"]/g, '') : 
            'An error occurred';
        alert(safeMessage);
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Don't apply smooth scroll if link is inside accordion header
                if (this.closest('.accordion-header')) {
                    return;
                }
                
                // Don't scroll if link doesn't have a valid target
                const href = this.getAttribute('href');
                if (!href || href === '#') {
                    return;
                }
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
    }
}

// Form submission event listeners
function initFormSubmissions() {
    try {
        const abstractForm = document.getElementById('abstractForm');
        const paperForm = document.getElementById('paperForm');
        
        
        if (abstractForm) {
            abstractForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleFormSubmission('abstract');
            });
        }
        
        if (paperForm) {
            paperForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleFormSubmission('fullpaper');
            });
        }
        
    } catch (error) {
    }
}

// Enhanced file validation with security checks for Word documents
async function validateFileSecurely(file) {
    try {
        // Basic checks first
        if (!file) {
            return { valid: false, error: 'Please select a file to upload.' };
        }
        
        // File size validation (user-friendly limits)
        const minSize = 1024; // 1KB minimum
        const maxSize = 12 * 1024 * 1024; // 12MB maximum (slightly more tolerant)
        
        if (file.size < minSize) {
            return { valid: false, error: 'The selected file seems too small. Please ensure it\'s a complete Microsoft Word document.' };
        }
        
        if (file.size > maxSize) {
            return { valid: false, error: `File size is ${Math.round(file.size/1024/1024)}MB. Please compress your document or select a file smaller than 12MB.` };
        }
        
        // File name validation and sanitization
        const originalName = file.name;
        const extension = originalName.toLowerCase().split('.').pop();
        
        // Check extension for Word documents
        if (!['doc', 'docx'].includes(extension)) {
            return { valid: false, error: 'Only Microsoft Word documents (.doc, .docx) are accepted. Please convert your document to Word format.' };
        }
        
        // Sanitize filename (remove dangerous characters but don't throw error)
        const sanitizedName = originalName.replace(/[^a-zA-Z0-9._-]/g, '_');
        
        // MIME type validation (more tolerant for Word documents)
        const allowedTypes = [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-word',
            'application/vnd.ms-word.document.macroEnabled.12'
        ];
        if (!allowedTypes.includes(file.type) && file.type !== '') {
            // Only warn if type is clearly wrong, some browsers don't set type correctly
        }
        
        // Read file header to check Word document signature (magic bytes)
        const arrayBuffer = await file.slice(0, 8).arrayBuffer();
        const header = new Uint8Array(arrayBuffer);
        
        // Check for Word document magic bytes
        let isValidWordDoc = false;
        
        // Check for .docx (ZIP-based format) - starts with PK
        if (header[0] === 0x50 && header[1] === 0x4B) {
            isValidWordDoc = true;
        }
        // Check for .doc (OLE format) - starts with D0CF11E0A1B11AE1
        else if (header[0] === 0xD0 && header[1] === 0xCF && header[2] === 0x11 && header[3] === 0xE0) {
            isValidWordDoc = true;
        }
        
        if (!isValidWordDoc) {
            return { valid: false, error: 'This doesn\'t appear to be a valid Microsoft Word document. Please ensure your file is properly saved as .doc or .docx format.' };
        }
        
        // Additional filename security check
        if (originalName.includes('..') || originalName.includes('/') || originalName.includes('\\')) {
            return { valid: false, error: 'Invalid file name. Please rename your file and try again.' };
        }
        
        // All checks passed
        return { 
            valid: true, 
            sanitizedName: sanitizedName,
            size: file.size,
            originalName: originalName
        };
        
    } catch (error) {
        return { valid: false, error: 'Unable to validate the file. Please try selecting the file again.' };
    }
}

// File upload validation with enhanced security
function initFileValidation() {
    try {
        const fileInputs = document.querySelectorAll('input[type="file"]');
        
        fileInputs.forEach(input => {
            input.addEventListener('change', async function() {
                const file = this.files[0];
                
                if (!file) return;
                
                // Show loading state
                const fileLabel = this.closest('.form-group').querySelector('label');
                // Get original text without any file info (remove everything after the first dash)
                const originalLabelText = fileLabel.dataset.originalText || fileLabel.textContent.split(' - ')[0];
                // Store original text for future use
                fileLabel.dataset.originalText = originalLabelText;
                
                fileLabel.textContent = 'Validating file...';
                
                try {
                    const validation = await validateFileSecurely(file);
                    
                    if (!validation.valid) {
                        showMessage('error', validation.error);
                        this.value = '';
                        fileLabel.textContent = originalLabelText;
                        return;
                    }
                    
                    // Success - show file info
                    const fileSize = (validation.size / 1024 / 1024).toFixed(2);
                    showMessage('success', `✅ File validated successfully! "${validation.originalName}" (${fileSize} MB)`);
                    
                    // Update label with file info
                    fileLabel.textContent = `${originalLabelText} - ${validation.sanitizedName}`;
                    
                } catch (error) {
                    showMessage('error', 'Unable to validate the file. Please try selecting the file again.');
                    this.value = '';
                    fileLabel.textContent = originalLabelText;
                }
            });
        });
        
    } catch (error) {
    }
}

// Mobile Menu and Navigation Functionality
function initMobileMenu() {
    try {
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');
        const header = document.querySelector('.header');

        if (!mobileToggle || !navMenu) return;

        // Mobile menu toggle
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Navbar scroll effects
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            try {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Add scrolled class for styling
                if (header) {
                    if (scrollTop > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                }

                lastScrollTop = scrollTop;
            } catch (error) {
            }
        });
    } catch (error) {
    }
}

// Add CSS for menu-open body state and message styling
try {
    const style = document.createElement('style');
    style.textContent = `
        body.menu-open {
            overflow: hidden;
        }
        
        body.menu-open::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            backdrop-filter: blur(5px);
        }
        
        .success-message, .error-message {
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            font-size: 16px;
            line-height: 1.5;
        }
        
        .success-message {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .error-message {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .form-progress {
            height: 4px;
            background: #f1f5f9;
            border-radius: 2px;
            margin-bottom: 2rem;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background: #D8002E;
            border-radius: 2px;
            width: 0%;
            transition: width 0.3s ease, background-color 0.3s ease;
        }

    `;
    document.head.appendChild(style);
} catch (error) {
}

// Initialize accordion functionality with secure event listeners
function initAccordions() {
    try {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                toggleAccordion(this);
            });
        });
        
    } catch (error) {
    }
}

// Initialize tab functionality with secure event listeners
function initTabs() {
    try {
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabName = this.textContent.toLowerCase().includes('abstract') ? 'abstract' : 'paper';
                showTab(tabName);
            });
        });
        
    } catch (error) {
    }
}

// Accordion functionality for guidelines
function toggleAccordion(header) {
    try {
        const accordionItem = header.parentElement;
        const content = accordionItem.querySelector('.accordion-content');
        const isActive = accordionItem.classList.contains('active');
        
        // Store current scroll position
        const currentScrollY = window.scrollY;
        
        // Close all accordion items with smooth animation
        const allItems = document.querySelectorAll('.accordion-item');
        allItems.forEach(item => {
            const itemContent = item.querySelector('.accordion-content');
            if (itemContent && item.classList.contains('active')) {
                // Immediately set overflow to hidden to prevent content jump
                itemContent.style.overflow = 'hidden';
                // Set maxHeight to current height first for smooth closing
                itemContent.style.maxHeight = itemContent.scrollHeight + 'px';
                // Force browser reflow
                itemContent.offsetHeight;
                // Then animate to 0
                requestAnimationFrame(() => {
                    itemContent.style.maxHeight = '0';
                });
            }
            item.classList.remove('active');
        });
        
        // If clicked item wasn't active, open it
        if (!isActive) {
            accordionItem.classList.add('active');
            if (content) {
                // Ensure overflow is hidden during animation
                content.style.overflow = 'hidden';
                // Start from 0 height
                content.style.maxHeight = '0';
                
                // Calculate target height
                const tempMaxHeight = content.style.maxHeight;
                content.style.maxHeight = 'none';
                const targetHeight = content.scrollHeight;
                content.style.maxHeight = tempMaxHeight;
                
                // Use requestAnimationFrame for smooth opening
                requestAnimationFrame(() => {
                    content.style.maxHeight = targetHeight + 'px';
                    
                    // After animation completes, set overflow to visible
                    setTimeout(() => {
                        if (accordionItem.classList.contains('active')) {
                            content.style.overflow = 'visible';
                        }
                        // Restore scroll position
                        window.scrollTo(0, currentScrollY);
                    }, 600); // Match CSS transition duration
                });
            }
        }
    } catch (error) {
    }
}

// Image Modal Functionality
function initImageModal() {
    try {
        const imageContainers = document.querySelectorAll('.image-container');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalClose = document.querySelector('.modal-close');
        
        imageContainers.forEach(container => {
            container.addEventListener('click', function() {
                const imageSrc = this.getAttribute('data-image');
                if (modal && modalImg && imageSrc) {
                    modal.classList.add('active');
                    modalImg.src = imageSrc;
                    modalImg.alt = 'Announcement Image';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        if (modalClose) {
            modalClose.addEventListener('click', closeImageModal);
        }
        
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeImageModal();
                }
            });
        }
    } catch (error) {
    }
}

function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.classList.add('active');
        modalImg.src = imageSrc;
        modalImg.alt = 'Announcement Image';
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
        closeQRCode();
    }
});

// QR Code Functionality
function initQRCode() {
    try {
        const qrButton = document.querySelector('.qr-button');
        const qrClose = document.querySelector('.qr-close');
        const floatingQR = document.getElementById('floatingQR');
        const qrPopup = document.getElementById('qrPopup');
        
        if (qrButton) {
            qrButton.addEventListener('click', function(e) {
                e.stopPropagation();
                if (qrPopup) {
                    qrPopup.classList.toggle('active');
                }
            });
        }
        
        if (qrClose) {
            qrClose.addEventListener('click', function(e) {
                e.stopPropagation();
                if (qrPopup) {
                    qrPopup.classList.remove('active');
                }
            });
        }
        
        // Close QR popup when clicking outside
        document.addEventListener('click', function(e) {
            if (qrPopup && qrPopup.classList.contains('active')) {
                if (!floatingQR.contains(e.target)) {
                    qrPopup.classList.remove('active');
                }
            }
        });
    } catch (error) {
    }
}

function toggleQRCode() {
    const qrPopup = document.getElementById('qrPopup');
    if (qrPopup) {
        qrPopup.classList.toggle('active');
    }
}

function closeQRCode() {
    const qrPopup = document.getElementById('qrPopup');
    if (qrPopup) {
        qrPopup.classList.remove('active');
    }
}
