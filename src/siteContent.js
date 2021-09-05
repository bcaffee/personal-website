const mainPage = {
  introductions: [
    "Hi! I'm a Computer Science and Math major at UW Seattle, graduating in 2025. I like learning about different ML applications such as detecting fake media, natural language processing, and enhanced graphics like Nvidia's DLSS technology. My interests also include reinforcement learning for games and cybersecurity.",
    "During high school, I tutored students in Math and CS (among other subjects), and lead the General Computing Club (GCC). At GCC, people of all backgrounds learn to connect their interests to computer science and create projects using more than just coding skills. Outside of academics, I've enjoyed swimming competitively and practicing Brazilian Jiu-Jitsu.",
  ],

  skills: [
    "Java Programming",
    "C# Game Development",
    "ML (Python)",
    "JavaScript",
  ],
  otherSkills: [
    "Git",
    "Azure DevOps Project Management",
    "Adobe Illustrator and Photoshop",
    "Video Editing",
  ],
  skillsToImprove: [
    "ML/Data Science (Python and SQL)",
    "C++ Game Development (Unreal)",
    "3D Modeling",
    "Music Production (FL Studio)",
  ],

  gameThumbnails: [
    {
      title: "House Match",
      desc: "A mobile match-three game with fast paced strategic gameplay and a little tetris twist.",
      img: "images/HouseMatch.png",
      git: "",
    },
    {
      title: "Prototype57",
      desc: "A 3D sci-fi themed third person procedural tower defense game.",
      img: "images/Prototype57.png",
      git: "",
    },
    {
      title: "HVScape",
      desc: "A super simple high school themed VR escape room.",
      img: "images/HVScape.png",
      git: "",
    },
    {
      title: "Dungeon Crawler",
      desc: "A roguelike game without a good name.", //Use conditional rendering to link this in the card https://en.wikipedia.org/wiki/Roguelike and http://www.roguebasin.com/index.php?title=Berlin_Interpretation
      img: "images/DungeonCrawler.png",
      git: "https://github.com/bcaffee/DungeonCrawler",
    },
  ],

  otherThumbnails: [
    {
      title: "Fractal Generator",
      desc: "A GUI that produces self-similar tethered radial fractals like the Sierpiński triangle.", //Use conditional rendering to link this in the card https://en.wikipedia.org/wiki/Sierpinski_triangle
      img: "images/FractalGenerator.png",
      git: "https://github.com/bcaffee/FractalGenerator",
    },
    {
      title: "Tic-Tac-Toe RL Agent",
      desc: "A deep-quality learning tic-tac-toe agent that always wins or ties.", //Use conditional rendering to link this in the card https://en.wikipedia.org/wiki/Convolutional_neural_network#Deep_Q-networks
      // img: "",
      // git: "",
    },
    {
      title: "Personal Website",
      desc: "This website :-).",
      git: "https://github.com/bcaffee/personal-website",
    },
  ],

  hackathonThumbnails: [
    {
      title: "Roach Coach",
      desc: "A VR food truck simulator where players make sandwiches filling orders submitted through Twitch while PC players can steal ingredients as mice.",
      img: "images/RoachCoach.jpg",
      git: "https://github.com/ajmwagar/roachcoach",
    },
    {
      title: "B.LAB",
      desc: "An Android and iOS mobile app that gathers a listing of loan offerings customized to your specific profile.",
      img: "images/B.LAB.png",
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
