import dove from '/home/dove.jpg'

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector('.partial')!
  el.innerHTML += ', and <code>/subdir/_partial/partial.ts</code>'

  const main = document.querySelector('main')!
  const para = document.createElement('p')
  const img = document.createElement('img')
  img.src = dove
  img.alt = ''
  img.width= 640
  img.height= 521
  para.appendChild(img)
  main.append(para)
});
