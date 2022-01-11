import { FC } from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import profileImage from "../../assets/images/profilePicture.jpg";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section className={`page-section ${style.hero}`}>
      <div className={style.heroContainer}>
        <div className={style.heroInfo}>
          <h4>Hi! It's Tan</h4>
          <h1>web developer</h1>
          <p>I'm a self-taught web developer</p>
          <div className={style.btnContainer}>
            <button type="button" className="btn btn-dark">
              my projects
            </button>
            <button type="button" className="btn btn-dark">
              resume
            </button>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image
            src={profileImage}
            alt="profile image"
            placeholder="blur"
            className={style.image}
          ></Image>
        </div>
        <div className={style.heroBar}></div>
      </div>
    </section>
  );
};

export default Hero;
