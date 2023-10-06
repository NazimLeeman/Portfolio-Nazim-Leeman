type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  image: string;
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
  image:"https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/131466495_3853890957994923_8581730369405783948_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7a1959&_nc_ohc=T8r7rsVh_xEAX9v7pmi&_nc_ht=scontent.fdac99-1.fna&oh=00_AfD-YBxv6lIiw3XydUthvTB_aWjmx0VW1HVUlUeLFNHhCQ&oe=6547A9EA",
};

export default presentation;
