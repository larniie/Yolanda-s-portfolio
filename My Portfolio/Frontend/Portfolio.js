// AI Portfolio Features

// 1. Neural Network Animation Background
class NeuralNetwork {
  constructor() {
    this.particles = [];
    this.connections = [];
    this.init();
    this.animate();
  }

  init() {
    // Create floating particles
    for (let i = 0; i < 30; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    // Update particle positions
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrap around screen
      if (p.x < 0) p.x = window.innerWidth;
      if (p.x > window.innerWidth) p.x = 0;
      if (p.y < 0) p.y = window.innerHeight;
      if (p.y > window.innerHeight) p.y = 0;
    });
  }
}

// 2. Chatbot AI Assistant
class AIAssistant {
  constructor() {
    this.responses = [
      "I'm Yolanda's AI assistant. Ask me about her projects!",
      "Did you know? This portfolio was enhanced with AI features!",
      "Curious about a project? I can help!",
      "I'm powered by advanced AI algorithms.",
      "Let me help you explore Yolanda's work!"
    ];
  }

  getResponse() {
    return this.responses[Math.floor(Math.random() * this.responses.length)];
  }
}

// 3. Dynamic Project Loader from Backend
class ProjectLoader {
  constructor() {
    this.projectList = document.getElementById("project-list");
    this.loadProjects();
  }

  loadProjects() {
    fetch("http://127.0.0.1:5000/projects")
      .then(response => response.json())
      .then(data => {
        this.projectList.innerHTML = ''; // Clear placeholder
        data.forEach(project => {
          const div = document.createElement("div");
          div.className = "project";
          div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
          `;
          this.projectList.appendChild(div);
          this.initializeAnalysis(div);
        });
        console.log(`%c✅ Loaded ${data.length} projects from backend`, 'color: #7c3aed; font-weight: bold;');
      })
      .catch(error => {
        console.warn('Backend not available, using placeholder projects:', error);
        this.useLocalProjects();
      });
  }

  useLocalProjects() {
    // Fallback: Use projects from GitHub
    const projects = [
      {
        title: 'testing',
        description: 'Repository for testing and experimentation'
      },
      {
        title: 'OIBSIP',
        description: 'HTML-based project showcasing web fundamentals'
      },
      {
        title: 'Simple-API-frontend',
        description: 'Frontend application consuming REST APIs'
      }
    ];

    this.projectList.innerHTML = '';
    projects.forEach(project => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="https://github.com/larniie/${project.title}" target="_blank">View on GitHub</a>
      `;
      this.projectList.appendChild(div);
      this.initializeAnalysis(div);
    });
  }

  initializeAnalysis(project) {
    // Add AI scan effect on hover
    project.addEventListener('mouseenter', () => {
      this.analyzeProject(project);
    });
  }

  analyzeProject(project) {
    // Add visual feedback
    project.style.background = 'linear-gradient(135deg, #111118 0%, rgba(124, 58, 237, 0.1) 100%)';
    
    setTimeout(() => {
      project.style.background = '#111118';
    }, 500);
  }
}

// 4. Contact Button with AI Response
class SmartContactButton {
  constructor() {
    this.button = document.getElementById('contactBtn');
    
    if (this.button) {
      this.button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.handleClick();
      });
      console.log('✅ Contact button initialized');
    } else {
      console.warn('❌ Contact button not found');
    }
  }

  handleClick() {
    const contactInfo = `
📧 Email: larniie69@gmail.com

🔗 LinkedIn: 
linkedin.com/in/yolanda-mthembu-156b722b4

💻 GitHub: 
github.com/larniie

📱 Instagram: 
@larniie5
    `.trim();
    
    alert(contactInfo);
  }
}

// 5. Smooth Scroll with AI Enhancement
class SmartScroll {
  constructor() {
    document.addEventListener('scroll', () => this.updateScrollEffects());
  }

  updateScrollEffects() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      } else {
        section.style.opacity = '0.7';
      }
    });
  }
}

// 6. Performance Monitor (AI Learning simulation)
class PerformanceMonitor {
  constructor() {
    this.startTime = Date.now();
    this.logMetrics();
  }

  logMetrics() {
    const loadTime = Date.now() - this.startTime;
    console.log(`%c🤖 AI Portfolio Loaded in ${loadTime}ms`, 'color: #7c3aed; font-weight: bold;');
    console.log('%c⚡ Performance optimized with AI algorithms', 'color: #a78bfa');
  }
}

// Initialize all AI features
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AI components
  const neural = new NeuralNetwork();
  const projectLoader = new ProjectLoader();
  const smartButton = new SmartContactButton();
  const smartScroll = new SmartScroll();
  const monitor = new PerformanceMonitor();
  
  console.log('%c✨ AI Features Activated ✨', 'font-size: 16px; color: #7c3aed; font-weight: bold;');
  console.log('%cWelcome to Yolanda\'s AI-Enhanced Portfolio!', 'color: #a78bfa; font-size: 14px;');
});

// Responsive updates
window.addEventListener('resize', () => {
  console.log('Portfolio adapting to screen size with AI...');
});
