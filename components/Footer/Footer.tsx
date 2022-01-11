import { FC } from "react";
import style from "./Footer.module.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={style.footer}>
      <div className={style.text}>
        <span>Made by TanMinh using Nextjs</span>
      </div>
    </footer>
  );
};
export default Footer;
