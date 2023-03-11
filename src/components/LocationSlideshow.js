class LocationSlideshow {
  constructor(locationService) {
    this.#locationService = locationService;
    this.#init();
  }

  async #init() {
    await this.#renderLocationSlideshow();
    this.#initSlideshow();
  }

  #initSlideshow() {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    var swiper = new window.Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        1200: {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  }

  async #renderLocationSlideshow() {
    const container = document.querySelector(".mySwiper .swiper-wrapper");

    if (!container) {
      throw new Error("there is no slideshow to render locations");
    }

    const locations = await this.#locationService.getLocations();

    const renderedLocations = locations
      .map(
        (location) => `
    <div class="swiper-slide">
      <div class="cardSwiper" style="background-image:url('${location.image}')">
        <div className="cardName">${location.name}</div>
        <div className="cardText">${location.text}</div>
      </div>
    </div>
    `
      )
      .join("");

    container.innerHTML = renderedLocations;
  }
}
