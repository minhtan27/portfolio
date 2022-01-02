import type { NextPage } from "next";
import {
  SectionHero,
  SectionAbout,
  SectionWorks,
  SectionContact,
} from "../components";

const Home: NextPage = () => {
  return (
    <main>
      <SectionHero></SectionHero>
      <SectionAbout></SectionAbout>
      <SectionWorks></SectionWorks>
      <SectionContact></SectionContact>
    </main>
  );
};

export default Home;
