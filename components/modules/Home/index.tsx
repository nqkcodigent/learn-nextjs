import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
// type StateProps = {
//   isOpen: boolean;
//   setIsOpen: () => boolean;
// };

const Home: NextPage = () => {
  let router = useRouter();
  let { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <section className="section-home">
      <ul className="translate-list">
        <li onClick={() => setIsOpen(!isOpen)} className="dropdownBtn">
          Languages
        </li>
        <div className="dropdown-content">
          {isOpen &&
            router.locales?.map((locale) => (
              <li
                onClick={() => setIsOpen(false)}
                className="translate-item"
                key={locale}
              >
                <Link href={router.asPath} locale={locale}>
                  <a>
                    {locale === "en-US"
                      ? "English"
                      : locale === "fr"
                      ? "French"
                      : locale === "nl-NL"
                      ? "Urdu"
                      : ""}
                  </a>
                </Link>
              </li>
            ))}
        </div>
      </ul>
      <div className="container row content">
        <div className="content">
          <h3>{t("common:title")}</h3>
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
