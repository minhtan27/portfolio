import { FC } from "react";
import style from "./Contact.module.css";

import { Social, socials } from "../../assets/constants/socials";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <section className={`page-section ${style.contact}`}>
      <div className={style.contactContainer}>
        <div className={style.contactTitle}>
          <h2>contact</h2>
          <ul className={style.socials}>
            {socials.map((item: Social) => {
              return (
                <li key={item.id}>
                  <a href={item.url} target="_blank">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.contactInfo}>
          <h3>trinhminhtan27.02@gmail.com</h3>
          <button className="btn btn-light">email me now</button>
          <p>I'm happy to connect with you</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
