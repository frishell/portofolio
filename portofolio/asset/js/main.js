

//home//
const textElement = document.querySelector('.typed');

const textArray = ['developer', 'mahasiswa'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    textElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, typingDelay + 1000);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // On DOM Load initiate the type action
  type();
});

document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    parallaxElements.forEach(function(element) {
      const speed = element.getAttribute('data-parallax');
      const offset = scrollPosition * speed / 100;

      element.style.transform = 'translateY(' + offset + 'px)';
    });
  });
});

//navbar//
document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('a[href^="#resume"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


$(document).ready(function(){
  // Ambil hash dari URL dan tambahkan efek blur jika menu yang sesuai dengan hash diklik
  var hash = window.location.hash;
  if(hash) {
      var targetMenu = $('.menu-link[href="' + hash + '"]');
      targetMenu.css("filter", "blur(0.5px)");
  }

  // Ketika menu-link diklik
  $(".menu-link").click(function(){
      // Hapus efek blur dari semua menu-link
      $(".menu-link").css("filter", "none");
      
      // Terapkan efek blur pada menu yang diklik
      $(this).css("filter", "blur(100px)");
  });
});


/////////////////          about           //////////////////// 

document.addEventListener("DOMContentLoaded", function() {
  const skillBars = document.querySelectorAll('.progress');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addAnimationClass() {
    skillBars.forEach(skillBar => {
      if (isInViewport(skillBar)) {
        const progressBar = skillBar.querySelector('.bar > .progress-bar1');
        const progressBarWidth = parseInt(skillBar.querySelector('.val').textContent);
        progressBar.style.width = progressBarWidth + '%';
        progressBar.classList.add('animate');
      }
    });
  }

  addAnimationClass();

  window.addEventListener('scroll', function() {
    addAnimationClass();
  });
});

// contact//

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Menghentikan pengiriman formulir standar

    // Mengambil data dari formulir
    const formData = new FormData(form);

    // Simulasi pengiriman data (ganti dengan koneksi sebenarnya)
    fetch('https://example.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!'); // Tampilkan pesan sukses jika koneksi berhasil
        form.reset(); // Bersihkan formulir setelah berhasil
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      console.error('Error:', error); // Tangkap dan tampilkan pesan error jika terjadi masalah
      alert('An error occurred. Please try again later.');
    });
  });
});
