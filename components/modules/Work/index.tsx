import type { NextPage } from "next";
import data from "./data";

const Work: NextPage = () => {
  return (
    <section className="section-work section">
      <div className="container">
        <h2>WHAT I DO</h2>
        <ul className="content row flex-wrap">
          {data.map((item) => (
            <li key={item.id} className="col flex justify-center align-center">
              {item.icon}
              <div className="col-desc">
                <h3 className="col-title">{item.title}</h3>
                {item.desc[0]}
                <a rel="nofollow" href="https://pixabay.com">
                  {item.desc[1]}
                </a>{" "}
                {item.desc[2]}
                <a rel="nofollow" href="http://unsplash.com">
                  {item.desc[3]}
                </a>{" "}
                {item.desc[4]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
