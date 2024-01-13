export const gamejamsEn = [
{
    id:"holodiscChampionship",
    name: "Holodisc Championship",
    functions: 'General Designer, Programmer, QA',
    images: [
        {
            title:'Main Page',
            src: "assets/images/HolodiscChampionship/hd_Banner.png",
        },
        {
            title:'Gameplay',
            src:"assets/images/HolodiscChampionship/hd_2.jpg",
        },
        {
            title:'Menu',
            src: "assets/images/HolodiscChampionship/hd_3.png",
        },
    ],
    url: "https://gamesthattastelikegarlic.itch.io/holodisc-championship",
    videoId:"",
    detail:
    `
        <p>Videogame developed in the GMTK 2023.</p>
        <p class="italic">"A futuristic air hockey game where a player might be winning on the scoreboard but  the odds will turn against them for every goal scored."</p>
        <img src="assets/images/HolodiscChampionship/hd_2.jpg" alt="Screenshot from gameplay" class="projectImgDetails">
        <p>The GameJam theme was <span class="bold">Inverted Roles</span>. We chose to use the mechanics to represent that idea. 
        The game is a local multiplayer game based on traditional air hokey. The distinctive point of this game is that, for each goal you score, one of the 4 possible handicaps will be applied to you: 
        reduce the size of your paddle, increasing the size of your goal, adding platforms on your side of the field that deflect the ball towards your goal and adding cannons that shoot extra balls straight into your goal.</p>
        <p>As technology we chose unity since it is an engine that all the members of the group knew and in which it is quite easy to assemble a fast and functional project. In addition, we built it in WebGL so that it can be played from the browser.</p>
        <img src="assets/images/HolodiscChampionship/hd_3.png" alt="Screenshot of a menu" class="projectImgDetails">
        <p>One of the biggest challenges we faced was the inexperience of the team in different areas. Each person used this contest to learn a facet of Unity that they hadn't worked on before so we all had to learn on demand and quickly solve the problems with efficient 
        efficient searches for information on the internet.</p>
    `,
    codeSourceUrl:'https://gamesthattastelikegarlic.itch.io/holodisc-championship',
    detailIsDisplayed: false,
    hasSteam: false,
},
{
    id:"spiritCave",
    name: "Spirit Cave",
    functions: 'Level Designer, System Designer, Sound Designer, QA',
    images: [
        {
            title:'Main Page',
            src: "assets/images/SpiritCave_MainPage.png",
        },
        {
            title:'Screenshot Ghost Form',
            src:"assets/images/SpiritCave_2.jpg",
        },
        {
            title:'Screenshot Protagonist',
            src: "assets/images/SpiritCave_3.jpg",
        },
    ],
    url: "https://germiesqui.itch.io/spirit-cave",
    videoId:"gpjd0Jl6Sik",
    detail:
    `
        <p>Videogame developed in the Global Game Jam 2022.</p>
        <p class="italic">"You have been cursed and locked in the depths of the Sorrow's Cave. You have the power of the curse that allows your souls to escape from your body and surpass mortal limits. Now you have to escape."</p>
        <img src="assets/images/SpiritCave_3.jpg" alt="Protagonist Screenshot" class="projectImgDetails">
        <p>The GameJam theme was <span class="bold">duality</span>. We chose to use a mix of narrative and mechanics to represent this idea. 
        In the game we control our protagonist, who can only walk back and forth. In order to get around the obstacles on the map, such as level differences, jumps and enemies, he has the ability to transform into a ghost. 
        This ability reverses the axis of gravity and allows him to walk on the ceiling or, with enough skill, fly through some areas.</p>
        <img src="assets/images/SpiritCave_TileMap.jpg" alt="development view of TileMap" class="projectImgDetails">
        <p>As technology we chose UE4 since it was the only engine that all the members of the group controlled. In addition, we used it to learn how to handle the maps and 2D elements of unreal using TileMaps.</p>
        <img src="assets/images/SpiritCave_2.jpg" alt="ghost form Screenshot" class="projectImgDetails">
        <p>One of the biggest challenges we faced from the design and programming side was that, due to engine limitations, when inverting the axis of gravity, unreal does not detect that, 
        when you reach the ceiling, you stop "falling" upwards, so walking on the ceiling became impossible since there was no friction with the ground. 
        In the end we were able to solve it by launching a RayCast that hit the ceiling, 
        measuring the distance of the beam and based on that we determine if it had stopped falling or not and reprogram all the lateral movement the roof to work as programmed.</p>
    `,
    codeSourceUrl:'https://germiesqui.itch.io/spirit-cave',
    hasSteam: false,
    detailIsDisplayed: false,
}
];