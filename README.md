# Walid Abdulkadir — Portfolio

Personal portfolio website built with React, Tailwind CSS, and Vite. Features a dark/light theme, smooth scroll navigation, animated skill ticker, and a fully responsive layout.

---

## Tech Stack

- **React 19** — component-based UI
- **Tailwind CSS v4** — utility-first styling via Vite plugin
- **Vite 8** — fast dev server and build tool
- **react-icons** — icon library (Simple Icons + Bootstrap Icons)

---

## Project Structure

src/
├── assets/
│ ├── files/ # CV PDF
│ └── images/ # Project screenshots
├── components/
│ ├── projects/
│ │ ├── data.js # Project data (title, tags, links, images)
│ │ ├── Project.jsx # Projects section
│ │ └── ProjectCard.jsx # Individual project card
│ ├── About.jsx
│ ├── Clock.jsx
│ ├── Contact.jsx
│ ├── Footer.jsx
│ ├── Home.jsx
│ ├── Nav.jsx
│ └── Ticker.jsx
├── App.jsx
├── index.css # Design tokens + Tailwind @theme
└── main.jsx

---

## Features

- **Dark mode by default** — toggled via `data-theme="light"` on `<html>`, driven by CSS custom properties
- **Clock topbar** — shows greeting, date, and live time; dismissible with a close button
- **Scroll spy** — active nav link updates as you scroll through sections
- **Skill ticker** — infinite scrolling marquee with tech icons
- **Project cards** — thumbnail, tags, GitHub and live demo links
- **Contact form** — controlled inputs with a success message on submit
- **CV download** — links directly to the PDF in assets

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Customization

| What             | Where                                                      |
| ---------------- | ---------------------------------------------------------- |
| Projects         | `src/components/projects/data.js`                          |
| Skills in ticker | `src/components/Ticker.jsx`                                |
| Social links     | `src/components/Home.jsx` and `src/components/Contact.jsx` |
| Color tokens     | `src/index.css` — `:root` and `[data-theme="light"]`       |
| CV file          | `src/assets/files/`                                        |
| Project images   | `src/assets/images/`                                       |

---
