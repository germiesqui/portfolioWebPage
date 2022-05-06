export const projectsEs = [
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
                title:'Screenshot Personaje Fantasma',
                src:"assets/images/SpiritCave_2.jpg",
            },
            {
                title:'Screenshot Personaje',
                src: "assets/images/SpiritCave_3.jpg",
            },
        ],
        url: "https://germiesqui.itch.io/spirit-cave",
        videoId:"gpjd0Jl6Sik",
        detail:
        `
            <p>Juego desarrollado para la GGJ 2022.</p>
            <p class="italic">"Has sido maldecido y encerrado en las profundidades de la Cueva de los Lamentos. Gracias a la maldición puedes escapar de tu forma terrenal y liberar tu alma. Ahora debes escapar."</p>
            <img src="assets/images/SpiritCave_3.jpg" alt="Screenshot del personaje" class="projectImgDetails">
            <p>La temática de la Game Jam era <span class="bold">dualidad</span>. Nos decantamos por usar una mezcla entre narrativa y mecánicas para representar esta idea. 
            En el juego controlamos a nuestro protagonista, el cual solo puede caminar hacia adelante y hacia atrás. Para poder sortear los obstáculos del mapa, como son las diferencias de nivel, saltos y enemigos, 
            tiene la habilidad de transformarse en un fantasma. 
            Esta habilidad invierte el eje de gravedad y le permite caminar por el techo o, con suficiente habilidad, volar por algunas zonas.</p>
            <img src="assets/images/SpiritCave_TileMap.jpg" alt="vista en desarrollo del TileMap" class="projectImgDetails">
            <p>Como tecnología escogimos UE4 dado que era el único motor que controlabamos todos los integrantes del grupo. Además, lo usamos para aprender a manejar los mapas y elementos en 2D de unreal usando TileMaps.</p>
            <img src="assets/images/SpiritCave_2.jpg" alt="Screenshot del personaje fantasma" class="projectImgDetails">
            <p>Uno de los mayores retos que afrontamos desde el lado del diseño y la programción fue que, por limitaciones del motor, al invertir el eje de gravedad unreal no detecta que dejas de "caer" 
            hacia arriba cuando llegas al techo, por lo que andar se hacía imposible dado que no habia rozamiento con el suelo (techo). 
            Al final, pudimos solventarlo lanzando un rayo que chocase contra el techo, midiendo la distancia de dicho rayo y, en base a eso, determinar nosotros si habia dejado de caer o no y reprogramar todo el movimiento lateral 
            del techo para que funcione acorde a lo programado.</p>
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
        url:'https://otterworldsgames.itch.io/the-tsars-secret',
        videoId:"-",
        detail:
        `
        <p>Vista la pagina web en <strong><a href="https://otterworldsgames.itch.io/the-tsars-secret">https://otterworldsgames.itch.io/the-tsars-secret</a></strong></p>
        `,
        codeSourceUrl:'https://otterworldsgames.itch.io/the-tsars-secret',
        detailIsDisplayed: false,
    },
    {
        id:"armor",
        name: "Armadura de cuero",
        technologies: 'Marroquinería',
        images: [
            {
                title:'Casco',
                src:   "assets/images/Armor_MainPage.jpg",
            },
            {
                title:'Mandubula Retraible',
                src :"assets/images/Armor_2.jpg",
            },
            {
                title:"Brazaletes",
                src: "assets/images/Armor_3.jpg",
            },            
        ],
        url:'#portfolio',
        videoId:"-",
        detail:
        `
            <p>El proyecto consiste en crear una armadura de cuero de tamaño real inspirado en el dragón <span class="bold">Rathalos<span> de la saga Monster Hunter.</p>
            <img src="assets/images/Armor_Rathalos.jpg" alt="Rathalos" class="projectImgDetails">
            <p>Para ello, partiendo de un trozo de cuero de vaca curtido, he recortado cada pieza siguiendo unos patrones, le he dado forma, he trazado el dibujo interno de cada pieza, lo he tintado y por último lo he montado con remaches.</p>
            <img src="assets/images/Armor_Leather.jpg" alt="Cuero de vaca" class="projectImgDetails">
            <img src="assets/images/Armor_Pieces.jpg" alt="Partes del casco" class="projectImgDetails">
            Además del casco, he hecho 2 brazaletes para acompañar el conjunto. La próxima pieza seran las hombreras.          
            <img src="assets/images/Armor_3.jpg" alt="Brazaletes" class="projectImgDetails">
        `,
        codeSourceUrl:'-',
        detailIsDisplayed: false,
    },
];

