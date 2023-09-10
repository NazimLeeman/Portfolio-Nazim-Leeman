type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "nazimleeman@gmail.com",
  title: "Hi, I’m Nazim Leeman 👋",
  description:
    "I'm a *Fullstack software engineer* with *1 year* of experience. I’m conversant in **Javascript, React, Node JS, Mongodb, Express JS, C++**. And I am currently working with *NextJS and Typescript*. Outside of work I like to play guitar.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/291652ce7e5749e",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/nazim_leeman",
    },
    {
      label: "Github",
      link: "https://github.com/NazimLeeman",
    },
  ],
};

export default presentation;
