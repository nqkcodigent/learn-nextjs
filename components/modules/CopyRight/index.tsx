import type { NextPage } from "next";
import { BsFacebook } from "react-icons/bs";
import { TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

const CopyRight: NextPage = () => {
  return (
    <section className="section-copyright">
      <div className="container row">
        <div className="container copyright">
          <p>
            Copyright © 2018 Lavish Personal Profile . Designed by{" "}
            <a href="#">templatemo</a>
          </p>
          <ul className="socials-list flex justify-center align-center">
            <li className="socials-item">
              <BsFacebook />
            </li>
            <li className="socials-item">
              <TiSocialTwitter />
            </li>
            <li className="socials-item">
              <TiSocialYoutube />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CopyRight;
