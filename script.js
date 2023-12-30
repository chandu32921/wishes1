var imageUrls = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img5.jpg"
];

var swiperWrapper = document.getElementById("swiper-wrapper");

// Create Swiper slides dynamically
imageUrls.forEach(function (imageUrl) {
  var swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";

  var img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Image";

  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  h2.textContent = "Custom Title"; // You can set a custom title if needed

  div.appendChild(h2);

  swiperSlide.appendChild(img);
  swiperSlide.appendChild(div);

  swiperWrapper.appendChild(swiperSlide);
});

// Initialize Swiper


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  initialSlide: 0,
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    }
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    }
  }
});