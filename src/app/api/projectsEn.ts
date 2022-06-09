export const projectsEn = [
    {
        id:"tsarsSecrets",
        name: "Tsar's Secrets",
        functions: 'Level Designer, Gameplay Desgner, System Designer',
        images: [
            {
                title:"Tsar's Secrets Main Page",
                src:   "assets/images/TsarSecrets_MainPage.jpg",
            },
            
        ],
        url:'https://otterworldsgames.itch.io/the-tsars-secret',
        videoId:"0Y3HglnHCvg",
        detail:
        `
        <p>Visit our website in <strong><a href="https://otterworldsgames.itch.io/the-tsars-secret">https://otterworldsgames.itch.io/the-tsars-secret</a></strong></p>
        `,
        codeSourceUrl:'https://otterworldsgames.itch.io/the-tsars-secret',
        detailIsDisplayed: false,
    },
    {
        id:"spiritCave",
        name: "Spirit Cave",
        functions: 'Level Designer, System Designer, QA',
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
            <p>The GameJam theme wahs <span class="bold">duality</span>. We chose to use a mix of narrative and mechanics to represent this idea. 
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
        detailIsDisplayed: false,
    }
];
