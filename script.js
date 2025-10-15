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
        // First command (git clone) - slower typing
        await this.typeCommand(this.commands[0], 100);
        await this.delay(500);
        await this.showOutput();
        await this.delay(1000);
        this.clearCommand();
        
        // Remaining commands - much faster
        for (let i = 1; i < this.commands.length; i++) {
            await this.typeCommand(this.commands[i], 20);
            await this.delay(100);
            await this.showOutput();
            await this.delay(200);
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
        
        // Show outputs for current command
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
                // Faster output display for scrollable effect
                await this.delay(30);
            }
        }
        
        this.currentOutputIndex = endIndex;
        
        // Auto-scroll to bottom for terminal effect
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
            <h2 style="color: #007AFF; margin-bottom: 20px; font-size: 24px;">Education</h2>
            <p style="font-size: 16px; margin-bottom: 20px; color: #666;">
                I'm a student at Purdue majoring in Computer Science with a Minor in Finance & Mathematics
            </p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                <div>
                    <h3 style="color: #007AFF; margin-bottom: 15px;">Computer Science Courses</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">CS 18000 - Problem Solving & Object-Oriented Programming</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">CS 18200 - Foundations of Computer Science</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">CS 24000 - Programming in C</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">CS 25000 - Computer Architecture</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">CS 25100 - Data Structures & Algorithms</li>
                    </ul>
                </div>
                <div>
                    <h3 style="color: #007AFF; margin-bottom: 15px;">Mathematics & Finance</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">STAT 35000 - Introduction to Statistics</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">STAT 41600 - Probability</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">MA 26100 - Multivariate Calculus</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">MA 26500 - Linear Algebra</li>
                        <li style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">MGMT 31000 - Financial Management</li>
                    </ul>
                </div>
            </div>
            <button onclick="viewFullPortfolio('education')" style="margin-top: 20px; padding: 10px 20px; background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">View Full Portfolio</button>
        `,
        experience: `
            <h2 style="color: #007AFF; margin-bottom: 20px; font-size: 24px;">Experience</h2>
            <div style="margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                <h3 style="color: #333; margin-bottom: 5px; font-size: 18px;">CS 19300 Tools - Teaching Assistant</h3>
                <p style="color: #007AFF; margin-bottom: 10px; font-weight: 600;">Purdue Computer Science • 08/2025 - Present</p>
                <ul style="color: #666; line-height: 1.6;">
                    <li>Taught 200+ students core technical tools including GitHub version control and LaTeX document preparation</li>
                    <li>Supported student learning through PSO office hours, homework grading, and active monitoring of the Ed Discussion Q&A forum</li>
                </ul>
            </div>
            <div style="margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                <h3 style="color: #333; margin-bottom: 5px; font-size: 18px;">College of Science Ambassador</h3>
                <p style="color: #007AFF; margin-bottom: 10px; font-weight: 600;">Purdue College of Science • 08/2025 - Present</p>
                <ul style="color: #666; line-height: 1.6;">
                    <li>Representing the College of Science to prospective students, families, and university visitors</li>
                </ul>
            </div>
            <div style="margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                <h3 style="color: #333; margin-bottom: 5px; font-size: 18px;">Director of Industry Relations & Quantitative Analyst</h3>
                <p style="color: #007AFF; margin-bottom: 10px; font-weight: 600;">Boiler Quant • 09/2024 - Present</p>
                <ul style="color: #666; line-height: 1.6;">
                    <li>Built alumni database of 254 quants and hosted panels, resume reviews, mock interviews, and coffee chats</li>
                    <li>Compiled sheet of 160 quant firms, organized Chicago & NYC office tours, and provided trading competitions & conferences</li>
                    <li>Partnered with top 40 collegiate quant finance clubs for collaboration and expanded industry outreach</li>
                </ul>
            </div>
            <p style="color: #666; font-style: italic; margin-top: 20px;">And many more exciting experiences!</p>
            <button onclick="viewFullPortfolio('experience')" style="margin-top: 15px; padding: 10px 20px; background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">View Full Portfolio</button>
        `,
        projects: `
            <h2 style="color: #007AFF; margin-bottom: 20px; font-size: 24px;">Projects</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                    <h3 style="color: #333; margin-bottom: 10px;">Calculator App</h3>
                    <p style="color: #666; margin-bottom: 10px;">Calculator App made in Android Studio in Java using String Tokenizer</p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Java</span>
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Android Studio</span>
                    </div>
                </div>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                    <h3 style="color: #333; margin-bottom: 10px;">OpenWeather Project</h3>
                    <p style="color: #666; margin-bottom: 10px;">Open Weather Project made with weather API in Android Studio App</p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Java</span>
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Weather API</span>
                    </div>
                </div>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                    <h3 style="color: #333; margin-bottom: 10px;">Raylib Project Part 2</h3>
                    <p style="color: #666; margin-bottom: 10px;">Game built with Raylib to simulate Evolution of Genetic Algorithms with 2 Types of Autonomous Agents</p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">C++</span>
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Genetic Algorithms</span>
                    </div>
                </div>
                <div style="padding: 20px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                    <h3 style="color: #333; margin-bottom: 10px;">OpenCV Hand Raise Project</h3>
                    <p style="color: #666; margin-bottom: 10px;">Using Python OpenCV and Hand + Pose Skeletal Model, detects hand landmarks, raised hand, 3 finger salute</p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Python</span>
                        <span style="background: #007AFF; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Computer Vision</span>
                    </div>
                </div>
            </div>
            <p style="color: #666; font-style: italic; margin-top: 20px;">And 10+ more projects!</p>
            <button onclick="viewFullPortfolio('projects')" style="margin-top: 15px; padding: 10px 20px; background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">View Full Portfolio</button>
        `,
        research: `
            <h2 style="color: #007AFF; margin-bottom: 20px; font-size: 24px;">Research</h2>
            <div style="padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                <h3 style="color: #333; margin-bottom: 5px; font-size: 20px;">Computer Science Research Associate</h3>
                <p style="color: #007AFF; margin-bottom: 15px; font-weight: 600; font-size: 16px;">UC Berkeley MITRA Data Team • 08/2023 - 06/2024</p>
                <ul style="color: #666; line-height: 1.8; margin-bottom: 20px;">
                    <li>Developed NLP translation algorithms for OCR correction on Sanskrit texts</li>
                    <li>Constructed an AI classifier tool utilizing ML models to train metadata</li>
                    <li>Tested deduplication techniques on corrected data</li>
                    <li>Collaborated on publishing papers in NLP science journals</li>
                    <li>Presented our NLP models on Tibetan texts at a virtual conference in Dharmshala with the Dalai Lama</li>
                </ul>
                <a href="https://dharmamitra.org/" target="_blank" style="display: inline-block; padding: 10px 20px; background: #007AFF; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">Visit Dharmamitra Project</a>
                <button onclick="viewFullPortfolio('research')" style="margin-top: 15px; margin-left: 10px; padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">View Full Portfolio</button>
            </div>
        `,
        skills: `
            <h2 style="color: #007AFF; margin-bottom: 20px; font-size: 24px;">Skills</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div>
                    <h3 style="color: #007AFF; margin-bottom: 15px; font-size: 18px;">Languages</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">C</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">C++</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Java</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Python</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">R</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">HTML/CSS/JS</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: #007AFF; margin-bottom: 15px; font-size: 18px;">Libraries/Frameworks</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">NumPy</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Pandas</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">React</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Flutter</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Node.js</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Unity</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: #007AFF; margin-bottom: 15px; font-size: 18px;">Technical</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Machine Learning</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">NLP</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Computer Vision</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">REST APIs</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Git</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Linux</span>
                    </div>
                </div>
                <div>
                    <h3 style="color: #007AFF; margin-bottom: 15px; font-size: 18px;">Interests</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Chess</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Poker</span>
                        <span style="background: #007AFF; color: white; padding: 6px 12px; border-radius: 6px; font-size: 14px;">Competitive Programming</span>
                    </div>
                </div>
            </div>
            <button onclick="viewFullPortfolio('skills')" style="margin-top: 20px; padding: 10px 20px; background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">View Full Portfolio</button>
        `,
        hobbies: `
            <h2 style="color: #007AFF; margin-bottom: 20px; font-size: 24px;">Hobbies</h2>
            <div style="display: grid; grid-template-columns: 1fr; gap: 25px;">
                <div style="padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                    <h3 style="color: #333; margin-bottom: 15px; font-size: 20px;">♟️ Chess</h3>
                    <p style="color: #666; line-height: 1.8;">
                        I've loved strategy games ever since I was a kid, when I first started playing chess and poker with my dad. That early fascination grew into a lifelong passion for analytical thinking and competition. In high school, I founded and presided over the Chess Club, expanding it to 140 members and building official affiliations with both the New Jersey State Chess Federation and the U.S. Chess Federation. I organized major events such as the Holiday Chess Tournament, which drew over 100 attendees, and a communitywide Chessathon that raised over $1,500 in sponsorships from organizations including Jane Street, SIG, Chess.com, and more.
                    </p>
                </div>
                <div style="padding: 25px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid #007AFF;">
                    <h3 style="color: #333; margin-bottom: 15px; font-size: 20px;">🃏 Poker</h3>
                    <p style="color: #666; line-height: 1.8;">
                        I first got into poker through a few friends in high school who introduced me to the game's blend of logic, psychology, and strategy. Since then, my interest has grown even more through Boiler Quant, Purdue's quantitative finance club, where many members share a passion for poker and its mathematical depth. I love playing with club members and discussing hands, strategies, and theory, especially as I study concepts from the MIT Poker textbook. My goal now is to deepen my understanding of poker theory and continue improving as a thoughtful, disciplined player.
                    </p>
                </div>
            </div>
            <button onclick="viewFullPortfolio('hobbies')" style="margin-top: 20px; padding: 10px 20px; background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">View Full Portfolio</button>
        `
    };
    
    return sectionData[section] || '<p>Content not found.</p>';
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
}

function viewFullPortfolio(section) {
    // Close content window
    const overlay = document.getElementById('content-window-overlay');
    overlay.style.display = 'none';
    
                // Hide MacOS desktop
                const macosDesktop = document.getElementById('macos-desktop');
                if (macosDesktop) {
                    macosDesktop.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    macosDesktop.style.opacity = '0';
                    macosDesktop.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        macosDesktop.style.display = 'none';
                        
                        // Show regular website and navigate to section
                        document.body.classList.remove('loading');
                        document.body.classList.add('loaded');
                        
                        // Scroll to the section
                        const targetElement = document.querySelector(`#${section}`);
                        if (targetElement) {
                            const navbarHeight = document.querySelector('.navbar').offsetHeight;
                            const targetPosition = targetElement.offsetTop - navbarHeight;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }, 500);
                }
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
    
    // Handle folder clicks - open content windows
    document.querySelectorAll('.macos-folder').forEach(folder => {
        folder.addEventListener('click', () => {
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