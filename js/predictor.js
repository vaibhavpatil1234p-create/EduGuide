function adjustRankPlaceholder() {
    const examSelect = document.getElementById('exam');
    const rankInput = document.getElementById('rank');
    if (examSelect.value === 'JEE Main') {
        rankInput.placeholder = 'Enter JEE Main Rank (e.g. 1500)';
    } else if (examSelect.value === 'KCET') {
        rankInput.placeholder = 'Enter KCET Rank (e.g. 240)';
    } else {
        rankInput.placeholder = 'Enter COMEDK Rank (e.g. 1800)';
    }
}

function triggerPrediction() {
    const emptyState = document.getElementById('emptyState');
    const loadingState = document.getElementById('loadingState');
    const resultsState = document.getElementById('resultsState');
    const predictBtn = document.getElementById('predictBtn');
    
    // Disable form button & show loader
    predictBtn.disabled = true;
    predictBtn.innerHTML = '<span>AI Analyzing...</span><i class="fa-solid fa-circle-notch fa-spin"></i>';
    
    emptyState.style.display = 'none';
    resultsState.style.display = 'none';
    loadingState.style.display = 'flex';

    setTimeout(() => {
        // Fetch values
        const stream = document.getElementById('stream').value;
        const exam = document.getElementById('exam').value;
        const rank = parseInt(document.getElementById('rank').value) || 5000;
        const budget = parseInt(document.getElementById('budget').value) || 4;
        const interest = document.getElementById('interest').value;
        const state = document.getElementById('state').value;

        // Perform mock career logic
        let branch = "Computer Science & Engineering";
        let confidence = 96;
        let avgPack = "₹22 LPA";
        let colleges = [];
        let overview = "";

        if (stream === 'PCB') {
            branch = "Biotechnology & Genetic Engineering";
            avgPack = "12 LPA";
            confidence = 88;
            colleges = [
                { name: "IIT Bombay (Biotech)", pkg: "₹20 LPA" },
                { name: "MSRIT Bangalore (Biotech)", pkg: "₹8 LPA" }
            ];
            overview = "The biotech field is experiencing rapid growth due to genomic research and bio-computational breakthroughs. Recommended focus: Bioinformatics and Molecular Systems.";
        } else if (interest === 'AI & ML') {
            branch = "Artificial Intelligence & Machine Learning";
            avgPack = "₹26 LPA";
            confidence = 95;
            
            if (rank < 1000) {
                colleges = [
                    { name: "IIT Bombay", pkg: "₹36 LPA" },
                    { name: "IIIT Hyderabad", pkg: "₹32 LPA" },
                    { name: "IIT Delhi", pkg: "₹34 LPA" }
                ];
            } else if (rank < 5000) {
                colleges = [
                    { name: "BITS Pilani", pkg: "₹30 LPA" },
                    { name: "IIIT Hyderabad", pkg: "₹28 LPA" },
                    { name: "RVCE Bangalore", pkg: "₹18 LPA" }
                ];
            } else {
                colleges = [
                    { name: "PES University Bangalore", pkg: "₹17 LPA" },
                    { name: "MSRIT Bangalore", pkg: "₹15 LPA" },
                    { name: "BMSCE Bangalore", pkg: "₹14 LPA" }
                ];
            }
            overview = "Artificial Intelligence and Machine Learning remains the highest-paying tech sector. Massive demand in neural model designs, data pipelines, and predictive tech.";
        } else if (interest === 'Cybersecurity') {
            branch = "Computer Science (Cyber Security)";
            avgPack = "₹18 LPA";
            confidence = 91;
            
            if (rank < 3000) {
                colleges = [
                    { name: "IIT Delhi", pkg: "₹34 LPA" },
                    { name: "BITS Pilani", pkg: "₹30 LPA" },
                    { name: "IIIT Hyderabad", pkg: "₹32 LPA" }
                ];
            } else {
                colleges = [
                    { name: "RVCE Bangalore", pkg: "₹18 LPA" },
                    { name: "PES University", pkg: "₹17 LPA" },
                    { name: "BMSCE Bangalore", pkg: "₹14 LPA" }
                ];
            }
            overview = "Cyber Security is a resilient domain with highly critical roles in network defense, cryptography, and cloud infrastructure security. High recruiting rates at global banking houses.";
        } else if (interest === 'Robotics') {
            branch = "Robotics & Automation Engineering";
            avgPack = "₹16 LPA";
            confidence = 89;
            colleges = [
                { name: "IIT Bombay", pkg: "₹36 LPA" },
                { name: "IIIT Hyderabad (Robotics)", pkg: "₹28 LPA" },
                { name: "MSRIT Bangalore", pkg: "₹12 LPA" }
            ];
            overview = "Robotics bridges software models with mechanical controllers. Prominent opportunities in industrial automation, electric vehicles, and automated delivery systems.";
        } else {
            // Software Development
            branch = "Computer Science & Engineering";
            avgPack = "₹22 LPA";
            confidence = 94;
            
            if (rank < 800) {
                colleges = [
                    { name: "IIT Bombay", pkg: "₹36 LPA" },
                    { name: "IIT Delhi", pkg: "₹34 LPA" },
                    { name: "IIIT Hyderabad", pkg: "₹32 LPA" }
                ];
            } else if (rank < 4000) {
                colleges = [
                    { name: "BITS Pilani", pkg: "₹30 LPA" },
                    { name: "RVCE Bangalore", pkg: "₹18 LPA" },
                    { name: "PES University", pkg: "₹17 LPA" }
                ];
            } else {
                colleges = [
                    { name: "MSRIT Bangalore", pkg: "₹15 LPA" },
                    { name: "BMSCE Bangalore", pkg: "₹14 LPA" },
                    { name: "PES University", pkg: "₹12 LPA" }
                ];
            }
            overview = "Classic Software Engineering provides the widest array of roles, spanning full-stack frameworks, system architectures, and cloud databases. Extremely high placement volume.";
        }

        // Render UI
        document.getElementById('resBranch').textContent = branch;
        document.getElementById('resPackage').textContent = avgPack;
        document.getElementById('resConfidence').textContent = confidence + '%';
        document.getElementById('resOverview').textContent = overview;

        const collegesList = document.getElementById('resColleges');
        collegesList.innerHTML = '';
        colleges.forEach(col => {
            const div = document.createElement('div');
            div.className = 'campus-item';
            div.innerHTML = `
                <span class="campus-name">${col.name}</span>
                <span class="campus-pack">${col.pkg} Avg</span>
            `;
            collegesList.appendChild(div);
        });

        // Hide loader & show result
        loadingState.style.display = 'none';
        resultsState.style.display = 'block';
        
        // Restore button state
        predictBtn.disabled = false;
        predictBtn.innerHTML = '<span>Generate Recommendation</span><i class="fa-solid fa-gears"></i>';

    }, 1500);
}
