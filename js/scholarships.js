function filterScholarships(category, buttonElement) {
    // Toggle active classes on filter buttons
    const buttons = document.querySelectorAll('.filter-tag');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // Filter cards
    const cards = document.querySelectorAll('.sch-card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function openApplyModal(scholarshipName) {
    document.getElementById('schNamePlaceholder').textContent = scholarshipName;
    
    // Ensure form is visible and success is hidden initially
    document.getElementById('applyForm').style.display = 'flex';
    document.getElementById('applySuccess').style.display = 'none';
    
    // Reset form fields
    document.getElementById('applyForm').reset();
    
    const modal = document.getElementById('applyModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
}

function closeApplyModal() {
    const modal = document.getElementById('applyModal');
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function submitApplication() {
    const email = document.getElementById('applyEmail').value;
    
    document.getElementById('successMail').textContent = email;
    
    // Hide form & show success details
    document.getElementById('applyForm').style.display = 'none';
    const successBox = document.getElementById('applySuccess');
    successBox.style.display = 'flex';
}

// Close apply modal when clicking on overlay
document.getElementById('applyModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('applyModal')) {
        closeApplyModal();
    }
});
