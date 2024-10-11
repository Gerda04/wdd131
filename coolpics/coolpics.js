document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('nav ul');

    // Hide menu by default on small screens
    menu.style.display = 'none';

    menuButton.addEventListener('click', () => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex'; // Show the menu
        } else {
            menu.style.display = 'none'; // Hide the menu
        }
    });
});

function handleResize() {
    const menu = document.querySelector("nav ul");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  
  window.addEventListener("resize", handleResize);
  const viewer = document.querySelector(".viewer");
const closeViewerButton = document.querySelector(".close-viewer");
const galleryImages = document.querySelectorAll(".gallery img");


galleryImages.forEach(image => {
  image.addEventListener("click", function() {
    const imgSrc = this.getAttribute("src"); 
    viewer.querySelector("img").setAttribute("src", imgSrc); 
    viewer.style.display = "grid"; 
  });
});


closeViewerButton.addEventListener("click", function() {
  viewer.style.display = "none"; 
});

function viewerTemplate(pic, alt) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
      </div>
    `;
  }
  
  function viewHandler(event) {
    // Get the clicked element
    const clickedElement = event.target;
  
    if (clickedElement.tagName.toLowerCase() === 'img') {

      const imgSrc = clickedElement.getAttribute("src");
      const imgAlt = clickedElement.getAttribute("alt");
  
      
      const imgParts = imgSrc.split("-");
      const fullImgSrc = imgParts[0] + "-full.jpeg"; 
  

      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImgSrc, imgAlt));

      document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
  }
  

  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
      viewer.remove();
    }
  }
  

  document.querySelector(".gallery").addEventListener("click", viewHandler);
  