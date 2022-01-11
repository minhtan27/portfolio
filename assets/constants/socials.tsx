import { ReactElement } from "react";
import Image, { ImageProps } from "next/image";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export type Social = {
  id: number;
  title: string;
  url: string;
  icon: ReactElement<IconType>;
};

export const socials: Social[] = [
  {
    id: 1,
    title: "facebook",
    url: "https://www.facebook.com/tanminh.27/",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    title: "git",
    url: "https://github.com/minhtan27",
    icon: <BsGithub />,
  },
  {
    id: 3,
    title: "linkedin",
    url: "https://www.linkedin.com/in/tan-minh-450962182/",
    icon: <BsLinkedin />,
  },
  {
    id: 4,
    title: "youtube",
    url: "",
    icon: <BsYoutube />,
  },
];
