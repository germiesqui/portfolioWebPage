export const gamejamsEs = [
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
        <p>Juego desarrollado para la GMTK 2023.</p>
        <p class="italic">"Juego arcade de air hockey futurista donde un jugador puede ir ganando pero obtendrá un handicap por cada gol que marque."</p>
        <img src="assets/images/HolodiscChampionship/hd_2.jpg" alt="Screenshot de gameplay" class="projectImgDetails">
        <p>La temática de la Game Jam era <span class="bold">Roles Invertidos</span>. Nos decantamos por usar las unicamente mecánicas para representar esta idea. 
        En el juego es un multiplayer local que se basa en el air hokey tradicional. El punto distintivo de este juego es que, por cada gol que marques, se te aplicara uno de los 4 handicaps posibles: 
        redicir el tamaño de tu paleta, aumentar el tamaño de tu portería, añadir en tu lado del campo plataformas que desvian la pelota hacia tu portería y añadir cañones que disparan bolas extras directas a tu portería.</p>
        <p>Como tecnología escogimos unity dado que es un motor que conocíamos todos los integrantes del grupo y en el cual es bastante fácil montar un proyecto rapido y funcional. Además, lo construimos en WebGL para que se puedise jugar desde el navegador.</p>
        <img src="assets/images/HolodiscChampionship/hd_3.png" alt="Screenshot de un menu" class="projectImgDetails">
        <p>Uno de los mayores retos que afrontamos fue la inexperiencia del equipo en distintos apartados. Cada persona usó este concurso para aprender una faceta de Unity que no habia trabajado antes por lo que todos tuvimos que aprender bajo demanda y resolver
        rápidamente los problemas con búsquedas eficientes de información en internet.</p>
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
    hasSteam: false,
}
];