function showSignup() {
    const loginCard = document.getElementById('loginCard');
    const signupCard = document.getElementById('signupCard');
    
    loginCard.classList.remove('active');
    setTimeout(() => {
        loginCard.style.display = 'none';
        signupCard.style.display = 'block';
        setTimeout(() => {
            signupCard.classList.add('active');
        }, 50);
    }, 400);
}

function showLogin() {
    const loginCard = document.getElementById('loginCard');
    const signupCard = document.getElementById('signupCard');
    
    signupCard.classList.remove('active');
    setTimeout(() => {
        signupCard.style.display = 'none';
        loginCard.style.display = 'block';
        setTimeout(() => {
            loginCard.classList.add('active');
        }, 50);
    }, 400);
}

function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        iconElement.classList.remove('fa-eye');
        iconElement.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        iconElement.classList.remove('fa-eye-slash');
        iconElement.classList.add('fa-eye');
    }
}

function checkPasswordStrength(password) {
    const strengthText = document.getElementById('strengthText');
    const strengthBar = document.getElementById('strengthBar');
    
    if (password.length === 0) {
        strengthText.innerText = 'Empty';
        strengthText.className = 'strength-weak';
        strengthBar.className = 'strength-bar';
        return;
    }
    
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) {
        strengthText.innerText = 'Weak';
        strengthText.className = 'strength-weak';
        strengthBar.className = 'strength-bar weak';
    } else if (score <= 4) {
        strengthText.innerText = 'Medium';
        strengthText.className = 'strength-medium';
        strengthBar.className = 'strength-bar medium';
    } else {
        strengthText.innerText = 'Strong';
        strengthText.className = 'strength-strong';
        strengthBar.className = 'strength-bar strong';
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const name = email.split('@')[0];
    localStorage.setItem('username', name.charAt(0).toUpperCase() + name.slice(1));
    // Redirect to dashboard page
    window.location.href = 'pages/dashboard.html';
}

function signup() {
    const name = document.getElementById('signupName').value;
    localStorage.setItem('username', name);
    // Redirect to dashboard page
    window.location.href = 'pages/dashboard.html';
}
