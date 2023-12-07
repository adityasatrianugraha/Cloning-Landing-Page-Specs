// pop up
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products .card').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  closeButton.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('active');
  closeButton.classList.remove('active');
});
// Close Hamburger