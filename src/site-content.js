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
      modalInfo: "More info to be posted.",
      thumbnailImg: "images/HouseMatch.png",
      git: "",
    },
    {
      title: "Prototype57",
      thumbnailDesc: "3D third person procedural tower defense game.",
      modalInfo: "More info to be posted.",
      thumbnailImg: "images/Prototype57.png",
      // imgs: [""], Add multiple images
      git: "",
    },
    {
      title: "HVScape",
      thumbnailDesc: "Super simple high school-themed VR escape room.",
      modalInfo: "More info to be posted.",
      thumbnailImg: "images/HVScape.png",
      // imgs: [""], Add library and second classroom image to github README
      git: "https://github.com/bcaffee/HVScape",
    },
    {
      title: "Dungeon Crawler",
      thumbnailDesc:
        "<a href='https://en.wikipedia.org/wiki/Roguelike'>Roguelike</a> game without a good name.", //http://www.roguebasin.com/index.php?title=Berlin_Interpretation
      modalInfo: "More info to be posted.",
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
      modalInfo: "More info to be posted.",
      thumbnailImg: "images/FractalGenerator.png",
      // imgs: [""], Add more fractl images to github README
      git: "https://github.com/bcaffee/FractalGenerator",
    },
    {
      title: "Tic-Tac-Toe RL Agent",
      thumbnailDesc:
        "<a href='https://en.wikipedia.org/wiki/Convolutional_neural_network#Deep_Q-networks'>Deep-quality learning</a> tic-tac-toe agent.",
      modalInfo: "More info to be posted.",
      // imgs: [""],
      git: "https://github.com/bcaffee/T-T-T_DQN",
    },
    {
      title: "Personal Website",
      thumbnailDesc: "This website.",
      modalInfo: "More info to be posted.",
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
        "<p>I worked on Roach Coach for the 2018 48 Hour Seattle VR/AR Hackathon. Coming in with a little Unity experience from 2016 and this being my very first hackathon, I had never had the experience of working with so many people on a project. I remember being slightly worried that I wouldn't even be able to contribute much. Thankfully, I ended up learning a lot and spent most of my time integrating Twitch's API and making part of the main menu UI.</p><p>My most memorable moments were everyone frantically trying to get everything working last second before the judges came over and me being super unprepared for the night, sleeping on a table using my backpack as a pillow. Overall, this experience was well worth it as it inspired me to continue sharping my Unity skills and trying out VR development. For more information, go <a href='https://devpost.com/software/roachcoach-s-forbidden-food'>here</a> to checkout the DevPost page!</p>",
      thumbnailImg: "images/RoachCoach.jpg",
      // imgs: [""], Add 2 side shots
      git: "https://github.com/ajmwagar/roachcoach",
    },
    {
      title: "B.LAB",
      thumbnailDesc:
        "Android and iOS app that gathers a list of loan offerings customized to your specific profile.",
      modalInfo:
        "<p>My team and I submitted B.LAB (\"Buy Lab\" or \"Buy Like a Boss\") for the 2019 Seattle Def Hacks which was Co-Hosted by <a href='https://evenfinancial.com/'>Even Financial</a>. We created this through <a href='https://dotnet.microsoft.com/apps/xamarin/xamarin-forms'>Xamarin.Forms</a>, Microsoft’s cross-platform .NET framework that assists with building iOS, Android, and Windows apps. Using XAML, I created the profile tab where the user could add their financial information. I also partially worked on integrating the Even API into our \"Search for Loan Offers\" tab (the main feature of the app) by sending a post request in JavaScript and then parsing the returned JSON in C#.</p><p>This was my first time utilizing C# outside of the Unity game engine and first time making user interfaces. Additionally, I had little JavaScript knowledge before this hackathon, so this experience really helped with sharpening various skills. Unlike the 2018 Seattle VR Hackathon, I felt the time crunch in this one a lot more stressful since it was only 24 hours, so I didn’t even have a chance to sleep. Head over to <a href='https://devpost.com/software/evencredit2019'>DevPost</a> to read more about the app!</p>",
      thumbnailImg: "images/B.LAB.png",
      // imgs: [""], Add 2 images of the different tabs
      git: "https://github.com/shreystechtips/B.LAB-EvenAPI",
    },
  ],
};

export { mainPage };
