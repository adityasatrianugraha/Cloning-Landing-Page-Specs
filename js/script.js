// Alert
alert('Hai, Selamat Menikmati Website Agoy Jakbar');

// Input User function

const popup = document.getElementById('pop-up');
const closeBtn = document.getElementById('submit-user');

function closePopup() {
    popup.classList.add('close');
  }

closeBtn.addEventListener('click', closePopup);

// displayInput();
function displayInput(){
    var nickname = document.getElementById("user-input").value;
    document.getElementById("username").textContent = nickname;

    // if (nickname== ""){
    //     alert("Semua Wajib Diisikan!");
    //     return false;
    // }
}

// Iamge Slider function

var images = document.querySelectorAll('.hero-wrapper img');
var prevButton = document.querySelector('.prev-btn');
var nextButton = document.querySelector('.next-btn');
var currentImage = 0;
var slideInterval;

function showImage(n) {
  images[currentImage].classList.remove('active');
  currentImage = (n + images.length) % images.length;
  images[currentImage].classList.add('active');
}

function nextImage() {
  showImage(currentImage + 1);
}

function previousImage() {
  showImage(currentImage - 1);
}

prevButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);

function startSlide() {
    slideInterval = setInterval(nextImage, 4000); // Ganti gambar setiap 2 detik
  }
  
  function stopSlide() {
    clearInterval(slideInterval);
  }
  
  startSlide(); // Memulai auto slide saat memuat halaman

showImage(currentImage); // Menampilkan gambar pertama saat memuat halaman


// Infinite loop
document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
  }
  document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
  }

// pop up
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.list-item .item').forEach(product =>{
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
