import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="section-home">
      <div className="container row">
        <div className="content">
          <h3>Simple and Elegant</h3>
          <h1>Lavish</h1>
          <h2>UI & UX SPECIALIST</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
            volutpat.
          </p>
          <button className="btn btn-primary">Get started</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
