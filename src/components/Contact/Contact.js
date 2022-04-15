import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import userInfo from "../../constants/user-info.json";
import ContactForm from "./ContactForm";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="row w-100 contact align-items-center">
      <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center p-4">
        <h3 className="pb-4">Get In Touch</h3>
        <div className="w-100">
          <ContactForm />
        </div>
      </div>
      <div className="col-lg-4 d-flex flex-column justify-content-center p-4">
        <h3 className="pb-4">My Contact Details</h3>
        <div>
          <a href={`mailto:${userInfo["e-mail"]}`}>
            <div className="d-flex align-items-center">
              <AiOutlineMail />
              <h6 className="m-0 mx-2">E-mail</h6>
            </div>
            <p className="mx-4">{userInfo["e-mail"]}</p>
          </a>
        </div>
        <div>
          <a
            href={`https://www.linkedin.com/in/${userInfo.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex align-items-center">
              <AiOutlineLinkedin />
              <h6 className="m-0 mx-2">Linkedin</h6>
            </div>
            <p className="mx-4">{userInfo.linkedin}</p>
          </a>
        </div>
        <div>
          <a
            href={`https://github.com/${userInfo.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex align-items-center">
              <AiFillGithub />
              <h6 className="m-0 mx-2">Github</h6>
            </div>
            <p className="mx-4">{userInfo.github}</p>
          </a>
        </div>
        <div>
          <a
            href={`https://www.instagram.com/${userInfo.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex align-items-center">
              <AiOutlineInstagram />
              <h6 className="m-0 mx-2">Instagram</h6>
            </div>
            <p className="mx-4">{userInfo.instagram}</p>
          </a>
        </div>
        <div>
          <a
            href={`https://www.facebook.com/${userInfo.facebook}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex align-items-center">
              <AiOutlineFacebook />
              <h6 className="m-0 mx-2">Facebook</h6>
            </div>
            <p className="mx-4">{userInfo.facebook}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
