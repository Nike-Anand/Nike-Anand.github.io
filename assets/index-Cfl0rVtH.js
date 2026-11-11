(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`about`,title:`About Me`,icon:`/react95_icons/computer_explorer_cool-0.png`,width:640,height:480,content:`
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
            Two-time <strong>Smart India Hackathon</strong> national finalist (Team Lead), participant in <strong>Amazon ML Summer School 2026</strong>, and first-author published researcher in Post-Quantum Cryptography.
          </p>
          <p style="margin-bottom:0;">
            Targeting <strong>Software Development Engineer (SDE)</strong>, <strong>Full-Stack</strong>, and <strong>Machine Learning</strong> roles.
          </p>
        </div>

        <div class="xp-groupbox" style="margin-top: 15px;">
          <legend class="xp-groupbox-legend">Commercial Experience & Internships</legend>
          <div style="margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong>🏢 Software Development Engineer Intern</strong>
              <span style="font-size: 11px; color: #555;">Mar 2026 – Aug 2026</span>
            </div>
            <div style="font-size: 11.5px; color: #0a246a; font-weight: 500;">Tech Machers, Chennai</div>
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 11px; line-height: 1.35;">
              <li>Migrated 9-division hospital organization websites to Payload CMS, Next.js, and React; containerized with Docker.</li>
              <li>Tested admin panel with real healthcare editors, reducing content turnaround time by 60%.</li>
              <li>Resolved 150+ P1–P3 bugs across routing, SSR, and REST API integration via Agile sprints.</li>
            </ul>
          </div>

          <div style="margin-bottom: 10px; border-top: 1px dashed #d4d0c8; padding-top: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong>📊 Data Analyst Intern</strong>
              <span style="font-size: 11px; color: #555;">Dec 2025 – Jan 2026</span>
            </div>
            <div style="font-size: 11.5px; color: #0a246a; font-weight: 500;">Vi (Vodafone Idea), Chennai</div>
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 11px; line-height: 1.35;">
              <li>Analyzed telecom datasets spanning millions of records using SQL & Python for customer churn patterns.</li>
              <li>Synthesized retention cohorts and presented actionable findings to technical leadership.</li>
            </ul>
          </div>

          <div style="border-top: 1px dashed #d4d0c8; padding-top: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong>🤖 AI/ML Intern & Generative AI Trainer</strong>
              <span style="font-size: 11px; color: #555;">Oct 2024 – Nov 2025</span>
            </div>
            <div style="font-size: 11.5px; color: #0a246a; font-weight: 500;">Altruisty, Chennai</div>
            <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 11px; line-height: 1.35;">
              <li>Trained and mentored 20+ engineering interns on Generative AI, prompt engineering, and transformer models.</li>
              <li>Engineered a deep learning NLP product description generator on Amazon Product Dataset (~48M products) with 96% accuracy.</li>
            </ul>
          </div>
        </div>

        <div class="xp-groupbox" style="margin-top: 15px;">
          <legend class="xp-groupbox-legend">Key Honors & Credibility Signals</legend>
          <ul style="margin: 2px 0 2px 16px; padding: 0; font-size: 11px; line-height: 1.4;">
            <li>🏆 <strong>Smart India Hackathon (SIH):</strong> Two-time National Finalist (2024 & 2025 Team Lead).</li>
            <li>🌟 <strong>Infosys Hackathon 2025:</strong> Ranked Top 6 nationwide among thousands of collegiate teams.</li>
            <li>⚡ <strong>Amazon ML Summer School 2026:</strong> Selected participant in competitive machine learning cohort.</li>
            <li>📜 <strong>First-Author Research Publication:</strong> <em>"Lightweight Post-Quantum Cryptography for IoT"</em>, IJCRT (2025).</li>
            <li>🥇 <strong>D3 Fest, IIIT Bhubaneswar:</strong> State Winner, All India Rank 9.</li>
          </ul>
        </div>

        <div class="xp-groupbox" style="margin-top: 15px;">
          <legend class="xp-groupbox-legend">Quick Overview</legend>
          <table class="xp-table">
            <tr>
              <td class="col-lbl"><strong>Education:</strong></td>
              <td>B.E. Computer Science & Engineering (2023 – Expected May 2027), SVCE | <strong>CGPA: 7.8 / 10</strong></td>
            </tr>
            <tr>
              <td class="col-lbl"><strong>Target Roles:</strong></td>
              <td>Software Development Engineer (SDE) / Full-Stack Engineer / ML Engineer</td>
            </tr>
            <tr>
              <td class="col-lbl"><strong>Availability:</strong></td>
              <td>Immediate / Flexible for Summer & Full-Time Internships / SDE Positions</td>
            </tr>
            <tr>
              <td class="col-lbl"><strong>Location:</strong></td>
              <td>Chennai, Tamil Nadu, India (Open to Hybrid, Remote, or Relocation)</td>
            </tr>
          </table>
        </div>

        <div class="about-action-bar">
          <button class="xp-btn primary-btn" onclick="openWindowById('projects')">
            <img src="/react95_icons/directory_open_cool-0.png" alt="" />
            <span>Explore Projects</span>
          </button>
          <button class="xp-btn" onclick="openWindowById('recruiter')">
            <img src="/react95_icons/notepad.png" alt="" />
            <span>Recruiter Note.txt</span>
          </button>
          <button class="xp-btn" onclick="openWindowById('resume')">
            <img src="/react95_icons/msie1.png" alt="" />
            <span>View Resume</span>
          </button>
          <a class="xp-btn" href="/resume.pdf" download="Nithiyanandam_S_Resume.pdf" style="text-decoration:none;">
            <img src="/react95_icons/printer.png" alt="" />
            <span>Download PDF (223 KB)</span>
          </a>
          <button class="xp-btn" onclick="openWindowById('contact')">
            <img src="/react95_icons/envelope_closed.png" alt="" />
            <span>Contact Me</span>
          </button>
          <a class="xp-btn link-btn" href="https://github.com/Nike-Anand" target="_blank" rel="noopener noreferrer">
            <img src="/react95_icons/gears.png" alt="" />
            <span>GitHub ↗</span>
          </a>
        </div>
      </div>
    `},{id:`recruiter`,title:`Recruiter Note.txt`,icon:`/react95_icons/notepad.png`,width:660,height:520,content:`
      <div class="notepad-container">
        <div class="notepad-menubar">
          <span><u>F</u>ile</span>
          <span><u>E</u>dit</span>
          <span><u>F</u>ormat</span>
          <span><u>V</u>iew</span>
          <span><u>H</u>elp</span>
        </div>
        <div class="notepad-content">======================================================================
CANDIDATE DOSSIER: NITHIYANANDAM S
Target Roles: Software Development Engineer (SDE) | Full-Stack | ML Engineer
Status: Ready for immediate internship / full-time opportunities (2026/2027)
Location: Chennai, Tamil Nadu, India (Open to Hybrid / Remote / Relocation)
======================================================================

[EXECUTIVE SUMMARY]
High-velocity engineering student with commercial internship experience across
Full-Stack systems, Data Analytics, and Deep Learning / NLP architectures.
Two-time Smart India Hackathon (SIH 2024 & 2025) National Finalist (Team Lead),
Top 6 nationwide in Infosys Hackathon 2025, Amazon ML Summer School participant,
and first-author published researcher in Post-Quantum Cryptography.

----------------------------------------------------------------------
[COMMERCIAL INTERNSHIP EXPERIENCE]
----------------------------------------------------------------------
1. Software Development Engineer Intern @ Tech Machers (Mar 2026 – Aug 2026)
   • Migrated hospital websites (9 divisions) to Payload CMS, Next.js, and React.
   • Containerized microservices with Docker; reduced content update turnaround by 60%.
   • Resolved 150+ P1–P3 bugs across routing, SSR, and REST API integration.

2. Data Analyst Intern @ Vi (Vodafone Idea) (Dec 2025 – Jan 2026)
   • Scaled customer churn telemetry across millions of telecom rows with SQL & Python.
   • Delivered actionable retention insights directly to network optimization leads.

3. AI/ML Intern & Generative AI Trainer @ Altruisty (Oct 2024 – Nov 2025)
   • Mentored 20+ interns in GenAI, prompt engineering, and transformer models.
   • Engineered product description generator on Amazon Product Dataset (96% acc).

----------------------------------------------------------------------
[TOP HONORS & RESEARCH]
----------------------------------------------------------------------
• Smart India Hackathon: Two-time National Finalist (SIH 2024 & SIH 2025 Team Lead)
• Infosys Hackathon 2025: Ranked Top 6 nationwide among thousands of collegiate teams
• Amazon ML Summer School 2026: Selected for competitive machine learning program
• Published Paper: "Lightweight Post-Quantum Cryptography for IoT", IJCRT (2025)
• D3 Fest, IIIT Bhubaneswar: State Winner, All India Rank 9

----------------------------------------------------------------------
[CORE TECH STACK]
----------------------------------------------------------------------
• Languages: Python, JavaScript, TypeScript, C, C++, Java, SQL
• Web & Full-Stack: React, Next.js, Tailwind CSS, Payload CMS, Node.js, HTML5/CSS3
• Backend & DB: FastAPI, Flask, REST APIs, Microservices, PostgreSQL, MySQL, MongoDB
• AI / ML: PyTorch, OpenCV, OCR (CRNN architectures), Transformers, NLP, GenAI
• DevOps & Cloud: Docker, Git, GitHub Actions, Postman, Linux, Agile/Scrum

----------------------------------------------------------------------
[EDUCATION & CREDENTIALS]
----------------------------------------------------------------------
• Sri Venkateswara College of Engineering (SVCE)
  B.E. in Computer Science & Engineering (2023 - Expected May 2027) | CGPA: 7.8/10
• Certifications: Google Cloud GenAI Leader, NPTEL Computer Vision & NLP (Elite+Gold),
  Postman API Student Expert, Anthropic AI Fluency

----------------------------------------------------------------------
[DIRECT CONTACT CHANNELS]
----------------------------------------------------------------------
• Email:    nikeanand97@gmail.com
• Phone:    +91-7826060700
• LinkedIn: https://www.linkedin.com/in/nithiyanandam-s-6a0553232/
• GitHub:   https://github.com/Nike-Anand
• LeetCode: https://leetcode.com/u/Nike_Anand/
======================================================================</div>
        <div class="notepad-action-bar">
          <a href="/resume.pdf" download="Nithiyanandam_S_Resume.pdf" class="xp-btn" style="text-decoration:none;">
            💾 Download Official PDF (223 KB)
          </a>
          <button class="xp-btn" onclick="openWindowById('resume')">
            🖨️ View & Print Resume
          </button>
          <a href="mailto:nikeanand97@gmail.com?subject=Interview%20Inquiry%20-%20Nithiyanandam%20S" class="xp-btn primary-btn" style="text-decoration:none;">
            ✉️ Email Candidate
          </a>
        </div>
      </div>
    `},{id:`projects`,title:`My Projects`,icon:`/react95_icons/directory_open_cool-0.png`,width:760,height:540,content:`
      <div class="content-section">
        <div class="section-banner">
          <div>
            <h2 style="margin: 0 0 4px 0;">Engineering & Systems Projects</h2>
            <p style="margin: 0; color: #555; font-size: 12px;">Verified implementations across Full-Stack, Distributed Systems, ML & Cryptography.</p>
          </div>
          <a href="https://github.com/Nike-Anand" target="_blank" rel="noopener noreferrer" class="xp-btn" style="text-decoration:none;">
            View All on GitHub ↗
          </a>
        </div>

        <!-- Recruiter Filter Bar -->
        <div class="project-filters">
          <button class="filter-btn active" onclick="window.filterProjects('all', this)">All Projects (7)</button>
          <button class="filter-btn" onclick="window.filterProjects('sde', this)">💻 SDE & Full-Stack</button>
          <button class="filter-btn" onclick="window.filterProjects('ai', this)">🤖 AI / ML & Vision</button>
          <button class="filter-btn" onclick="window.filterProjects('systems', this)">🔐 Systems & Research</button>
        </div>

        <div class="projects-container">
          <!-- Project 1: Landslide Nexus -->
          <div class="project-box" data-category="sde,systems">
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
          <div class="project-box" data-category="sde,ai">
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
          <div class="project-box" data-category="sde,ai">
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
          <div class="project-box" data-category="systems">
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
              <span class="project-status">Published IJCRT 2025</span>
            </div>
          </div>

          <!-- Project 5: Tamil Historical Character Recognition -->
          <div class="project-box" data-category="ai">
            <div class="project-header">
              <img src="/react95_icons/notepad.png" class="project-icon" alt="" />
              <div>
                <div class="award-tag">📜 95%+ Accuracy · Deep Learning OCR</div>
                <h3 class="project-title">Tamil Historical Character Recognition System</h3>
                <div class="project-tech">Python • PyTorch • OpenCV • CRNN (CNN + BiLSTM + CTC) • Document Segmentation</div>
              </div>
            </div>
            <p class="project-desc">
              Offline end-to-end OCR pipeline for degraded historical Tamil manuscripts and multi-lingual inscriptions, achieving 95%+ Tamil and 98%+ English character accuracy.
            </p>
            <ul class="project-bullets">
              <li>Engineered CRNN architecture combining convolutional feature extraction with bidirectional LSTM sequence modeling and CTC loss decoding.</li>
              <li>Built computer vision preprocessing pipeline with adaptive Otsu thresholding, morphological noise removal, skew correction, and line/word slicing.</li>
            </ul>
            <div class="project-footer">
              <a href="https://github.com/Nike-Anand/tamil-text-recognition" target="_blank" rel="noopener noreferrer" class="xp-btn">
                OCR Repository ↗
              </a>
              <span class="project-status">PyTorch Model</span>
            </div>
          </div>

          <!-- Project 6: Semantic RAG & Vector Search -->
          <div class="project-box" data-category="sde,ai">
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

          <!-- Project 7: Chennai MTC Bus Route Finder -->
          <div class="project-box" data-category="sde,ai">
            <div class="project-header">
              <img src="/react95_icons/computer_explorer_cool-0.png" class="project-icon" alt="" />
              <div>
                <h3 class="project-title">Chennai MTC Transit Bus Route Finder & Graph Optimizer</h3>
                <div class="project-tech">Python • PyTorch • Transit Graph Algorithms • Route Pathfinding • Compact NLP</div>
              </div>
            </div>
            <p class="project-desc">
              Transit pathfinding engine that models Chennai MTC public bus networks as directed graphs to compute minimum-transfer and shortest-time commuter journeys.
            </p>
            <ul class="project-bullets">
              <li>Scraped and modeled multi-modal MTC schedule and stop networks into graph adjacency structures.</li>
              <li>Implemented Dijkstra / A* shortest path search algorithms and fine-tuned a lightweight NLP model for conversational destination queries.</li>
            </ul>
            <div class="project-footer">
              <a href="https://github.com/Nike-Anand/-Bus_Route_Finder" target="_blank" rel="noopener noreferrer" class="xp-btn">
                Transit Repo ↗
              </a>
              <span class="project-status">Graph Algorithms</span>
            </div>
          </div>
        </div>
      </div>
    `},{id:`resume`,title:`Resume - Internet Explorer`,icon:`/react95_icons/msie1.png`,width:760,height:560,content:`
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
    `},{id:`skills`,title:`Technical Skills & Architecture`,icon:`/react95_icons/settings.png`,width:720,height:520,content:`
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
              <span>Languages & Core CS</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">Python <small>(FastAPI, PyTorch)</small></span>
              <span class="skill-badge primary">JavaScript / ES6+</span>
              <span class="skill-badge primary">TypeScript</span>
              <span class="skill-badge">Java <small>(Enterprise, OOP)</small></span>
              <span class="skill-badge">C / C++ <small>(Systems, PQC)</small></span>
              <span class="skill-badge primary">SQL <small>(PostgreSQL, MySQL, PL/SQL)</small></span>
              <span class="skill-badge">Data Structures & Algorithms</span>
              <span class="skill-badge">System Design & Cryptography</span>
            </div>
          </div>

          <!-- Category 2 -->
          <div class="skill-group-card">
            <div class="skill-group-title">
              <img src="/react95_icons/msie1.png" alt="">
              <span>Frontend & Full-Stack</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">React</span>
              <span class="skill-badge primary">Next.js</span>
              <span class="skill-badge primary">Payload CMS</span>
              <span class="skill-badge">Tailwind CSS</span>
              <span class="skill-badge">HTML5 / Modern CSS3</span>
              <span class="skill-badge">Responsive UI & Accessibility (WCAG)</span>
              <span class="skill-badge">State Management & Client Hydration</span>
              <span class="skill-badge">REST API Integration</span>
            </div>
          </div>

          <!-- Category 3 -->
          <div class="skill-group-card">
            <div class="skill-group-title">
              <img src="/react95_icons/settings.png" alt="">
              <span>Backend, Databases & DevOps</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">Node.js</span>
              <span class="skill-badge primary">FastAPI & Flask</span>
              <span class="skill-badge primary">Docker Containerization</span>
              <span class="skill-badge">PostgreSQL & MySQL</span>
              <span class="skill-badge">MongoDB</span>
              <span class="skill-badge">CI/CD (GitHub Actions)</span>
              <span class="skill-badge">Git & GitHub Workflow</span>
              <span class="skill-badge">Postman & REST Verification</span>
              <span class="skill-badge">Linux Administration & Shell</span>
            </div>
          </div>

          <!-- Category 4 -->
          <div class="skill-group-card">
            <div class="skill-group-title">
              <img src="/react95_icons/computer_explorer_cool-0.png" alt="">
              <span>AI / ML & Specialized Research</span>
            </div>
            <div class="skill-chips">
              <span class="skill-badge primary">PyTorch</span>
              <span class="skill-badge primary">OpenCV & Computer Vision</span>
              <span class="skill-badge primary">OCR (CRNN Architectures)</span>
              <span class="skill-badge">Deep Learning & NLP</span>
              <span class="skill-badge">Generative AI & Prompt Engineering</span>
              <span class="skill-badge primary">Post-Quantum Cryptography (CRYSTALS-Kyber)</span>
              <span class="skill-badge">Multi-Agent Systems & RAG Pipelines</span>
            </div>
          </div>
        </div>
      </div>
    `},{id:`contact`,title:`Contact Information`,icon:`/react95_icons/network_cool_two_pcs-0.png`,width:620,height:480,content:`
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
    `},{id:`cmd`,title:`Command Prompt - cmd.exe`,icon:`/react95_icons/gears.png`,width:640,height:400,content:`
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
    `},{id:`recycle`,title:`Recycle Bin`,icon:`/react95_icons/recycle_bin_empty-4.png`,width:580,height:380,content:`
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
    `}],t=200,n={},r=null,i={type:null,windowId:null,dir:null,startX:0,startY:0,initialLeft:0,initialTop:0,initialWidth:0,initialHeight:0},a=!1;document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`boot-screen`),t=()=>{if(!document.fullscreenElement){let e=document.documentElement;e.requestFullscreen?e.requestFullscreen().catch(()=>{}):e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},r=()=>{document.fullscreenElement?document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t()},i=()=>{a||(a=!0,e.style.opacity=`0`,setTimeout(()=>{e.classList.add(`hidden`),n.about||s(`about`)},400))};e.addEventListener(`click`,()=>{t(),i()}),document.addEventListener(`keydown`,e=>{t(),a||i()},{once:!0}),setTimeout(i,1500),T();function c(){let e=new Date,t=e.getHours(),n=e.getMinutes(),r=t>=12?`PM`:`AM`;t%=12,t||=12,n=n<10?`0`+n:n;let i=document.getElementById(`clock`);i&&(i.innerText=`${t}:${n} ${r}`,i.title=e.toLocaleDateString(void 0,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`}))}setInterval(c,1e3),c(),o(),document.getElementById(`desktop`).addEventListener(`mousedown`,e=>{e.target===document.getElementById(`desktop`)&&(document.querySelectorAll(`.desktop-icon`).forEach(e=>e.classList.remove(`selected`)),h())}),document.getElementById(`start-button`).addEventListener(`click`,e=>{e.stopPropagation(),m()}),document.querySelectorAll(`.start-menu-right .right-item`).forEach(e=>{e.addEventListener(`click`,()=>{g(e.getAttribute(`data-action`)),h()})});let l=document.getElementById(`all-programs-btn`),u=document.getElementById(`all-programs-menu`);l&&u&&(l.addEventListener(`mouseenter`,()=>u.classList.remove(`hidden`)),l.addEventListener(`click`,()=>u.classList.toggle(`hidden`)),document.querySelector(`.start-menu-left`).addEventListener(`mouseleave`,()=>{u.classList.add(`hidden`)}),u.querySelectorAll(`.sub-item`).forEach(e=>{e.addEventListener(`click`,()=>{s(e.getAttribute(`data-app`)),h()})})),document.getElementById(`show-desktop-btn`).addEventListener(`click`,p),document.getElementById(`ql-ie-btn`).addEventListener(`click`,()=>s(`resume`)),document.getElementById(`ql-cmd-btn`).addEventListener(`click`,()=>s(`cmd`));let d=document.getElementById(`tray-fullscreen`);d&&d.addEventListener(`click`,e=>{e.stopPropagation(),r()}),document.getElementById(`tray-volume`).addEventListener(`click`,()=>{alert(`Volume: 100% (Windows XP Audio Engine Active)`)}),document.getElementById(`log-off-btn`).addEventListener(`click`,()=>{h(),document.getElementById(`logoff-screen`).classList.remove(`hidden`)}),document.getElementById(`logon-user-tile`).addEventListener(`click`,()=>{document.getElementById(`logoff-screen`).classList.add(`hidden`)}),document.getElementById(`logoff-restart-btn`).addEventListener(`click`,()=>{location.reload()}),document.getElementById(`shutdown-btn`).addEventListener(`click`,()=>{h(),y()}),_(),v(),f(),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(h(),x(`shutdown-dialog`),x(`run-dialog`))})});function o(){let t=document.getElementById(`desktop-icons`),n=document.getElementById(`start-menu-items`);t.innerHTML=``,n.innerHTML=``,e.forEach(e=>{let r=document.createElement(`div`);r.className=`desktop-icon`,r.tabIndex=0,r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,e.title),r.innerHTML=`
      <img src="${e.icon}" alt="${e.title}" draggable="false">
      <span>${e.title}</span>
    `,r.addEventListener(`click`,e=>{e.stopPropagation(),document.querySelectorAll(`.desktop-icon`).forEach(e=>e.classList.remove(`selected`)),r.classList.add(`selected`)}),r.addEventListener(`dblclick`,t=>{t.stopPropagation(),c(e)});let i=0;r.addEventListener(`touchstart`,()=>{i=Date.now()},{passive:!0}),r.addEventListener(`touchend`,t=>{Date.now()-i<300&&(t.preventDefault(),c(e))}),r.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),c(e))}),t.appendChild(r);let a=document.createElement(`li`);a.className=`start-menu-item`,a.innerHTML=`
      <img src="${e.icon}" alt="${e.title}">
      <span>${e.title}</span>
    `,a.addEventListener(`click`,()=>{c(e),h()}),n.appendChild(a)})}function s(t){let n=e.find(e=>e.id===t);n&&c(n)}window.openWindowById=s;function c(e){if(n[e.id]){let t=n[e.id];t.minimized&&(t.minimized=!1,t.element.classList.remove(`minimized`),t.tabElement.classList.add(`active`)),d(e.id);return}let i=document.createElement(`div`);i.className=`xp-window`,i.id=`window-${e.id}`,i.setAttribute(`data-app-id`,e.id);let a=window.innerWidth,o=window.innerHeight,s=Math.min(e.width||600,a-20),c=Math.min(e.height||420,o-60),f=Object.keys(n).length%6*28+40,p=Math.max(10,Math.min(a-s-20,f)),m=Math.max(10,Math.min(o-c-40,f));a<=768?(m=0,p=0,s=a,c=Math.max(380,o-30)):e.id===`about`&&(m=6,c=Math.max(450,o-36),s=Math.min(620,Math.max(340,a-140)),p=Math.max(120,Math.round((a-s)*.48))),i.style.width=s+`px`,i.style.height=c+`px`,i.style.left=p+`px`,i.style.top=m+`px`,i.style.zIndex=++t;let h=a<=768;if(h){i.classList.add(`maximized`);let e=i.querySelector(`.maximize`);e&&(e.textContent=`❐`,e.title=`Restore Down`)}i.innerHTML=`
    <div class="window-titlebar">
      <div class="window-title">
        <img src="${e.icon}" alt="${e.title}">
        <span>${e.title}</span>
      </div>
      <div class="window-controls">
        <button class="window-btn minimize" title="Minimize" aria-label="Minimize">_</button>
        <button class="window-btn maximize" title="Maximize" aria-label="Maximize">□</button>
        <button class="window-btn close" title="Close" aria-label="Close">✕</button>
      </div>
    </div>
    <div class="window-content">
      ${e.content}
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
  `,document.getElementById(`windows-container`).appendChild(i);let g=document.createElement(`div`);g.className=`taskbar-tab active`,g.innerHTML=`
    <img src="${e.icon}" alt="${e.title}">
    <span>${e.title}</span>
  `,g.addEventListener(`click`,()=>{n[e.id].minimized?(n[e.id].minimized=!1,i.classList.remove(`minimized`),d(e.id)):r===e.id?(n[e.id].minimized=!0,i.classList.add(`minimized`),g.classList.remove(`active`),r=null):d(e.id)}),document.getElementById(`taskbar-tabs`).appendChild(g),n[e.id]={element:i,tabElement:g,minimized:!1,maximized:h,prevBounds:{left:p+`px`,top:m+`px`,width:s+`px`,height:c+`px`}},i.addEventListener(`pointerdown`,()=>d(e.id)),i.querySelector(`.close`).addEventListener(`click`,t=>{t.stopPropagation(),l(e.id)}),i.querySelector(`.minimize`).addEventListener(`click`,t=>{t.stopPropagation(),n[e.id].minimized=!0,i.classList.add(`minimized`),g.classList.remove(`active`),r=null}),i.querySelector(`.maximize`).addEventListener(`click`,t=>{t.stopPropagation(),u(e.id)}),i.querySelector(`.window-titlebar`).addEventListener(`dblclick`,t=>{t.target.classList.contains(`window-btn`)||u(e.id)}),e.id===`cmd`&&S(),d(e.id)}function l(e){n[e]&&(n[e].element.remove(),n[e].tabElement.remove(),delete n[e],r===e&&(r=null))}function u(e){let t=n[e];if(!t)return;let r=t.element;t.maximized=!t.maximized;let i=r.querySelector(`.maximize`);t.maximized?(t.prevBounds={left:r.style.left,top:r.style.top,width:r.style.width,height:r.style.height},r.classList.add(`maximized`),i&&(i.textContent=`❐`,i.title=`Restore Down`)):(r.classList.remove(`maximized`),r.style.left=t.prevBounds.left,r.style.top=t.prevBounds.top,r.style.width=t.prevBounds.width,r.style.height=t.prevBounds.height,i&&(i.textContent=`□`,i.title=`Maximize`))}function d(e){if(!n[e])return;r=e;let i=n[e].element;i.style.zIndex=++t,Object.keys(n).forEach(t=>{let r=t===e;n[t].tabElement.classList.toggle(`active`,r),n[t].element.querySelector(`.window-titlebar`).classList.toggle(`inactive`,!r)})}function f(){document.addEventListener(`pointerdown`,e=>{let t=e.target.closest(`.window-titlebar`);if(t&&!e.target.classList.contains(`window-btn`)){let r=t.closest(`.xp-window`),a=r.getAttribute(`data-app-id`);if(n[a]&&!n[a].maximized){i.type=`drag`,i.windowId=a,i.startX=e.clientX,i.startY=e.clientY,i.initialLeft=r.offsetLeft,i.initialTop=r.offsetTop,d(a),e.preventDefault();return}}let r=e.target.closest(`.resize-handle`);if(r){let t=r.closest(`.xp-window`),a=t.getAttribute(`data-app-id`);n[a]&&!n[a].maximized&&(i.type=`resize`,i.windowId=a,i.dir=r.getAttribute(`data-dir`),i.startX=e.clientX,i.startY=e.clientY,i.initialLeft=t.offsetLeft,i.initialTop=t.offsetTop,i.initialWidth=t.offsetWidth,i.initialHeight=t.offsetHeight,d(a),e.preventDefault())}}),document.addEventListener(`pointermove`,e=>{if(!i.type||!i.windowId)return;let t=n[i.windowId];if(!t)return;let r=t.element,a=e.clientX-i.startX,o=e.clientY-i.startY;if(i.type===`drag`){let e=Math.max(-r.offsetWidth+80,Math.min(window.innerWidth-80,i.initialLeft+a)),t=Math.max(0,Math.min(window.innerHeight-60,i.initialTop+o));r.style.left=e+`px`,r.style.top=t+`px`}else if(i.type===`resize`){let e=i.dir,t=i.initialWidth,n=i.initialHeight,s=i.initialLeft,c=i.initialTop;if(e.includes(`e`)&&(t=Math.max(320,i.initialWidth+a)),e.includes(`s`)&&(n=Math.max(220,i.initialHeight+o)),e.includes(`w`)){let e=i.initialWidth-a;e>=320&&(t=e,s=i.initialLeft+a)}if(e.includes(`n`)){let e=i.initialHeight-o;e>=220&&(n=e,c=i.initialTop+o)}r.style.width=t+`px`,r.style.height=n+`px`,r.style.left=s+`px`,r.style.top=c+`px`}}),document.addEventListener(`pointerup`,()=>{i.type=null,i.windowId=null})}function p(){let e=Object.keys(n);if(e.length===0)return;let t=e.some(e=>!n[e].minimized);e.forEach(e=>{let r=n[e];t?(r.minimized=!0,r.element.classList.add(`minimized`),r.tabElement.classList.remove(`active`)):(r.minimized=!1,r.element.classList.remove(`minimized`),r.tabElement.classList.add(`active`))}),!t&&e.length>0?d(e[e.length-1]):r=null}function m(){let e=document.getElementById(`start-menu`),t=document.getElementById(`start-button`);e.classList.toggle(`hidden`),t.classList.toggle(`active`,!e.classList.contains(`hidden`))}function h(){let e=document.getElementById(`start-menu`),t=document.getElementById(`start-button`);e&&e.classList.add(`hidden`),t&&t.classList.remove(`active`)}function g(e){switch(e){case`projects`:case`recruiter`:case`resume`:case`about`:case`skills`:case`contact`:case`cmd`:s(e);break;case`run`:b(`run-dialog`);break}}function _(){let e=document.getElementById(`run-command-input`),t=document.getElementById(`run-confirm-btn`),n=document.getElementById(`run-cancel-btn`),r=document.getElementById(`run-dialog-close`),i=document.getElementById(`run-browse-btn`),a=()=>{let t=(e.value||``).trim().toLowerCase();x(`run-dialog`),e.value=``,t&&(t===`cmd`||t===`terminal`?s(`cmd`):t===`about`||t===`bio`?s(`about`):t===`projects`||t===`code`?s(`projects`):t===`resume`||t===`cv`?s(`resume`):t===`recruiter`||t===`note`||t===`dossier`?s(`recruiter`):t===`skills`||t===`tech`?s(`skills`):t===`contact`||t===`email`?s(`contact`):t===`recycle`||t===`trash`?s(`recycle`):t===`github`?window.open(`https://github.com/Nike-Anand`,`_blank`):t===`linkedin`?window.open(`https://www.linkedin.com/in/nithiyanandam-s-6a0553232/`,`_blank`):t===`calc`?alert(`Calculator: 2 + 2 = 4 (Result verified)`):t===`notepad`?s(`recruiter`):alert(`Windows cannot find '${t}'. Make sure you typed the name correctly, or try: projects, resume, recruiter, skills, cmd, github.`))};t.addEventListener(`click`,a),e.addEventListener(`keydown`,e=>{e.key===`Enter`&&a()}),n.addEventListener(`click`,()=>x(`run-dialog`)),r.addEventListener(`click`,()=>x(`run-dialog`)),i.addEventListener(`click`,()=>{s(`projects`),x(`run-dialog`)})}function v(){let e=document.getElementById(`shutdown-dialog-close`),t=document.getElementById(`shutdown-cancel-btn`),n=document.getElementById(`shutdown-confirm-btn`),r=document.getElementById(`shutdown-select`),i=document.getElementById(`shutdown-description`);r.addEventListener(`change`,()=>{r.value===`restart`?i.innerText=`Saves your session and restarts the Windows XP portfolio.`:r.value===`turnoff`?i.innerText=`Powers down the virtual system safely with a restart prompt.`:i.innerText=`Puts the computer into low-power standby mode.`}),n.addEventListener(`click`,()=>{let e=r.value;x(`shutdown-dialog`),e===`restart`?location.reload():e===`turnoff`?document.body.innerHTML=`
        <div class="xp-safe-shutdown">
          <div class="safe-shutdown-box">
            <h1>It is now safe to turn off your computer.</h1>
            <p style="color:#aaa; margin: 15px 0;">Windows XP Portfolio session terminated.</p>
            <button class="xp-btn primary-btn" onclick="location.reload()" style="font-size:14px; padding: 6px 20px;">
              ⚡ Turn Back On (Power Up)
            </button>
          </div>
        </div>
      `:e===`standby`&&document.getElementById(`logoff-screen`).classList.remove(`hidden`)}),t.addEventListener(`click`,()=>x(`shutdown-dialog`)),e.addEventListener(`click`,()=>x(`shutdown-dialog`))}function y(){b(`shutdown-dialog`)}function b(e){let n=document.getElementById(e);n&&(n.classList.remove(`hidden`),n.style.zIndex=++t+100)}function x(e){let t=document.getElementById(e);t&&t.classList.add(`hidden`)}function S(){let e=document.getElementById(`cmd-input`),t=document.getElementById(`cmd-output`);!e||!t||e.addEventListener(`keydown`,n=>{if(n.key===`Enter`){let n=e.value.trim(),r=document.createElement(`div`);r.className=`cmd-line-echo`,r.innerHTML=`<span style="color:#aaa;">C:\\Users\\Nithiyanandam&gt;</span> ${C(n)}`,t.appendChild(r);let i=n.toLowerCase().trim();e.value=``;let a=document.createElement(`div`);switch(a.className=`cmd-response`,i){case`help`:a.innerHTML=`
Available commands:
  <span style="color:#55ff55;">about</span>      - Display background and profile summary
  <span style="color:#55ff55;">recruiter</span>  - Open Recruiter Cheat Sheet & dossier
  <span style="color:#55ff55;">projects</span>   - List technical projects & architectures
  <span style="color:#55ff55;">skills</span>     - Show technical skill stack
  <span style="color:#55ff55;">resume</span>     - Open resume in IE browser
  <span style="color:#55ff55;">contact</span>    - Print contact information
  <span style="color:#55ff55;">whoami</span>     - Print current user session
  <span style="color:#55ff55;">github</span>     - Open GitHub profile in browser
  <span style="color:#55ff55;">clear</span>      - Clear terminal screen
  <span style="color:#55ff55;">date</span>       - Print current system date and time
  <span style="color:#55ff55;">exit</span>       - Close Command Prompt
          `;break;case`recruiter`:case`note`:case`notepad`:a.innerHTML=`Opening Recruiter Note & Candidate Dossier...`,s(`recruiter`);break;case`about`:a.innerHTML=`Nithiyanandam S - Backend Software Engineer | Distributed Systems & Microservices`,s(`about`);break;case`projects`:a.innerHTML=`1. Distributed Backend Serving Stack (-35% latency)
2. Quantum-Resistant Secure Comm. (SIH 2024 Finalist)
3. Real-Time Verification Microservice
4. Agentic Pipeline Automation CI/CD`,s(`projects`);break;case`skills`:a.innerHTML=`Core: Python, Java, C++, SQL, FastAPI, Kubernetes, Docker, Distributed Inference`,s(`skills`);break;case`resume`:a.innerHTML=`Opening Resume...`,s(`resume`);break;case`contact`:a.innerHTML=`Email: nithiyanandam4826@gmail.com | Tel: +91-7826060700 | LinkedIn: in/nithiyanandam-s-6a0553232/`,s(`contact`);break;case`whoami`:a.innerHTML=`NT AUTHORITY\\NITHIYANANDAM (Administrator, Software Engineer)`;break;case`clear`:case`cls`:t.innerHTML=``;return;case`date`:a.innerHTML=new Date().toString();break;case`github`:window.open(`https://github.com/Nike-Anand`,`_blank`),a.innerHTML=`Navigating to https://github.com/Nike-Anand...`;break;case`exit`:l(`cmd`);return;case``:break;default:a.innerHTML=`'${C(i)}' is not recognized as an internal or external command.\nType 'help' for valid commands.`;break}t.appendChild(a);let o=e.closest(`.cmd-terminal`);o&&(o.scrollTop=o.scrollHeight)}})}function C(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e])}window.filterProjects=function(e,t){let n=document.querySelector(`.projects-container`);n&&(document.querySelectorAll(`.filter-btn`).forEach(e=>e.classList.remove(`active`)),t&&t.classList.add(`active`),n.querySelectorAll(`.project-box`).forEach(t=>{let n=(t.getAttribute(`data-category`)||``).split(`,`);e===`all`||n.includes(e)?t.style.display=`block`:t.style.display=`none`}))},window.copyToClipboard=function(e,t){navigator.clipboard.writeText(e).then(()=>{let e=t.innerText;t.innerText=`Copied!`,setTimeout(()=>t.innerText=e,1800)})},window.downloadResumeText=function(){let e=new Blob([`NITHIYANANDAM S - Software Engineering Intern
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
`],{type:`text/plain`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`Nithiyanandam_S_Resume.txt`,n.click(),URL.revokeObjectURL(t)},window.handleIEAddressGo=function(){let e=document.getElementById(`ie-address-bar`);if(e){let t=e.value.toLowerCase();t.includes(`project`)?s(`projects`):t.includes(`contact`)?s(`contact`):t.includes(`skill`)?s(`skills`):t.includes(`about`)?s(`about`):s(`resume`)}},window.handleContactSubmit=function(e){e.preventDefault();let t=document.getElementById(`contact-name`).value,n=document.getElementById(`contact-email`).value,r=document.getElementById(`contact-msg`).value,i=`mailto:nikeanand97@gmail.com?subject=Contact from ${encodeURIComponent(t)}&body=${encodeURIComponent(r+`

Reply to: `+n)}`;window.location.href=i,alert(`Thank you, ${t}! Your email client will now open with your message addressed to Nithiyanandam S.`)},window.emptyRecycleBin=function(){let e=document.getElementById(`recycle-items-container`);e&&(e.innerHTML=`<div style="padding:20px; color:#666; font-style:italic;">Recycle bin is empty. All legacy bugs successfully erased!</div>`)},window.restoreRecycleBin=function(){let e=document.getElementById(`recycle-items-container`);e&&(e.innerHTML=`
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
    `)},window.showXpBalloon=function(e,t){let n=document.querySelector(`.xp-balloon`);n&&n.remove();let r=document.createElement(`div`);r.className=`xp-balloon`,r.innerHTML=`
    <div class="xp-balloon-header">
      <span>ℹ️ ${e}</span>
      <button class="xp-balloon-close" onclick="this.closest('.xp-balloon').remove()">✕</button>
    </div>
    <div>${t}</div>
  `,document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.remove()},7500)};var w=!1;function T(){document.addEventListener(`click`,e=>{(e.target.closest(`[data-app-id="projects"]`)||e.target.closest(`button[onclick*="projects"]`))&&(w=!0)}),setTimeout(()=>{if(w||n.projects)return;w=!0,s(`cmd`);let e=n.cmd;e&&(e.element.style.left=`40px`,e.element.style.top=`60px`,e.element.style.width=`560px`,e.element.style.height=`340px`,d(`cmd`));let t=document.getElementById(`cmd-output`),r=document.getElementById(`cmd-input`);if(!t||!r)return;let i=`run_portfolio_tour.bat --launch-projects`,a=0;r.value=``,r.focus();let o=setInterval(()=>{a<40?(r.value+=i[a],a++):(clearInterval(o),setTimeout(()=>{let e=document.createElement(`div`);e.className=`cmd-line-echo`,e.innerHTML=`<span style="color:#aaa;">C:\\Users\\Nithiyanandam&gt;</span> ${i}`,t.appendChild(e),r.value=``;let n=document.createElement(`div`);n.className=`cmd-response`,n.innerHTML=`
<span style="color:#ff5555;">[ALERT] Visitor inactivity detected!</span>
<span style="color:#ffff55;">[VIRUS SCAN] Inactivity neutralized: Deploying engineering projects...</span>
<span style="color:#55ff55;">[SYSTEM] Executing: start C:\\Portfolio\\My_Projects.exe</span>
          `,t.appendChild(n);let a=t.closest(`.cmd-terminal`);a&&(a.scrollTop=a.scrollHeight),setTimeout(()=>{s(`projects`),showXpBalloon(`🚀 Auto-Tour: Projects Launched`,`Inactivity detected: Automatically presenting Nithiyanandam's 7 featured engineering projects!`),setTimeout(()=>{promptResumeDownload()},5500)},650)},350))},45)},18e3)}window.promptResumeDownload=function(){let e=document.querySelector(`.xp-balloon`);e&&e.remove();let t=document.createElement(`div`);t.className=`xp-balloon xp-balloon-prompt`,t.innerHTML=`
    <div class="xp-balloon-header">
      <span>📄 Recruiter Inquiry</span>
      <button class="xp-balloon-close" onclick="handleResumeIgnore()">✕</button>
    </div>
    <div style="margin: 3px 0 6px 0; font-size: 11.5px; line-height: 1.4;">
      <strong>Can I give my resume to you?</strong><br>
      <span style="color: #444; font-size: 10.5px;">Download Nithiyanandam's 1-page Official PDF Resume (223 KB)</span>
    </div>
    <div class="xp-balloon-buttons">
      <button class="xp-balloon-btn primary" onclick="handleResumeDownloadNow()">📥 Download Now</button>
      <button class="xp-balloon-btn" onclick="handleResumeIgnore()">Ignore</button>
    </div>
  `,document.body.appendChild(t)},window.handleResumeDownloadNow=function(){let e=document.querySelector(`.xp-balloon`);e&&e.remove();let t=document.createElement(`a`);t.href=`/resume.pdf`,t.download=`Nithiyanandam_S_Resume.pdf`,document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>{showXpBalloon(`🎉 Thank You! 😄`,`Resume downloaded successfully! Looking forward to connecting and discussing SDE & ML roles.`)},350)},window.handleResumeIgnore=function(){let e=document.querySelector(`.xp-balloon`);e&&e.remove(),setTimeout(()=>{showXpBalloon(`😢 Oh okay...`,`No worries! Maybe next time. You can still view or download it anytime from the desktop icon or Start Menu! 📁`)},300)};