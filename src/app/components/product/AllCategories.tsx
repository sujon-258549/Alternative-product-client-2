import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
// @ts-expect-error swiper
import "swiper/css";
// @ts-expect-error swiper
import "swiper/css/navigation";
import { Link } from "react-router";
import { CategoryData } from "../const/category";

// Category data

export const AllCategories = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            All Categories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Explore our complete collection of products
          </motion.p>
        </div>
      </section>

      {/* Featured Categories Carousel */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Collections
          </h2>

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={2}
              navigation={{
                nextEl: ".category-swiper-button-next",
                prevEl: ".category-swiper-button-prev",
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="pb-12"
            >
              {CategoryData.map((category, index) => (
                <Link
                  className="cursor-pointer"
                  to={`/relevant-category-product/${category.name}`}
                >
                  <SwiperSlide key={category.slug} className="cursor-pointer">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group relative bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                    >
                      <div
                        className="h-40 w-full bg-gray-50 dark:bg-gray-600 flex items-center justify-center relative overflow-hidden"
                        style={{ backgroundColor: `${category.color}10` }}
                      >
                        <motion.div
                          className="relative z-10"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-inner"
                            style={{
                              backgroundColor: `${category.color}20`,
                              border: `1px solid ${category.color}30`,
                            }}
                          >
                            <span
                              className="text-3xl"
                              style={{ color: category.color }}
                            >
                              {category.icon}
                            </span>
                          </div>
                        </motion.div>
                        <span
                          className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 text-xs font-semibold py-1 px-2 rounded-full shadow-xs z-20 border border-gray-100 dark:border-gray-600"
                          style={{ color: category.color }}
                        >
                          {Math.floor(Math.random() * 100) + 20}+ items
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <div className="mb-3">
                          <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                            {category.name}
                          </h3>
                          <div className="mt-auto -mb-4">
                            <Link
                              to={`/relevant-category-product/${category.name}`}
                            >
                              <span className="inline-flex text-yellow-500  items-center text-sm dark:text-primary-300 font-medium">
                                View products
                                <svg
                                  className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 18l6-6-6-6"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {index < 3 && (
                        <div className="absolute top-3 left-3 bg-primary text-white  text-xs font-bold py-1 px-2 rounded-full shadow-xs z-20">
                          Popular
                        </div>
                      )}
                    </motion.div>
                  </SwiperSlide>
                </Link>
              ))}
            </Swiper>

            <div className="flex justify-center gap-4 mt-8 text-yellow-600">
              <button
                className="category-swiper-button-prev w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous categories"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                className="category-swiper-button-next w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next categories"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Browse All Categories
          </h2>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {CategoryData.map((category) => (
              <motion.div
                key={category.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link to={`/categories/${category.slug}`}>
                  <div className="group relative bg-[#424242] rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div
                      className="h-40 w-full flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: `${category.color}10` }}
                    >
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <div
                          className="w-20 h-20 rounded-xl flex items-center justify-center shadow-inner"
                          style={{
                            backgroundColor: `${category.color}20`,
                            border: `1px solid ${category.color}30`,
                          }}
                        >
                          <span
                            className="text-4xl"
                            style={{ color: category.color }}
                          >
                            {category.icon}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="">
                        <h3 className="font-bold text-[16px] text-gray-900 dark:text-white mb-2">
                          {category.name}
                        </h3>
                        {/* <p className="text-sm text-gray-500 dark:text-gray-300">
                          {category.description}
                        </p> */}
                      </div>

                      <div className="mt-auto">
                        <Link
                          to={`/relevant-category-product/${category.name}`}
                        >
                          <span className="inline-flex text-yellow-500  items-center text-sm dark:text-primary-300 font-medium">
                            View products
                            <svg
                              className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 18l6-6-6-6"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Can't find what you're looking for?
          </h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md"
          >
            Contact Our Support
          </motion.button>
        </div>
      </section>
    </div>
  );
};
