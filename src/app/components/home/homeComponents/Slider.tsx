import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// @ts-expect-error swiper
import "swiper/css";
// @ts-expect-error swiper
import "swiper/css/pagination";
// @ts-expect-error swiper
import "swiper/css/navigation";
// @ts-expect-error swiper
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "No use Lux Use",
    highlight: "Use Sandelina",
    description: "Switch to Sandelina for a more natural skincare experience.",
    bgImage:
      "url('https://img.freepik.com/premium-photo/lifestyle-healthy-concept-spa-setting-massage-treatment-body-care-face-beauty-green-pink-tones-hard-light-dark-shadow-banner-format_164638-20004.jpg')",
    cta: "Show All Details",
  },
  {
    id: 2,
    title: "No drink Cocacola",
    highlight: "drink Mojo",
    description: "Choose Mojo for a refreshing and bold alternative.",
    bgImage:
      "url('https://img.freepik.com/premium-photo/gardening-tools-accessories-pink-background_185193-88049.jpg')",
    cta: "Explore Products",
  },
  {
    id: 3,
    title: "No use other Brand",
    highlight: "Use walton brand",
    description: "Experience reliability and innovation with Walton.",
    bgImage:
      "url('https://waltonbd.com/image/catalog/home-page/slider/worldwide-web-view.jpg')",
    cta: "View Collection",
  },
  {
    id: 4,
    title: "Premium Television",
    highlight: "Walton Smart TV",
    description: "Enjoy smart entertainment with Walton's latest TVs.",
    bgImage:
      "url('https://waltonbd.com/image/catalog/category-banner/television/hotel-mode.jpg')",
    cta: "Shop Now",
  },
  {
    id: 5,
    title: "Quality Home Appliances",
    highlight: "Walton Products",
    description: "Upgrade your home with durable Walton appliances.",
    bgImage:
      "url('https://waltonbd.com/image/catalog/home-page/full-block/tamarind-desktop.jpg')",
    cta: "Discover More",
  },
  {
    id: 6,
    title: "Healthy Cooking",
    highlight: "Bashundhara Oil",
    description: "Cook smarter and healthier with Bashundhara Oil.",
    bgImage:
      "url('https://www.bashundharafood.com/assets/upload/wallpaper_1597834039.jpg')",
    cta: "Learn Benefits",
  },
  {
    id: 7,
    title: "Premium Construction",
    highlight: "Shah Cement",
    description: "Build strong and lasting with Shah Cement.",
    bgImage:
      "url('https://www.shahcement.com/storage/backend.pages/yWE255hcV7rMRaXRIhtJQKmtpLfQeJcOlHnTUfDw.jpg')",
    cta: "View Products",
  },
];

export default function AdvancedSlider() {
  return (
    <section aria-label="Product showcase slider" className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" role="button" aria-label="Go to slide ${
              index + 1
            }"></span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={800}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        className="h-[250px] md:h-[350px] lg:h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `${slide.bgImage}, linear-gradient(to right, #424242, #424242)`,
                backgroundBlendMode: "overlay",
              }}
              role="img"
              aria-label={`Slide ${slide.id}: ${slide.title} ${slide.highlight}`}
            >
              <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {slide.title}{" "}
                    <span className="text-yellow-400">{slide.highlight}</span>
                  </h2>
                  <p className="text-white text-sm sm:text-base md:text-lg mb-4">
                    {slide.description}
                  </p>
                  <button
                    className="inline-flex items-center justify-center rounded-xl bg-yellow-600 hover:bg-yellow-700 py-3 px-6 text-sm md:text-base font-medium text-white shadow-lg shadow-green-400/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    aria-label={slide.cta}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div
          className="swiper-button-prev hidden md:flex after:text-white after:text-2xl after:font-bold hover:after:text-yellow-400"
          aria-label="Previous slide"
        />
        <div
          className="swiper-button-next hidden md:flex after:text-white after:text-2xl after:font-bold hover:after:text-yellow-400"
          aria-label="Next slide"
        />
      </Swiper>

      {/* Pagination Bullets */}
      <div className="swiper-pagination !relative !bottom-0 !mt-4" />
    </section>
  );
}
