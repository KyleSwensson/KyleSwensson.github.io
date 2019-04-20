var projs = [
{
	name: "Lumin",
	sections: [
		{name: "Description", info: "A full-term class project for CPSC 436D at UBC, made with a team of 4 other CPSC students. The game is a puzzle platformer where the player constantly radiates light, and interacts with things by illuminating them instead of actually touching them. The goal is to manipulate your light and the light of NPCs to activate or not activate switches so you can make it to the end of the level."},
		{name: "Contributions", info: "I was responsible for the initial setup of the project, as well as the creation of the basic platforming engine (allowing player movement, basic physics, and proper collision detection with walls). Beyond that I worked with the rest of the team on various smaller parts as the game progressed, one significant one being the implementation of moving blocks, and their ability to carry the player with them if the player is standing on top of them."}
	],
	technologies: ["C++", "OpenGL"],
	picnames: ["lumin2.png", "lumin3.png", "lumin1.png"],
	icon: "lumin1.png"
},  {
	name: "UBC Mentorship",
	sections: [
		{name: "Description", info: "UBC Mentorship was a course project done for CPSC 444 at UBC, which is an advanced UX and UI course. Me and a team of 4 others were tasked with imagining a useful app idea, doing a field study to assess its potential viability, and finally coming up with a prototype of the app, and running an experiment on it."},
		{name: "Goal", info: "The main goal of our app was to make finding a mentor or mentee an easier and quicker process. The motive behind that was to encourage more people to seek mentorship while in university."},
		{name: "Field Study", info: "To get an idea of what students would find useful in our app, we first interviewed students who had been mentors or mentees and asked them what they did and didn't like about their mentorship experiences, and what they would look for in a mentorship app. We found that mentors enjoyed feeling like they were helping people a lot, and valued mentees who were engaged in what they were learning. Mentees on the other hand most valued mentors who were kind, and had similar experiences to them."},
		{name: "Prototypes", info: "Based on the results of our field studies, we created two prototype interfaces. We initially made drafts of the interfaces in Figma, and later made more robust prototypes using HTML/CSS and Javascript. <br><br> Prototype #1 was a traditional interface inspired by linkedin: mentees could search a list of mentors and message those that had relevant experiences/interests to them. Mentors on the other hand had to wait for mentees to message them. <br><br> Interface #2 had mentees submit questions to a question board, which mentors would then swipe through of these questions, swiping right to answer those they were interested in, and swiping left on those they were not. When mentors answered questions, a direct-messaging conversation was started between them and the asker."},
		{name: "Experiment", info: "To determine which of our two prototypes users preferred, we ran an experiment where we asked various students (assigned to play the role of a mentor or mentee) to use both interfaces, and then participate in an interview about their experience. <br><br> We hypothesized that mentees would prefer interface #1 as it gives them more choice in mentors, while mentors would prefer interface #2 as it lets them play a more active role instead of just waiting around until they are messaged. While we did get data that somewhat aligned with our hypotheses, our sample size was unfortunately too small to make any strong claims about which interface was preferred."}
	],
	technologies: ["Figma", "HTML/CSS", "Javascript"],
	picnames: ["mentor1.jpg", "mentor2.jpg", "mentor3.jpg"],
	icon: "mentorIcon.jpg"
}, {
	name: "Drop",
	sections: [
		{name: "Description", info: "Drop is a procedurally generated platforming game I worked on intermittently from 2015 to 2017. In the game the player runs through procedurally generated enemy-filled dungeons, trying to get to the end of each level, and killing enemies along the way. Occasionally the player will also have to defeat bosses to proceed to the next level. <br><br> I created the game as a solo project in Java using the libGDX game engine. I used libGDX for basic things like updating, getting keyboard input, and rendering, but everything else (such as physics and collision detection) was implemented from scratch."},
		{name: "Procedural Generation", info: "One of the most interesting parts of making this game was figuring out how to procedurally generate playable, interesting levels without making them too repetitive. A common method of procedural generation (found in games such as Rogue Legacy and The Binding of Isaac) is to have a set of premade rooms, and just connect the rooms to one another in a random way. The handmade rooms typically result in interesting gameplay, but they are often stitched together via doors that teleport you from room to room, making the levels feel less organic. <br><br> I took inspiration from this strategy, but tried to make the segments more organically connected by first having an algorithm generate a random path through a 2D array, then having every element in the 2D array represent a chunk of blocks. This ended up in very random paths but due to each part of the path being an empty X-by-X chunk, the path wasn't very interesting. To remedy this, I created a set of possible layouts for chunks on the path, and gave each chunk a randomly selected layout from that set to make things more interesting."}
	],
	technologies: ["Java", "LibGDX"],
	picnames: ["drop2.png", "drop3.png", "drop1.png"],
	icon: "drop1.png"
}, {
	name: "Pac-maps",
	sections: [
		{name: "Description", info: "Pac-maps is an Android app made at NWHacks 2016 with a team of 4. It was intended to make running more interesting by turning ordinary runs into games of Pac-man. Pellets and ghosts show up on a map of your location (Retrieved from the Google Maps API), and you have to go places in real life to move your marker on the map to collect the pellets and escape ghosts, getting as many points as possible before dying."},
		{name: "Motivations", info: "Our main motivations for making this app were wanting to learn how to develop apps for android, and wanting to familiarize ourselves with common APIs (The google maps API seemed like a good starting point)."},
		{name: "Personal Contributions", info: "As none of us were familiar with android development when we started, a big chunk of our initial work which was done together as a team was just getting the environment set up and displaying a map from Google on a phone. Beyond that, I worked on creating the ghosts (spawning and logic to chase player) and collision detection between the player and ghosts/pellets."}	
	],
	technologies: ["Java"],
	picnames: ["maps1.jpg"],
	icon: "mapsIcon.jpg"
}, {
	name: "Jewel Matching",
	sections: [
		{name: "Description", info: "This is a clone of common match-three games created as a solo project in high-school. It was developed in C# using the Microsoft XNA game library. The main challenges in making this were implementing click-and-drag controls, animating between different board states, and quickly checking for a large number of possible win conditions. An executable version of the game is available on Github <a href='https://github.com/KyleSwensson/JewelMatch'>here</a>."},
	],
	technologies: ["C#", "XNA"],
	picnames: ["jewel1.jpg"],
	icon: "jewel1.jpg"
}, {
	name: "Mahuizo",
	sections: [
		{name: "Description", info: "Mahuizo was a game made in Unity with the AMS Game Development Association executive team for Global Game Jam 2016. The goal of the game is to wander around a procedurally generated map, kidnapping bystanders to sacrifice into a volcano, while avoiding police."},
		{name: "Personal Contributions", info: "I worked on many small things during the hackathon, but my most notable contributions were making the algorithm to procedurally generate levels and working on the movement logic for bystanders."}
	],
	technologies: ["Unity", "C#"],
	picnames: ["mahuizo1.png"],
	icon: "mahuizo1.png"
}, {
	name: "Flash Games",
	sections: [
		{name: "Description", info: "While in high school I made a few flash games in my spare time using ActionScript 3. I published two of them on Kongregate, and they're still playable today! <br> <br> You can play Alienator (a game about protecting the earth from alien invaders) <a href='https://www.kongregate.com/games/vostage/alienator'>here</a>, or Cutlery Attack (a game about bouncing falling cutlery into correct drawers) <a href='https://www.kongregate.com/games/vostage/cutlery-attack'>here</a>."}
	],
	technologies: ["Flash", "ActionScript 3"],
	picnames: ["flash1.jpg", "flash2.jpg"],
	icon: "flashIcon.jpg"
}


];

// Jobs is currently not being used but it might be useful to add pages for these later
var jobs = [
{
	name: "Tasktop Technologies",
	sections: [
		{name: "Overview", info: "I worked at Tasktop Technologies as a Junior Software Developer for 8 months. During my time there I worked on their flagship product, a RESTful web application called Tasktop Integration Hub, which is a dev-ops tool that aims to improve ease of communication between different teams within companies. I worked extensively on both the front-end (using Javascript and AngularJS) and the back-end of the application (using Java). I also spent some time with other technologies, such as SQL, Bash and Shell files for scripting, the Windows Installer XML, and Keycloak."},
		{name: "Development Practices", info: "Many of the most important things I learned from my time at Tasktop were good software development practices. At Tasktop I participated in an Agile work environment, with daily standups and a Kanban Board. Tasktop also had a very rigorous code review process, which ensured that code going into master was always structured in a way that let it be easily changed and scaled, and helped train me to passively write cleaner code."},
		{name: "Responsibilities", info: "My responsibilities were to participate in a 5-person development team as if I was a full-time developer, which ended up meaning I took the lead role on a few small-mid sized project features, and fixed bugs that popped up when I had time to handle them."}
	],
	technologies: ["Java", "Javascript", "HTML/CSS", "AngularJS", "SQL"],
	picnames: ["tasktop1.png"],
	icon: "tasktopIcon.jpg"
}, 
{
	name: "Jostle",
	sections: [
		{name: "Overview", info: "I worked at Jostle as a Junior Software Developer for 4 months. While I was there I did a variety of work on their flagship company intranet web application. While I was there I worked primarily on the front-end which was coded primarily with Java using GWT, as well as some Javascript."},
		{name: "Responsibilities", info: "My responsibilities were to participate in a 6-person development team as if I was a full-time developer. During the start of my term I took the lead on some small features, but for the second half of my co-op term I focused more on a large refactor of the way elements on the platform were styled, especially refactoring the way brand-customizable colors were applied. The goal of this refactor was two-fold: The first goal was to make it less likely for developers to accidentally add elements without letting them be brand-customizable, and the second was to standardize the styling used across the platform (colors, spacing, etc) so the platform looked more visually consistent."}
	],
	technologies: ["Java", "GWT", "HTML/CSS", "Javascript", "SQL"],
	picnames: ["jostle1.png"],
	icon: "jostleIcon.jpg"
}
];