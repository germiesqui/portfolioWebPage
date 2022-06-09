export const projectsEs = [
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
        <p>Vista nuestra pagina web en <strong><a href="https://otterworldsgames.itch.io/the-tsars-secret">https://otterworldsgames.itch.io/the-tsars-secret</a></strong></p>
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
    }
];

