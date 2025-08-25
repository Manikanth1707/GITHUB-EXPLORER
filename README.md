# GitHub Explorer Pro 🚀

A modern, feature-rich GitHub profile and repository explorer built with vanilla JavaScript. Discover, compare, and explore GitHub profiles and repositories with a beautiful, responsive interface.

![GitHub Explorer Pro](https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

### 🔍 **Profile Search**
- Search for any GitHub user by username
- View detailed profile information including bio, location, and company
- Display user statistics (repositories, followers, following, gists)
- Show top 6 repositories with stars, forks, and programming languages
- Direct links to GitHub profiles and repositories

### ⚖️ **User Comparison**
- Compare two GitHub users side-by-side
- Visual comparison of statistics
- Winner indicators for different metrics
- Perfect for evaluating developers or exploring similar profiles

### 📚 **Repository Search**
- Search for repositories by keywords or topics
- Sort results by popularity (stars)
- View repository details including description, stars, forks, and language
- Discover trending and popular projects
- Direct links to repository pages

### 🎨 **Modern UI/UX**
- **Dark/Light Theme Toggle** - Switch themes with persistent preference
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Professional hover effects and transitions
- **Loading States** - Visual feedback during API calls
- **Error Handling** - User-friendly error messages
- **Keyboard Support** - Press Enter to search in any mode

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Internet connection (for GitHub API calls)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/github-explorer-pro.git
   cd github-explorer-pro
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser, or
   - Use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Start exploring!**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 🎯 How to Use

### Profile Search
1. Click on the "Profile Search" tab
2. Enter a GitHub username (e.g., "octocat", "torvalds", "gaearon")
3. Click "Search" or press Enter
4. Explore the user's profile and top repositories

### Compare Users
1. Switch to the "Compare Users" tab
2. Enter two GitHub usernames
3. Click "Compare" to see side-by-side comparison
4. View winner indicators for different metrics

### Repository Search
1. Go to the "Repository Search" tab
2. Enter keywords (e.g., "react", "machine learning", "javascript")
3. Browse through popular repositories
4. Click on repository names to visit them on GitHub

## 🛠️ Technical Details

### Built With
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **GitHub REST API** - Real-time data fetching
- **Font Awesome** - Beautiful icons
- **Google Fonts** - Inter typography

### Key Technologies
- CSS Custom Properties (CSS Variables) for theming
- CSS Grid and Flexbox for responsive layouts
- Fetch API for HTTP requests
- LocalStorage for theme persistence
- CSS Animations and Transitions
- Mobile-first responsive design

### API Usage
This application uses the GitHub REST API v3:
- `GET /users/{username}` - User profile data
- `GET /users/{username}/repos` - User repositories
- `GET /search/repositories` - Repository search

**Rate Limiting**: GitHub API allows 60 requests per hour for unauthenticated requests.

## 🎨 Customization

### Themes
The application supports custom themes through CSS variables. You can easily modify colors in the `:root` and `[data-theme="light"]` selectors in `style.css`.

### Adding Features
The modular JavaScript structure makes it easy to add new features:
- Add new tabs in `index.html`
- Create corresponding functions in `script.js`
- Style new components in `style.css`

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions
- Add user activity timeline
- Implement repository filtering and sorting
- Add GitHub organization search
- Create data visualization charts
- Add export functionality
- Implement favorites/bookmarks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GitHub REST API](https://docs.github.com/en/rest) for providing the data
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Inter typography
- [Pexels](https://pexels.com/) for stock photos

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](https://github.com/yourusername/github-explorer-pro/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible including browser version and steps to reproduce

---

**Made with ❤️ by [Your Name]**

*Star ⭐ this repository if you found it helpful!*