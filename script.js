// Terminal Loading Animation
class TerminalLoader {
    constructor() {
        this.commands = [
            'git clone https://github.com/omjanamanchi/omjanamanchi.github.io.git',
            'cd omjanamanchi.github.io',
            'npm install',
            'npm run build',
            'echo "Setting up portfolio website..."',
            'echo "Loading personal information..."',
            'echo "Initializing components..."',
            'echo "Building responsive layout..."',
            'echo "Optimizing assets..."'
        ];
        
        this.outputs = [
            'Cloning into \'omjanamanchi.github.io\'...',
            'remote: Enumerating objects: 127, done.',
            'remote: Counting objects: 100% (127/127), done.',
            'remote: Compressing objects: 100% (89/89), done.',
            'remote: Total 127 (delta 38), reused 127 (delta 38), pack-reused 0',
            'Receiving objects: 100% (127/127), 38.00 KiB | 1.90 MiB/s, done.',
            'Resolving deltas: 100% (38/38), done.',
            '',
            'added 127 packages, and audited 128 packages in 2s',
            'found 0 vulnerabilities',
            '',
            'Setting up portfolio website...',
            'Loading personal information...',
            'Initializing components...',
            'Building responsive layout...',
            'Optimizing assets...'
        ];
        
        this.currentCommandIndex = 0;
        this.currentOutputIndex = 0;
        this.isTyping = false;
        this.isComplete = false;
        
        this.init();
    }
    
    init() {
        // Add loading class to body
        document.body.classList.add('loading');
        
        // Start the animation
        setTimeout(() => {
            this.startTyping();
        }, 1000);
        
    }
    
    async startTyping() {
        // Much faster typing for all commands
        for (let i = 0; i < this.commands.length; i++) {
            await this.typeCommand(this.commands[i], 15); // Very fast typing
            await this.delay(50); // Minimal delay
            await this.showOutput();
            await this.delay(100); // Minimal delay between commands
            this.addCommandToHistory(this.commands[i]);
            this.clearCommand();
        }
        
        // Add final ready message
        await this.addFinalMessage();
        
        this.isComplete = true;
        // Immediate fade to MacOS
        this.hideTerminal();
    }
    
    async typeCommand(command, baseDelay = 50) {
        const commandElement = document.getElementById('terminal-command');
        const cursorElement = document.getElementById('terminal-cursor');
        
        this.isTyping = true;
        cursorElement.style.display = 'inline';
        
        for (let i = 0; i < command.length; i++) {
            commandElement.textContent += command[i];
            await this.delay(baseDelay + Math.random() * 20);
        }
        
        this.isTyping = false;
        cursorElement.style.display = 'none';
    }
    
    async showOutput() {
        const outputElement = document.getElementById('terminal-output');
        
        // Show outputs for current command - much faster
        const startIndex = this.currentOutputIndex;
        const endIndex = Math.min(startIndex + 3, this.outputs.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const output = this.outputs[i];
            if (output) {
                const outputLine = document.createElement('div');
                outputLine.textContent = output;
                
                // Add color classes based on content
                if (output.includes('error') || output.includes('Error')) {
                    outputLine.className = 'error';
                } else if (output.includes('warning') || output.includes('Warning')) {
                    outputLine.className = 'warning';
                } else if (output.includes('success') || output.includes('done') || output.includes('ready')) {
                    outputLine.className = 'success';
                } else if (output.includes('info') || output.includes('Loading') || output.includes('Setting')) {
                    outputLine.className = 'info';
                }
                
                outputElement.appendChild(outputLine);
                // Much faster output display for better scrolling effect
                await this.delay(10);
            }
        }
        
        this.currentOutputIndex = endIndex;
        
        // Auto-scroll to bottom for terminal effect
        outputElement.scrollTop = outputElement.scrollHeight;
    }
    
    addCommandToHistory(command) {
        const outputElement = document.getElementById('terminal-output');
        
        // Add the command to history with proper formatting
        const commandHistory = document.createElement('div');
        commandHistory.className = 'command-history';
        commandHistory.innerHTML = `<span class="terminal-prompt">PS C:\\Users\\omjan\\dev\\omjanamanchi.github.io></span> <span class="command-text">${command}</span>`;
        
        outputElement.appendChild(commandHistory);
        
        // Auto-scroll to show new command
        outputElement.scrollTop = outputElement.scrollHeight;
    }
    
    clearCommand() {
        const commandElement = document.getElementById('terminal-command');
        commandElement.textContent = '';
    }
    
    async addFinalMessage() {
        const outputElement = document.getElementById('terminal-output');
        
        // Add final ready message
        const finalMessage = document.createElement('div');
        finalMessage.textContent = 'omjanamanchi.github.io ready...';
        finalMessage.className = 'success';
        finalMessage.style.fontWeight = 'bold';
        finalMessage.style.fontSize = '16px';
        finalMessage.style.marginTop = '10px';
        
        outputElement.appendChild(finalMessage);
        
        // Auto-scroll to show final message
        outputElement.scrollTop = outputElement.scrollHeight;
        
        await this.delay(1000);
        
        // Clear all terminal content
        this.clearTerminal();
    }
    
    clearTerminal() {
        const outputElement = document.getElementById('terminal-output');
        const commandElement = document.getElementById('terminal-command');
        const cursorElement = document.getElementById('terminal-cursor');
        
        // Clear all content
        outputElement.innerHTML = '';
        commandElement.textContent = '';
        cursorElement.style.display = 'none';
        
        // Add fade effect to terminal
        const terminalLoader = document.getElementById('terminal-loader');
        terminalLoader.style.transition = 'opacity 1s ease, transform 1s ease';
        terminalLoader.style.opacity = '0';
        terminalLoader.style.transform = 'scale(0.95)';
    }
    
    
    hideTerminal() {
        const terminalLoader = document.getElementById('terminal-loader');
        terminalLoader.classList.add('hidden');
        
        // Show MacOS desktop immediately
        this.showMacOSDesktop();
    }
    
    showMacOSDesktop() {
        // Hide terminal loader completely
        const terminalLoader = document.getElementById('terminal-loader');
        terminalLoader.style.display = 'none';
        
        // Show MacOS desktop immediately
        const macosDesktop = document.getElementById('macos-desktop');
        if (macosDesktop) {
            macosDesktop.style.display = 'block';
            macosDesktop.style.opacity = '1';
            macosDesktop.style.transform = 'scale(1)';
            macosDesktop.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize terminal loader when page loads
document.addEventListener('DOMContentLoaded', () => {
    new TerminalLoader();
});

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (!themeToggle) return;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Initialize website functionality after terminal loading
function initializeWebsite() {
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation links based on scroll position
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            if (pageYOffset >= (sectionTop - navbarHeight - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for animation
    document.querySelectorAll('.course-card, .experience-card, .project-card, .research-card, .skills-category, .hobby-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Content Window Functionality
function openContentWindow(section) {
    const overlay = document.getElementById('content-window-overlay');
    const title = document.querySelector('.content-window-title');
    const content = document.querySelector('.content-window-content');
    
    // Set title
    title.textContent = section.charAt(0).toUpperCase() + section.slice(1);
    
    // Set content based on section
    content.innerHTML = getSectionContent(section);
    
    // Show overlay
    overlay.style.display = 'flex';
    
    // Add event listeners for window controls
    setupContentWindowControls();
}

function getSectionContent(section) {
    const sectionData = {
        education: `
            <h3 style="color: white; margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid white; padding-bottom: 5px;">Purdue University</h3>
            <p style="font-size: 16px; margin-bottom: 20px; color: #e0e0e0;">
                Currently, I'm a student at Purdue majoring in Computer Science with a Minor in Finance & Mathematics
            </p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                <div>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">CS 18000 - Problem Solving & Object-Oriented Programming</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">CS 18200 - Foundations of Computer Science</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">CS 24000 - Programming in C</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">CS 25000 - Computer Architecture</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">CS 25100 - Data Structures & Algorithms</li>
                    </ul>
                </div>
                <div>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">STAT 35000 - Introduction to Statistics</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">STAT 41600 - Probability</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">MA 26100 - Multivariate Calculus</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">MA 26500 - Linear Algebra</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">MGMT 31000 - Financial Management</li>
                    </ul>
                </div>
            </div>
            <div style="margin-top: 30px;">
                <p style="color: #e0e0e0; margin-bottom: 20px; text-align: left;">
                    At South Brunswick High School, I was enrolled in dual enrollment classes in local universities and part of my school's special Computer Science Academy program.
                </p>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="color: white; margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid white; padding-bottom: 5px;">Ramapo College of New Jersey</h3>
                <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">CMPS 28500 Mobile Application Development</div>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="color: white; margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid white; padding-bottom: 5px;">Middlesex Community College</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">ACC 10100 College Accounting I: Financial Accounting</div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">ACC 10200 College Accounting II: Managerial Accounting</div>
                    </div>
                    <div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">MAT 21000 Elementary Linear Algebra</div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">MAT 23000 Multivariate Calculus & Analytic Geometry</div>
                    </div>
                </div>
            </div>
            <div style="margin-top: 30px;">
                <h3 style="color: white; margin-bottom: 15px; font-size: 20px; border-bottom: 2px solid white; padding-bottom: 5px;">Computer Science Academy</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">Computer Science in the 21st Century</div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">AP Computer Science A</div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">Mobile Application Development</div>
                    </div>
                    <div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">Virtual Reality & Game Design</div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">Data Structures</div>
                        <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; color: white;">Computer Science Capstone</div>
                    </div>
                </div>
            </div>
        `,
        experience: `
            <h2 style="color: white; margin-bottom: 20px; font-size: 24px;">Experience</h2>
            <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 5px; font-size: 18px;">Data Science Engineer</h3>
                        <p style="color: #e0e0e0; font-style: italic;">The Data Mine - Delta Faucet Company</p>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: #e0e0e0; font-weight: 500; margin-bottom: 5px;">August 2024 – May 2025</div>
                        <div style="color: #e0e0e0; font-style: italic;">Indianapolis, IN</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.6; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Developed an NHPP-based failure prediction model improving warranty forecasting accuracy by over 90% across 6-year lifecycles</li>
                    <li style="margin-bottom: 0.5rem;">Built a web tool enabling non-technical Delta teams to visualize SKU-level failure forecasts and optimize inventory planning</li>
                    <li style="margin-bottom: 0.5rem;">Reduced overstock and replacement costs by estimating average per-case warranty costs from 200,000+ historical claims</li>
                </ul>
                <div style="margin-top: 15px;">
                    <a href="https://www.youtube.com/watch?v=yodqmG8YCig" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">Video Presentation</a>
                    <a href="datamine-poster.pdf" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">Project Report</a>
                </div>
            </div>
            <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 5px; font-size: 18px;">CS 19300 Tools - Teaching Assistant</h3>
                        <p style="color: #e0e0e0; font-style: italic;">Purdue Computer Science</p>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: #e0e0e0; font-weight: 500; margin-bottom: 5px;">August 2025 – Present</div>
                        <div style="color: #e0e0e0; font-style: italic;">Indianapolis, IN</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.6; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Taught 200+ students core technical tools including GitHub version control and LaTeX document preparation</li>
                    <li style="margin-bottom: 0.5rem;">Supported student learning through PSO office hours, homework grading, and active monitoring of the Ed Discussion Q&A forum</li>
                </ul>
            </div>
            <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 5px; font-size: 18px;">Purdue CS Bridge Program - Teaching Assistant</h3>
                        <p style="color: #e0e0e0; font-style: italic;">Purdue Computer Science</p>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: #e0e0e0; font-weight: 500; margin-bottom: 5px;">August 2025 – August 2025</div>
                        <div style="color: #e0e0e0; font-style: italic;">Indianapolis, IN</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.6; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Mentored 70+ incoming Computer Science freshmen in foundational programming concepts for CS 18000</li>
                    <li style="margin-bottom: 0.5rem;">Collaborated with 4 Teaching Assistants and 3 faculty coordinators to deliver advanced workshops and team-building events</li>
                </ul>
                <div style="margin-top: 15px;">
                    <a href="https://www.cs.purdue.edu/undergraduate/bridge/index.html" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">Program Website</a>
                </div>
            </div>
            <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 5px; font-size: 18px;">College of Science Ambassador & Dean's Council Board Member</h3>
                        <p style="color: #e0e0e0; font-style: italic;">Purdue College of Science</p>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: #e0e0e0; font-weight: 500; margin-bottom: 5px;">August 2025 – Present</div>
                        <div style="color: #e0e0e0; font-style: italic;">Indianapolis, IN</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.6; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Represent the College of Science at campus-wide events and admissions programs</li>
                    <li style="margin-bottom: 0.5rem;">Collaborate with the Dean and college leadership in bi-weekly council meetings to advocate for student concerns</li>
                    <li style="margin-bottom: 0.5rem;">Lead efforts to improve the College's visibility and student experience</li>
                </ul>
            </div>
            <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 5px; font-size: 18px;">Student Executive Administrative Assistant</h3>
                        <p style="color: #e0e0e0; font-style: italic;">Purdue Computer Science</p>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: #e0e0e0; font-weight: 500; margin-bottom: 5px;">October 2024 – Present</div>
                        <div style="color: #e0e0e0; font-style: italic;">Indianapolis, IN</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.6; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Bridged gap between CS students and the Department Head through open discussion forums for 1000+ students</li>
                    <li style="margin-bottom: 0.5rem;">Coordinated successful Food Truck Event attracting 400+ students fostering community engagement</li>
                    <li style="margin-bottom: 0.5rem;">Managed Purdue CS Department Reception Desk assisting 250+ students, 20+ staff members, 10+ student organizations, and university donors</li>
                </ul>
            </div>
        `,
        'student-organizations': `
            <h2 style="color: white; margin-bottom: 20px; font-size: 24px;">Student Organizations</h2>
            <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 5px; font-size: 18px;">Director of Industry Relations & Quantitative Analyst</h3>
                        <p style="color: #e0e0e0; font-style: italic;">Boiler Quant</p>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: #e0e0e0; font-weight: 500; margin-bottom: 5px;">September 2024 – Present</div>
                        <div style="color: #e0e0e0; font-style: italic;">West Lafayette, IN</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.6; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Built alumni database of 254 quants and hosted panels, resume reviews, mock interviews, and coffee chats</li>
                    <li style="margin-bottom: 0.5rem;">Compiled sheet of 160 quant firms, organized Chicago & NYC office tours, and provided trading competitions & conferences</li>
                    <li style="margin-bottom: 0.5rem;">Partnered with top 40 collegiate quant finance clubs for collaboration and expanded industry outreach</li>
                    <li style="margin-bottom: 0.5rem;">Secured multiple corporate sponsorships through strategic package design, enhancing club resources and opportunities</li>
                </ul>
                <div style="margin-top: 15px;">
                    <a href="https://boilerquant.com" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">Website</a>
                    <a href="https://www.instagram.com/boilerquant/" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">Instagram</a>
                    <a href="https://github.com/Boiler-Quant/finmath" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">FinMath Project</a>
                    <a href="https://github.com/arnav-42/crypto" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">Crypto Project</a>
                    <a href="https://github.com/Boiler-Quant/linear_regression_cuda_fa25" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">CUDA Project</a>
                </div>
            </div>
            <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: white; margin-bottom: 5px; font-size: 18px;">President</h3>
                        <p style="color: #e0e0e0; font-style: italic;">Computer Science Club</p>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: #e0e0e0; font-weight: 500; margin-bottom: 5px;">September 2024 – Present</div>
                        <div style="color: #e0e0e0; font-style: italic;">Indianapolis, IN</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.6; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Directed operations and engagement for 120+ active members organizing technical and social events such as AI workshops, company panels, and community networking initiatives to strengthen the CS community on campus</li>
                    <li style="margin-bottom: 0.5rem;">Led the planning and execution of Hack Indy 2026, a university-wide hackathon with 200+ attendees, securing sponsorships and partnerships from 15+ industry leaders including Jane Street, Eli Lilly, and Susquehanna International Group</li>
                    <li style="margin-bottom: 0.5rem;">Collaborated with corporate and academic partners to host engineering panels and tech workshops led by industry experts, providing members with hands-on exposure to advancements in AI, software engineering, and data science</li>
                    <li style="margin-bottom: 0.5rem;">Vice President - Sep 2024 - May 2025</li>
                    <li style="margin-bottom: 0.5rem;">Technical Lead - Jan 2025 - May 2025</li>
                </ul>
                <div style="margin-top: 15px;">
                    <a href="https://linktr.ee/csclubpui" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">Website</a>
                    <a href="https://www.instagram.com/csclub_purdueindy/" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">Instagram</a>
                </div>
            </div>
        `,
        projects: `
            <div id="project-carousel-container" style="position: relative;">
                <h2 style="color: white; margin-bottom: 15px; font-size: 28px; text-align: center; font-weight: 600;">Projects</h2>
                <div id="project-navigation" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <button id="prev-project" style="background: rgba(255, 255, 255, 0.15); border: 2px solid rgba(255, 255, 255, 0.3); color: white; padding: 12px 20px; border-radius: 12px; cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.3s ease; backdrop-filter: blur(10px);">← Previous</button>
                    <button id="next-project" style="background: rgba(255, 255, 255, 0.15); border: 2px solid rgba(255, 255, 255, 0.3); color: white; padding: 12px 20px; border-radius: 12px; cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.3s ease; backdrop-filter: blur(10px);">Next →</button>
                </div>
                <div id="project-display" style="min-height: 300px; transition: all 0.3s ease;">
                    <!-- Project content will be dynamically loaded here -->
                </div>
            </div>
        `,
        research: `
            <h2 style="color: white; margin-bottom: 20px; font-size: 24px;">Research</h2>
            <div style="padding: 25px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; margin-bottom: 20px;">
                    <div style="flex: 1;">
                        <div style="color: white; font-weight: bold; margin-bottom: 5px; font-size: 16px;">Computer Science Research Associate</div>
                        <div style="color: white; font-style: italic;">UC Berkeley MITRA Data Team</div>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                        <div style="color: white; font-weight: 500; margin-bottom: 5px;">August 2023 – September 2024</div>
                        <div style="color: white; font-style: italic;">Remote</div>
                    </div>
                </div>
                <ul style="color: #e0e0e0; line-height: 1.8; margin-bottom: 20px; list-style-position: outside; padding-left: 0; margin-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Developed NLP translation algorithms for OCR correction on Sanskrit texts</li>
                    <li style="margin-bottom: 0.5rem;">Constructed an AI classifier tool utilizing ML models to train metadata</li>
                    <li style="margin-bottom: 0.5rem;">Tested deduplication techniques on corrected data</li>
                    <li style="margin-bottom: 0.5rem;">Collaborated on publishing papers in NLP science journals</li>
                    <li style="margin-bottom: 0.5rem;">Presented our NLP models on Tibetan texts at a virtual conference in Dharmshala with the Dalai Lama</li>
                </ul>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                    <a href="https://dharmamitra.org/" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">Main Application</a>
                    <a href="https://dharmamitra.github.io/dharmamitra-guides/" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">Documentation</a>
                    <a href="https://www.merit-times.com/news/52590" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">News Coverage</a>
                    <a href="https://www.youtube.com/watch?v=SMD6RGr-w9Q" target="_blank" style="display: inline-block; padding: 8px 16px; background: white; color: #36454F; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">Video Presentation</a>
                </div>
                <p style="color: #e0e0e0; line-height: 1.7; margin: 20px 0 0 0;">
                    The DharmaMITRA Project, conducted under <a href="https://bair.berkeley.edu/" target="_blank" style="color: white; text-decoration: underline; font-weight: 600;">Prof. Dr. Kurt Keutzer and Dr. Sebastian Nehrdich at the UC Berkeley Artificial Intelligence Research (BAIR) Lab</a>, aimed to preserve and digitize ancient Buddhist, Sanskrit, and Tibetan manuscripts using advanced natural language processing (NLP) and machine learning (ML) methods. My work focused on developing NLP translation algorithms to perform OCR correction on Sanskrit texts, significantly improving text accuracy and readability for historical preservation. I also engineered an AI-based classifier that leveraged ML models to train and organize metadata, enhancing the searchability and contextual understanding of large multilingual datasets. Additionally, I implemented and evaluated deduplication techniques to ensure data consistency across digitized archives. Collaborating closely with the BAIR team, I contributed to publishing research papers in NLP journals and presented our Tibetan text models at a virtual conference in Dharamshala, which included an address by His Holiness the Dalai Lama. The project's main platform, <a href="https://dharmamitra.org/" target="_blank" style="color: white; text-decoration: underline; font-weight: 600;">dharmamitra.org</a>, now serves as a central hub for these digitized works, supported by <a href="https://dharmamitra.github.io/dharmamitra-guides/" target="_blank" style="color: white; text-decoration: underline; font-weight: 600;">extensive documentation</a> and <a href="https://www.merit-times.com/news/52590" target="_blank" style="color: white; text-decoration: underline; font-weight: 600;">recognized in international media</a>. This research exemplifies how cutting-edge AI can intersect with cultural heritage, enabling the preservation and global accessibility of centuries-old wisdom through computational innovation.
                </p>
            </div>
        `,
        skills: `
            <h2 style="color: white; margin-bottom: 20px; font-size: 24px;">Skills</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Programming & Scripting</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Python</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">C</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">C++</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Java</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">C#</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">R</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Dart</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">SQL</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">TypeScript</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">JavaScript</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">HTML</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">CSS</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">XML</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">LaTeX</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">x86-64 Assembly</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">CUDA</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Machine Learning, AI & Data Science</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">PyTorch</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">TensorFlow</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">scikit-learn</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Transformers</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">LLMs</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">NLP</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Computer Vision</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Pandas</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">NumPy</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Matplotlib</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Streamlit</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Tableau</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Web & Application Development</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">React.js</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Node.js</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Express</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">TailwindCSS</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">jQuery</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">PHP</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">HTML5/CSS3</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">WebSocket</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Flask</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">RESTful APIs</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Mobile & Cross-Platform Development</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">React Native</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Flutter</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Dart</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Kotlin</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Swift</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Databases & Cloud Infrastructure</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">PostgreSQL</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">MongoDB</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">SQLite</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">SQL</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Firebase</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Docker</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Vercel</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">DevOps, CI/CD & Version Control</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Git</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">GitHub</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Docker</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Vercel Deployment</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Linux System Admin</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Software Engineering & Tools</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">VS Code</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">PyCharm</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">IntelliJ IDEA</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">CLion</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Android Studio</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Unity</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Ubuntu VMs</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">WSL</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Application Design</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Unit Testing</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Debugging</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Operating Systems</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Linux</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">macOS</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Windows</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">WSL</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Certifications</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Akuna Options 101</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Red Cross Lifeguarding</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: white; margin-bottom: 15px; font-size: 16px;">Interests</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Chess</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Poker</span>
                        <span style="background: white; color: #36454F; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Swimming</span>
                    </div>
                </div>
            </div>
        `,
        hobbies: `
            <h2 style="color: white; margin-bottom: 20px; font-size: 24px;">Hobbies</h2>
            <div style="display: grid; grid-template-columns: 1fr; gap: 25px;">
                <div style="padding: 25px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                    <h3 style="color: white; margin-bottom: 15px; font-size: 20px;">♟️ Chess</h3>
                    <p style="color: #e0e0e0; line-height: 1.8;">
                        I was first introduced to chess as a kid when I played with my Dad during lockdown. Chess was a great time to bond with my dad and learn a strategic game that I ended up enjoying. This love for the game pushed me to start the Chess Club in high school as a community of chess players and friends. I organized exciting events such as the Holiday Chess Tournament and a school district wide Chessathon that raised over $1500 in sponsorships from companies to instill a love of chess from students from kindergarten to 12th grade. My friends and I even competed in the New Jersey State Chess Federation in our first year of running the Chess Club and won 2nd Place Chess Team in the State with accolades of 1st Place Board 1 Player, 2nd Place Board 2 Player, 1st Place Board 3 Player, 1st and 2nd Place Junior Division Players, 1st Place Team in the Capablanca Division, 3rd Place in the Mid-Season Tourney, and many more awards representing South Brunswick High School.
                    </p>
                </div>
                <div style="padding: 25px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                    <h3 style="color: white; margin-bottom: 15px; font-size: 20px;">🃏 Poker</h3>
                    <p style="color: #e0e0e0; line-height: 1.8;">
                        At the end of high school, my friends and I played a lot of poker online, on our Senior Skip Day, and After-Prom Trip in New York City. I have taken this thrill-seeking game into college at Boiler Quant, Purdue's quant finance club. The club has hosted poker workshops and socials where we have played amongst members and learned to get better at bluffing and make some cash along the way. I am currently learning more about Poker from the MIT Poker textbook, and I hope to continue playing and understand the theory to become a better player.
                    </p>
                </div>
                <div style="padding: 25px; background: rgba(255, 255, 255, 0.1); border-radius: 10px; border-left: 4px solid white;">
                    <h3 style="color: white; margin-bottom: 15px; font-size: 20px;">🏊 Swimming</h3>
                    <p style="color: #e0e0e0; line-height: 1.8;">
                        Since I could remember, I have been thrown into a pool and taught how to swim. I went to swimming classes at the YMCA for all my elementary school years, then tried out for the Rutgers Competitive Edge Team in middle school and placed in Division A. I loved my weekly swim practices with my teammates and doing the Diamond exercise of doing 1 lap, 2 laps, 3 laps, till 9 laps, then swimming back down to 1 lap. In high school, I completed Lifeguard training and worked as a Summer Lifeguard in my community pool which I really enjoyed as my first job, and got time to play some pool games as well!
                    </p>
                </div>
            </div>
        `
    };
    
    return sectionData[section] || '<p>Content not found.</p>';
}

// Project data structure (best to worst order)
const projectsData = [
    {
        title: "Crypto Triangular Arbitrage",
        description: "Crypto Triangular Arbitrage is an advanced cryptocurrency trading system built in Python and Cython that leverages the Bellman-Ford algorithm to detect profitable triangular arbitrage opportunities across Binance trading pairs in real time. The project integrates Binance WebSocket streams for live market data ingestion and uses synthetic data pipelines powered by ARIMA model simulations to enable robust backtesting on over one million historical trades. To enhance decision accuracy, the system incorporates Volume-Weighted Average Price (VWAP) and Z-score imbalance indicators, improving trade quality and latency efficiency across exchanges. Through extensive optimization and data-driven analysis, the project achieved a 5× improvement in algorithmic accuracy and serves as a powerful framework for exploring quantitative arbitrage strategies in high-frequency crypto markets.",
        technologies: ["Python", "Cython", "Bellman-Ford Algorithm", "Binance API", "WebSocket", "ARIMA Models", "VWAP", "Z-score Analysis", "Quantitative Finance", "High-Frequency Trading"],
        github: "https://github.com/arnav-42/crypto/tree/main"
    },
    {
        title: "Finmath",
        description: "Finmath is a high-performance financial mathematics library written in C++ with Python bindings using pybind11, designed to deliver fast and reliable computation for financial modeling and quantitative analysis. The library implements optimized algorithms for compound interest, option pricing (including Black-Scholes and Binomial Tree models), and time series volatility analysis, providing both C++ and Python interfaces for flexibility and ease of integration. Through extensive benchmarking, Finmath achieved a 57% speedup in interest calculations and over 2300% performance improvement in Black-Scholes option pricing compared to GSQuant, demonstrating its suitability for high-frequency and large-scale financial applications. Built with a modular architecture and CMake-based build system, Finmath serves as a powerful open-source toolkit for researchers, developers, and quantitative analysts seeking efficient and accurate financial computation.",
        technologies: ["C++", "Python", "pybind11", "CMake", "Black-Scholes", "Binomial Tree", "Option Pricing", "Financial Mathematics", "High-Performance Computing", "Quantitative Analysis"],
        github: "https://github.com/Boiler-Quant/finmath"
    },
    {
        title: "Financial News Sentiment Analysis",
        description: "Financial News Sentiment Analysis is a deep learning project built in Python using PyTorch and the Hugging Face Transformer library to evaluate the sentiment of financial news articles. The system analyzed over 1,000 financial news headlines, leveraging advanced NLP preprocessing and neural network architectures to achieve high classification accuracy. Through iterative model development, the project improved sentiment classification performance by 15%, reaching an F1 score of 0.82, and implemented both LSTM and fine-tuned BERT models to attain 92% precision in sentiment prediction. This project demonstrates the integration of transformer-based models for financial text analytics and highlights their potential in supporting data-driven trading and market sentiment analysis.",
        technologies: ["Python", "PyTorch", "Hugging Face Transformers", "BERT", "LSTM", "NLP", "Deep Learning", "Sentiment Analysis", "Financial Text Analytics", "Google Colab"],
        github: "https://colab.research.google.com/drive/1reXx6HKjjyhEinZ0cQJbscmI2QlYxEQs"
    },
    {
        title: "OpenCV Hand Raise & Three-Finger Salute Detection",
        description: "This project utilizes Python, OpenCV, and MediaPipe's Pose and Hand Tracking models to build an intelligent real-time gesture recognition system capable of detecting raised hands and the \"three-finger salute.\" The system calculates 3D joint angles from hand and body landmarks and uses geometric analysis to classify gestures with precision. By combining pose estimation with hand landmark tracking, the application identifies when a user raises their hand above head level or performs the salute gesture, dynamically overlaying skeletal landmarks and contextual on-screen responses such as \"I volunteer as tribute.\" This project highlights the integration of computer vision, vector mathematics, and real-time image processing to create an interactive and responsive gesture recognition framework — laying the groundwork for future applications in human-computer interaction, sign language recognition, and motion-based authentication.",
        technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Pose Estimation", "Hand Tracking", "Real-time Processing", "Vector Mathematics"],
        github: "https://github.com/omjanamanchi/OpenCV-Hand-Raise-Project"
    },
    {
        title: "Evolutionary Agents Simulation using Raylib",
        description: "This project is an interactive C++ simulation developed with Raylib that visualizes the mechanics of genetic algorithms and artificial evolution through autonomous agents. The simulation features two agent species — Stars and Pentagons — each designed with unique behavioral attributes including speed, vision range, and decision-making intelligence. Agents compete in a dynamic environment filled with collectible food objects and are guided by vector-based steering and arrival algorithms. After each timed round, the system applies evolutionary principles by rewarding high-performing agents with improved traits and removing weaker ones, simulating natural selection in real time. The project demonstrates advanced use of object-oriented programming, real-time physics, and procedural game design to create a visual and interactive model of adaptation and evolution through AI-driven behavior.",
        technologies: ["C++", "Raylib", "Genetic Algorithms", "Object-Oriented Programming", "Real-time Physics", "Vector Mathematics", "AI Behavior", "Simulation"],
        github: "https://github.com/omjanamanchi/Raylib-Project-Part-2"
    },
    {
        title: "OpenCV Signature Manipulation & Streamlit Application",
        description: "This project integrates OpenCV and Streamlit to create a full-stack image processing application for dynamic signature manipulation and visualization. The program processes input signature images by converting them to grayscale, removing backgrounds through binary thresholding, and applying RGBA transparency mapping to isolate signature elements with precision. Through Streamlit's interactive web interface, users can upload images, capture live signatures via webcam, and download the processed results. The application provides real-time visual comparisons between original and modified images, showcasing the seamless integration of computer vision with web-based interactivity. This project demonstrates strong proficiency in OpenCV-based image transformations, Streamlit deployment, and interactive visualization — bridging computer vision techniques with accessible front-end interfaces.",
        technologies: ["Python", "OpenCV", "Streamlit", "Image Processing", "Computer Vision", "Web Interface", "Binary Thresholding", "RGBA Processing"],
        github: "https://github.com/omjanamanchi/OpenCV-Signature-Project"
    },
    {
        title: "Raylib Autonomous Ship Simulation",
        description: "This project is an interactive game built using Raylib, featuring a ship that moves autonomously toward dynamically changing target points within a 2D game world. The ship's movement is governed by a sophisticated steering algorithm that accounts for velocity, acceleration, maximum speed, and turning limits, allowing smooth and realistic navigation. The game environment includes randomly generated colored targets, which the ship seeks with adaptive motion, demonstrating principles of vector mathematics and real-time physics simulation. The project highlights advanced programming techniques such as object-oriented design, real-time rendering, and physics-based movement, and serves as a foundation for more complex autonomous agent simulations or AI-controlled game entities.",
        technologies: ["C++", "Raylib", "Autonomous Agents", "Steering Algorithms", "Vector Mathematics", "Real-time Physics", "Object-Oriented Design", "Game Development"],
        github: "https://github.com/omjanamanchi/Raylib-Project-Part-1"
    },
    {
        title: "Bit-Exchange Base Converter",
        description: "This project is a C++ application that converts numbers between different bases, specifically decimal to binary and hexadecimal to binary. It features robust functions that handle a wide range of input values, ensuring accurate conversions while maintaining readability and precision in the output. The program provides an interactive menu-driven interface, allowing users to select their desired conversion type and input values seamlessly. Key highlights of the project include efficient use of bitwise operations for decimal-to-binary conversion, string manipulation for hexadecimal handling, and a clean, user-friendly console interface. This project demonstrates proficiency in C++ fundamentals, algorithmic thinking, and practical implementation of number system conversions.",
        technologies: ["C++", "Algorithms", "Bitwise Operations", "String Manipulation", "Number Systems", "Console Interface", "Mathematical Functions"],
        github: "https://github.com/omjanamanchi/Base-Converter-Project"
    },
    {
        title: "Unity Endless Runner Game",
        description: "This project is a 3D endless runner game developed in Unity using C#, where the player controls a character navigating an infinite procedurally generated environment. The game features dynamically spawned ground tiles, obstacles, and collectible coins, creating an engaging and ever-changing gameplay experience. Player movement is physics-based, including smooth forward motion, lateral controls, and jumping mechanics, while collision detection handles interactions with obstacles and collectibles. A scoring system tracks progress in real time, and the game includes automatic restart upon failure, providing a seamless loop. This project demonstrates proficiency in Unity development, object-oriented programming in C#, procedural generation, physics simulation, and real-time game mechanics.",
        technologies: ["C#", "Unity", "3D Game Development", "Procedural Generation", "Physics Simulation", "Collision Detection", "Object-Oriented Programming", "Real-time Mechanics"],
        github: "https://github.com/omjanamanchi/Endless-Runner-Game"
    },
    {
        title: "Unity Catch Game",
        description: "This project is a 3D Catch Game developed in Unity using C#, where the player controls a paddle to catch falling objects within a bounded play area. The game features dynamic object spawning, including asteroids and particle effects, creating an engaging and interactive experience. Player movement is responsive and constrained by defined boundaries, ensuring smooth gameplay, while collisions with falling objects increase the player's score in real time. The project demonstrates key skills in Unity development, C# scripting, object instantiation, collision detection, UI integration for score tracking, and game loop management, providing a foundation for interactive game design and real-time event handling.",
        technologies: ["C#", "Unity", "3D Game Development", "Object Instantiation", "Collision Detection", "UI Integration", "Particle Effects", "Game Loop Management"],
        github: "https://github.com/omjanamanchi/Catch-Game"
    },
    {
        title: "Dodge Game",
        description: "This project is an interactive Android game developed in Java using Android Studio, where the player controls a character to dodge incoming obstacles and collect items in real time. The game leverages device sensors for intuitive motion-based controls, responsive touch input, and dynamic object spawning to create an engaging gameplay experience. Key features include collision detection, score tracking, animations for character feedback, background music and sound effects, countdown timers, and seamless scene transitions using Intents between gameplay and game-over screens. This project demonstrates proficiency in Android development, Java programming, game loop management, sensor integration, graphics rendering with Canvas and Bitmap, and interactive UI design for mobile platforms.",
        technologies: ["Java", "Android Studio", "Game Development", "Sensor Integration", "Touch Input", "Collision Detection", "Canvas & Bitmap", "Intents", "Animations"],
        github: "https://github.com/omjanamanchi/Dodge-Game"
    },
    {
        title: "Text Messaging App with AI Bot Response",
        description: "This project is a fully functional Android messaging application developed in Java, enabling users to send and receive SMS messages while interacting with an AI-powered chatbot. The app includes a dynamic chat interface with RecyclerView, handles real-time SMS reception through a BroadcastReceiver, and allows asynchronous message sending using SmsManager. The AI chatbot features contextual conversation flows, topic-based interactions (e.g., Superheroes, Space, Indian Food), and delayed responses to simulate natural conversation. Key features include sensor-aware UI updates, message threading, and a seamless transition between AI chat and live SMS messaging, demonstrating expertise in Android development, UI/UX design, background services, and chatbot logic integration.",
        technologies: ["Java", "Android Studio", "SMS Messaging", "RecyclerView", "BroadcastReceiver", "SmsManager", "AI Chatbot", "Background Services", "UI/UX Design"],
        github: "https://github.com/omjanamanchi/Text-Messaging-App"
    },
    {
        title: "Animated Clicker Game",
        description: "This project is an interactive clicker game inspired by the popular Cookie Clicker genre, developed using Java and Android Studio. Players tap on a character (the mole) to earn points, with dynamic visual feedback including scaling, translation, and rotation animations for taps and upgrades. The game incorporates upgrade mechanics through purchasable hammers (Wood, Gold, Diamond), which increase points per click and points per second, while visually updating the hammer icon with swinging animations. The background features animated transitions using AnimationDrawable, and real-time updates for points, rates, and UI elements are managed through a dedicated thread. This project demonstrates proficiency in Android UI/UX, animations, multithreading, event handling, and gamified mechanics.",
        technologies: ["Java", "Android Studio", "Animations", "UI/UX Design", "Multithreading", "Event Handling", "AnimationDrawable", "Game Mechanics"],
        github: "https://github.com/omjanamanchi/Cookie-Clicker-App"
    },
    {
        title: "Distance-Tracking App with GeoCoder",
        description: "This project is an Android application that tracks a user's real-time location, computes the total distance traveled, and displays corresponding addresses using the Geocoder API. The app captures latitude and longitude updates via LocationManager and LocationListener, calculates incremental distances between location updates, and stores time spent at each location with the LocTime class. It includes state preservation across orientation changes, dynamically updates the UI with location coordinates, addresses, distance in miles, and elapsed time, and handles runtime location permissions for a seamless user experience. This project demonstrates proficiency in Android location services, geocoding, UI updates, and state management.",
        technologies: ["Java", "Android Studio", "GeoCoder", "LocationManager", "LocationListener", "Location Services", "State Management", "UI Updates", "Permissions"],
        github: "https://github.com/omjanamanchi/Distance-Tracking-App"
    },
    {
        title: "OpenWeather Project",
        description: "This Android application provides real-time weather information for both Earth and other planets (Mars). Using the OpenWeatherMap API, the app retrieves geolocation-based weather data for a user-specified ZIP code and displays current temperatures, 3-hour interval forecasts, weather descriptions, and AQI-related parameters including humidity, wind speed, pressure, and visibility. The interface dynamically updates with weather icons corresponding to conditions (e.g., clouds, rain, snow), and provides fun space-themed quotes based on weather conditions. The SpaceWeather feature offers atmospheric temperature, wind speed, and pressure information for Mars, simulating planetary weather exploration. The app demonstrates skills in JSON parsing, AsyncTask for network requests, dynamic UI updates, user input handling, and navigation between activities.",
        technologies: ["Java", "Android Studio", "OpenWeatherMap API", "JSON Parsing", "AsyncTask", "Geolocation", "UI Updates", "Weather Icons", "Space Weather"],
        github: "https://github.com/omjanamanchi/OpenWeather-Project"
    },
    {
        title: "ListView Project Music Player",
        description: "This project is an Android music player application built using Java in Android Studio that utilizes a ListView to display a dynamic playlist of songs. Each list item includes the song number, album cover, song name, artist, a rating bar, and buttons to play or remove the song. The CustomAdapter class populates the ListView and handles user interactions, including playing songs with MediaPlayer and updating the list when songs are removed. The application preserves the playlist state across screen rotations or activity restarts, ensuring a seamless user experience. Additional features include an animated music note that spins when clicked, adding a visual interactive element. This project demonstrates key Android concepts, such as custom adapters, event listeners, media playback, and data serialization, while providing hands-on experience in building a multimedia mobile application.",
        technologies: ["Java", "Android Studio", "ListView", "CustomAdapter", "MediaPlayer", "Event Listeners", "Data Serialization", "State Management", "UI/UX Design"],
        github: "https://github.com/omjanamanchi/ListView-Project"
    },
    {
        title: "Calculator App",
        description: "This project is a fully functional calculator application developed in Android Studio using Java. The app features a user-friendly interface with buttons for digits, basic arithmetic operations (addition, subtraction, multiplication, division), a clear button, and an equals button to evaluate expressions. It handles complex arithmetic expressions by implementing the order of operations (PEMDAS) using a StringTokenizer to parse and evaluate user input dynamically. The app also formats results by removing unnecessary decimal zeros for cleaner display. Error handling is included to prevent crashes from invalid operations, such as division by zero. This project demonstrates proficiency in Android UI development, event handling with OnClickListener, dynamic string manipulation, and implementing core computational logic in a mobile application.",
        technologies: ["Java", "Android Studio", "StringTokenizer", "UI Development", "Event Handling", "PEMDAS", "Arithmetic Operations", "Error Handling", "String Manipulation"],
        github: "https://github.com/omjanamanchi/Calculator-App"
    }
];

// Project navigation functionality
let currentProjectIndex = 0;

function initializeProjectNavigation() {
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    const display = document.getElementById('project-display');
    
    if (!prevBtn || !nextBtn || !display) return;
    
    function updateProjectDisplay() {
        const project = projectsData[currentProjectIndex];
        
        display.innerHTML = `
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); border-radius: 12px; padding: 20px; box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); position: relative; overflow: hidden;">
                <!-- Background Pattern -->
                <div style="position: absolute; top: 0; right: 0; width: 120px; height: 120px; background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%); border-radius: 50%; transform: translate(50%, -50%);"></div>
                
                <!-- Header Section -->
                <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 16px; position: relative; z-index: 2;">
                    <!-- Project Icon -->
                    <div style="width: 45px; height: 45px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    
                    <!-- Title and Preview Button -->
                    <div style="flex: 1;">
                        <h3 style="color: white; margin: 0 0 8px 0; font-size: 22px; font-weight: 700; line-height: 1.2;">${project.title}</h3>
                        <a href="${project.github}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: rgba(255, 255, 255, 0.2); color: white; text-decoration: none; border-radius: 6px; font-size: 12px; font-weight: 500; transition: all 0.3s ease; backdrop-filter: blur(10px);">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
                
                <!-- Description Section -->
                <div style="margin-bottom: 16px; position: relative; z-index: 2;">
                    <p style="color: rgba(255, 255, 255, 0.9); font-size: 14px; line-height: 1.5; margin: 0; text-align: left;">${project.description}</p>
                </div>
                
                <!-- Technologies Section -->
                <div style="display: flex; flex-wrap: wrap; gap: 6px; position: relative; z-index: 2;">
                    ${project.technologies.map((tech, index) => {
                        const colors = [
                            'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                            'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                            'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                            'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                            'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                            'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)'
                        ];
                        const color = colors[index % colors.length];
                        return `<span style="background: ${color}; color: white; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 500; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);">${tech}</span>`;
                    }).join('')}
                </div>
            </div>
        `;
        
        // Update button states
        prevBtn.style.opacity = currentProjectIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentProjectIndex === projectsData.length - 1 ? '0.5' : '1';
        prevBtn.disabled = currentProjectIndex === 0;
        nextBtn.disabled = currentProjectIndex === projectsData.length - 1;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentProjectIndex > 0) {
            currentProjectIndex--;
            updateProjectDisplay();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentProjectIndex < projectsData.length - 1) {
            currentProjectIndex++;
            updateProjectDisplay();
        }
    });
    
    // Initialize with first project
    updateProjectDisplay();
}

function setupContentWindowControls() {
    const overlay = document.getElementById('content-window-overlay');
    const closeBtn = document.querySelector('.content-window-close');
    const minimizeBtn = document.querySelector('.content-window-minimize');
    const maximizeBtn = document.querySelector('.content-window-maximize');
    
    // Close button
    closeBtn.onclick = () => {
        overlay.style.display = 'none';
    };
    
    // Minimize button (hide window)
    minimizeBtn.onclick = () => {
        overlay.style.display = 'none';
    };
    
    // Maximize button (toggle fullscreen)
    maximizeBtn.onclick = () => {
        const window = document.querySelector('.content-window');
        if (window.style.width === '100%') {
            window.style.width = '90%';
            window.style.height = '80%';
            window.style.maxWidth = '1000px';
            window.style.maxHeight = '700px';
        } else {
            window.style.width = '100%';
            window.style.height = '100%';
            window.style.maxWidth = 'none';
            window.style.maxHeight = 'none';
        }
    };
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    };
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            overlay.style.display = 'none';
        }
    });
    
    // Initialize project navigation if projects section is open
    setTimeout(() => {
        if (document.getElementById('project-carousel-container')) {
            initializeProjectNavigation();
        }
    }, 100);
}


// Initialize MacOS Desktop functionality
function initializeMacOSDesktop() {
    // Update time in top bar
    function updateTime() {
        const timeElement = document.getElementById('macos-time');
        if (timeElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });
            timeElement.textContent = timeString;
        }
    }
    
    // Update time every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // Handle folder clicks - open content windows and toggle selection
    document.querySelectorAll('.macos-folder').forEach(folder => {
        folder.addEventListener('click', () => {
            // Remove selected class from all folders
            document.querySelectorAll('.macos-folder').forEach(f => {
                f.classList.remove('selected');
            });
            
            // Add selected class to clicked folder
            folder.classList.add('selected');
            
            const section = folder.getAttribute('data-section');
            if (section) {
                openContentWindow(section);
            }
        });
    });
    
    // Handle dock item clicks
    document.querySelectorAll('.macos-dock-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const link = item.getAttribute('data-link');
            const target = item.getAttribute('target');
            
            if (link) {
                if (target === '_blank') {
                    window.open(link, '_blank');
                } else {
                    window.location.href = link;
                }
            }
        });
    });
}

// Initialize website functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize website functionality immediately (it will be available when terminal finishes)
    initializeWebsite();
    
    // Initialize MacOS desktop functionality
    initializeMacOSDesktop();
});