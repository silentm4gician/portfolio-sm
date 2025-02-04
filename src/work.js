import igna from "./images/igna-landing.jpg";
import ceprim from "./images/ceprim.jpeg";
import ceprim1 from "./images/ceprim1.jpeg";
import ceprim2 from "./images/ceprim2.jpeg";
import ceprim3 from "./images/ceprim3.jpeg";
import ceprim4 from "./images/ceprim4.jpg";
import v4 from "./images/v4.png";

export const work = [
  {
    name: "Igna Matko",
    img: igna,
    desc: "official landing page for Igna Matko",
    link: "https://ignamatko.vercel.app",
    techs: ['Next.js','Tailwind CSS','ReactJS'],
  },
  {
    name: "CEPRIM",
    img: ceprim,
    desc: "clinic management system",
    link: "https://ceprim.vercel.app",
    screenshots: [ceprim1, ceprim2, ceprim3, ceprim4],
    techs: ['Next.js','Tailwind CSS','ReactJS','MySQL'],
  },
  {
    name: "v4Code",
    img: v4,
    desc: "official landing page for v4Code",
    link: "https://v4code.vercel.app",
    techs: ['Next.js','Tailwind CSS','ReactJS'],
  },
];
