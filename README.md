# GitHub Explorer Pro 🚀

A **modern, feature-rich GitHub profile and repository explorer** built with **vanilla JavaScript**. Easily discover, compare, and explore GitHub profiles and repositories through a sleek, responsive interface.  

---

## ✨ Features  

### 🔍 Profile Search  
- Search GitHub users by username  
- View detailed profile info (bio, location, company)  
- User statistics (repos, followers, following, gists)  
- Top 6 repositories with stars, forks, and languages  
- Direct links to GitHub profile & repositories  

### ⚖️ User Comparison  
- Compare two GitHub users side-by-side  
- Visual statistics comparison with winner indicators  
- Great for evaluating developers or exploring similar profiles  

### 📚 Repository Search  
- Search repositories by keywords/topics  
- Sort by stars (popularity)  
- View details (description, stars, forks, language)  
- Direct links to repositories  

### 🎨 Modern UI/UX  
- Dark/Light theme toggle (persistent)  
- Responsive design (desktop, tablet, mobile)  
- Smooth animations and hover effects  
- Loading states & error handling  
- Keyboard shortcuts (Enter to search)  

---

## 🚀 Getting Started  

### Prerequisites  
- A modern browser  
- Internet connection (for GitHub API calls)  

### Installation  

```bash
# Clone the repo
git clone https://github.com/yourusername/github-explorer-pro.git
cd github-explorer-pro
```

Run locally:  
```bash
# Python
python -m http.server 8000  

# Node.js
npx serve .  

# PHP
php -S localhost:8000
```

Or open `index.html` directly in your browser.  

---

## 🎯 Usage  

### Profile Search  
1. Open **Profile Search** tab  
2. Enter a GitHub username (`octocat`, `torvalds`, `gaearon`)  
3. Press **Enter** or click **Search**  

### Compare Users  
1. Go to **Compare Users** tab  
2. Enter two GitHub usernames  
3. Click **Compare** for a side-by-side view  

### Repository Search  
1. Switch to **Repository Search**  
2. Enter keywords (e.g., `react`, `machine learning`)  
3. Browse and explore trending repos  

---

## 🛠️ Tech Stack  

- **HTML5** – Semantic structure  
- **CSS3** – Flexbox, Grid, custom properties  
- **Vanilla JavaScript** – No frameworks, pure JS  
- **GitHub REST API v3** – Real-time data fetching  
- **Font Awesome & Google Fonts** – Icons & typography  

**Key Concepts**  
- Fetch API for HTTP requests  
- LocalStorage for theme persistence  
- Mobile-first responsive design  
- CSS transitions & animations  

---

## 📊 API Usage  

Endpoints:  
- `GET /users/{username}` → User details  
- `GET /users/{username}/repos` → User repositories  
- `GET /search/repositories` → Repository search  

⚠️ **Rate Limit**: 60 requests/hour (unauthenticated).  

---

## 🎨 Customization  

- **Themes** – Update `:root` variables in `style.css`  
- **Features** – Modular JS structure makes adding new tabs/components easy  

---

## ✅ Browser Support  

- Chrome 60+  
- Firefox 55+  
- Safari 12+  
- Edge 79+  

---

## 🤝 Contributing  

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/new-feature`)  
3. Commit changes (`git commit -m "Add new feature"`)  
4. Push to branch (`git push origin feature/new-feature`)  
5. Open a Pull Request  

**Contribution Ideas**  
- User activity timeline  
- Repo filtering & sorting  
- Organization search  
- Data visualizations  
- Export/favorites  

---

## 📄 License  

Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.  

---

## 🙏 Acknowledgments  

- [GitHub REST API](https://docs.github.com/en/rest)  
- [Font Awesome](https://fontawesome.com/)  
- [Google Fonts](https://fonts.google.com/)  
- [Pexels](https://pexels.com/)  

---

## 📞 Support  

- Check [Issues](https://github.com/yourusername/github-explorer-pro/issues)  
- Open a new issue with details if not already reported  

---

📌 **Author:** Manikanth Banka 
📌 **Repository:** https://github.com/Manikanth1707/GITHUB-EXPLORER
