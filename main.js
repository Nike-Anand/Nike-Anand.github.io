// main.js

const iconsData = [
  {
    id: 'about',
    title: 'About Me',
    // My Computer Icon approximation
    icon: '/react95_icons/computer_explorer_cool-0.png',
    content: `
      <div class="content-section">
        <h1>About Me</h1>
        <img src="https://via.placeholder.com/100" style="float:left; margin:0 15px 15px 0; border:2px solid #ccc" alt="My Photo">
        <p>Hello! I'm a software developer with a passion for nostalgic interfaces and modern web technologies.</p>
        <p>I love building interactive experiences that bring a smile to users' faces. This portfolio is a tribute to the classic Windows XP operating system.</p>
        <p>Replace this placeholder with your actual biography.</p>
      </div>
    `
  },
  {
    id: 'projects',
    title: 'My Projects',
    // My Documents Icon approximation (Folder with paper)
    icon: '/react95_icons/directory_open_cool-0.png',
    content: `
      <div class="content-section">
        <h1>My Projects</h1>
        <div class="projects-grid">
          <div class="project-card">
            <img src="/react95_icons/directory_closed-0.png" alt="Proj 1">
            <p>Project Alpha</p>
          </div>
          <div class="project-card">
            <img src="/react95_icons/directory_closed-0.png" alt="Proj 2">
            <p>Project Beta</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'resume',
    title: 'Resume',
    // Internet Explorer Icon approximation ('e' with ring)
    icon: '/react95_icons/gears.png',
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
            <img src="/react95_icons/msie1.png" class="ie-logo">
          </div>
          <div class="ie-row">
            <div class="ie-row-inner">
              <div class="ie-grabber"></div>
              <div class="ie-btn">
                <img src="/react95_icons/back.png" class="ie-btn-icon">
                <span class="ie-btn-text">Back</span><span style="font-size:8px; margin-left:2px">▼</span>
              </div>
              <div class="ie-btn disabled">
                <img src="/react95_icons/forward.png" class="ie-btn-icon">
                <span style="font-size:8px; margin-left:2px">▼</span>
              </div>
              <div class="ie-btn"><img src="/react95_icons/stop.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/refresh.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/home.png" class="ie-btn-icon"></div>
              <div class="ie-btn-sep"></div>
              <div class="ie-btn"><img src="/react95_icons/search_web.png" class="ie-btn-icon"><span class="ie-btn-text">Search</span></div>
              <div class="ie-btn"><img src="/react95_icons/favorites.png" class="ie-btn-icon"><span class="ie-btn-text">Favorites</span></div>
              <div class="ie-btn"><img src="/react95_icons/history.png" class="ie-btn-icon"></div>
              <div class="ie-btn-sep"></div>
              <div class="ie-btn"><img src="/react95_icons/envelope_closed.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/printer.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/notepad.png" class="ie-btn-icon"></div>
            </div>
          </div>
          <div class="ie-row">
            <div class="ie-row-inner">
              <div class="ie-grabber"></div>
              <div class="ie-address-container">
                <span class="ie-address-label">Address</span>
                <div class="ie-address-input-wrapper">
                  <img src="/react95_icons/msie2.png">
                  <input type="text" value="https://portfolio.local/resume.pdf" readonly>
                </div>
                <div class="ie-go-container">
                  <button class="ie-go-btn"><img src="/react95_icons/arrow_right-1.png" style="width:12px;height:12px;">Go</button>
                  <div class="ie-links">Links <span style="font-size:10px;margin-left:2px">»</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ie-content-frame">
          <h1>Resume</h1>
          <p><strong>Experience:</strong></p>
          <ul>
            <li>Senior Developer (2020-Present)</li>
            <li>Web Developer (2016-2020)</li>
          </ul>
          <p><strong>Education:</strong></p>
          <ul>
            <li>B.S. Computer Science</li>
          </ul>
          <button onclick="alert('Download started!')">Download PDF</button>
        </div>
        <div class="ie-status-bar">
          <div class="ie-status-pane ie-status-main">
            <img src="/react95_icons/msie2.png">
            <span>Done</span>
          </div>
          <div class="ie-status-pane" style="width: 150px"></div>
          <div class="ie-status-pane" style="width: 150px">
            <img src="/react95_icons/gears.png">
            <span>Internet</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'contact',
    title: 'Contact Me',
    // My Network Places Icon approximation
    icon: '/react95_icons/network_cool_two_pcs-0.png',
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
            <img src="/react95_icons/msie1.png" class="ie-logo">
          </div>
          <div class="ie-row">
            <div class="ie-row-inner">
              <div class="ie-grabber"></div>
              <div class="ie-btn">
                <img src="/react95_icons/back.png" class="ie-btn-icon">
                <span class="ie-btn-text">Back</span><span style="font-size:8px; margin-left:2px">▼</span>
              </div>
              <div class="ie-btn disabled">
                <img src="/react95_icons/forward.png" class="ie-btn-icon" style="filter: grayscale(100%) opacity(50%);">
                <span style="font-size:8px; margin-left:2px">▼</span>
              </div>
              <div class="ie-btn"><img src="/react95_icons/stop.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/refresh.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/home.png" class="ie-btn-icon"></div>
              <div class="ie-btn-sep"></div>
              <div class="ie-btn"><img src="/react95_icons/search_web.png" class="ie-btn-icon"><span class="ie-btn-text">Search</span></div>
              <div class="ie-btn"><img src="/react95_icons/favorites.png" class="ie-btn-icon"><span class="ie-btn-text">Favorites</span></div>
              <div class="ie-btn"><img src="/react95_icons/history.png" class="ie-btn-icon"></div>
              <div class="ie-btn-sep"></div>
              <div class="ie-btn"><img src="/react95_icons/envelope_closed.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/printer.png" class="ie-btn-icon"></div>
              <div class="ie-btn"><img src="/react95_icons/notepad.png" class="ie-btn-icon"></div>
            </div>
          </div>
          <div class="ie-row">
            <div class="ie-row-inner">
              <div class="ie-grabber"></div>
              <div class="ie-address-container">
                <span class="ie-address-label">Address</span>
                <div class="ie-address-input-wrapper">
                  <img src="/react95_icons/msie2.png">
                  <input type="text" value="https://portfolio.local/contact-me" readonly>
                </div>
                <div class="ie-go-container">
                  <button class="ie-go-btn"><img src="/react95_icons/arrow_right-1.png" style="width:12px;height:12px;">Go</button>
                  <div class="ie-links">Links <span style="font-size:10px;margin-left:2px">»</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ie-content-frame">
          <h1>Contact Me</h1>
          <form class="contact-form" onsubmit="event.preventDefault(); alert('Message Sent!');">
            <label>Name:</label>
            <input type="text" placeholder="John Doe" required>
            <label>Email:</label>
            <input type="email" placeholder="john@example.com" required>
            <label>Message:</label>
            <textarea rows="4" placeholder="Hello!" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div class="ie-status-bar">
          <div class="ie-status-pane ie-status-main">
            <img src="/react95_icons/gears.png">
            <span>Done</span>
          </div>
          <div class="ie-status-pane" style="width: 150px"></div>
          <div class="ie-status-pane" style="width: 150px">
            <img src="/react95_icons/gears.png">
            <span>Internet</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'skills',
    title: 'Skills',
    // Control Panel Icon approximation (Folder with wrench/cog)
    icon: '/react95_icons/settings.png',
    content: `
      <div class="content-section">
        <h1>Skills</h1>
        <p>JavaScript / TypeScript</p>
        <div class="skill-bar-container"><div class="skill-bar" style="width: 90%;"></div></div>
        <p>HTML & CSS</p>
        <div class="skill-bar-container"><div class="skill-bar" style="width: 95%;"></div></div>
        <p>React</p>
        <div class="skill-bar-container"><div class="skill-bar" style="width: 80%;"></div></div>
        <p>Nostalgic UI Design</p>
        <div class="skill-bar-container"><div class="skill-bar" style="width: 100%;"></div></div>
      </div>
    `
  }
];

let zIndexCounter = 100;
const openWindows = {}; // map of id -> window info

document.addEventListener('DOMContentLoaded', () => {
  // Boot screen timeout
  setTimeout(() => {
    const bootScreen = document.getElementById('boot-screen');
    bootScreen.style.opacity = '0';
    setTimeout(() => {
      bootScreen.classList.add('hidden');
    }, 500);
  }, 2500);

  // Clock
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('clock').innerText = hours + ':' + minutes + ' ' + ampm;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Desktop Icons
  const desktopContainer = document.getElementById('desktop-icons');
  const startMenuContainer = document.getElementById('start-menu-items');
  
  iconsData.forEach(app => {
    // Desktop Icon
    const iconEl = document.createElement('div');
    iconEl.className = 'desktop-icon';
    iconEl.innerHTML = `
      <img src="${app.icon}" alt="${app.title}">
      <span>${app.title}</span>
    `;
    
    // Selection logic
    iconEl.addEventListener('mousedown', (e) => {
      document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
      iconEl.classList.add('selected');
    });

    // Double click to open
    iconEl.addEventListener('dblclick', () => {
      openWindow(app);
    });

    // Mobile single tap to open (crude check for touch device)
    iconEl.addEventListener('touchstart', (e) => {
      setTimeout(() => openWindow(app), 200);
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
      document.getElementById('start-menu').classList.add('hidden');
      document.getElementById('start-button').classList.remove('active');
    });
    startMenuContainer.appendChild(startEl);
  });

  // Desktop deselect
  document.getElementById('desktop').addEventListener('mousedown', (e) => {
    if(e.target === document.getElementById('desktop')) {
      document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
      document.getElementById('start-menu').classList.add('hidden');
      document.getElementById('start-button').classList.remove('active');
    }
  });

  // Start Menu Toggle
  const startBtn = document.getElementById('start-button');
  startBtn.addEventListener('click', () => {
    const menu = document.getElementById('start-menu');
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
      startBtn.classList.remove('active');
    } else {
      startBtn.classList.add('active');
    }
  });

  // Shutdown
  document.getElementById('shutdown-btn').addEventListener('click', () => {
    document.body.innerHTML = '<div style="background:black;color:white;height:100vh;display:flex;justify-content:center;align-items:center;font-size:24px;">It is now safe to turn off your computer.</div>';
  });
});

function openWindow(app) {
  if (openWindows[app.id]) {
    // Already open, bring to front
    const winInfo = openWindows[app.id];
    if (winInfo.minimized) {
      winInfo.minimized = false;
      winInfo.element.classList.remove('minimized');
      winInfo.tabElement.classList.add('active');
    }
    bringToFront(app.id);
    return;
  }

  // Create window
  const winEl = document.createElement('div');
  winEl.className = 'xp-window';
  
  // Basic initial position offset for multiple windows
  const offset = Object.keys(openWindows).length * 30 + 50;
  winEl.style.top = offset + 'px';
  winEl.style.left = offset + 'px';
  winEl.style.zIndex = ++zIndexCounter;

  // On small screens, start maximized
  if (window.innerWidth <= 768) {
    winEl.classList.add('maximized');
  }

  winEl.innerHTML = `
    <div class="window-titlebar">
      <div class="window-title">
        <img src="${app.icon}" alt="${app.title}">
        <span>${app.title}</span>
      </div>
      <div class="window-controls">
        <div class="window-btn minimize" title="Minimize">_</div>
        <div class="window-btn maximize" title="Maximize">□</div>
        <div class="window-btn close" title="Close">X</div>
      </div>
    </div>
    <div class="window-content">
      ${app.content}
    </div>
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
      // Restore
      openWindows[app.id].minimized = false;
      winEl.classList.remove('minimized');
      bringToFront(app.id);
    } else {
      // If active, minimize. If not active, bring to front.
      if (winEl.style.zIndex == zIndexCounter) {
        openWindows[app.id].minimized = true;
        winEl.classList.add('minimized');
        tabEl.classList.remove('active');
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
    maximized: window.innerWidth <= 768
  };

  // Window interactions
  winEl.addEventListener('mousedown', () => bringToFront(app.id));

  // Controls
  const titlebar = winEl.querySelector('.window-titlebar');
  winEl.querySelector('.close').addEventListener('click', (e) => {
    e.stopPropagation();
    winEl.remove();
    tabEl.remove();
    delete openWindows[app.id];
  });

  winEl.querySelector('.minimize').addEventListener('click', (e) => {
    e.stopPropagation();
    openWindows[app.id].minimized = true;
    winEl.classList.add('minimized');
    tabEl.classList.remove('active');
  });

  winEl.querySelector('.maximize').addEventListener('click', (e) => {
    e.stopPropagation();
    openWindows[app.id].maximized = !openWindows[app.id].maximized;
    if (openWindows[app.id].maximized) {
      winEl.classList.add('maximized');
    } else {
      winEl.classList.remove('maximized');
    }
  });

  // Dragging logic
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  titlebar.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('window-btn') || openWindows[app.id].maximized) return;
    isDragging = true;
    dragOffsetX = e.clientX - winEl.getBoundingClientRect().left;
    dragOffsetY = e.clientY - winEl.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    winEl.style.left = (e.clientX - dragOffsetX) + 'px';
    winEl.style.top = (e.clientY - dragOffsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  bringToFront(app.id);
}

function bringToFront(id) {
  if (!openWindows[id]) return;
  const winEl = openWindows[id].element;
  winEl.style.zIndex = ++zIndexCounter;
  
  // Update taskbar active state
  Object.values(openWindows).forEach(win => win.tabElement.classList.remove('active'));
  Object.values(openWindows).forEach(win => win.element.querySelector('.window-titlebar').classList.add('inactive'));
  
  openWindows[id].tabElement.classList.add('active');
  winEl.querySelector('.window-titlebar').classList.remove('inactive');
}
