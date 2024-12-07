import { RiHome3Line } from "react-icons/ri";
import { LuLayoutGrid } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { CgPlayButtonR } from "react-icons/cg";
import { BsGrid3X3Gap } from "react-icons/bs";

export const urls = [
  { id: "1", url: "/", icon: RiHome3Line },
  { id: "2", url: "/category", icon: LuLayoutGrid },
  { id: "3", url: "/message", icon: LuSend },
  { id: "4", url: "/play", icon: CgPlayButtonR },
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
      { id: 2, img: "", title: "Apples", desc: "Vitamin C" },
      { id: 3, img: "", title: "Avocados", desc: "Vitamin B8" },
      { id: 4, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 5, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 6, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 7, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 8, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 9, img: "", title: "Oranges", desc: "Vitamin C" },
    ],
  },
  {
    id: 2,
    content: [
      { id: 1, img: "", title: "Cauliflower", desc: "Vitamin C" },
      { id: 2, img: "", title: "Cabbage", desc: "Vitamin C" },
      { id: 3, img: "", title: "Raddish", desc: "Vitamin B8" },
      { id: 4, img: "", title: "Cucumber", desc: "Vitamin C" },
      { id: 5, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 6, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 7, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 8, img: "", title: "Oranges", desc: "Vitamin C" },
      { id: 9, img: "", title: "Oranges", desc: "Vitamin C" },
    ],
  },
];

export const socials = [
  {id:1 , src:"./facebook.png"} , 
  {id:2 , src:"./linkedin.png"} ,
  {id:3 , src:"./twitter.png"} ,

];

export const vitamins = [
  { id: 1, name: "Vit C" },
  { id: 2, name: "Vit B8" },  
  { id: 3, name: "Vit A" },
  { id: 4, name: "Vit E" },  


]
