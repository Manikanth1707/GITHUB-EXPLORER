let currentTheme = 'dark';
let currentTab = 'profile';

// Theme Toggle
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeBtn = document.getElementById('themeBtn');
  const icon = themeBtn.querySelector('i');
  
  if (currentTheme === 'light') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
  
  localStorage.setItem('theme', currentTheme);
}

// Tab Switching
function switchTab(tabName) {
  // Remove active class from all tabs and content
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  // Add active class to selected tab and content
  event.target.classList.add('active');
  document.getElementById(`${tabName}-tab`).classList.add('active');
  
  currentTab = tabName;
  
  // Clear results when switching tabs
  document.getElementById('results').innerHTML = '';
}

// Profile Search
async function fetchProfile() {
  const username = document.getElementById('username').value.trim();
  const results = document.getElementById('results');
  
  if (!username) {
    showError('Please enter a username!');
    return;
  }

  showLoading();

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`)
    ]);

    if (!userRes.ok) throw new Error('User not found');

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    displayProfile(userData, reposData);
  } catch (err) {
    showError(err.message);
  }
}

function displayProfile(user, repos) {
  const results = document.getElementById('results');
  
  const topRepos = repos.slice(0, 6).map(repo => `
    <div class="repo-card">
      <div class="repo-header">
        <i class="fas fa-code-branch"></i>
        <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
      </div>
      <p class="repo-description">${repo.description || 'No description available'}</p>
      <div class="repo-stats">
        <span class="repo-stat">
          <i class="fas fa-star"></i> ${repo.stargazers_count}
        </span>
        <span class="repo-stat">
          <i class="fas fa-code-branch"></i> ${repo.forks_count}
        </span>
        ${repo.language ? `
          <span class="repo-stat">
            <span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>
            ${repo.language}
          </span>
        ` : ''}
      </div>
    </div>
  `).join('');

  results.innerHTML = `
    <div class="profile-card">
      <img src="${user.avatar_url}" alt="${user.name || user.login}" />
      <h2>${user.name || user.login}</h2>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">@${user.login}</p>
      ${user.bio ? `<p style="margin-bottom: 20px; font-style: italic;">"${user.bio}"</p>` : ''}
      
      <div class="profile-stats">
        <div class="stat-item">
          <span class="stat-number">${user.public_repos}</span>
          <span class="stat-label">Repositories</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${user.followers}</span>
          <span class="stat-label">Followers</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${user.following}</span>
          <span class="stat-label">Following</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${user.public_gists}</span>
          <span class="stat-label">Gists</span>
        </div>
      </div>
      
      ${user.location ? `<p><i class="fas fa-map-marker-alt"></i> ${user.location}</p>` : ''}
      ${user.company ? `<p><i class="fas fa-building"></i> ${user.company}</p>` : ''}
      ${user.blog ? `<p><i class="fas fa-link"></i> <a href="${user.blog}" target="_blank">${user.blog}</a></p>` : ''}
      
      <a href="${user.html_url}" target="_blank" class="github-link">
        <i class="fab fa-github"></i> View on GitHub
      </a>
    </div>
    
    ${repos.length > 0 ? `
      <div style="margin-top: 40px;">
        <h3 style="text-align: center; margin-bottom: 20px; color: var(--primary-color);">
          <i class="fas fa-star"></i> Top Repositories
        </h3>
        <div class="repo-grid">
          ${topRepos}
        </div>
      </div>
    ` : ''}
  `;
}

// Compare Users
async function compareUsers() {
  const user1 = document.getElementById('user1').value.trim();
  const user2 = document.getElementById('user2').value.trim();
  const results = document.getElementById('results');
  
  if (!user1 || !user2) {
    showError('Please enter both usernames!');
    return;
  }

  showLoading();

  try {
    const [user1Res, user2Res] = await Promise.all([
      fetch(`https://api.github.com/users/${user1}`),
      fetch(`https://api.github.com/users/${user2}`)
    ]);

    if (!user1Res.ok) throw new Error(`User "${user1}" not found`);
    if (!user2Res.ok) throw new Error(`User "${user2}" not found`);

    const [user1Data, user2Data] = await Promise.all([
      user1Res.json(),
      user2Res.json()
    ]);

    displayComparison(user1Data, user2Data);
  } catch (err) {
    showError(err.message);
  }
}

function displayComparison(user1, user2) {
  const results = document.getElementById('results');
  
  results.innerHTML = `
    <div class="compare-container">
      <div class="profile-card">
        <img src="${user1.avatar_url}" alt="${user1.name || user1.login}" />
        <h2>${user1.name || user1.login}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">@${user1.login}</p>
        
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-number">${user1.public_repos}</span>
            <span class="stat-label">Repos</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${user1.followers}</span>
            <span class="stat-label">Followers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${user1.following}</span>
            <span class="stat-label">Following</span>
          </div>
        </div>
        
        <a href="${user1.html_url}" target="_blank" class="github-link">
          <i class="fab fa-github"></i> View Profile
        </a>
      </div>
      
      <div class="vs-divider">
        <i class="fas fa-balance-scale"></i>
      </div>
      
      <div class="profile-card">
        <img src="${user2.avatar_url}" alt="${user2.name || user2.login}" />
        <h2>${user2.name || user2.login}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">@${user2.login}</p>
        
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-number">${user2.public_repos}</span>
            <span class="stat-label">Repos</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${user2.followers}</span>
            <span class="stat-label">Followers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${user2.following}</span>
            <span class="stat-label">Following</span>
          </div>
        </div>
        
        <a href="${user2.html_url}" target="_blank" class="github-link">
          <i class="fab fa-github"></i> View Profile
        </a>
      </div>
    </div>
    
    <div style="margin-top: 40px; text-align: center;">
      <h3 style="color: var(--primary-color); margin-bottom: 20px;">Comparison Summary</h3>
      <div class="profile-stats" style="max-width: 600px; margin: 0 auto;">
        <div class="stat-item">
          <span class="stat-label">More Repos</span>
          <span class="stat-number" style="font-size: 1.2rem;">
            ${user1.public_repos > user2.public_repos ? user1.login : 
              user2.public_repos > user1.public_repos ? user2.login : 'Tie'}
          </span>
        </div>
        <div class="stat-item">
          <span class="stat-label">More Followers</span>
          <span class="stat-number" style="font-size: 1.2rem;">
            ${user1.followers > user2.followers ? user1.login : 
              user2.followers > user1.followers ? user2.login : 'Tie'}
          </span>
        </div>
      </div>
    </div>
  `;
}

// Repository Search
async function searchRepositories() {
  const query = document.getElementById('repoQuery').value.trim();
  const results = document.getElementById('results');
  
  if (!query) {
    showError('Please enter a search query!');
    return;
  }

  showLoading();

  try {
    const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=12`);
    
    if (!response.ok) throw new Error('Search failed');

    const data = await response.json();
    displayRepositories(data.items);
  } catch (err) {
    showError(err.message);
  }
}

function displayRepositories(repos) {
  const results = document.getElementById('results');
  
  if (repos.length === 0) {
    results.innerHTML = '<div class="error">No repositories found for your search.</div>';
    return;
  }
  
  const repoCards = repos.map(repo => `
    <div class="repo-card">
      <div class="repo-header">
        <i class="fas fa-code-branch"></i>
        <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">
        by <a href="${repo.owner.html_url}" target="_blank" style="color: var(--primary-color);">${repo.owner.login}</a>
      </p>
      <p class="repo-description">${repo.description || 'No description available'}</p>
      <div class="repo-stats">
        <span class="repo-stat">
          <i class="fas fa-star"></i> ${repo.stargazers_count.toLocaleString()}
        </span>
        <span class="repo-stat">
          <i class="fas fa-code-branch"></i> ${repo.forks_count.toLocaleString()}
        </span>
        ${repo.language ? `
          <span class="repo-stat">
            <span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>
            ${repo.language}
          </span>
        ` : ''}
      </div>
    </div>
  `).join('');

  results.innerHTML = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h3 style="color: var(--primary-color);">
        <i class="fas fa-search"></i> Search Results
      </h3>
      <p style="color: var(--text-secondary);">Found ${repos.length} repositories</p>
    </div>
    <div class="repo-grid">
      ${repoCards}
    </div>
  `;
}

// Utility Functions
function showLoading() {
  document.getElementById('results').innerHTML = `
    <div class="loading">
      <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary-color);"></i>
      <p style="margin-top: 15px;">Loading...</p>
    </div>
  `;
}

function showError(message) {
  document.getElementById('results').innerHTML = `
    <div class="error">
      <i class="fas fa-exclamation-triangle"></i> ${message}
    </div>
  `;
}

function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    'C#': '#239120',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    HTML: '#e34c26',
    CSS: '#1572B6',
    Vue: '#2c3e50',
    React: '#61dafb'
  };
  return colors[language] || '#8b949e';
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeBtn = document.getElementById('themeBtn');
  const icon = themeBtn.querySelector('i');
  
  if (currentTheme === 'light') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
});

// Add Enter key support for all inputs
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const activeTab = document.querySelector('.tab-content.active');
    const activeTabId = activeTab.id;
    
    if (activeTabId === 'profile-tab') {
      fetchProfile();
    } else if (activeTabId === 'compare-tab') {
      compareUsers();
    } else if (activeTabId === 'repos-tab') {
      searchRepositories();
    }
  }
});