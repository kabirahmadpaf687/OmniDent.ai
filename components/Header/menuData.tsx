import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Features",
    path: "#features",
    newTab: false,
    icon: "Sparkle",
    
  },
  {
    id: 2,
    title: "Patient Journey",
    path: "#patient-journey",
    newTab: false,
    icon: "Heartbeat",
  },
  {
    id: 3,
    title: "Integrations",
    path: "#integrations",
    newTab: false,
    icon: "PuzzlePiece",
  },
  {
    id: 4,
    title: "Pricing",
    path: "#pricing",
    newTab: false,
    icon: "CurrencyDollar",
  },
  {
    id: 5,
    title: "SmileNexus",
    path: "https://smilenexus.vercel.app/",
    newTab: false,
    icon: "Users",
  },
 
];
export default menuData;
