import { AiOutlineLaptop, AiOutlineLink } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <AiOutlineLaptop className="icon-work" />,
    title: "Responsive Mobile",
    desc: [
      "Lavish CSS Template is designed by templatemo. Download, edit and use this layout.",
    ],
  },
  {
    id: 2,
    icon: <AiOutlineLink className="icon-work" />,
    title: "CSS Templates",
    desc: [
      "We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.",
    ],
  },
  {
    id: 3,
    icon: <FaPaperPlane className="icon-work" />,
    title: "UI & UX Design",
    desc: [
      "Credits go to",
      " Pixabay",
      " and",
      " Unsplash",
      "for images used in this free CSS website template.",
    ],
  },
];
export default data;
