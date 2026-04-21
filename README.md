# 🌙 Churrería Oba

A modern dark-themed website built with React and Vite for a classic Spanish churrería.  
Browse our products, learn about us, and get in touch.

---

## 🌐 Live Demo
You can view the live application deployed here:  
**[https://reactfirebasesimpleexample.web.app/](https://reactfirebasesimpleexample.web.app/)**

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
```bash
git clone https://github.com/ObaldaiFernandezGazulla/Proyecto-React-1.git
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
│   ├── about-churros.jpg
│   └── carta.xml           
├── src/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   └── destination-card/
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── reviews/        
│   │   ├── menu/         
│   │   ├── privacy/  
│   │   ├── cookies/   
│   │   └── terms/        
│   ├── data/
│   │   └── destinations.js
│   ├── services/
│   │   ├── reviews.service.js
│   │   └── firebase.js
│   ├── utils/
│   │   ├── file-export.js
│   │   └── file-import.js
│   ├── App.jsx
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

# Reviews

### Key Features
- Create: It allows users to add new reviews to the system using a validated form.
- Read: Real-time synchronization with the Firebase Realtime Database to display the list of reviews.
- Update: Ability to edit user information, ratings, and comments, with data integrity validation.
- Delete: Deleting records with automatic updating of the component's status.

### Data and Records Management
- Import: Support for loading data from external files (**JSON, CSV, and XML**). The system normalizes the content and automatically saves it to the database.
- Export: Generate backups or reports in **JSON, CSV, and XML** formats, allowing users to download their review history locally.
- Service-Oriented Architecture: Centralized access to Firebase in the `services/` layer to ensure effective decoupling between business logic and the user interface.

### User Experience (UX)
- Seamless Interface: Use of a custom modal for editing reviews, eliminating the use of disruptive native windows (`prompt`).
- Notifications: A *toast* system (non-intrusive notifications) for immediate feedback after import, export, or editing operations.
- Asynchrony: Implementing `async/await` patterns to prevent the main thread from blocking during database calls or file processing.

### Sample files for import
To make it easier to use the import feature, the system allows you to download sample templates in the supported formats:
- [Download template.json](https://drive.google.com/file/d/1T2Fgs4H7ulf51pkSGMXOuqEUs_S_7V3D/view?usp=sharing)
- [Download template.csv](https://drive.google.com/file/d/1gPYvlLp8ZrO-7ALDTH76pafCygKkMDLV/view?usp=sharing)
- [Download template.xml](https://drive.google.com/file/d/1PiekiehfQF5AHIoBH3amrQng3gl-BTe_/view?usp=sharing)

# Menu
Detailed product page.
RSS feed: official feed via carta.xml for products and prices.

# RSS Feed Reader Integration
The RSS feed integration has been verified using an external reader, linking each product in the menu to the official URL of the project hosted on Firebase.

![rss-test](image-1.png)

---

## 🛠️ Third-Party Components

### Firebase Hosting
Project deployed and managed via Firebase infrastructure for public and secure access.

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
