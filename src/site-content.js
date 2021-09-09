const mainPage = {
  introductions: [
    "Hi! I'm a Computer Science and Math major at UW Seattle, graduating in 2025. I like learning about different ML applications such as detecting fake media, natural language processing, and enhanced graphics like Nvidia's DLSS technology. My interests also include reinforcement learning for games and cybersecurity.",
    "During high school, I tutored students in Math and CS (among other subjects), and lead the General Computing Club (GCC). At GCC, people of all backgrounds learn to connect their interests to computer science and create projects using more than just coding skills. Outside of academics, I've enjoyed swimming competitively and practicing Brazilian Jiu-Jitsu.",
  ],  //<a href=""> </a>

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
      thumbnailDesc:
        "A mobile match-three game with fast paced strategic gameplay and a little tetris twist.",
      info: "",
      thumbnailImg: "images/HouseMatch.png",
      imgs: ["", ""],
      git: "",
    },
    {
      title: "Prototype57",
      thumbnailDesc:
        "A 3D sci-fi themed third person procedural tower defense game.",
      info: "",
      thumbnailImg: "images/Prototype57.png",
      imgs: ["", ""],
      git: "",
    },
    {
      title: "HVScape",
      thumbnailDesc: "A super simple high school themed VR escape room.",
      info: "",
      thumbnailImg: "images/HVScape.png",
      imgs: ["", ""],
      git: "",
    },
    {
      title: "Dungeon Crawler",
      thumbnailDesc: "A roguelike game without a good name.", //Use conditional rendering to link this in the card https://en.wikipedia.org/wiki/Roguelike and http://www.roguebasin.com/index.php?title=Berlin_Interpretation
      info: "",
      thumbnailImg: "images/DungeonCrawler.png",
      imgs: ["", ""],
      git: "https://github.com/bcaffee/DungeonCrawler",
    },
  ],

  other: [
    {
      title: "Fractal Generator",
      thumbnailDesc:
        "A GUI that produces self-similar tethered radial fractals like the Sierpiński triangle.", //Use conditional rendering to link this in the card https://en.wikipedia.org/wiki/Sierpinski_triangle
      info: "",
      thumbnailImg: "images/FractalGenerator.png",
      imgs: ["", ""],
      git: "https://github.com/bcaffee/FractalGenerator",
    },
    {
      title: "Tic-Tac-Toe RL Agent",
      thumbnailDesc:
        "A deep-quality learning tic-tac-toe agent that always wins or ties.", //Use conditional rendering to link this in the card https://en.wikipedia.org/wiki/Convolutional_neural_network#Deep_Q-networks
      info: "",
      //mainImg: "",
      //git: "",
    },
    {
      title: "Personal Website",
      thumbnailDesc: "This website made with React and Material-UI.",
      info: "",
      git: "https://github.com/bcaffee/personal-website",
    },
  ],

  hackathonThumbnails: [
    {
      title: "Roach Coach",
      thumbnailDesc:
        "A VR food truck simulator where players make sandwiches filling orders submitted through Twitch while PC players can steal ingredients as mice.",
      info: "",
      thumbnailImg: "images/RoachCoach.jpg",
      imgs: ["", ""],
      git: "https://github.com/ajmwagar/roachcoach",
    },
    {
      title: "B.LAB",
      thumbnailDesc:
        "An Android and iOS app that gathers a listing of loan offerings customized to your specific profile.",
      info: "",
      thumbnailImg: "images/B.LAB.png",
      imgs: ["", ""],
      git: "https://github.com/shreystechtips/B.LAB-EvenAPI",
    },
  ],
};

//HM
//"https://www.frogrockstudio.com/house-match/"

//P57
//"https://nlaha.com"

//HVS

//DC

//TTTA

//FG

//PW

//RC
//"https://devpost.com/software/roachcoach-s-forbidden-food"],

//B.LAB
//"https://devpost.com/software/evencredit2019", "https://shrey.ml"],

export { mainPage };
