export const projectsEn = [
    {
        id:"spiritCave",
        name: "Spirit Cave",
        technologies: 'Unreal Engine 4',
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
    },
    {
        id:"tsarsSecrets",
        name: "Tsar's Secrets",
        technologies: 'Unreal Engine 4, Perforce',
        images: [
            {
                title:"Tsar's Secrets Main Page",
                src:   "assets/images/TsarSecrets_MainPage.jpg",
            },
            
        ],
        url:'#portfolio',
        detail:
        `
        WIP
        `,
        codeSourceUrl:'-',
        detailIsDisplayed: false,
    },
    {
        id:"armor",
        name: "Armadura de cuero",
        technologies: 'Marroquinería',
        images: [
            {
                title:'Helmet',
                src:   "assets/images/Armor_MainPage.jpg",
            },
            {
                title:'Retractable jaw',
                src :"assets/images/Armor_2.jpg",
            },
            {
                title:"Armbands",
                src: "assets/images/Armor_3.jpg",
            },            
        ],            
        url:'#portfolio',
        detail:
        `
            <p>The project consists of creating a life-size leather armor inspired in <span class="bold">Rathalos<span> creature from the Monster Hunter saga.</p>
            <img src="assets/images/Armor_Rathalos.jpg" alt="Rathalos" class="projectImgDetails">
            <p>To do this, starting from a piece of tanned leather, I cut out each piece following some patterns, gave it shape, traced the internal drawing of each piece, dyed it and finally assembled it with rivets.</p>
            <img src="assets/images/Armor_Leather.jpg" alt="Tanned Leather" class="projectImgDetails">
            <img src="assets/images/Armor_Pieces.jpg" alt="Helmet pieces" class="projectImgDetails">
            In addition to the helmet, I have made 2 bracelets to go with it. The next piece will be the shoulder pads.       
            <img src="assets/images/Armor_3.jpg" alt="Brazaletes" class="projectImgDetails">
        `,
        codeSourceUrl:'-',
        detailIsDisplayed: false,
    },
];
