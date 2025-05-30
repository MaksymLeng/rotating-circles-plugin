# 🎯 Rotating Circles Plugin

A visual and interactive JavaScript plugin to display books (or anything) in rotating or bouncing circles.  
Now available via **CDN** — no installation required!

---

## ✨ Features

✅ Circular or random animation modes  
✅ Fully interactive: click to expand  
✅ Add items dynamically  
✅ Zero dependencies  
✅ CDN-ready
✅ Dynamic mode switching — added a public method plugin.setMode("random" or "circular") to change modes at runtime.
---

## 🔗 Live Demo

👉 [View Live Demo on GitHub Pages](https://maksymleng.github.io/rotating-circles-plugin/)

---

## 🚀 Use via CDN (no setup)

### 📦 JavaScript (ES Module)

```html
<script type="module">
  import RotatingCircles from 'https://cdn.jsdelivr.net/gh/MaksymLeng/rotating-circles-plugin/dist/circle-plugin.js';

  const books = [
    { title: "1984", author: "Orwell", genre: "Dystopia", status: "read" },
    { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", status: "reading" }
  ];

  const plugin = new RotatingCircles('circleContainer', books, {
    mode: 'random',
    randomSpeedRange: [0.5, 2]
  });
</script>
```
### 🎨 CSS

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MaksymLeng/rotating-circles-plugin/dist/circle-plugin.css">
```

📌 You can lock to a version (recommended in production):

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/MaksymLeng/rotating-circles-plugin@v1.0.0/dist/circle-plugin.js"></script>
```

---

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

| Option             | Type     | Description                               | Default      |
|--------------------|----------|-------------------------------------------|--------------|
| `mode`             | `string` | `"circular"` or `"random"` animation mode | `"circular"` |
| `radius`           | `number` | Radius of the circle (circular mode only) | `150`        |
| `speed`            | `number` | Rotation speed (circular mode only)       | `0.01`       |
| `randomSpeedRange` | `array`  | Min/max range of movement per frame       | `[0.5, 2]`   |
| `maxFps`           | `number` | Maxfps with which the animation works     | `60`         |

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
🔄 Switching Plugin Mode at Runtime
You can dynamically switch between "circular" and "random" layouts using the built-in setMode() method:


```bash
plugin.setMode("random");   // Switch to flying mode
plugin.setMode("circular"); // Switch back to circular mode
Example: toggle on button click
html

<button id="modeToggle">Switch Mode</button>
```
Example: toggle on button click
```bash
<script>
  const toggleBtn = document.getElementById("modeToggle");
  let currentMode = "circular";

  toggleBtn.addEventListener("click", () => {
    currentMode = currentMode === "circular" ? "random" : "circular";
    plugin.setMode(currentMode);
  });
</script>
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
