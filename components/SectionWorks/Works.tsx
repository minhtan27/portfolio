import { FC } from "react";
import style from "./Works.module.css";

interface WorksProps {}

const Works: FC<WorksProps> = () => {
  return (
    <section className={`page-section ${style.works}`}>
      <div className={style.worksContainer}>
        <div className={style.worksHeading}>
          <h2>works</h2>
        </div>
      </div>
    </section>
  );
};

export default Works;
