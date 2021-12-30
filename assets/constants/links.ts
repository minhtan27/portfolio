export type NavLink = {
  id: number;
  title: string;
  url: string;
};
export const links: NavLink[] = [
  { id: 1, title: "home", url: "/" },
  { id: 2, title: "about me", url: "/about" },
  { id: 3, title: "works", url: "/works" },
];
