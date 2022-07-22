import type { NextPage } from "next";
import { AiOutlineLaptop, AiOutlineLink } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";

const Work: NextPage = () => {
  return (
    <section className="section-work section">
      <div className="container">
        <h2>WHAT I DO</h2>
        <ul className="content row">
          <li className="col flex justify-center align-start">
            <AiOutlineLaptop className="icon-work" />{" "}
            <div className="col-desc">
              <h3 className="col-title">Responsive Mobile</h3>
              <p>
                Lavish CSS Template is designed by templatemo. Download, edit
                and use this layout.
              </p>
            </div>
          </li>
          <li className="col flex justify-center align-start">
            <AiOutlineLink className="icon-work" />{" "}
            <div className="col-desc">
              <h3 className="col-title">CSS Templates</h3>
              <p>
                We provide a wide range of HTML5 templates for free. Please
                spread a word about us on social media.
              </p>
            </div>
          </li>
          <li className="col flex justify-center align-start">
            <FaPaperPlane className="icon-work" />{" "}
            <div className="col-desc">
              <h3 className="col-title">UI & UX Design</h3>
              <p>
                Credits go to{" "}
                <a rel="nofollow" href="https://pixabay.com">
                  Pixabay
                </a>{" "}
                and{" "}
                <a rel="nofollow" href="http://unsplash.com">
                  Unsplash
                </a>{" "}
                for images used in this free CSS website template.
              </p>
            </div>
          </li>
        </ul>
        {/* {data.map((item) => {
          <li style={{ color: "red" }} key={item.id}>
            {item.title}
          </li>;
        })} */}
      </div>
    </section>
  );
};

export default Work;
