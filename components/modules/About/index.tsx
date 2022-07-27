import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <section className="section-about section">
      <div className="container row">
        <div className="col-1">
          <h2>ABOUT LAVISH</h2>
          <h4>DESIGNER &amp; DEVELOPER</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
            volutpat.
          </p>
          <p>
            Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet.
          </p>
        </div>
        <div className="col-2">
          <span>
            Web Design <small>95%</small>
          </span>
          <div className="process"></div>
          <span>
            Mobile Apps <small>80%</small>
          </span>
          <div className="process"></div>
          <span>
            SEO Stuffs <small>70%</small>
          </span>
          <div className="process"></div>
          <span>
            HTML5 & CSS3 <small>90%</small>
          </span>
          <div className="process"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
