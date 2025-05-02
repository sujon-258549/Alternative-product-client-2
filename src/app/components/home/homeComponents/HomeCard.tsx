"use client";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoServerSharp } from "react-icons/io5";

interface ProjectLink {
  label: "GitHub" | "Server" | "Live";
  icon: React.ReactNode;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
  keyFeatures: string[];
  techStack: string[];
}
import { Details } from "./Details";
const projects: Project[] = [
  {
    id: "01",
    title: "Meal Box",
    description:
      "Meal Box is a convenient meal subscription platform designed to deliver fresh, chef-prepared meals directly to customers' doorsteps. Built with React, Node.js, and MongoDB, this full-stack application offers a seamless user experience with features like customizable meal plans, secure payments, and real-time order tracking",
    image:
      "https://i.ibb.co.com/Vpx2Z0RZ/screencapture-meal-box-team-client-vercel-app-dashboard-2025-05-01-14-52-41.png",
    keyFeatures: [
      "User-friendly dashboard for meal selection",
      "Secure checkout with Stripe integration",
      "Admin panel for restaurant partners",
      "Responsive design for all devices",
    ],
    techStack: [
      " Next.js, Tailwind CSS",
      "Node.js, Express.js",
      "MongoDB",
      "mongoose",
      "JWT",
      "Stripe API",
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/kmdripon1991/meal-box-client",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/kmdripon1991/meal-box-server",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://meal-box-team-client.vercel.app",
      },
    ],
  },
  {
    id: "02",
    title: "Char Shop",
    description:
      "Char Shop is a modern e-commerce platform tailored for selling digital character assets, ideal for gamers, designers, and content creators. Built using React.js, Node.js, MongoDB, and Stripe, it provides a smooth, secure shopping experience with fast loading speeds and responsive design. Users can explore a variety of unique characters, view detailed previews, and make purchases with ease using a fully integrated checkout system. The admin panel allows for inventory management, customer order tracking, and analytics insights. Char Shop also supports user authentication, allowing buyers to manage their order history and wishlist. With intuitive navigation, mobile compatibility, and reliable performance, Char Shop stands out as a streamlined marketplace for digital character assets. It ensures both creators and buyers enjoy a seamless and secure environment for commerce, making it the perfect solution for niche digital product sales.",
    image:
      "https://i.ibb.co.com/1Y1fXrm0/screencapture-car-shop-one-indol-vercel-app-dashboard-board-2025-05-01-21-26-54.png",
    keyFeatures: [
      "Browse and preview high-quality character assets",
      "Secure Stripe-based checkout system",
      "Admin panel for product and order management",
      "Responsive UI optimized for mobile and desktop",
    ],
    techStack: [
      "React.js, Tailwind CSS",
      "Node.js, Express.js",
      "MongoDB",
      "mongoose",
      "JWT",
      "Stripe API",
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/sujon-258549/assungment-4-car-frontend.git",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/sujon-258549/level-2-assignment-2.git",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://car-shop-one-indol.vercel.app",
      },
    ],
  },
  {
    id: "03",
    title: "AltSuggest - Alternative Product Suggestion Platform",
    description:
      "AltSuggest is an intelligent platform designed to help users discover alternative or similar products when a desired item is out of stock or too expensive. Built with React.js, Node.js, Express, and MongoDB, it leverages product metadata and recommendation algorithms to enhance the shopping experience. Users can input a product or browse categories, and the system will suggest viable alternatives based on price, features, brand affinity, and user ratings. The platform supports e-commerce integration, making it easy for online retailers to plug it into their stores. It also features a clean, responsive UI, fast search functionality, and detailed product comparison tools. With real-time updates and machine learning readiness, AltSuggest improves user retention and drives conversions by keeping users engaged even when their initial choices are unavailable.",
    image:
      "https://i.ibb.co.com/vvsNnwBh/screencapture-alternative-product-11-web-app-2025-05-01-22-17-30.png",
    keyFeatures: [
      "AI-powered alternative product suggestions",
      "Product comparison based on features, price, and ratings",
      "Real-time inventory-based recommendations",
      "Responsive UI and fast search filtering",
    ],
    techStack: [
      "React.js, Tailwind CSS",
      "Node.js, Express.js",
      "MongoDB",
      "Firebase & JWT",
      "Stripe API",
    ],
    links: [
      {
        label: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/Porgramming-Hero-web-course/b9a11-client-side-sujob258549",
      },
      {
        label: "Server",
        icon: <IoServerSharp />,
        url: "https://github.com/Porgramming-Hero-web-course/b9a11-server-side-sujob258549",
      },
      {
        label: "Live",
        icon: <FiExternalLink />,
        url: "https://alternative-product-11.web.app/",
      },
    ],
  },
];

export function HomeCard() {
  return (
    <section
      id="projects"
      className="py-6 md:py-12 container lg:pb-20 lg:pt-[105px] px-4 mx-auto"
    >
      <div className="w-full">
        <div className="text-center pb-7 md:mb-20">
          <h1 className="text-3xl  text-white md:text-5xl font-bold text-center py-5 md:py-10 mt-10">
            Our Services Progress Bar
          </h1>
          <div className="p-0.5 mb-0 px-4   max-w-md mx-auto bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-lg backdrop-blur-sm"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                boxShadow: "3px 3px 5px #fff",
                backgroundColor: "#424242",
              }}
              className="relative group isolate overflow-hidden h-[580px] rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >
              {/* Floating gradient bubbles background */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-96  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-96  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
              </div>

              {/* Card content */}
              <div className="relative z-10 h-full flex flex-col  backdrop-blur-sm p-6 border border-gray-700/50">
                {/* Unique header with animated icon */}
                <div className="flex items-center mb-4 gap-3">
                  <div className="relative">
                    <div className="absolute inset-0  bg-white rounded-lg animate-pulse opacity-20"></div>
                    <span className="relative bg-white text-gray-900 px-1 py-1 rounded-lg font-bold text-lg flex items-center justify-center w-8 h-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {project?.title.slice(0, 20)}
                    </h2>
                  </div>
                </div>

                {/* Description with animated underline */}
                <p className="text-gray-300 mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-500 group-hover:after:w-full">
                  {project?.description?.slice(0, 60)}....
                </p>

                {/* Image with 3D tilt effect */}
                <div className="relative mb-6">
                  <div className=" rounded-xl overflow-hidden border border-gray-700/50 shadow-lg">
                    <img
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                      src={project?.image}
                      alt="Meal Box Dashboard"
                      className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Action buttons with gradient hover */}
                <div className="w-full">
                  <button className="w-full">
                    <Details project={project} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
