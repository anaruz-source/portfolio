# Portfolio - Abdelhaq Kharrou

A professional, responsive portfolio website built with React and Vite, designed to showcase data science projects, cloud engineering skills, and professional experience.

## 🚀 Features

*   **Professional Resume Mode:** Optimized for printing to PDF (`Ctrl/Cmd + P`) for a clean, single-page resume.
*   **Dynamic Project Showcase:** Highlights key projects with "Technical Arsenal" and detailed descriptions.
*   **Responsive Design:** Glassmorphism UI that works perfectly on desktop and mobile.
*   **Dark Mode:** Sleek, modern dark aesthetic.

## 🛠️ Tech Stack

*   **Frontend:** React 19, Vite
*   **Styling:** Vanilla CSS (Variables, Glassmorphism)
*   **Deployment:** GitHub Pages

## 📦 Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anaruz-source/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 🚀 Deployment Procedure

This project is configured to deploy to **GitHub Pages**.

### Prerequisites
*   Ensure the `homepage` field in `package.json` matches your GitHub URL: `https://anaruz-source.github.io/portfolio`.
*   Ensure the `repo` is linked (see "First Time Setup" below).

### First Time Setup
If you haven't linked the local folder to GitHub yet:

```bash
git remote add origin git@github.com:anaruz-source/portfolio.git
git branch -M main
git push -u origin main
```

### Regular Deployment
To deploy updates to the live site, simply run:

```bash
npm run deploy
```

This command will:
1.  Build the project (`npm run build`).
2.  Push the `dist` folder to the `gh-pages` branch.
