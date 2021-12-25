const mainPage = {
  introductions: [
    "Hi! I'm a Computer Science major at UW Seattle, graduating in 2025. Some of my interests include learning about ML applications such as fake media detection and enhanced graphics like Nvidia's DLSS technology, and RL for games and cybersecurity. I'm also curious on how natural language processing algorithms such as OpenAI's GPT-3 can be improved without simply adding a ton more parameters.",
    "During high school, I tutored students in Math and CS (among other subjects), and lead the General Computing Club (GCC). At GCC, people of all backgrounds connect their passions to computer science, creating projects and building their knowledge of software, game design, and art. Outside of academics, I've enjoyed swimming competitively and practicing Brazilian Jiu-Jitsu.",
  ],

  skills: [
    "Java Programming",
    "C# Game Development (Unity)",
    "Python",
    "JavaScript (general, React)",
    "HTML and CSS Web Design",
    "LaTeX",
  ],
  otherSkills: [
    "Git",
    "Azure DevOps Project Management",
    "Adobe Illustrator and Photoshop",
    "Video Editing",
  ],
  skillsToImprove: [
    "ML and Data Science (Python)",
    "C++",
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
        "<p>In May 2020, a friend contacted me about helping him renovate one of his games that he wanted to release on the App and Play stores. The art difference from the previous, now archaic, version of House Match already demonstrates justice in cleaning the game up. However, besides fixing the almost seemingly infinite number of bugs, there were plenty of gameplay features and nice-to-haves that I worked on, like the tutorial and pause menus, the scoring system, and the leaderboard.</p><p>Spending hours on this project every day and meeting up online with the three other team members was an awesome experience. I’m so glad it all built up to us publicly releasing in October. If you want to try the game out or see the demo video then please head over to <a href='https://www.frogrockstudio.com/house-match/'> Frog Rock Studio</a> or our <a href=https://www.instagram.com/frogrockstudio/'> Instagram </a>page.</p>",
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
      modalInfo:
        "<p>I built HVScape from November 2018 to May 2019 with two other students as part of my high school’s CS Projects class, where we learned about and went through the agile development process (writing specifications, using azure dev-ops). We were in class about 5 hours a week, working a little bit at home, and then for the last month, it became crunch time, so I spent a lot of time after school trying to get everything ready for the end of the year demo and mock 'tech panel.'</p> <p> I mainly worked on general VR functions such as the player interacting with objects and the main menu, the puzzle completion system, and the scale puzzle. Despite being frustrating at points, I overall enjoyed creating this game since I could dedicate a whole class to throw myself into VR development for the first time from scratch.</p>",
      thumbnailImg: "images/HVScape.png",
      // imgs: [""], Add library and second classroom image to github README
      git: "https://github.com/bcaffee/HVScape",
    },
    {
      title: "Dungeon Crawler",
      thumbnailDesc:
        "<a href='https://en.wikipedia.org/wiki/Roguelike'>Roguelike</a> game without a good name.", //http://www.roguebasin.com/index.php?title=Berlin_Interpretation
      modalInfo:
        "<p>There are many core characteristics of roguelike games described by the <a href='http://www.roguebasin.com/index.php?title=Berlin_Interpretation'> Berlin Interpretation</a> such as procedurally generated maps, being turn-based, and incentivizing exploration. These features, among others, have made me enjoy games like <a href='https://github.com/crawl/crawl'> Dungeon Crawl Stone Soup</a>, so in 2016 I made my own in Java. This was the first sophisticated game I made when I started programming and the first big Java project that I've continually developed.</p><p>There are two main things I’m working on at the moment. One, making the random map that gets generated more difficult as the player progresses through the game. And two, slightly improving the general complexity of the game, so it’s not too easy or boring for the player to stumble into the next challenge. More specifically, this can entail introducing enemies that can move and adding a “magic compass” to help the player find puzzles.</p>",
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
        "<p>For this project, I used Java to create the customization GUI and draw the fractal. Inspiration came from wanting to better my Java graphic skills and using recursion to make art. The GUI itself has a lot of room for improvement since I rushed through that part. However, I’m thrilled with how the fractals turned out. For simplicity, the “tethered radial” part of the drawings means “connected circles.” </p> <p>The customization options include color, child fractal count, child depth, child-parent ratio, and dark or light mode. Besides some small bugs with the drawing panel creation and the dark mode not always working, the next steps are to add real-time drawing as the settings are changed and to include a warning plus stop drawing once the child fractals get too small. While working on this application, I learned about a cool abstract math <a href='https://www.youtube.com/watch?v=gB9n2gHsHN4'>video </a> about why fractals are typically not self-similar, and I highly recommend it.</p>",
      thumbnailImg: "images/FractalGenerator.png",
      // imgs: [""], Add more fractl images to github README
      git: "https://github.com/bcaffee/FractalGenerator",
    },
    {
      title: "Tic-Tac-Toe RL Agent",
      thumbnailDesc:
        "<a href='https://en.wikipedia.org/wiki/Convolutional_neural_network#Deep_Q-networks'>Deep-quality learning</a> tic-tac-toe agent.",
      modalInfo:
        "<p> When I started this project in 2019, I wanted to teach the computer/agent to play the traditional 3x3 Tic-Tac-Toe and then see how and if its game strategy would change when the board gets expanded to higher dimensions like 5x5 or 7x7. I used Deep quality learning to do this, which combines Q-learning, a reinforcement learning algorithm that creates state-based growth through experiencing rewards and punishments, and neural networks. One interesting thing is that since I decided to have the agent always move first in training early on, it developed one strategy, but then if it played in an actual game with a human player moving second, it would make fatal mistakes and lose every time. This issue caused me to play around with other variables, such as the difference between having the agent train against itself versus having it train against random moves.</p> <p>Now I've gotten it to the point where the computer always ties against a human player since I stuck with the former, and its training consists of an equal number of games moving first and second. Winning only really happens if people make mistakes which is rare. I'm currently working on expanding the board and finding a way for the agent to get smarter without needing to experience every single board state.</p>",
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
        "<p>My team and I submitted B.LAB (‘Buy Lab’ or ‘Buy Like a Boss’) for the 2019 Seattle Def Hacks, which was Co-Hosted by <a href='https://evenfinancial.com/'>Even Financial</a>. We created this through<a href='https://dotnet.microsoft.com/apps/xamarin/xamarin-forms'>Xamarin.Forms</a>, Microsoft’s cross-platform .NET framework that assists with building iOS, Android, and Windows apps. Using XAML, I created the profile tab where the user could add their financial information. I also partially worked on integrating the Even API into our \"Search for Loan Offers\" tab (the main feature of the app) by sending a post request in JavaScript and then parsing the returned JSON in C#.</p><p>This was my first time utilizing C# outside of the Unity game engine and first time making user interfaces. Additionally, I had little JavaScript knowledge before this hackathon, so this experience helped sharpen multiple skills. Unlike the 2018 Seattle VR Hackathon, I felt the time crunch in this one was a lot more stressful since it was only 24 hours, so I didn’t even have a chance to sleep. Head over to <a href='https://devpost.com/software/evencredit2019'>DevPost </a> to read more about the app!</p>",
      thumbnailImg: "images/B.LAB.png",
      // imgs: [""], Add 2 images of the different tabs
      git: "https://github.com/shreystechtips/B.LAB-EvenAPI",
    },
  ],
};

export { mainPage };
