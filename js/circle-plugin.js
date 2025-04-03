export default class RotatingCircles {
    constructor(containerId, initialBooks = [], options = {}) {
        this.container = document.getElementById(containerId);
        this.books = initialBooks;
        this.parentAngle = 0;
        this.config = {
            radius: options.radius || 150,
            speed: options.speed || 0.01
        };
        this.isPaused = false;

        this.init();
    }

    init() {
        this.books.forEach(book => this.addBookCircle(book));
        this.animateRotation();
    }

    addBook(book) {
        this.books.push(book);
        this.addBookCircle(book);
    }

    addBookCircle(book) {
        const circle = document.createElement("div");
        circle.classList.add("book-circle", book.status);

        const statusIcon = book.status === "read" ? "✅"
            : book.status === "reading" ? "📖"
                : "📌";

        circle.innerHTML = `
            <div class="book-content">
                <span class="book-icon">${statusIcon}</span>
                <span class="book-title">${book.title[0].toUpperCase()}</span>
                <div class="book-details">
                    <p>Autor: ${book.author}</p>
                    <p>Genre: ${book.genre || "_"}</p>
                    <p>Status: ${book.status}</p>
                </div>
            </div>`;

        circle.addEventListener("click", () => {
            circle.classList.toggle("expanded");
            this.isPaused = !!document.querySelector(".book-circle.expanded");
        });

        this.container.appendChild(circle);
        this.updateBookPosition();
    }

    updateBookPosition() {
        const circles = this.container.querySelectorAll(".book-circle");
        const total = circles.length;
        const radius = this.config.radius;

        circles.forEach((circle, i) => {
            const angleStep = (2 * Math.PI) / total;
            const angle = angleStep * i + this.parentAngle;
            const offsetX = 200;
            const offsetY = 200;

            circle.style.left = `${offsetX + radius * Math.cos(angle)}px`;
            circle.style.top = `${offsetY + radius * Math.sin(angle)}px`;

            const content = circle.querySelector(".book-content");
            const degrees = (angle * 180) / Math.PI;
            content.style.transform = circle.classList.contains("expanded") ? 'rotate(0deg)' : `rotate(${-degrees + 180}deg)`;
        });
    }

    animateRotation() {
        if (!this.isPaused) {
            this.parentAngle += this.config.speed;
        }
        this.updateBookPosition();
        requestAnimationFrame(this.animateRotation.bind(this));
    }
}
