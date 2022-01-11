import { FC } from "react";
import style from "./Sidebar.module.css";
import { links, NavLink } from "../../assets/constants/links";
import { Social, socials } from "../../assets/constants/socials";
import Link from "next/link";
import { useAppContext } from "../../contexts";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();
  return (
    <aside
      className={`${style.sidebar} ${
        isSidebarOpen ? style.sidebarShow : style.sidebarHide
      } `}
    >
      <div className={style.navCenter}>
        <div className={style.logoContainer}>
          <div className={style.logo}>
            <Link href="/">
              <h3 onClick={toggleSidebar}>Tanminh.</h3>
            </Link>
          </div>
          <div className={style.toggle}>
            <IoMdCloseCircleOutline onClick={toggleSidebar} />
          </div>
        </div>
      </div>
      <ul className={style.navLinks}>
        {links.map((link: NavLink) => {
          return (
            <li key={link.id} className={style.link} onClick={toggleSidebar}>
              <span>0{link.id}</span>
              <Link href={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
      <ul className={style.navSocials}>
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
      <div className={style.contactBtnContainer}>
        <button className="btn btn-dark">contact</button>
      </div>
    </aside>
  );
};

export default Sidebar;
