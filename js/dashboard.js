document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch & Display Username
    const savedName = localStorage.getItem('username') || 'Vaibhav';
    
    const displayElement = document.getElementById('userNameDisplay');
    const welcomeNameElement = document.getElementById('welcomeName');
    
    if (displayElement) displayElement.textContent = savedName;
    if (welcomeNameElement) welcomeNameElement.textContent = savedName;

    // 2. Light/Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            let theme = 'dark';
            if (document.body.classList.contains('light-mode')) {
                theme = 'light';
            }
            localStorage.setItem('theme', theme);
        });
    }

    // 3. Mobile Sidebar Toggle Drawer
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
                sidebar.classList.remove('open');
            }
        });
    }
});

function logout() {
    localStorage.removeItem('username');
    // Navigate back to login landing page (located in the parent directory)
    window.location.href = '../index.html';
}
