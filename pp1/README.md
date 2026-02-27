# 🌙 Churrería Oba

A modern dark-themed website built with React and Vite for a classic Spanish churrería.  
Browse our products, learn about us, and get in touch.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
```bash
git clone https://github.com/yourusername/churreria-oba.git
cd churreria-oba
npm install
npm run dev
```

Open:  
http://localhost:5173

---

## 📁 Project Structure

```
churreria-oba/
├── public/
│   ├── logo-oba.png
│   ├── about-local.jpg
│   └── about-churros.jpg
├── src/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   └── destination-card/
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   |── contact/
|   |   └── reviews/
│   ├── data/
│   │   └── destinations.js
│   ├── services/
│   │   └── reviews.service.js
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
└── README.md
```

---

## 🎨 Main Features

### Home Page
- Hero section with a modern dark café aesthetic
- Product cards loaded from a JSON array
- Fully responsive using flexbox
- Smooth hamburger menu on mobile devices

### About Page
- Story of the churrería
- Two high-quality images (local + churros)
- Well-structured text blocks

### Contact Page
- Interactive Leaflet map centered on **Paseo González Díaz nº 15, Teror**
- Contact information and schedule
- Contact form with name, email, and message fields

---

## 🛠️ Third-Party Components

### Leaflet
Used for the interactive map on the Contact page.  
https://react-leaflet.js.org/  
https://leafletjs.com/examples/quick-start/

### React Icons
Used for social media icons in the footer.  
https://react-icons.github.io/react-icons/

---

## 📚 Resources That Helped

- React Docs — https://react.dev/
- Vite Guide — https://vitejs.dev/guide/
- React Router — https://reactrouter.com/
- CSS Flexbox Guide — https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Unsplash — https://unsplash.com/
- README Template — https://github.com/othneildrew/Best-README-Template

---

## 💻 Git Workflow

Branches:
- main — Production
- develop — Development

```bash
git checkout develop
git add .
git commit -m "your message"
git push origin develop

---

## 👤 Author

**Obal-dai Fernández Gazulla**  
GitHub: https://github.com/obaldai

---

## 🙌 Thanks To

- React Icons
- Leaflet
- CSS-Tricks
- MDN Web Docs
