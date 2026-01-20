document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  function toggleExpand(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".expand-icon");

    document.querySelectorAll(".expand-content").forEach(item => {
      if (item !== content) {
        item.classList.remove("active");
        const otherIcon = item.previousElementSibling?.querySelector(".expand-icon");
        if (otherIcon) otherIcon.src = "assets/ic_baseline-plus.png";
      }
      
    });

    content.classList.toggle("active");
    icon.src = content.classList.contains("active")
      ? "assets/ic_baseline-minus.png"
      : "assets/ic_baseline-plus.png";
  }

  window.toggleExpand = toggleExpand;


  const fragranceOptions = document.querySelectorAll(".fragrance-option");

  fragranceOptions.forEach(option => {
    option.addEventListener("click", () => {
      fragranceOptions.forEach(opt => opt.classList.remove("selected"));
      option.classList.add("selected");
    });
  });

function updateAddToCartLink() {
  const fragrance =
    document.querySelector(".fragrance-option.selected")?.dataset.fragrance;

  const purchase =
    document.querySelector('input[name="purchase"]:checked')?.value;

  const addToCart = document.querySelector(".add-to-cart");

  if (!fragrance || !purchase) return;

  addToCart.href = `https://dummycart.com/${fragrance}-${purchase}`;
}

document.querySelectorAll(".fragrance-option").forEach(opt =>
  opt.addEventListener("click", updateAddToCartLink)
);

document.querySelectorAll('input[name="purchase"]').forEach(radio =>
  radio.addEventListener("change", updateAddToCartLink)
);

updateAddToCartLink();


const productImage = document.querySelector(".product-image");
const dots = document.querySelectorAll(".dot");
const controls = document.querySelectorAll(".control-btn");
const thumbnails = document.querySelectorAll(".thumbnail");

const images = [
  "assets/Rectangle 6723.png",
  "assets/pexels-pixabay-264870 1 (2).png",
  "assets/pexels-pixabay-264950 1 (1).png",
  "assets/pexels-rethaferguson-3059609 2 (2).png",
  "assets/Group 1000003951.png"
];

let currentIndex = 0;

function updateSlider(index) {
  currentIndex = (index + images.length) % images.length;
  productImage.src = images[currentIndex];

  dots.forEach((dot, i) =>
    dot.classList.toggle("inactive", i !== currentIndex)
  );

  thumbnails.forEach((thumb, i) =>
    thumb.classList.toggle("active", i === currentIndex)
  );
}

controls[0].addEventListener("click", () => updateSlider(currentIndex - 1));
controls[1].addEventListener("click", () => updateSlider(currentIndex + 1));

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => updateSlider(i));
});

thumbnails.forEach((thumb, i) => {
  thumb.addEventListener("click", () => updateSlider(i+1));
});


  document.querySelectorAll(".hero-cta, .btn-primary").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(".slider-section")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });


  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();
      const input = newsletterForm.querySelector(".newsletter-input");
      if (!input.value.trim()) return;

      alert("Thanks for subscribing ✨");
      input.value = "";
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;
  
  console.log('Script loaded');
  console.log('Hamburger:', hamburger);
  console.log('Nav menu:', navMenu);
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      
      console.log('Hamburger clicked');
      
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('menu-open');
      
      if (navMenu.classList.contains('active')) {
        navMenu.style.display = 'flex';
        navMenu.style.position = 'fixed';
        navMenu.style.top = '0';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.height = '100vh';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '80px 30px 30px';
        navMenu.style.background = 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)';
        navMenu.style.zIndex = '1000';
        navMenu.style.gap = '20px';
        console.log('Menu opened');
      } else {
        navMenu.style.display = '';
        navMenu.style.position = '';
        navMenu.style.top = '';
        navMenu.style.left = '';
        navMenu.style.width = '';
        navMenu.style.height = '';
        navMenu.style.flexDirection = '';
        navMenu.style.padding = '';
        navMenu.style.background = '';
        navMenu.style.zIndex = '';
        navMenu.style.gap = '';
        console.log('Menu closed');
      }
    });
    
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navMenu.style.display = '';
      }
    });
    
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        navMenu.style.display = '';
      });
    });
  }
});




const statNumbers = document.querySelectorAll(".stats-number");

const countUp = (el) => {
  const target = parseInt(el.innerText);
  let count = 0;
  const increment = target / 60;

  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      el.innerText = target + "%";
      clearInterval(interval);
    } else {
      el.innerText = Math.floor(count) + "%";
    }
  }, 20);
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(stat => observer.observe(stat));




document.addEventListener('DOMContentLoaded', function() {
  const subscriptionCards = document.querySelectorAll('.subscription-card');
  
  if (subscriptionCards.length >= 2) {
    const singleSubCard = subscriptionCards[0];
    const doubleSubCard = subscriptionCards[1];
    
    const singleImg = singleSubCard.querySelector('img[src*="Group 1000003911"]');
    const singleContent = singleSubCard.querySelector('.one');
    
    const doubleImg = doubleSubCard.querySelector('img[src*="Ellipse"]');
    const doubleContent = doubleSubCard.querySelector('.one');
    
    if (singleImg && singleContent && doubleImg && doubleContent) {
      singleContent.style.display = 'block';
      doubleContent.style.display = 'none';
      
      singleImg.style.cursor = 'pointer';
      doubleImg.style.cursor = 'pointer';
      
      singleImg.addEventListener('click', function() {
        singleContent.style.display = 'block';
        doubleContent.style.display = 'none';
        singleImg.src = 'assets/Group 1000003911.png';
        doubleImg.src = 'assets/Ellipse 7.png';
      });
      
      doubleImg.addEventListener('click', function() {
        doubleContent.style.display = 'block';
        singleContent.style.display = 'none';
        doubleImg.src = 'assets/Group 1000003911.png';
        singleImg.src = 'assets/Ellipse 7.png';
      });
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  
  let selectedFragrance = 'original'; 
  let selectedPurchaseType = 'single';
  
  const addToCartLink = document.querySelector('.add-to-cart');
  
  function updateCartLink() {
    const cartUrl = `https://example.com/cart?fragrance=${selectedFragrance}&type=${selectedPurchaseType}`;
    
    if (addToCartLink) {
      addToCartLink.href = cartUrl;
      console.log('Cart URL updated:', cartUrl);
    }
  }
  
  const fragranceOptions = document.querySelectorAll('.fragrance-option');
  fragranceOptions.forEach(option => {
    option.style.cursor = 'pointer';
    
    option.addEventListener('click', function() {
      const fragranceInfo = this.querySelector('.fragrance-info div');
      if (fragranceInfo) {
        selectedFragrance = fragranceInfo.textContent.toLowerCase().trim();
      }
      
      const parentOptions = this.parentElement.querySelectorAll('.fragrance-option');
      parentOptions.forEach(opt => opt.classList.remove('selected'));
      
      this.classList.add('selected');
      
      updateCartLink();
    });
  });
  
  const subscriptionCards = document.querySelectorAll('.subscription-card');
  
  if (subscriptionCards.length >= 2) {
    const singleSubCard = subscriptionCards[0];
    const doubleSubCard = subscriptionCards[1];
    
    const singleImg = singleSubCard.querySelector('img[src*="Group 1000003911"], img[src*="Ellipse"]');
    const doubleImg = doubleSubCard.querySelector('img[src*="Ellipse"], img[src*="Group 1000003911"]');
    
    const singleContent = singleSubCard.querySelector('.one');
    const doubleContent = doubleSubCard.querySelector('.one');
    
    if (singleImg && doubleImg && singleContent && doubleContent) {
      singleContent.style.display = 'block';
      doubleContent.style.display = 'none';
      selectedPurchaseType = 'single';
      
      singleImg.style.cursor = 'pointer';
      doubleImg.style.cursor = 'pointer';
      
      singleImg.addEventListener('click', function() {
        singleContent.style.display = 'block';
        doubleContent.style.display = 'none';
        singleImg.src = 'assets/Group 1000003911.png';
        doubleImg.src = 'assets/Ellipse 7.png';
        
        selectedPurchaseType = 'single';
        updateCartLink();
      });
      
      doubleImg.addEventListener('click', function() {
        doubleContent.style.display = 'block';
        singleContent.style.display = 'none';
        doubleImg.src = 'assets/Group 1000003911.png';
        singleImg.src = 'assets/Ellipse 7.png';
        
        selectedPurchaseType = 'double';
        updateCartLink();
      });
    }
  }
  
  updateCartLink();
});
