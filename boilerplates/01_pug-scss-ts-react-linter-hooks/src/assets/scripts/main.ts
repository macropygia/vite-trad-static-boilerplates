document.addEventListener("DOMContentLoaded", () => {
  window.setInterval(() => {
    document.body.style.borderColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
  }, 3000);
});
