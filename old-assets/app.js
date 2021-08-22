var app = new Vue({
  el: "#app",
  data: {
    skills: [
      {
        name: "JavaScript",
        level: "45",
      },
      {
        name: "C# Game Development",
        level: "75",
      },
      {
        name: "ML/Data Science (Python)",
        level: "50",
      },
      {
        name: "Azure DevOps Project Management",
        level: "50",
      },
      {
        name: "Video Editing",
        level: "50",
      },
      {
        name: "Adobe Illustrator and Photoshop",
        level: "35",
      },
      {
        name: "Java Programming",
        level: "85",
      },
    ],
    skillsToImprove: [
      {
        name: "ML/Data Science (Python and MatLab)",
      },
      {
        name: "C++ Game Development",
      },
      {
        name: "NodeJS and JavaScript (FullStack)",
      },
      {
        name: "3D Modeling",
      },
      {
        name: "Music Design",
      },
    ],
    introductions: [
      {
        title: "School",
        description: "",
        //Write about BHS CS classes, GCC, and UW major, graduation year, etc.
      },
      {
        title: "Career and Study Interests",
        description: "",
      },
      {
        title: "Hobbies",
        //https://gcc.nlaha.com
        description:
          "Leader of the BHS General Computing Club (GCC). At GCC we create a space where people of all skill levels can learn about software/game development, data science and graphic art.",
      },
    ],
    gameProjects: [
      {
        title: "House Match",
        description: "",
        url: "https://bencaffee.com/HouseMatch", //https://www.frogrockstudio.com/house-match/
      },
      {
        title: "Prototype57",
        description: "",
        url: "https://bencaffee.com/Prototype57",
      },
      {
        title: "VScape",
        description: "",
        url: "https://bencaffee.com/VScape",
      },
      {
        title: "Roach Coach",
        description: "",
        url: "https://bencaffee.com/RoachCoach", //https://devpost.com/software/roachcoach-s-forbidden-food
      },
      {
        title: "Dungeon Crawler",
        description: "",
        url: "https://bencaffee.com/DungeonCrawler",
      },
    ],
    otherProjects: [
      {
        title: "Deep Q-Learning Tic-Tac-Toe agent",
        description: "",
        url: "https://bencaffee.com/TTT_Agent",
      },
      {
        title: "B.LAB",
        description: "",
        url: "https://bencaffee.com/BLAB", //https://devpost.com/software/evencredit2019
      },
    ],
  },
  methods: {
    sortSkils(event) {
      this.skills.sort((a, b) => (a.level < b.level ? 1 : -1));
    },
  },
});

app.sortSkils();
