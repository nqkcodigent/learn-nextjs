import type { NextPage } from "next";
import { HiPhone } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";

const Contact: NextPage = () => {
  return (
    <section className="section-contact section">
      <div className="container row">
        <div className="col-1 pl-8">
          <h3 className="contact-title">Contact me</h3>
          <ul className="contact-list flex justify-center flex-column align-start">
            <li className="contact-item flex justify-center align-center">
              <HiPhone className="icon-contact" />
              <p>090-080-0760</p>
            </li>
            <li className="contact-item flex justify-center align-center">
              <CgMail className="icon-contact" />
              <p>info@company.com</p>
            </li>
            <li className="contact-item flex justify-center align-center">
              <IoLocation className="icon-contact" />
              <p>120 Old Walking Street, GL 16060</p>
            </li>
          </ul>
        </div>
        <div className="col-2 ">
          <form
            method="post"
            action="#"
            className="flex justify-center flex-column align-start"
          >
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              className="form-control h-auto"
              id="message"
              placeholder="Your Message"
            ></textarea>
            <input
              name="send"
              type="submit"
              className="form-control"
              id="send"
              value="SEND ME"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
