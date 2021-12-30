import { ReactElement } from "react";
import Image, { ImageProps } from "next/image";
import facebook from "../images/facebook.svg";
import git from "../images/git.svg";
import linkedin from "../images/linkedin.svg";
import youtube from "../images/youtube.svg";

export type Social = {
  id: number;
  title: string;
  url: string;
  icon: ReactElement<ImageProps>;
};

export const socials: Social[] = [
  {
    id: 1,
    title: "facebook",
    url: "https://www.facebook.com/tanminh.27/",
    icon: <Image src={facebook} />,
  },
  {
    id: 2,
    title: "git",
    url: "https://github.com/minhtan27",
    icon: <Image src={git} />,
  },
  {
    id: 3,
    title: "linkedin",
    url: "https://www.linkedin.com/in/tan-minh-450962182/",
    icon: <Image src={linkedin} />,
  },
  {
    id: 4,
    title: "youtube",
    url: "",
    icon: <Image src={youtube} />,
  },
];
