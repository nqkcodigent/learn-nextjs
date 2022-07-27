import { StaticImageData } from "next/image";
import img1 from "../../../public/images/portfolio-img1.jpg";
import img2 from "../../../public/images/portfolio-img2.jpg";
import img3 from "../../../public/images/portfolio-img3.jpg";
import img4 from "../../../public/images/portfolio-img4.jpg";
import img5 from "../../../public/images/portfolio-img5.jpg";
type dataProps = {
  id: number;
  img: StaticImageData;
};
const data = [
  {
    id: 1,
    img: img1,
    className: "img w-30",
    title: "Web Design",
    author: "Author: Cindy",
  },
  {
    id: 2,
    img: img2,
    className: "img w-30",
    title: "Web App",
    author: "Author: Linda",
  },
  {
    id: 3,
    img: img3,
    className: "img w-30",
    title: "Mobile App",
    author: "Author: Kate",
  },
  {
    id: 4,
    img: img4,
    className: "img w-50",
    title: "Old Artwork",
    author: "Author: Catherine",
  },
  {
    id: 5,
    img: img5,
    className: "img w-50",
    title: "New Animation",
    author: "Author: Kathy",
  },
];
export default data;
