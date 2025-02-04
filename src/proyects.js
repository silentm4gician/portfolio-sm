import freeNime from "../src/images/freenime.png";
import griddy from "../src/images/griddy.png";
import ygo from "../src/images/ygo.png";

export const proyects = [
  {
    name: "FreeNime",
    img: freeNime,
    desc: "web app to watch anime series for free",
    link: "https://free-nime.vercel.app",
    repo: "https://github.com/silentm4gician/freeNime",
    techs: ['Next.js','Tailwind CSS','ReactJS','Consumet API'], 
  },
  {
    name: "Griddy Movies",
    img: griddy,
    desc: "web app to watch films and TV series for free",
    link: "https://griddy-movies.site",
    repo: "https://github.com/silentm4gician/griddy-movies",
    techs: ['Next.js','Tailwind CSS','ReactJS','TMDB API'],
  },
  {
    name: "Yu-Gi-Oh! TCG",
    img: ygo,
    desc: "unoficial landing page based on the yu-gi-oh trading card game",
    link: "https://ygo-tcg.netlify.app/",
    repo: "https://github.com/silentm4gician/ygo-landing-page",
    techs: ['Next.js','Tailwind CSS','ReactJS'],
  },
];
