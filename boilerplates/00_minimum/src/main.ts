document.addEventListener("DOMContentLoaded", () => {
  window.setInterval(() => {
    document.body.style.backgroundColor = `rgb(${Math.random() * 96}, ${
      Math.random() * 96
    }, ${Math.random() * 96})`;
  }, 3000);
});
