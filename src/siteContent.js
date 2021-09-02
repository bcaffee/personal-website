const mainPage = {
  introduction: "Test",

  skills: [
    "Java Programming",
    "C# Game Development",
    "Git, CMD",
    "ML (Python)",
    "JavaScript (Fullstack)",
    "Azure DevOps Project Management",
    "Adobe Illustrator and Photoshop",
    "Video Editing",
  ],
  skillsToImprove: [
    "ML/Data Science (Python and SQL)",
    "C++ Game Development (Unreal with 3D Modeling)",
    "Music Production (FM Studio)",
    "React Native (App Development)",
  ],

  gameThumbnails: [
    {
      title: "House Match",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "images/HouseMatch.png",
      git: "",
    },
    {
      title: "Prototype57",
      desc: "Aliquam blandit semper leo et facilisis.",
      img: "",
      git: "",
    },
    {
      title: "HVScape",
      desc: "Quisque sagittis nibh quam, ut efficitur elit interdum non.",
      img: "",
      git: "",
    },
    {
      title: "Dungeon Crawler",
      desc: "Cras libero leo, pharetra nec convallis non, tincidunt ut lectus.",
      img: "",
      git: "https://github.com/bcaffee/DungeonCrawler",
    },
  ],

  otherThumbnails: [
    {
      title: "Tic-Tac-Toe Agent",
      desc: "Sed commodo euismod nisl, quis sollicitudin ex laoreet eu.",
      img: "",
      git: "",
    },
    {
      title: "Fractal Generator",
      desc: "Donec dictum pretium lorem sed aliquet.",
      img: "",
      git: "https://github.com/bcaffee/FractalGenerator",
    },
    {
      title: "Personal Website",
      desc: "Nullam venenatis justo lorem, eget hendrerit ex egestas quis.",
      // img: "images/PersonalWebsite.png",
      git: "https://github.com/bcaffee/personal-website",
    },
  ],

  hackathonThumbnails: [
    {
      title: "Roach Coach",
      desc: "VR Players make sandwiches filling orders submitted through twitch while PC players can steal ingredients as mice.",
      img: "",
      git: "https://github.com/ajmwagar/roachcoach",
    },
    {
      title: "B.LAB",
      desc: "Etiam iaculis ligula id posuere tincidunt.",
      img: "",
      git: "https://github.com/shreystechtips/B.LAB-EvenAPI",
    },
  ],
};

//Modal pop up info, uses thumbnail titles
const projectInfo = {
  projects: [
    //HM
    {
      desc: "",
      imgURLs: ["", ""],
      URLs: ["https://www.frogrockstudio.com/house-match/"],
    },
    //P57
    { desc: "", imgURLs: ["", ""], URLs: ["https://nlaha.com"] },
    //HVS
    { desc: "", imgURLs: ["", ""], URLs: [""] },
    //DC
    {
      desc: "",
      imgURLs: ["", ""],
      URLs: ["https://github.com/bcaffee/DungeonCrawler"],
    },
    //TTTA
    { desc: "", imgURLs: ["", ""], URLs: [""] },
    //FG
    {
      desc: "",
      imgURLs: ["", ""],
      URLs: ["https://github.com/bcaffee/FractalGenerator"],
    },
    //PW
    {
      desc: "",
      imgURLs: ["", ""],
      URLs: ["https://github.com/bcaffee/personal-website"],
    },
    //RC
    {
      desc: "",
      imgURLs: ["", ""], //TODO: Add more images later
      URLs: ["https://devpost.com/software/roachcoach-s-forbidden-food"],
    },
    //B.LAB
    {
      desc: "",
      imgURLs: ["", ""],
      URLs: ["https://devpost.com/software/evencredit2019", "https://shrey.ml"],
    },
  ],
};

export { mainPage, projectInfo };
