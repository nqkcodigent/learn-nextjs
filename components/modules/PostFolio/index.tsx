import type { NextPage } from "next";
import Image from "next/image";
import data from "./data";

const PostFolio: NextPage = () => {
  return (
    <section className="section-postfolio section">
      <h2>POSTFOLIO</h2>
      <div className="container row flex-wrap">
        {data?.map((item) => (
          <div key={item.id} className={`img-container ${item.className}`}>
            <Image objectFit="cover" src={item.img} alt="" quality={100} />
            <figure className="portfolio-overlay flex flex-column">
              <figcaption className="portfolio-title">{item.title}</figcaption>
              <figcaption className="portfolio-author">
                {item.author}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostFolio;
