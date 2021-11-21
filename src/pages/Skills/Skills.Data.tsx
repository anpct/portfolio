import React from "react";
import {
  AwsSVG,
  DjangoSVG,
  ExpressSVG,
  GitSVG,
  HerokuSVG,
  NextJSSVG,
  ReactNativeSVG,
  ReactSVG,
} from "../../resources/svgs/skills";

const data = [
  {
    name: "React",
    level: "Advanced",
    icon: <ReactSVG />,
    colors: ["#61fbce", "#61dbfb", "#618efb"],
    textColors: ["#61fbce", "#61dbfb", "#618efb"],
    link: "https://reactjs.org",
  },

  {
    name: "Next JS",
    level: "Advanced",
    icon: <NextJSSVG />,
    colors: ["#5ddcff", "#3c67e3", "#4e00c2"],
    textColors: ["#5ddcff", "#3c67e3", "#4e00c2"],
    link: "https://nextjs.org",
  },
  {
    name: "Express JS",
    level: "Intermediate",
    icon: <ExpressSVG />,
    colors: ["#9b63a0", "#87a063", "#6369a0"],
    textColors: ["#9b63a0", "#87a063", "#6369a0"],
    link: "https://expressjs.com",
  },
  {
    name: "React Native",
    level: "Intermediate",
    icon: <ReactNativeSVG />,
    colors: ["#fbce61", "#61dbfb", "#fb618e"],
    textColors: ["#fbce61", "#61dbfb", "#fb618e"],
    link: "https://reactnative.dev",
  },
  {
    name: "Django",
    level: "Advanced",
    icon: <DjangoSVG />,
    colors: ["#e9371c", "#092e20", "#560e4f"],
    textColors: ["#e9371c", "#00ff9d", "#560e4f"],
    link: "https://www.djangoproject.com",
  },
  {
    name: "Heroku",
    level: "Advanced",
    icon: <HerokuSVG />,
    colors: ["#67a565", "#6567a5", "#a56567"],
    textColors: ["#67a565", "#6567a5", "#a56567"],
    link: "https://www.heroku.com",
  },
  {
    name: "AWS",
    level: "Intermediate",
    icon: <AwsSVG />,
    colors: ["#9900ff", "#ff9900", "#00ff99"],
    textColors: ["#67a565", "#6567a5", "#a56567"],
    link: "https://aws.amazon.com",
  },
  {
    name: "GIT",
    level: "Advanced",
    icon: <GitSVG />,
    colors: ["#f32968", "#f34f29", "#f3b429"],
    textColors: ["#f32968", "#f34f29", "#f3b429"],
    link: "https://git-scm.com",
  },
];

export default data;
