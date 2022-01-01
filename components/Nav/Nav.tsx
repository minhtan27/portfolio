import { FC } from "react";
import style from "./Nav.module.css";
import { NavLink, links } from "../../assets/constants/links";
import Link from "next/link";
import Image from "next/image";
import navToggle from "../../assets/images/navToggle.svg";
import { useAppContext } from "../../contexts";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <nav className={style.navbar}>
      <div className={style.navCenter}>
        <div className={style.logoContainer}>
          <div className={style.logo}>
            <Link href="/">
              <h3>Tanminh.</h3>
            </Link>
          </div>
          <div className={style.toggle}>
            <Image src={navToggle} onClick={toggleSidebar} />
          </div>
        </div>
        <ul className={style.navLinks}>
          {links.map((link: NavLink) => {
            return (
              <li key={link.id} className={style.link}>
                <span>0{link.id}</span>
                <Link href={link.url}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
