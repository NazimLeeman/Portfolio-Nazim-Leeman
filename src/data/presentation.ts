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
  image:"https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/375972237_3448738035438262_2329051104081576753_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHWdvYP6BJXl_hosGvThX5OGglRAEqWr9waCVEASpav3MX7Z0gg6KrTz_CmWVJsKpdPkSQaUA6lMWCX_14YXYc4&_nc_ohc=F9EUQAfMGxQAX8tPlwA&_nc_ht=scontent.fdac99-1.fna&oh=00_AfARW_Vde6w37YDXiI2wrsoTU5zj-KtYV03JVPGWKWuLjw&oe=65034928",
};

export default presentation;
