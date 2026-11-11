// main.js - Retro Windows XP Portfolio Engine
// Author: Nithiyanandam S (Backend Software Engineer)

const iconsData = [
  {
    id: 'about',
    title: 'About Me',
    icon: '/react95_icons/computer_explorer_cool-0.png',
    width: 640,
    height: 480,
    content: `
      <div class="content-section about-me-container">
        <div class="profile-header-card">
          <div class="profile-avatar-box">
            <img src="/react95_icons/computer_explorer_cool-0.png" alt="Nithiyanandam S" class="profile-img" />
            <div class="online-indicator" title="Status: Online & Ready for Opportunities"></div>
          </div>
          <div class="profile-meta">
            <h1 class="profile-name">Nithiyanandam S</h1>
            <h2 class="profile-headline">Software Engineer & Full-Stack / ML Developer</h2>
            <div class="profile-tags">
              <span class="badge">Next.js / React</span>
              <span class="badge">Python & ML</span>
              <span class="badge">Payload CMS</span>
              <span class="badge">Distributed Systems</span>
              <span class="badge">Post-Quantum Crypto</span>
            </div>
          </div>
        </div>

        <div class="xp-groupbox">
          <legend class="xp-groupbox-legend">Summary</legend>
          <p>
            Hello! I am a software engineering student experienced in building responsive, user-friendly web applications 
            for hospital organizations, distributed microservices, and deep learning OCR/NLP models. 
            Two-time <strong>Smart India Hackathon</strong> national finalist, participant in <strong>Amazon ML Summer School 2026</strong>, and first-author published researcher.
          </p>
          <p>
            Welcome to my retro Windows XP environment—built as a nostalgic love letter to computing with modern engineering underneath!
          </p>
        </div>

        <div class="xp-groupbox" style="margin-top: 15px;">
          <legend class="xp-groupbox-legend">Quick Overview</legend>
          <table class="xp-table">
            <tr>
              <td class="col-lbl"><strong>Experience:</strong></td>
              <td>Software Development Engineer Intern @ Tech Machers (Next.js, Payload CMS, React, Docker)</td>
            </tr>
            <tr>
              <td class="col-lbl"><strong>Education:</strong></td>
              <td>B.E. Computer Science & Engineering (2023 – Expected May 2027), SVCE | CGPA: 7.8/10</td>
            </tr>
            <tr>
              <td class="col-lbl"><strong>Highlights:</strong></td>
              <td>SIH 2024 & 2025 National Finalist | Infosys Hackathon Top 6 | Amazon ML Summer School 2026</td>
            </tr>
            <tr>
              <td class="col-lbl"><strong>Location:</strong></td>
              <td>Chennai, Tamil Nadu, India</td>
            </tr>
          </table>
        </div>

        <div class="about-action-bar">
          <button class="xp-btn primary-btn" onclick="openWindowById('projects')">
            <img src="/react95_icons/directory_open_cool-0.png" alt="" />
            <span>Explore Projects</span>
          </button>
          <button class="xp-btn" onclick="openWindowById('resume')">
            <img src="/react95_icons/msie1.png" alt="" />
            <span>View Resume</span>
          </button>
          <button class="xp-btn" onclick="openWindowById('contact')">
            <img src="/react95_icons/envelope_closed.png" alt="" />
            <span>Contact Me</span>
          </button>
          <a class="xp-btn link-btn" href="https://github.com/Nike-Anand" target="_blank" rel="noopener noreferrer">
            <img src="/react95_icons/gears.png" alt="" />
            <span>GitHub Profile ↗</span>
          </a>
        </div>
      </div>
    `
  },
  {
    id: 'projects',
    title: 'My Projects',
    icon: '/react95_icons/directory_open_cool-0.png',
    width: 720,
    height: 520,
    content: `
      <div class="content-section">
        <div class="section-banner">
          <div>
            <h2 style="margin: 0 0 4px 0;">Engineering & Systems Projects</h2>
            <p style="margin: 0; color: #555; font-size: 12px;">Verified implementations in distributed computing, cryptography, and microservices.</p>
          </div>
          <a href="https://github.com/Nike-Anand" target="_blank" rel="noopener noreferrer" class="xp-btn" style="text-decoration:none;">
            View All on GitHub ↗
          </a>
        </div>

        <div class="projects-container">
          <!-- Project 1: Landslide Nexus -->
          <div class="project-box">
            <div class="project-header">
              <img src="/react95_icons/computer_explorer_cool-0.png" class="project-icon" alt="" />
              <div>
                <div class="award-tag">🚨 Ministry of Development of North Eastern Region (SIH ID: 26001)</div>
                <h3 class="project-title">Landslide Nexus: Early Warning & Risk Monitoring System</h3>
                <div class="project-tech">Python • IoT Sensor Ingestion • Geospatial Modeling • Alerting Webhooks</div>
              </div>
            </div>
            <p class="project-desc">
              Industry-grade geotechnical disaster monitoring and early-warning platform protecting vulnerable terrain across 8 North Eastern states.
            </p>
            <div class="project-preview-media">
              <img src="/projects/early_warning_demo.gif" alt="Landslide Nexus Demo" loading="lazy" />
            </div>
            <ul class="project-bullets">
              <li>Engineered real-time telemetry pipelines ingesting geotechnical sensor feeds under adverse network conditions.</li>
              <li>Configured automated threshold evaluation triggers and emergency multi-channel alerting webhooks.</li>
              <li>Designed interactive geospatial terrain maps and telemetry visualization dashboards.</li>
            </ul>
            <div class="project-footer">
              <a href="https://github.com/Nike-Anand/early-warning-System" target="_blank" rel="noopener noreferrer" class="xp-btn">
                Source Code (GitHub) ↗
              </a>
              <span class="project-status">Production Ready ✅</span>
            </div>
          </div>

          <!-- Project 2: AI Enterprise Cost Intelligence -->
          <div class="project-box">
            <div class="project-header">
              <img src="/react95_icons/settings.png" class="project-icon" alt="" />
              <div>
                <h3 class="project-title">AI Enterprise Cost Intelligence System</h3>
                <div class="project-tech">Python • Multi-Agent Architecture • Financial Telemetry • Modern Glassmorphic UI</div>
              </div>
            </div>
            <p class="project-desc">
              Autonomous financial intelligence engine that monitors enterprise spending, detects anomalies, simulates corrective measures, and quantifies fiscal impact.
            </p>
            <div class="project-preview-media">
              <img src="/projects/cost_intel_demo.gif" alt="Enterprise Cost Intelligence Demo" loading="lazy" />
            </div>
            <ul class="project-bullets">
              <li>Engineered multi-agent event loop coordinating anomaly detection, causal analysis, and remediation agents.</li>
              <li>Implemented automated natural-language explanation generation for executive financial telemetry.</li>
            </ul>
            <div class="project-footer">
              <a href="https://github.com/Nike-Anand/AI-Enterprise-Cost-Intelligence" target="_blank" rel="noopener noreferrer" class="xp-btn">
                View Repository ↗
              </a>
              <span class="project-status">Enterprise Agent</span>
            </div>
          </div>

          <!-- Project 3: PR Assist & Code Review Agent -->
          <div class="project-box">
            <div class="project-header">
              <img src="/react95_icons/gears.png" class="project-icon" alt="" />
              <div>
                <h3 class="project-title">PR Assist & Autonomous Code Review Agent</h3>
                <div class="project-tech">Python • GitHub Actions • AST Parsing • Automated CI/CD Reviews</div>
              </div>
            </div>
            <p class="project-desc">
              Automated pull request analysis and intelligent code review agent providing semantic feedback and regression detection.
            </p>
            <div class="project-preview-media">
              <img src="/projects/pr_assist_demo.gif" alt="PR Assist Demo" loading="lazy" />
            </div>
            <ul class="project-bullets">
              <li>Parses git diffs and syntax trees to detect security antipatterns and performance regressions.</li>
              <li>Generates automated inline PR suggestions integrated seamlessly into CI/CD developer workflows.</li>
            </ul>
            <div class="project-footer">
              <a href="https://github.com/Nike-Anand/Code-Review" target="_blank" rel="noopener noreferrer" class="xp-btn">
                View Code Review Agent ↗
              </a>
              <span class="project-status">Active Tooling</span>
            </div>
          </div>

          <!-- Project 4: PQC Cryptographic Engine -->
          <div class="project-box">
            <div class="project-header">
              <img src="/react95_icons/network_cool_two_pcs-0.png" class="project-icon" alt="" />
              <div>
                <div class="award-tag">🏆 SIH 2024 National Finalist (Team Lead)</div>
                <h3 class="project-title">Quantum-Resistant Cryptographic Engine (PQC-Algorithm)</h3>
                <div class="project-tech">Python • C/C++ • CRYSTALS-Kyber • Lattice KEM • IoT Security</div>
              </div>
            </div>
            <p class="project-desc">
              Post-quantum cryptographic key encapsulation mechanism combining lattice encryption with code-based error correction for resource-constrained IoT devices.
            </p>
            <ul class="project-bullets">
              <li>Integrated NIST-standardized lattice-based CRYSTALS-Kyber algorithm for forward secrecy against Shor's quantum attacks.</li>
              <li>Achieved <strong>3x faster secure key exchange</strong> compared to traditional RSA/ECC on embedded microcontrollers.</li>
            </ul>
            <div class="project-footer">
              <a href="https://github.com/Nike-Anand/PQC-Algorithm" target="_blank" rel="noopener noreferrer" class="xp-btn">
                PQC Repository ↗
              </a>
              <span class="project-status">National Finalist</span>
            </div>
          </div>

          <!-- Project 5: Semantic RAG & Vector Search -->
          <div class="project-box">
            <div class="project-header">
              <img src="/react95_icons/directory_open_cool-0.png" class="project-icon" alt="" />
              <div>
                <h3 class="project-title">E-Commerce Enterprise Semantic RAG & Q&A Pipeline</h3>
                <div class="project-tech">Python 3.11 • Sentence-Transformers • Cross-Encoders • FastAPI • Vector DB</div>
              </div>
            </div>
            <p class="project-desc">
              Production-grade information retrieval pipeline combining dense vector embeddings with cross-encoder reranking for grounded product Q&A.
            </p>
            <ul class="project-bullets">
              <li>Engineered two-stage retrieval: bi-encoder semantic search + cross-encoder reranker for high precision top-k retrieval.</li>
              <li>Containerized FastAPI microservice with sub-180ms latency response times.</li>
            </ul>
            <div class="project-footer">
              <a href="https://github.com/Nike-Anand/Retrieval-Augmented-Generation-RAG-for-E-Commerce-Product-Q-A" target="_blank" rel="noopener noreferrer" class="xp-btn">
                RAG Engine Repo ↗
              </a>
              <span class="project-status">FastAPI Microservice</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'resume',
    title: 'Resume - Internet Explorer',
    icon: '/react95_icons/msie1.png',
    width: 760,
    height: 560,
    content: `
      <div class="ie-browser">
        <div class="ie-toolbar">
          <div class="ie-row">
            <div class="ie-row-inner">
              <div class="ie-grabber"></div>
              <div class="ie-menu">
                <span>File</span><span>Edit</span><span>View</span><span>Favorites</span><span>Tools</span><span>Help</span>
              </div>
            </div>
            <img src="/react95_icons/msie1.png" class="ie-logo" alt="IE">
          </div>
          <div class="ie-row">
            <div class="ie-row-inner">
              <div class="ie-grabber"></div>
              <button class="ie-btn" onclick="openWindowById('about')">
                <img src="/react95_icons/back.png" class="ie-btn-icon" alt="Back">
                <span class="ie-btn-text">Back</span>
              </button>
              <button class="ie-btn disabled">
                <img src="/react95_icons/forward.png" class="ie-btn-icon" alt="Forward">
              </button>
              <button class="ie-btn" onclick="openWindowById('resume')"><img src="/react95_icons/refresh.png" class="ie-btn-icon" alt="Refresh"></button>
              <button class="ie-btn" onclick="openWindowById('about')"><img src="/react95_icons/home.png" class="ie-btn-icon" alt="Home"></button>
              <div class="ie-btn-sep"></div>
              <a href="/resume.pdf" target="_blank" class="ie-btn" style="text-decoration:none;" title="View Official PDF Resume">
                <img src="/react95_icons/printer.png" class="ie-btn-icon" alt="View PDF">
                <span class="ie-btn-text">View PDF</span>
              </a>
              <a href="/resume.pdf" download="Nithiyanandam_S_Resume.pdf" class="ie-btn" style="text-decoration:none;" title="Download Original PDF Resume">
                <img src="/react95_icons/notepad.png" class="ie-btn-icon" alt="Download">
                <span class="ie-btn-text">Download PDF</span>
              </a>
              <a href="mailto:nikeanand97@gmail.com" class="ie-btn" style="text-decoration:none;">
                <img src="/react95_icons/envelope_closed.png" class="ie-btn-icon" alt="Email">
                <span class="ie-btn-text">Hire Me</span>
              </a>
            </div>
          </div>
          <div class="ie-row">
            <div class="ie-row-inner">
              <div class="ie-grabber"></div>
              <div class="ie-address-container">
                <span class="ie-address-label">Address</span>
                <div class="ie-address-input-wrapper">
                  <img src="/react95_icons/msie2.png" alt="">
                  <input type="text" value="https://drive.google.com/file/d/1blr2kOwfY969zjCi__Vzlmxu1lAuCw7I/view" id="ie-address-bar" />
                </div>
                <div class="ie-go-container">
                  <button class="ie-go-btn" onclick="handleIEAddressGo()"><img src="/react95_icons/arrow_right-1.png" style="width:12px;height:12px;" alt="">Go</button>
                  <div class="ie-links">Links <span style="font-size:10px;margin-left:2px">»</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ie-content-frame resume-print-view" id="resume-content-area">
          <div class="resume-sheet">
            <div class="resume-header">
              <h1 class="resume-name">NITHIYANANDAM S</h1>
              <p class="resume-contact-line">
                Chennai, Tamil Nadu, India • +91-7826060700 • 
                <a href="mailto:nikeanand97@gmail.com">nikeanand97@gmail.com</a> • 
                <a href="https://www.linkedin.com/in/nithiyanandam-s-6a0553232/" target="_blank">LinkedIn</a> • 
                <a href="https://github.com/Nike-Anand" target="_blank">GitHub</a> •
                <a href="https://leetcode.com/u/Nike_Anand/" target="_blank">LeetCode</a>
              </p>
              <div class="resume-download-bar">
                <a href="/resume.pdf" download="Nithiyanandam_S_Resume.pdf" class="xp-btn" style="text-decoration:none;">
                  💾 Download Official PDF (223 KB)
                </a>
                <a href="https://drive.google.com/file/d/1blr2kOwfY969zjCi__Vzlmxu1lAuCw7I/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="xp-btn" style="text-decoration:none;">
                  ☁️ Open in Google Drive ↗
                </a>
                <button class="xp-btn" onclick="window.print()">🖨️ Print View</button>
              </div>
            </div>

            <section class="resume-section">
              <h3 class="resume-sec-title">PROFESSIONAL EXPERIENCE</h3>
              
              <div class="resume-job">
                <div class="job-header">
                  <strong>Software Development Engineer Intern</strong> — <em>Tech Machers, Chennai</em>
                  <span class="job-date">Mar 2026 – Aug 2026</span>
                </div>
                <ul class="resume-bullets">
                  <li>Migrated websites of a 9-division hospital organization from static pages to Payload CMS, significantly improving page load time and content editing workflows.</li>
                  <li>Built reusable CMS blocks and a user-friendly admin panel with HTML, CSS, JavaScript, React, Next.js, and Node.js; containerized and deployed with Docker.</li>
                  <li>Resolved 150+ P1–P3 bugs across routing, rendering, and REST API integration through team collaboration, Git, and Agile methodology.</li>
                </ul>
              </div>

              <div class="resume-job">
                <div class="job-header">
                  <strong>Data Analyst Intern</strong> — <em>Vi (Vodafone Idea), Chennai</em>
                  <span class="job-date">Dec 2025 – Jan 2026</span>
                </div>
                <ul class="resume-bullets">
                  <li>Analyzed telecom datasets spanning millions of records using SQL and Python to identify customer churn patterns and actionable retention insights.</li>
                </ul>
              </div>

              <div class="resume-job">
                <div class="job-header">
                  <strong>AI/ML Intern & Generative AI Trainer</strong> — <em>Altruisty, Chennai</em>
                  <span class="job-date">Oct 2024 – Nov 2025</span>
                </div>
                <ul class="resume-bullets">
                  <li>Trained and mentored 20+ interns via technical presentations on Generative AI, prompt engineering, and transformer models.</li>
                  <li>Built a product description-generator from scratch using deep learning and NLP on the Amazon Product Dataset (~48 million products), achieving 96% accuracy.</li>
                </ul>
              </div>
            </section>

            <section class="resume-section">
              <h3 class="resume-sec-title">EDUCATION</h3>
              <div class="resume-job">
                <div class="job-header">
                  <strong>Sri Venkateswara College of Engineering (SVCE)</strong>
                  <span class="job-date">2023 – Expected May 2027</span>
                </div>
                <p style="margin: 2px 0;">Bachelor of Engineering (B.E.) in Computer Science and Engineering | <strong>CGPA: 7.8 / 10</strong></p>
                <p style="margin: 2px 0; font-size: 11px; color: #444;">
                  <em>Core CS: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Design, Cryptography</em>
                </p>
              </div>
            </section>

            <section class="resume-section">
              <h3 class="resume-sec-title">KEY ACHIEVEMENTS & CERTIFICATIONS</h3>
              <ul class="resume-bullets">
                <li><strong>Smart India Hackathon (SIH):</strong> Two-time National Finalist (2024 & 2025 Team Lead).</li>
                <li><strong>Infosys Hackathon 2025:</strong> Ranked Top 6 nationwide among thousands of teams.</li>
                <li><strong>Amazon ML Summer School 2026:</strong> Selected participant in competitive machine learning cohort.</li>
                <li><strong>D3 Fest, IIIT Bhubaneswar:</strong> State Winner, All India Rank 9.</li>
                <li><strong>First-Author Research Publication:</strong> <em>"Lightweight Post-Quantum Cryptography for IoT"</em>, IJCRT (2025).</li>
                <li><strong>Certifications:</strong> Google Cloud Generative AI Leader • NPTEL Computer Vision & NLP (Elite + Gold) • Postman API Student Expert • Anthropic AI Fluency.</li>
              </ul>
            </section>
          </div>
        </div>

        <div class="ie-status-bar">
          <div class="ie-status-pane ie-status-main">
            <img src="/react95_icons/msie2.png" alt="">
            <span>Done</span>
          </div>
          <div class="ie-status-pane" style="width: 140px">
            <span>Zone: Trusted</span>
          </div>
          <div class="ie-status-pane" style="width: 120px">
            <img src="/react95_icons/gears.png" alt="">
            <span>Internet</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'skills',
    title: 'Technical Skills & Architecture',
    icon: '/react95_icons/settings.png',
    width: 680,
    height: 500,
    content: `
      <div class="content-section">
        <div class="section-banner">
          <div>
            <h2 style="margin:0 0 4px 0;">Technical Competencies</h2>
            <p style="margin:0; color:#555; font-size:12px;">Categorized by practical application in enterprise and open-source systems.</p>
          </div>
        </div>

        <div class="skills-grid-layout">
          <!-- Category 1 -->
          <div class="skill-group-card">
            <div class="skill-group-title">
              <img src="/react95_icons/gears.png" alt="">
              <span>Programming Languages</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">Python <small>(FastAPI, AsyncIO, PyTorch)</small></span>
              <span class="skill-badge primary">Java <small>(Enterprise, Factory/Strategy Patterns)</small></span>
              <span class="skill-badge">C / C++ <small>(Systems & Cryptography)</small></span>
              <span class="skill-badge">SQL <small>(Advanced CTEs, Windowing, Indexing)</small></span>
              <span class="skill-badge">JavaScript / ES6+</span>
              <span class="skill-badge">Haskell / Scala <small>(Functional Concepts)</small></span>
            </div>
          </div>

          <!-- Category 2 -->
          <div class="skill-group-card">
            <div class="skill-group-title">
              <img src="/react95_icons/computer_explorer_cool-0.png" alt="">
              <span>Backend & Microservices</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">FastAPI</span>
              <span class="skill-badge primary">RESTful API Architecture</span>
              <span class="skill-badge">Microservices Decomposition</span>
              <span class="skill-badge">gRPC & Protocol Buffers</span>
              <span class="skill-badge">Asynchronous Task Queues (Celery/Redis)</span>
              <span class="skill-badge">Telemetry & Structured Logging</span>
            </div>
          </div>

          <!-- Category 3 -->
          <div class="skill-group-card">
            <div class="skill-group-title">
              <img src="/react95_icons/settings.png" alt="">
              <span>Systems, Cloud & DevOps</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">Docker Containerization</span>
              <span class="skill-badge primary">Kubernetes Orchestration</span>
              <span class="skill-badge">CI/CD Pipelines (GitHub Actions)</span>
              <span class="skill-badge">Linux Administration & Shell Scripting</span>
              <span class="skill-badge">AWS Core Services (EC2, S3, IAM)</span>
              <span class="skill-badge">Fault Tolerance & Horizontal Scaling</span>
            </div>
          </div>

          <!-- Category 4 -->
          <div class="skill-group-card">
            <div class="skill-group-title">
              <img src="/react95_icons/directory_open_cool-0.png" alt="">
              <span>Databases & Specialized Research</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">PostgreSQL & MySQL</span>
              <span class="skill-badge">Query Execution Plan Optimization</span>
              <span class="skill-badge primary">Post-Quantum Cryptography (CRYSTALS-Kyber)</span>
              <span class="skill-badge">Distributed Inference & Model Quantization</span>
              <span class="skill-badge">Multi-Agent Workflow Pipelines</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'contact',
    title: 'Contact Information',
    icon: '/react95_icons/network_cool_two_pcs-0.png',
    width: 620,
    height: 480,
    content: `
      <div class="content-section">
        <div class="section-banner">
          <div>
            <h2 style="margin:0 0 4px 0;">Let's Connect</h2>
            <p style="margin:0; color:#555; font-size:12px;">Available for full-time backend software engineering roles & research collaborations.</p>
          </div>
        </div>

        <div class="contact-cards-grid">
          <div class="contact-channel-card">
            <div class="channel-icon">📧</div>
            <div class="channel-details">
              <div class="channel-label">Direct Email</div>
              <a href="mailto:nikeanand97@gmail.com" class="channel-val">nikeanand97@gmail.com</a>
            </div>
            <button class="xp-btn" onclick="copyToClipboard('nikeanand97@gmail.com', this)">Copy</button>
          </div>

          <div class="contact-channel-card">
            <div class="channel-icon">📞</div>
            <div class="channel-details">
              <div class="channel-label">Mobile / WhatsApp</div>
              <a href="tel:+917826060700" class="channel-val">+91-7826060700</a>
            </div>
            <button class="xp-btn" onclick="copyToClipboard('+917826060700', this)">Copy</button>
          </div>

          <div class="contact-channel-card">
            <div class="channel-icon">💼</div>
            <div class="channel-details">
              <div class="channel-label">LinkedIn Profile</div>
              <a href="https://www.linkedin.com/in/nithiyanandam-s-6a0553232/" target="_blank" rel="noopener noreferrer" class="channel-val">linkedin.com/in/nithiyanandam-s-6a0553232/</a>
            </div>
            <a href="https://www.linkedin.com/in/nithiyanandam-s-6a0553232/" target="_blank" rel="noopener noreferrer" class="xp-btn">Open ↗</a>
          </div>

          <div class="contact-channel-card">
            <div class="channel-icon">💻</div>
            <div class="channel-details">
              <div class="channel-label">GitHub Repositories</div>
              <a href="https://github.com/Nike-Anand" target="_blank" rel="noopener noreferrer" class="channel-val">github.com/Nike-Anand</a>
            </div>
            <a href="https://github.com/Nike-Anand" target="_blank" rel="noopener noreferrer" class="xp-btn">Open ↗</a>
          </div>

          <div class="contact-channel-card">
            <div class="channel-icon">🧩</div>
            <div class="channel-details">
              <div class="channel-label">LeetCode Profile</div>
              <a href="https://leetcode.com/u/Nike_Anand/" target="_blank" rel="noopener noreferrer" class="channel-val">leetcode.com/u/Nike_Anand/</a>
            </div>
            <a href="https://leetcode.com/u/Nike_Anand/" target="_blank" rel="noopener noreferrer" class="xp-btn">Open ↗</a>
          </div>

          <div class="contact-channel-card">
            <div class="channel-icon">📸</div>
            <div class="channel-details">
              <div class="channel-label">Instagram</div>
              <a href="https://www.instagram.com/jtz_me_anand?vrfl=cmRuMGc3dWk5cXgz" target="_blank" rel="noopener noreferrer" class="channel-val">@jtz_me_anand</a>
            </div>
            <a href="https://www.instagram.com/jtz_me_anand?vrfl=cmRuMGc3dWk5cXgz" target="_blank" rel="noopener noreferrer" class="xp-btn">Open ↗</a>
          </div>

          <div class="contact-channel-card">
            <div class="channel-icon">📄</div>
            <div class="channel-details">
              <div class="channel-label">Resume PDF</div>
              <a href="/resume.pdf" download="Nithiyanandam_S_Resume.pdf" class="channel-val">Download Nithiyanandam_S_Resume.pdf</a>
            </div>
            <a href="/resume.pdf" download="Nithiyanandam_S_Resume.pdf" class="xp-btn">Download ⬇</a>
          </div>
        </div>

        <div class="xp-groupbox" style="margin-top: 20px;">
          <legend class="xp-groupbox-legend">Send Quick Message</legend>
          <form class="contact-form" onsubmit="handleContactSubmit(event)">
            <div class="form-row">
              <label for="contact-name">Your Name:</label>
              <input type="text" id="contact-name" class="xp-input" required placeholder="Recruiter / Engineer Name" />
            </div>
            <div class="form-row">
              <label for="contact-email">Your Email:</label>
              <input type="email" id="contact-email" class="xp-input" required placeholder="name@company.com" />
            </div>
            <div class="form-row">
              <label for="contact-msg">Message:</label>
              <textarea id="contact-msg" class="xp-input" rows="3" required placeholder="Hi Nithiyanandam, we'd like to discuss a backend opportunity..."></textarea>
            </div>
            <div style="display:flex; justify-content: flex-end; gap: 8px;">
              <button type="submit" class="xp-btn primary-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    `
  },
  {
    id: 'cmd',
    title: 'Command Prompt - cmd.exe',
    icon: '/react95_icons/gears.png',
    width: 640,
    height: 400,
    content: `
      <div class="cmd-terminal" onclick="document.getElementById('cmd-input').focus()">
        <div class="cmd-header-text">
          Microsoft(R) Windows XP [Version 5.1.2600]<br>
          (C) Copyright 1985-2001 Microsoft Corp.<br><br>
          Welcome to Nithiyanandam S Portfolio Command Line Interface.<br>
          Type <span style="color:#ffff55;">'help'</span> to view available commands.
        </div>
        <div id="cmd-output" class="cmd-output"></div>
        <div class="cmd-line">
          <span class="cmd-prompt">C:\\Users\\Nithiyanandam&gt;</span>
          <input type="text" id="cmd-input" class="cmd-input" autofocus autocomplete="off" spellcheck="false" />
        </div>
      </div>
    `
  },
  {
    id: 'recycle',
    title: 'Recycle Bin',
    icon: '/react95_icons/recycle_bin_empty-4.png',
    width: 580,
    height: 380,
    content: `
      <div class="content-section">
        <div class="recycle-toolbar">
          <button class="xp-btn" onclick="emptyRecycleBin()">Empty Recycle Bin</button>
          <button class="xp-btn" onclick="restoreRecycleBin()">Restore All Items</button>
        </div>
        <div id="recycle-items-container" class="recycle-grid">
          <div class="recycle-item">
            <img src="/react95_icons/notepad.png" alt="">
            <span>unindexed_queries.sql</span>
            <small>42 KB</small>
          </div>
          <div class="recycle-item">
            <img src="/react95_icons/notepad.png" alt="">
            <span>memory_leak_2023.log</span>
            <small>1.2 MB</small>
          </div>
          <div class="recycle-item">
            <img src="/react95_icons/settings.png" alt="">
            <span>legacy_monolith.tar</span>
            <small>850 MB</small>
          </div>
          <div class="recycle-item">
            <img src="/react95_icons/notepad.png" alt="">
            <span>bugs_fixed_in_prod.txt</span>
            <small>0 KB</small>
          </div>
        </div>
      </div>
    `
  }
];

// State
let zIndexCounter = 200;
const openWindows = {}; // map of id -> { element, tabElement, minimized, maximized, prevBounds }
let activeWindowId = null;

// Central Drag and Resize State
let interaction = {
  type: null, // 'drag' or 'resize'
  windowId: null,
  dir: null, // resize direction 'se', 'e', etc.
  startX: 0,
  startY: 0,
  initialLeft: 0,
  initialTop: 0,
  initialWidth: 0,
  initialHeight: 0
};

// Global Boot Screen Skip Flag
let bootCompleted = false;

document.addEventListener('DOMContentLoaded', () => {
  // Setup Boot Screen
  const bootScreen = document.getElementById('boot-screen');
  const dismissBoot = () => {
    if (bootCompleted) return;
    bootCompleted = true;
    bootScreen.style.opacity = '0';
    setTimeout(() => {
      bootScreen.classList.add('hidden');
      // Auto open About Me window full screen so visitor has immediate full-page content!
      if (!openWindows['about']) {
        openWindowById('about');
        if (!openWindows['about'].maximized) {
          toggleMaximizeWindow('about');
        }
      }
    }, 400);
  };

  // Skip on click or key
  bootScreen.addEventListener('click', dismissBoot);
  document.addEventListener('keydown', (e) => {
    if (!bootCompleted) dismissBoot();
  }, { once: true });

  // Auto dismiss after 1.5s
  setTimeout(dismissBoot, 1500);

  // Setup Clock
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const clockEl = document.getElementById('clock');
    if (clockEl) {
      clockEl.innerText = `${hours}:${minutes} ${ampm}`;
      clockEl.title = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Render Desktop Icons
  renderDesktopAndStartIcons();

  // Desktop deselect on background click
  document.getElementById('desktop').addEventListener('mousedown', (e) => {
    if (e.target === document.getElementById('desktop')) {
      document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
      closeStartMenu();
    }
  });

  // Start Menu Toggle
  const startBtn = document.getElementById('start-button');
  startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleStartMenu();
  });

  // Start Menu Right Items Click Handlers
  document.querySelectorAll('.start-menu-right .right-item').forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      handleStartAction(action);
      closeStartMenu();
    });
  });

  // All Programs Flyout
  const allProgBtn = document.getElementById('all-programs-btn');
  const allProgMenu = document.getElementById('all-programs-menu');
  if (allProgBtn && allProgMenu) {
    allProgBtn.addEventListener('mouseenter', () => allProgMenu.classList.remove('hidden'));
    allProgBtn.addEventListener('click', () => allProgMenu.classList.toggle('hidden'));
    document.querySelector('.start-menu-left').addEventListener('mouseleave', () => {
      allProgMenu.classList.add('hidden');
    });

    allProgMenu.querySelectorAll('.sub-item').forEach(sub => {
      sub.addEventListener('click', () => {
        const app = sub.getAttribute('data-app');
        openWindowById(app);
        closeStartMenu();
      });
    });
  }

  // Quick Launch Buttons
  document.getElementById('show-desktop-btn').addEventListener('click', toggleShowDesktop);
  document.getElementById('ql-ie-btn').addEventListener('click', () => openWindowById('resume'));
  document.getElementById('ql-cmd-btn').addEventListener('click', () => openWindowById('cmd'));

  // Tray Volume
  document.getElementById('tray-volume').addEventListener('click', () => {
    alert('Volume: 100% (Windows XP Audio Engine Active)');
  });

  // Start Menu Log Off and Shutdown
  document.getElementById('log-off-btn').addEventListener('click', () => {
    closeStartMenu();
    document.getElementById('logoff-screen').classList.remove('hidden');
  });

  document.getElementById('logon-user-tile').addEventListener('click', () => {
    document.getElementById('logoff-screen').classList.add('hidden');
  });

  document.getElementById('logoff-restart-btn').addEventListener('click', () => {
    location.reload();
  });

  document.getElementById('shutdown-btn').addEventListener('click', () => {
    closeStartMenu();
    openShutdownDialog();
  });

  // Run Dialog
  setupRunDialog();

  // Shutdown Dialog
  setupShutdownDialog();

  // Setup Global Unified Pointer Drag & Resize Listener
  setupUnifiedPointerInteraction();

  // Global Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeStartMenu();
      closeModal('shutdown-dialog');
      closeModal('run-dialog');
    }
  });
});

// Render Icons
function renderDesktopAndStartIcons() {
  const desktopContainer = document.getElementById('desktop-icons');
  const startMenuContainer = document.getElementById('start-menu-items');
  desktopContainer.innerHTML = '';
  startMenuContainer.innerHTML = '';

  iconsData.forEach(app => {
    // Desktop Icon
    const iconEl = document.createElement('div');
    iconEl.className = 'desktop-icon';
    iconEl.tabIndex = 0;
    iconEl.setAttribute('role', 'button');
    iconEl.setAttribute('aria-label', app.title);
    iconEl.innerHTML = `
      <img src="${app.icon}" alt="${app.title}" draggable="false">
      <span>${app.title}</span>
    `;

    // Selection
    iconEl.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
      iconEl.classList.add('selected');
    });

    // Double click to open
    iconEl.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      openWindow(app);
    });

    // Mobile tap support: check touch
    let touchStartTime = 0;
    iconEl.addEventListener('touchstart', () => {
      touchStartTime = Date.now();
    }, { passive: true });

    iconEl.addEventListener('touchend', (e) => {
      const touchDuration = Date.now() - touchStartTime;
      if (touchDuration < 300) { // clean tap
        e.preventDefault();
        openWindow(app);
      }
    });

    // Keyboard support (Enter opens)
    iconEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openWindow(app);
      }
    });

    desktopContainer.appendChild(iconEl);

    // Start Menu Item
    const startEl = document.createElement('li');
    startEl.className = 'start-menu-item';
    startEl.innerHTML = `
      <img src="${app.icon}" alt="${app.title}">
      <span>${app.title}</span>
    `;
    startEl.addEventListener('click', () => {
      openWindow(app);
      closeStartMenu();
    });
    startMenuContainer.appendChild(startEl);
  });
}

// Window Management
export function openWindowById(id) {
  const app = iconsData.find(item => item.id === id);
  if (app) {
    openWindow(app);
  }
}
window.openWindowById = openWindowById;

function openWindow(app) {
  if (openWindows[app.id]) {
    const winInfo = openWindows[app.id];
    if (winInfo.minimized) {
      winInfo.minimized = false;
      winInfo.element.classList.remove('minimized');
      winInfo.tabElement.classList.add('active');
    }
    bringToFront(app.id);
    return;
  }

  // Create Window Element
  const winEl = document.createElement('div');
  winEl.className = 'xp-window';
  winEl.id = `window-${app.id}`;
  winEl.setAttribute('data-app-id', app.id);

  // Initial sizing & positioning
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;
  const width = Math.min(app.width || 600, screenW - 20);
  const height = Math.min(app.height || 420, screenH - 60);

  const offset = (Object.keys(openWindows).length % 6) * 28 + 40;
  const left = Math.max(10, Math.min(screenW - width - 20, offset));
  const top = Math.max(10, Math.min(screenH - height - 40, offset));

  winEl.style.width = width + 'px';
  winEl.style.height = height + 'px';
  winEl.style.left = left + 'px';
  winEl.style.top = top + 'px';
  winEl.style.zIndex = ++zIndexCounter;

  const isSmallScreen = screenW <= 768;
  if (isSmallScreen) {
    winEl.classList.add('maximized');
    const maxBtn = winEl.querySelector('.maximize');
    if (maxBtn) {
      maxBtn.textContent = '❐';
      maxBtn.title = 'Restore Down';
    }
  }

  winEl.innerHTML = `
    <div class="window-titlebar">
      <div class="window-title">
        <img src="${app.icon}" alt="${app.title}">
        <span>${app.title}</span>
      </div>
      <div class="window-controls">
        <button class="window-btn minimize" title="Minimize" aria-label="Minimize">_</button>
        <button class="window-btn maximize" title="Maximize" aria-label="Maximize">□</button>
        <button class="window-btn close" title="Close" aria-label="Close">✕</button>
      </div>
    </div>
    <div class="window-content">
      ${app.content}
    </div>

    <!-- 8 Resize Handles -->
    <div class="resize-handle rh-n" data-dir="n"></div>
    <div class="resize-handle rh-s" data-dir="s"></div>
    <div class="resize-handle rh-e" data-dir="e"></div>
    <div class="resize-handle rh-w" data-dir="w"></div>
    <div class="resize-handle rh-nw" data-dir="nw"></div>
    <div class="resize-handle rh-ne" data-dir="ne"></div>
    <div class="resize-handle rh-sw" data-dir="sw"></div>
    <div class="resize-handle rh-se" data-dir="se"></div>
  `;

  document.getElementById('windows-container').appendChild(winEl);

  // Create Taskbar Tab
  const tabEl = document.createElement('div');
  tabEl.className = 'taskbar-tab active';
  tabEl.innerHTML = `
    <img src="${app.icon}" alt="${app.title}">
    <span>${app.title}</span>
  `;

  tabEl.addEventListener('click', () => {
    if (openWindows[app.id].minimized) {
      openWindows[app.id].minimized = false;
      winEl.classList.remove('minimized');
      bringToFront(app.id);
    } else {
      if (activeWindowId === app.id) {
        openWindows[app.id].minimized = true;
        winEl.classList.add('minimized');
        tabEl.classList.remove('active');
        activeWindowId = null;
      } else {
        bringToFront(app.id);
      }
    }
  });

  document.getElementById('taskbar-tabs').appendChild(tabEl);

  openWindows[app.id] = {
    element: winEl,
    tabElement: tabEl,
    minimized: false,
    maximized: isSmallScreen,
    prevBounds: { left: left + 'px', top: top + 'px', width: width + 'px', height: height + 'px' }
  };

  // Focus on click
  winEl.addEventListener('pointerdown', () => bringToFront(app.id));

  // Controls Event Listeners
  winEl.querySelector('.close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeWindow(app.id);
  });

  winEl.querySelector('.minimize').addEventListener('click', (e) => {
    e.stopPropagation();
    openWindows[app.id].minimized = true;
    winEl.classList.add('minimized');
    tabEl.classList.remove('active');
    activeWindowId = null;
  });

  const maxBtn = winEl.querySelector('.maximize');
  maxBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMaximizeWindow(app.id);
  });

  // Double click titlebar to toggle maximize
  const titlebar = winEl.querySelector('.window-titlebar');
  titlebar.addEventListener('dblclick', (e) => {
    if (!e.target.classList.contains('window-btn')) {
      toggleMaximizeWindow(app.id);
    }
  });

  // If Command Prompt, init terminal listeners
  if (app.id === 'cmd') {
    initCmdTerminal();
  }

  bringToFront(app.id);
}

function closeWindow(id) {
  if (!openWindows[id]) return;
  openWindows[id].element.remove();
  openWindows[id].tabElement.remove();
  delete openWindows[id];
  if (activeWindowId === id) activeWindowId = null;
}

function toggleMaximizeWindow(id) {
  const winInfo = openWindows[id];
  if (!winInfo) return;
  const winEl = winInfo.element;

  winInfo.maximized = !winInfo.maximized;
  const maxBtn = winEl.querySelector('.maximize');
  if (winInfo.maximized) {
    winInfo.prevBounds = {
      left: winEl.style.left,
      top: winEl.style.top,
      width: winEl.style.width,
      height: winEl.style.height
    };
    winEl.classList.add('maximized');
    if (maxBtn) {
      maxBtn.textContent = '❐';
      maxBtn.title = 'Restore Down';
    }
  } else {
    winEl.classList.remove('maximized');
    winEl.style.left = winInfo.prevBounds.left;
    winEl.style.top = winInfo.prevBounds.top;
    winEl.style.width = winInfo.prevBounds.width;
    winEl.style.height = winInfo.prevBounds.height;
    if (maxBtn) {
      maxBtn.textContent = '□';
      maxBtn.title = 'Maximize';
    }
  }
}

function bringToFront(id) {
  if (!openWindows[id]) return;
  activeWindowId = id;
  const winEl = openWindows[id].element;
  winEl.style.zIndex = ++zIndexCounter;

  // Sync taskbar & titlebar active classes
  Object.keys(openWindows).forEach(key => {
    const isCur = key === id;
    openWindows[key].tabElement.classList.toggle('active', isCur);
    openWindows[key].element.querySelector('.window-titlebar').classList.toggle('inactive', !isCur);
  });
}

// Unified Pointer Interaction (Drag & Resize Engine - No Leak!)
function setupUnifiedPointerInteraction() {
  document.addEventListener('pointerdown', (e) => {
    // 1. Check titlebar drag
    const titlebar = e.target.closest('.window-titlebar');
    if (titlebar && !e.target.classList.contains('window-btn')) {
      const winEl = titlebar.closest('.xp-window');
      const winId = winEl.getAttribute('data-app-id');
      if (openWindows[winId] && !openWindows[winId].maximized) {
        interaction.type = 'drag';
        interaction.windowId = winId;
        interaction.startX = e.clientX;
        interaction.startY = e.clientY;
        interaction.initialLeft = winEl.offsetLeft;
        interaction.initialTop = winEl.offsetTop;
        bringToFront(winId);
        e.preventDefault();
        return;
      }
    }

    // 2. Check resize handles
    const handle = e.target.closest('.resize-handle');
    if (handle) {
      const winEl = handle.closest('.xp-window');
      const winId = winEl.getAttribute('data-app-id');
      if (openWindows[winId] && !openWindows[winId].maximized) {
        interaction.type = 'resize';
        interaction.windowId = winId;
        interaction.dir = handle.getAttribute('data-dir');
        interaction.startX = e.clientX;
        interaction.startY = e.clientY;
        interaction.initialLeft = winEl.offsetLeft;
        interaction.initialTop = winEl.offsetTop;
        interaction.initialWidth = winEl.offsetWidth;
        interaction.initialHeight = winEl.offsetHeight;
        bringToFront(winId);
        e.preventDefault();
      }
    }
  });

  document.addEventListener('pointermove', (e) => {
    if (!interaction.type || !interaction.windowId) return;
    const winInfo = openWindows[interaction.windowId];
    if (!winInfo) return;
    const winEl = winInfo.element;

    const deltaX = e.clientX - interaction.startX;
    const deltaY = e.clientY - interaction.startY;

    if (interaction.type === 'drag') {
      const newLeft = Math.max(-winEl.offsetWidth + 80, Math.min(window.innerWidth - 80, interaction.initialLeft + deltaX));
      const newTop = Math.max(0, Math.min(window.innerHeight - 60, interaction.initialTop + deltaY));
      winEl.style.left = newLeft + 'px';
      winEl.style.top = newTop + 'px';
    } else if (interaction.type === 'resize') {
      const dir = interaction.dir;
      const minW = 320;
      const minH = 220;

      let newW = interaction.initialWidth;
      let newH = interaction.initialHeight;
      let newL = interaction.initialLeft;
      let newT = interaction.initialTop;

      if (dir.includes('e')) newW = Math.max(minW, interaction.initialWidth + deltaX);
      if (dir.includes('s')) newH = Math.max(minH, interaction.initialHeight + deltaY);
      if (dir.includes('w')) {
        const proposedW = interaction.initialWidth - deltaX;
        if (proposedW >= minW) {
          newW = proposedW;
          newL = interaction.initialLeft + deltaX;
        }
      }
      if (dir.includes('n')) {
        const proposedH = interaction.initialHeight - deltaY;
        if (proposedH >= minH) {
          newH = proposedH;
          newT = interaction.initialTop + deltaY;
        }
      }

      winEl.style.width = newW + 'px';
      winEl.style.height = newH + 'px';
      winEl.style.left = newL + 'px';
      winEl.style.top = newT + 'px';
    }
  });

  document.addEventListener('pointerup', () => {
    interaction.type = null;
    interaction.windowId = null;
  });
}

// Show Desktop toggle
function toggleShowDesktop() {
  const windowKeys = Object.keys(openWindows);
  if (windowKeys.length === 0) return;

  const anyOpen = windowKeys.some(k => !openWindows[k].minimized);
  windowKeys.forEach(k => {
    const win = openWindows[k];
    if (anyOpen) {
      win.minimized = true;
      win.element.classList.add('minimized');
      win.tabElement.classList.remove('active');
    } else {
      win.minimized = false;
      win.element.classList.remove('minimized');
      win.tabElement.classList.add('active');
    }
  });

  if (!anyOpen && windowKeys.length > 0) {
    bringToFront(windowKeys[windowKeys.length - 1]);
  } else {
    activeWindowId = null;
  }
}

// Start Menu Actions
function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  const btn = document.getElementById('start-button');
  menu.classList.toggle('hidden');
  btn.classList.toggle('active', !menu.classList.contains('hidden'));
}

function closeStartMenu() {
  const menu = document.getElementById('start-menu');
  const btn = document.getElementById('start-button');
  if (menu) menu.classList.add('hidden');
  if (btn) btn.classList.remove('active');
}

function handleStartAction(action) {
  switch (action) {
    case 'projects':
    case 'resume':
    case 'about':
    case 'skills':
    case 'contact':
    case 'cmd':
      openWindowById(action);
      break;
    case 'run':
      openModal('run-dialog');
      break;
  }
}

// Run Dialog
function setupRunDialog() {
  const runInput = document.getElementById('run-command-input');
  const confirmBtn = document.getElementById('run-confirm-btn');
  const cancelBtn = document.getElementById('run-cancel-btn');
  const closeBtn = document.getElementById('run-dialog-close');
  const browseBtn = document.getElementById('run-browse-btn');

  const executeRun = () => {
    const cmd = (runInput.value || '').trim().toLowerCase();
    closeModal('run-dialog');
    runInput.value = '';

    if (!cmd) return;

    if (cmd === 'cmd' || cmd === 'terminal') openWindowById('cmd');
    else if (cmd === 'about' || cmd === 'bio') openWindowById('about');
    else if (cmd === 'projects' || cmd === 'code') openWindowById('projects');
    else if (cmd === 'resume' || cmd === 'cv') openWindowById('resume');
    else if (cmd === 'skills' || cmd === 'tech') openWindowById('skills');
    else if (cmd === 'contact' || cmd === 'email') openWindowById('contact');
    else if (cmd === 'recycle' || cmd === 'trash') openWindowById('recycle');
    else if (cmd === 'github') window.open('https://github.com/Nike-Anand', '_blank');
    else if (cmd === 'linkedin') window.open('https://www.linkedin.com/in/nithiyanandam-s-6a0553232/', '_blank');
    else if (cmd === 'calc') alert('Calculator: 2 + 2 = 4 (Result verified)');
    else if (cmd === 'notepad') openWindowById('resume');
    else {
      alert(`Windows cannot find '${cmd}'. Make sure you typed the name correctly, or try: projects, resume, skills, cmd, github.`);
    }
  };

  confirmBtn.addEventListener('click', executeRun);
  runInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') executeRun();
  });
  cancelBtn.addEventListener('click', () => closeModal('run-dialog'));
  closeBtn.addEventListener('click', () => closeModal('run-dialog'));
  browseBtn.addEventListener('click', () => {
    openWindowById('projects');
    closeModal('run-dialog');
  });
}

// Shutdown Dialog
function setupShutdownDialog() {
  const closeBtn = document.getElementById('shutdown-dialog-close');
  const cancelBtn = document.getElementById('shutdown-cancel-btn');
  const confirmBtn = document.getElementById('shutdown-confirm-btn');
  const select = document.getElementById('shutdown-select');
  const desc = document.getElementById('shutdown-description');

  select.addEventListener('change', () => {
    if (select.value === 'restart') {
      desc.innerText = 'Saves your session and restarts the Windows XP portfolio.';
    } else if (select.value === 'turnoff') {
      desc.innerText = 'Powers down the virtual system safely with a restart prompt.';
    } else {
      desc.innerText = 'Puts the computer into low-power standby mode.';
    }
  });

  confirmBtn.addEventListener('click', () => {
    const action = select.value;
    closeModal('shutdown-dialog');
    if (action === 'restart') {
      location.reload();
    } else if (action === 'turnoff') {
      document.body.innerHTML = `
        <div class="xp-safe-shutdown">
          <div class="safe-shutdown-box">
            <h1>It is now safe to turn off your computer.</h1>
            <p style="color:#aaa; margin: 15px 0;">Windows XP Portfolio session terminated.</p>
            <button class="xp-btn primary-btn" onclick="location.reload()" style="font-size:14px; padding: 6px 20px;">
              ⚡ Turn Back On (Power Up)
            </button>
          </div>
        </div>
      `;
    } else if (action === 'standby') {
      document.getElementById('logoff-screen').classList.remove('hidden');
    }
  });

  cancelBtn.addEventListener('click', () => closeModal('shutdown-dialog'));
  closeBtn.addEventListener('click', () => closeModal('shutdown-dialog'));
}

function openShutdownDialog() {
  openModal('shutdown-dialog');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.zIndex = ++zIndexCounter + 100;
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('hidden');
}

// Command Prompt Terminal Logic
function initCmdTerminal() {
  const input = document.getElementById('cmd-input');
  const output = document.getElementById('cmd-output');
  if (!input || !output) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = input.value.trim();
      const line = document.createElement('div');
      line.className = 'cmd-line-echo';
      line.innerHTML = `<span style="color:#aaa;">C:\\Users\\Nithiyanandam&gt;</span> ${escapeHtml(raw)}`;
      output.appendChild(line);

      const cmd = raw.toLowerCase().trim();
      input.value = '';

      const resp = document.createElement('div');
      resp.className = 'cmd-response';

      switch (cmd) {
        case 'help':
          resp.innerHTML = `
Available commands:
  <span style="color:#55ff55;">about</span>      - Display background and profile summary
  <span style="color:#55ff55;">projects</span>   - List technical projects & architectures
  <span style="color:#55ff55;">skills</span>     - Show technical skill stack
  <span style="color:#55ff55;">resume</span>     - Open resume in IE browser
  <span style="color:#55ff55;">contact</span>    - Print contact information
  <span style="color:#55ff55;">whoami</span>     - Print current user session
  <span style="color:#55ff55;">github</span>     - Open GitHub profile in browser
  <span style="color:#55ff55;">clear</span>      - Clear terminal screen
  <span style="color:#55ff55;">date</span>       - Print current system date and time
  <span style="color:#55ff55;">exit</span>       - Close Command Prompt
          `;
          break;
        case 'about':
          resp.innerHTML = `Nithiyanandam S - Backend Software Engineer | Distributed Systems & Microservices`;
          openWindowById('about');
          break;
        case 'projects':
          resp.innerHTML = `1. Distributed Backend Serving Stack (-35% latency)\n2. Quantum-Resistant Secure Comm. (SIH 2024 Finalist)\n3. Real-Time Verification Microservice\n4. Agentic Pipeline Automation CI/CD`;
          openWindowById('projects');
          break;
        case 'skills':
          resp.innerHTML = `Core: Python, Java, C++, SQL, FastAPI, Kubernetes, Docker, Distributed Inference`;
          openWindowById('skills');
          break;
        case 'resume':
          resp.innerHTML = `Opening Resume...`;
          openWindowById('resume');
          break;
        case 'contact':
          resp.innerHTML = `Email: nithiyanandam4826@gmail.com | Tel: +91-7826060700 | LinkedIn: in/nithiyanandam-s-6a0553232/`;
          openWindowById('contact');
          break;
        case 'whoami':
          resp.innerHTML = `NT AUTHORITY\\NITHIYANANDAM (Administrator, Software Engineer)`;
          break;
        case 'clear':
        case 'cls':
          output.innerHTML = '';
          return;
        case 'date':
          resp.innerHTML = new Date().toString();
          break;
        case 'github':
          window.open('https://github.com/Nike-Anand', '_blank');
          resp.innerHTML = `Navigating to https://github.com/Nike-Anand...`;
          break;
        case 'exit':
          closeWindow('cmd');
          return;
        case '':
          break;
        default:
          resp.innerHTML = `'${escapeHtml(cmd)}' is not recognized as an internal or external command.\nType 'help' for valid commands.`;
          break;
      }

      output.appendChild(resp);
      const term = input.closest('.cmd-terminal');
      if (term) term.scrollTop = term.scrollHeight;
    }
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
}

// Helpers
window.copyToClipboard = function(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => btn.innerText = original, 1800);
  });
};

window.downloadResumeText = function() {
  const text = `NITHIYANANDAM S - Software Engineering Intern
Email: nikeanand97@gmail.com | Phone: +91-7826060700
GitHub: https://github.com/Nike-Anand | LinkedIn: https://www.linkedin.com/in/nithiyanandam-s-6a0553232/
LeetCode: https://leetcode.com/u/Nike_Anand/

EDUCATION:
Sri Venkateswara College of Engineering (2023 - Expected May 2027)
Bachelor of Engineering (B.E.) in Computer Science and Engineering | CGPA: 7.8/10

WORK EXPERIENCE:
- Software Development Engineer Intern | Tech Machers, Chennai (Mar 2026 – Aug 2026)
  Migrated websites of a 9-division hospital organization to Payload CMS, React, Next.js, Node.js, Docker.
  Resolved 150+ P1-P3 bugs across routing, rendering, and REST API integration.
- Data Analyst Intern | Vi (Vodafone Idea), Chennai (Dec 2025 – Jan 2026)
  Telecom dataset analysis spanning millions of records, customer churn patterns with SQL and Python.
- AI/ML Intern & Generative AI Trainer | Altruisty, Chennai (Oct 2024 – Nov 2025)
  Trained 20+ interns on Generative AI. Built NLP product description generator on Amazon Product Dataset (~48M items) with 96% accuracy.

PROJECTS:
- Tamil Historical Character Recognition System (PyTorch, OpenCV, CRNN, OCR)
- Lightweight Post-Quantum Cryptography for IoT (Python, Flask, ESP8266, PQC - Published in IJCRT 2025)
- Bus Route Finder (Chennai MTC) (Python, PyTorch, Graph Search Algorithms)

ACHIEVEMENTS:
- Smart India Hackathon (SIH) National Finalist (2024 & 2025 Team Lead)
- Infosys Hackathon 2025 (Top 6 Nationwide)
- Amazon ML Summer School 2026 Participant
- First-Author Research Publication in IJCRT (2025)
`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Nithiyanandam_S_Resume.txt';
  a.click();
  URL.revokeObjectURL(url);
};

window.handleIEAddressGo = function() {
  const bar = document.getElementById('ie-address-bar');
  if (bar) {
    const val = bar.value.toLowerCase();
    if (val.includes('project')) openWindowById('projects');
    else if (val.includes('contact')) openWindowById('contact');
    else if (val.includes('skill')) openWindowById('skills');
    else if (val.includes('about')) openWindowById('about');
    else openWindowById('resume');
  }
};

window.handleContactSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const msg = document.getElementById('contact-msg').value;

  const mailtoUrl = `mailto:nikeanand97@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + "\n\nReply to: " + email)}`;
  window.location.href = mailtoUrl;

  alert(`Thank you, ${name}! Your email client will now open with your message addressed to Nithiyanandam S.`);
};

window.emptyRecycleBin = function() {
  const container = document.getElementById('recycle-items-container');
  if (container) {
    container.innerHTML = '<div style="padding:20px; color:#666; font-style:italic;">Recycle bin is empty. All legacy bugs successfully erased!</div>';
  }
};

window.restoreRecycleBin = function() {
  const container = document.getElementById('recycle-items-container');
  if (container) {
    container.innerHTML = `
      <div class="recycle-item">
        <img src="/react95_icons/notepad.png" alt="">
        <span>unindexed_queries.sql</span>
        <small>42 KB</small>
      </div>
      <div class="recycle-item">
        <img src="/react95_icons/notepad.png" alt="">
        <span>memory_leak_2023.log</span>
        <small>1.2 MB</small>
      </div>
      <div class="recycle-item">
        <img src="/react95_icons/settings.png" alt="">
        <span>legacy_monolith.tar</span>
        <small>850 MB</small>
      </div>
      <div class="recycle-item">
        <img src="/react95_icons/notepad.png" alt="">
        <span>bugs_fixed_in_prod.txt</span>
        <small>0 KB</small>
      </div>
    `;
  }
};
