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
        // Auto-fade after 2 seconds
        setTimeout(() => {
            this.hideTerminal();
        }, 2000);
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
        
        await this.delay(500);
    }
    
    
    hideTerminal() {
        const terminalLoader = document.getElementById('terminal-loader');
        terminalLoader.classList.add('hidden');
        
        // Remove loading class and add loaded class
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
        
        // Remove terminal loader after animation
        setTimeout(() => {
            terminalLoader.style.display = 'none';
        }, 500);
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

// Initialize website functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize website functionality immediately (it will be available when terminal finishes)
    initializeWebsite();
});

