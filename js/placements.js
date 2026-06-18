document.addEventListener('DOMContentLoaded', () => {
    // Determine theme status to adjust text colors in Chart.js
    const isLight = document.body.classList.contains('light-mode');
    const textColor = isLight ? '#0f172a' : '#f8fafc';
    const gridColor = isLight ? '#e2e8f0' : 'rgba(255, 255, 255, 0.05)';

    // --- CHART 1: BRANCH-WISE AVERAGE PACKAGE (BAR CHART) ---
    const ctx1 = document.getElementById('packageChart');
    if (ctx1) {
        // Create gradients
        const gradient = ctx1.getContext('2d').createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, '#3b82f6'); // Electric blue
        gradient.addColorStop(1, '#a855f7'); // Purple

        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['CSE', 'AI & ML', 'ISE/IT', 'ECE', 'EEE', 'Mech', 'Civil'],
                datasets: [{
                    label: 'Average Package (LPA)',
                    data: [26, 28, 22, 17, 12, 9, 7],
                    backgroundColor: gradient,
                    borderRadius: 8,
                    borderWidth: 0,
                    barPercentage: 0.6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
                    },
                    y: {
                        grid: { color: gridColor },
                        ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } },
                        border: { dash: [4, 4] }
                    }
                }
            }
        });
    }

    // --- CHART 2: YEAR-WISE COMPARISON (LINE CHART) ---
    const ctx2 = document.getElementById('yearChart');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['2022', '2023', '2024', '2025', '2026'],
                datasets: [
                    {
                        label: 'Highest Package',
                        data: [42, 45, 48, 52, 56],
                        borderColor: '#10b981', // Success Green
                        backgroundColor: 'transparent',
                        tension: 0.3,
                        pointRadius: 4,
                        pointBackgroundColor: '#10b981'
                    },
                    {
                        label: 'Average Package',
                        data: [16, 17.5, 19, 20.5, 22],
                        borderColor: '#3b82f6', // Primary Blue
                        backgroundColor: 'transparent',
                        tension: 0.3,
                        pointRadius: 4,
                        pointBackgroundColor: '#3b82f6'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
                    },
                    y: {
                        grid: { color: gridColor },
                        ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } },
                        border: { dash: [4, 4] }
                    }
                }
            }
        });
    }

    // Adapt chart styling when theme is toggled dynamically
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Wait brief moment for class list to toggle in body
            setTimeout(() => {
                window.location.reload(); // Quick reset of canvas scales
            }, 100);
        });
    }
});
