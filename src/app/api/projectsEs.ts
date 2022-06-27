export const projectsEs = [
    {
        id:"tsarsSecret",
        name: "The Tsar's Secret",
        functions: 'Level Designer, Gameplay Designer, System Designer',
        images: [
            {
                title:"The Tsar's Secret Main Page",
                src:   "assets/images/TsarSecrets/Landing.jpg",
            },
            
        ],
        url:'https://otterworldsgames.itch.io/the-tsars-secret',
        videoId:"_MYIXK6e_es",
        detail:
        `
        <div class="details">
            <p class="gameLink">Vista nuestra pagina web en <strong><a href="https://otterworldsgames.itch.io/the-tsars-secret">https://otterworldsgames.itch.io/the-tsars-secret</a></strong></p>
            <p class="gameDesc">The Tsar's Secret es un juego de sigilo en 2,5D que consiste en infiltrarse en el palacio del zar. No puedes contraatacar, así que la única manera de tener éxito es ser más astuto que tus enemigos y avanzar sin ser descubierto. Utiliza poderes mágicos para cegar o causar sordera a los guardias de palacio, colándote detrás de ellos y completando tu misión.</p>
            <section class="mainSection">
                <h2 class="title">Mi contribución al proyecto</h2>
                <p class="subtitle">He participado como game designer desde el inicio del proyecto junto con otros 3 compañeros en un proyecto de más de 30 perosnas. A continuación, detallaré mis contribuciones en distintos apartados.</p>
                <div class="categories">
                    <div class="row customRow">
                        <div class="col-lg-4 topCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Diseño de niveles</h3>
                                    <p class="cardDesc">Principalmente me he dedicado al diseño del segundo nivel del juego.</p>
                                    <a href="#TSLevelDesign"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card shadow-lg cardImgContainer">
                            <img src="assets/images/TsarSecrets/FrontCover.png" class="cardImg">
                            </div>
                        </div>
                        <div class="col-lg-4 topCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Diseño de sistemas</h3>
                                    <p class="cardDesc">Además de contibuir a la ideación y diseñado de las mecanicas, he hecho numerosos prototipos de todas ellas.</p>
                                    <a href="#TSSystemDesign"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rectangleDecoration"></div>
                    <div class="row customRow">
                        <div class="col-lg-4 bottomCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Diseño de gameplay</h3>
                                    <p class="cardDesc">A la hora de diseñar el segundo nivel, he tenido muy en cuenta la curva de dificultad deseada y la experiencia que se quiere conseguir con cada reto.</p>
                                    <a href="#TSGameplayDesign"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card bg-white shadow-lg cardImgContainer">
                                <img src="assets/images/TsarSecrets/Keyart_2.gif" class="cardImgSpecial">
                            </div>
                        </div>
                        <div class="col-lg-4 bottomCategoriesCol">
                            <div class="card bg-black shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Concepto Inicial</h3>
                                    <p class="cardDesc">El concepto inicial ha pasado por varias fases cambiando bastante desde sus inicios.</p>
                                    <a href="#TSConcept"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sections evenSection" id="TSLevelDesign">
            <div class="sectionDecoration"></div>
                <div class="col-lg-6">
                    <h3 class="title sectionTitle">Diseño de Niveles</h3>
                    <div class="sectionBody">
                        <p>De los dos niveles que tiene esta vertical slice, he realizado el diseño del segundo junto con otro compañero. Una de las varias salas que he diseñado ha sido esta que podemos ver en la imagen de la derecha.</p>
                        <ol>
                            <li>Desde la sala anterior entramos al pasillo en modo Tenebris.</li>
                            <li>Desde la sala anterior entramos al pasillo en modo Silentium.</li>
                            <li>Pasillo oculto que te permite saltarte parte de la sala. Al salir en modo Tenebris de la sala anterior, tu propia onda ilumina dicho pasillo.</li>
                            <li>Pasillo largo que permite ir analizando el puzle de la siguiente sala mientras avanzas. En Tenebris puedes analizar los enemigos, sus rutas y usar el reloj de guia.</li>
                            <li>6. 7. El motiv de esta sala es enfrentarte a enemigos estaticos que sotan sobre si mismos mirando hacia los lados. Aprovechando las esquinas, debes avanzar en Silentium cuando mira para el otro lado, cambiarte a Tenebris para que no te vea cuando se gire, y volverte a cambiar a Silentium para avanzar por su lado.</li>
                            <li>Reloj como guia visual y sonora en ambos modos para indicarte el camino correcto.</li>
                            <li>La distancia del enemigo estatico a la pared es muy corta para pasar andando en modo Tenebris. El jugador debe timear al otro enemigo que patrulla para ir por el balcon de la derecha, cambiarse a Tenebris y quedarse quieto para que no le pille, y avanzar una vez el enemigo haya continuado con su patrulla.</li>
                        </ol>
                    </div>
                    
                </div>
                <div class="col-lg-6 imgCol">
                    <img src="assets/images/TsarSecrets/Room6.jpg" class="sectionImg">
                </div>
            </section>
            <section class="sections evenSection" id="TSGameplayDesign">
            <div class="sectionDecoration"></div>
                <div class="col-lg-6">
                    <h3 class="title sectionTitle">Diseño de Gameplay</h3>
                    <div class="sectionBody">
                        <p>A la hora de diseñar los niveles hemos tenido en cuenta 3 principios:</p>
                        <ol>
                            <li>Forzar al jugador a que use los 2 modos para superar los distintos retos.</li>
                            <li>Conseguir que el jugador se pare a analizar el reto antes de intenar pasarselo.</li>
                            <li>Conseguir una curva de dificultad ajustada con picos intermedios de dificultad y zonas de descanso.</li>
                        </ol>
                        <p>Para el primer principio hemos incluido ciertas situaciones como podemos ver en el primer gif de la derecha el cual es una parte de una sala más grande con más retos interconectados.</p>
                        <p>Para el segundo principio hemos ajustado los niveles para forzar al jugador a usar el modo Tenebris o Silentium mientras camina cerca del reto desde una posición de seguridad que le permite ir analizando el nivel mientras va acercandose al mismo.</p>
                        <p>Para el tercer principio ideamos una curva de dificultad separada por salas en la que contamos con picos intermedios de dificultad crecientes seguidos con zonas de descanso y checkpoint puestos estratégicamente para aumentar o disminuir la intensidad de las zonas.</p>
                        <img src="assets/images/TsarSecrets/Difficulty.jpg" class="sectionImg">
                    </div>
                    
                </div>
                <div class="col-lg-6 imgCol2">
                    <img src="assets/images/TsarSecrets/CambioModoGif.gif" class="sectionImg">
                    <img src="assets/images/TsarSecrets/PasilloGif.gif" class="sectionImg">
                </div>
            </section>
            <section class="sections evenSection" id="TSSystemDesign">
            <div class="sectionDecoration"></div>
                <div class="col-lg-6">
                    <h3 class="title sectionTitle">Diseño de Sistemas</h3>
                    <div class="sectionBody">
                        <p>Durante las fases iniciales del proyecto, nos centramos en cerrar y definir el core loop del juego y con ello, la mecanica principal: el cambio de modo.</p>
                        <p>El juego cuenta con dos modos: Silentium y Tenebris. Cada uno cumple una funcion especial a la hora de reslover los puzles.</p>
                        <ul>
                            <li><span class="bold">Silentium</span> nos permite ver el nivel con claridad, dónde están exactamente los enemigos, hacia donde estan mirando y sirve de recurso familiar para adaptarse al juego.<br/>Pero tiene un problema, su alcance es corto y no nos permite ver a través de las paredes.</li>
                            <li><span class="bold">Tenebris</span> funciona como una antitesis del otro modo. Nos permite "ver" a gran distancia, a través de las paredes pudiendo así analizar el puzle entero y encontrar los relojes que sirven de guia. Además nos permite pasar despercividos en las narices de un enemigo, siempre y cuando no emitamos ruido.<br/>Su contrapartida, como podemos ver en las imágenes, es que la estructura del nivel no es tan clara como en Silentium y tenemos que fijarnos en el contorno de los objetos que dibujan las ondas para guiarnos.</li>
                        </ul>
                        <p>Este cambio de modo afecta también a los enemigos, que cambian su modo de detección segun en que modo estés.</p>
                    </div>
                </div>
                <div class="col-lg-6 imgCol">
                    <img src="assets/images/TsarSecrets/Silentium.jpg" class="sectionImg">
                    <img src="assets/images/TsarSecrets/Tenebris.jpg" class="sectionImg">
                </div>
            </section>
            <section class="sections evenSection" id="TSConcept">
            <div class="sectionDecoration"></div>
                <div class="col-lg-12">
                    <h3 class="title sectionTitle">Concepto Inicial</h3>
                    <div class="sectionBody finalRowBody">
                        <p>El concepto inicial del juego ha pasado por muchas fases. Aquí hay algunos links sobre el concepto inicial del juego y como ha ido evolucionando hasta convertirse en The T'sar Secret.</p>
                        <a href="https://germiesqui.github.io/portfolioWebPage/assets/TimeKollapsed_Concept.pdf" target="_blank" type="button" class="btn btn-primary CVbtnLink">Concepto Inicial</a>
                        <a href="https://germiesqui.github.io/portfolioWebPage/assets/TimeKollapsed_Tratamiento.pdf" target="_blank" type="button" class="btn btn-primary CVbtnLink">Tratamiento del concepto inicial</a>
                        <a href="https://germiesqui.github.io/portfolioWebPage/assets/TheTsarSectrets_Tratamiento.pdf" target="_blank" type="button" class="btn btn-primary CVbtnLink">Tratamiento de la idea actual</a>
                    </div>
                </div>
            </section>
        </div>
        `,
        codeSourceUrl:'https://otterworldsgames.itch.io/the-tsars-secret',
        detailIsDisplayed: false,
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
    }
];

