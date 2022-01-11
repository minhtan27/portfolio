import { FC } from "react";
import style from "./About.module.css";
import Image from "next/image";
import aboutImage from "../../assets/images/aboutImage.jpg";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section className={`page-section ${style.about}`}>
      <div className={style.aboutContainer}>
        <div className={style.aboutHeading}>
          <h2>about me</h2>
        </div>
        <div className={style.aboutContent}>
          <div className={style.imageContainer}>
            <Image
              src={aboutImage}
              alt="about image"
              placeholder="blur"
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>
          <div className={style.infoContainer}>
            <div className={style.infoText}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, laboriosam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
                veniam qui? Debitis, accusantium illum animi accusamus aliquam
                quia velit dolores.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, quia!
              </p>
            </div>
            <button className="btn btn-light">read more</button>
          </div>
        </div>
        <div className={style.bar}></div>
      </div>
    </section>
  );
};

export default About;
