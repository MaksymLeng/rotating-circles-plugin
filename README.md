# 🎯 Rotating Circles Plugin

A visual and interactive JavaScript plugin to display books or any items in **rotating circular** or **flying random** motion.  
Perfect for portfolios, book apps, playful dashboards, or creative UI.

---

## ✨ Features

✅ Two animation modes:
- 🔄 **Circular** — elements rotate around a center
- 🪂 **Random** — elements float and bounce inside a container

✅ Interactive: click a circle to expand and see details  
✅ Configurable: radius, speed, and movement range  
✅ Tiny, standalone, no dependencies  
✅ Fully customizable via CSS

---

## 🔗 Live Demo

👉 [View Live Demo on GitHub Pages](https://maksymleng.github.io/circle-plugin/)

---

## 📦 Installation

1. Clone or download the repo:
```bash
git clone https://github.com/MaksymLeng/rotating-circles-plugin.git
```
2. Include in your HTML:

```bash
<link rel="stylesheet" href="circle-plugin.css">
<script type="module">
  import RotatingCircles from './circle-plugin.js';
</script>
```
3. Add a container:

```bash
<div id="circleContainer" class="rotating-books"></div>
```

🚀 Usage Example
```bash
const books = [
  { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", status: "read" },
  { title: "1984", author: "G. Orwell", genre: "Dystopian", status: "reading" },
];

const plugin = new RotatingCircles("circleContainer", books, {
  mode: "random",             // "circular" or "random"
  radius: 150,                // used in circular mode
  speed: 0.02,                // used in circular mode
  randomSpeedRange: [0.5, 2]  // used in random mode
});
```

## ⚙️ Options

| Option             | Type      | Description                                 | Default     |
|--------------------|-----------|---------------------------------------------|-------------|
| `mode`             | `string`  | `"circular"` or `"random"` animation mode   | `"circular"`|
| `radius`           | `number`  | Radius of the circle (circular mode only)   | `150`       |
| `speed`            | `number`  | Rotation speed (circular mode only)         | `0.01`      |
| `randomSpeedRange` | `array`   | Min/max range of movement per frame         | `[0.5, 2]`  |

---

## 🛠 Public Methods

| Method           | Description                                  |
|------------------|----------------------------------------------|
| `addBook(book)`  | Dynamically adds a new book to the plugin. The book should be an object with `title`, `author`, `genre`, and `status` fields. |

```js
plugin.addBook({
  title: "New Book",
  author: "Some Author",
  genre: "Adventure",
  status: "plan"
});
```

---

## 🎨 Status Colors

Each book has a `status` which affects the icon and background color of the circle.

| Status value | Emoji  | CSS class             | Default color |
|--------------|--------|------------------------|----------------|
| `plan`       | 📌     | `book-circle.plan`     | Orange         |
| `reading`    | 📖     | `book-circle.reading`  | Blue           |
| `read`       | ✅     | `book-circle.read`     | Green          |

You can change the colors in `circle-plugin.css` by overriding the class styles:

```css
.book-circle.plan {
    background-color: #f0ad4e;
}
.book-circle.reading {
    background-color: #5bc0de;
}
.book-circle.read {
    background-color: #5cb85c;
}
```

📸 Screenshots
```markdown
### 🔄 Circular Mode (default)
![Compact view](./imgReadme/circles-compact.png)

### 🔍 Expanded View (on click)
![Expanded view](./imgReadme/circles-expanded.png)
```
Want flying circles? Set mode: "random" to enable bouncing animation!

📁 File Structure

```bash
📁 rotating-circles-plugin/
├── circle-plugin.js       // Main JavaScript plugin file
├── circle-plugin.css      // Plugin styles
├── index.html             // Demo HTML file
├── README.md              // Documentation
├── circles-compact.png    // Screenshot: compact view
└── circles-expanded.png   // Screenshot: expanded view
```

🙋‍♂️ Created by
Made with ❤️ by MaksymLeng
This project is part of my personal portfolio and open for contributions and feedback.
