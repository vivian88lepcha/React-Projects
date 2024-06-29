import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";

export const pageLinks = [
  {
    id: 1,
    text: "home",
    url: "#home",
  },
  {
    id: 2,
    text: "about",
    url: "#about",
  },
  {
    id: 3,
    text: "services",
    url: "#services",
  },
  {
    id: 4,
    text: "tours",
    url: "#tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    url: "https://www.squarespace.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    name: "Tibet Adventure",
    date: "august 26th, 2020",
    image: tour1,
    location: "china",
    days: 6,
    price: 2100,
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    name: "best of java",
    date: "october 1th, 2020",
    image: tour2,
    location: "indonesia",
    days: 11,
    price: 1400,
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    name: "taste of mexico",
    date: "december 20th, 2020",
    image: tour3,
    location: "mexico",
    days: 8,
    price: 2400,
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
