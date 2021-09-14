const mainPage = {
  introductions: [
    "Hi! I'm a Computer Science and Math major at UW Seattle, graduating in 2025. I like learning about different ML applications such as detecting fake media, natural language processing, and enhanced graphics like Nvidia's DLSS technology. My interests also include reinforcement learning for games and cybersecurity.",
    "During high school, I tutored students in Math and CS (among other subjects), and lead the General Computing Club (GCC). At GCC, people of all backgrounds learn to connect their interests to computer science and create projects using more than just coding skills. Outside of academics, I've enjoyed swimming competitively and practicing Brazilian Jiu-Jitsu.",
  ],

  skills: [
    "Java Programming",
    "C# Game Development (Unity)",
    "ML (Python)",
    "JavaScript (General + React)",
    "HTML and CSS Web Design",
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

  games: [
    {
      title: "House Match",
      thumbnailDesc:
        "Mobile match-three game with fast paced strategic gameplay and a little tetris twist.",
      modalInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. Suspendisse sed nisi lacus sed viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Et odio pellentesque diam volutpat. Arcu bibendum at varius vel pharetra vel. Eu lobortis elementum nibh tellus molestie nunc. Eros in cursus turpis massa. Risus feugiat in ante metus dictum at tempor.       Molestie nunc non blandit massa enim nec dui nunc mattis. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Posuere ac ut consequat semper. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue ut lectus arcu bibendum at varius vel pharetra vel. In ante metus dictum at tempor commodo ullamcorper a lacus. Feugiat in ante metus dictum. Faucibus scelerisque eleifend donec pretium vulputate sapien. Sed vulputate odio ut enim blandit volutpat maecenas. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.",
      thumbnailImg: "images/HouseMatch.png",
      // imgs: [""],
      git: "",
    },
    {
      title: "Prototype57",
      thumbnailDesc: "3D third person procedural tower defense game.",
      modalInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. Suspendisse sed nisi lacus sed viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.",
      thumbnailImg: "images/Prototype57.png",
      // imgs: [""], Add multiple images
      git: "",
    },
    {
      title: "HVScape",
      thumbnailDesc: "Super simple high school themed VR escape room.",
      modalInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. Suspendisse sed nisi lacus sed viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. Suspendisse sed nisi lacus sed viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.",
      thumbnailImg: "images/HVScape.png",
      // imgs: [""], Add library and second classroom image
      git: "",
    },
    {
      title: "Dungeon Crawler",
      thumbnailDesc:
        "<div className='link'> <a href='https://en.wikipedia.org/wiki/Roguelike'>Roguelike</a> </div> game without a good name.", //http://www.roguebasin.com/index.php?title=Berlin_Interpretation
      modalInfo: "More info will be added soon.",
      // thumbnailImg: "images/DungeonCrawler.png",
      // imgs: [""],
      git: "https://github.com/bcaffee/DungeonCrawler",
    },
  ],

  other: [
    {
      title: "Fractal Generator",
      thumbnailDesc:
        "GUI that produces self-similar tethered radial fractals like the <a href='https://en.wikipedia.org/wiki/Sierpinski_triangle'>Sierpiński triangle</a>.",
      modalInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. Suspendisse sed nisi lacus sed viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.",
      thumbnailImg: "images/FractalGenerator.png",
      // imgs: [""],
      git: "https://github.com/bcaffee/FractalGenerator",
    },
    {
      title: "Tic-Tac-Toe RL Agent",
      thumbnailDesc:
        "<a href='https://en.wikipedia.org/wiki/Convolutional_neural_network#Deep_Q-networks'>Deep-quality learning</a> tic-tac-toe agent that always wins or ties.",
      modalInfo: "More info will be added soon.",
      // imgs: [""],
      git: "",
    },
    {
      title: "Personal Website",
      thumbnailDesc: "This website.",
      modalInfo: "More info will be added soon.",
      // imgs: [""],
      git: "https://github.com/bcaffee/personal-website",
    },
  ],

  hackathons: [
    {
      title: "Roach Coach",
      thumbnailDesc:
        "VR food truck simulator where players make sandwiches filling orders submitted through Twitch while PC players can steal ingredients as mice.",
      modalInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. Suspendisse sed nisi lacus sed viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.",
      thumbnailImg: "images/RoachCoach.jpg",
      // imgs: [""], Add 2 side shots
      git: "https://github.com/ajmwagar/roachcoach",
    },
    {
      title: "B.LAB",
      thumbnailDesc:
        "Android and iOS app that gathers a listing of loan offerings customized to your specific profile.",
      modalInfo: "More info will be added soon.",
      thumbnailImg: "images/B.LAB.png",
      // imgs: [""], Add 2 images of the different tabs
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
