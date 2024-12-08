import { RiHome3Line } from "react-icons/ri";
import { LuLayoutGrid } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { CgPlayButtonR } from "react-icons/cg";
import { BsGrid3X3Gap } from "react-icons/bs";

export const urls = [
  { id: "1", url: "/", icon: RiHome3Line },
  { id: "2", url: "/category", icon: LuLayoutGrid },
  { id: "3", url: "/message", icon: LuSend },
  { id: "4", url: "/media", icon: CgPlayButtonR },
  { id: "5", url: "/explore", icon: BsGrid3X3Gap },
];

export const tabs = [
  { id: 1, title: "Fruits" },
  { id: 2, title: "Vegetables" },
];

export const tabcontents = [
  {
    id: 1,
    content: [
      { id: 1, img: "./orange.png", title: "Oranges", desc: "Vitamin C" },
      { id: 2, img: "./apple.png", title: "Apples", desc: "Vitamin A" },
      { id: 3, img: "./banana.png", title: "Banana", desc: "Vitamin B8" },
      { id: 4, img: "./blueberry.png", title: "Blueberry", desc: "Vitamin C" },
      { id: 5, img: "./lemon.png", title: "Lemon", desc: "Vitamin C" },
      { id: 6, img: "./mango.png", title: "Mango", desc: "Vitamin B" },
      { id: 7, img: "./pineaple.png", title: "Pineaple", desc: "Vitamin E" },
      { id: 8, img: "./watermelon.png", title: "Watermelon", desc: "Vitamin B12" },
    ],
  },
  {
    id: 2,
    content: [
      { id: 1, img: "./cauilflower.png", title: "Cauliflower", desc: "Vitamin A" },
      { id: 2, img: "./cabbage.png", title: "Cabbage", desc: "Vitamin C" },
      { id: 3, img: "./raddish.png", title: "Raddish", desc: "Vitamin B8" },
      { id: 4, img: "./cucumber.png", title: "Cucumber", desc: "Vitamin D" },
      { id: 5, img: "./beetroot.png", title: "Beetroot", desc: "Vitamin B12" },
      { id: 6, img: "./brocoli.png", title: "Brocoli", desc: "Vitamin C" },
      { id: 7, img: "./carrot.png", title: "Carrot", desc: "Vitamin B" },
      { id: 8, img: "./corn.png", title: "Corn", desc: "Vitamin A" },
      { id: 9, img: "./potato.png", title: "Potato", desc: "Vitamin D" },
    ],
  },
];

export const socials = [
  { id: 1, src: "./facebook.png" },
  { id: 2, src: "./linkedin.png" },
  { id: 3, src: "./twitter.png" },
];

export const vitamins = [
  { id: 1, name: "Vit C" },
  { id: 2, name: "Vit B8" },
  { id: 3, name: "Vit A" },
  { id: 4, name: "Vit E" },
];
