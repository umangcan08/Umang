/* Creating an array of image file names */
const imageArray = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Looping through images and creating thumbnail images */
function loopingImg() {
  for (let i = 1; i <= imageArray.length; i++) {
    // Create a new image element for each image in the array
    let newImage = document.createElement('img');
    
    // Get the file path for the current image
    let image = imageArray[i - 1]; // Adjusted index to start from 1
    
    // Set the 'src' attribute of the new image element
    newImage.setAttribute('src', image);
    
    // Append the new image element to the '.thumb-bar' container in the HTML
    document.querySelector('.thumb-bar').appendChild(newImage);
  }
}

/* Adding an event listener for the "click" event on all thumbnails */
function clickImg() {
  // Function to set the 'src' attribute of the displayed image when a thumbnail is clicked
  function setImgSrc() {
    // 'this' points to the clicked element (thumbnail)
    let attribute = this.getAttribute('src');
    let displayedImage = document.querySelector('.displayed-img');
    
    // Set the 'src' attribute of the displayed image to the clicked thumbnail's 'src'
    displayedImage.setAttribute('src', attribute);
  }

  // Select all thumbnail images and add a 'click' event listener to each
  let elements = document.querySelectorAll('.thumb-bar img');
  elements.forEach(function (element) {
    element.addEventListener('click', setImgSrc);
  });
}

/* Handler to lighten/darken the displayed image with a button click */
function darkenImg() {
  // Get references to the button and overlay elements
  let buttonNode = document.querySelector('.dark');
  let overlay = document.querySelector('.overlay');

  // Add a 'click' event listener to the button
  buttonNode.addEventListener('click', () => {
    // Get the current class of the button
    const btnClass = buttonNode.getAttribute('class');

    // Toggle between lightening and darkening the image and update button text
    if (btnClass === 'dark') {
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      buttonNode.setAttribute('class', 'light');
      buttonNode.textContent = 'Lighten';
    } else {
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      buttonNode.setAttribute('class', 'dark');
      buttonNode.textContent = 'Darken';
    }
  });
}

// Using the 'DOMContentLoaded' event to ensure the DOM is fully loaded before executing the code
document.addEventListener('DOMContentLoaded', (event) => {
  // Call the functions to set up the image gallery
  loopingImg();
  clickImg();
  darkenImg();
});
