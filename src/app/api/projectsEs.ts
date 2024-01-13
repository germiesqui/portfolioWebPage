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
        videoId:"fps61jKr3bY",
        detail:
        `
        <div class="details">
            <p class="gameLink">Vista nuestra página de Steam en <strong><a href="https://store.steampowered.com/app/2079410/The_Tsars_Secret/">https://store.steampowered.com/app/2079410/The_Tsars_Secret/</a></strong></p>
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
                            <li>Pasillo largo que permite ir analizando el puzle de la siguiente sala mientras avanzas. En Tenebris puedes analizar los enemigos, sus rutas y usar el reloj de guía.</li>
                            <li>6. 7. El motiv de esta sala es enfrentarte a enemigos estaticos que rotan sobre si mismos mirando hacia los lados. Aprovechando las esquinas, debes avanzar en Silentium cuando mira para el otro lado, cambiarte a Tenebris para que no te vea cuando se gire, y volverte a cambiar a Silentium para avanzar por su lado.</li>
                            <li>Reloj como guía visual y sonora en ambos modos para indicarte el camino correcto.</li>
                            <li>La distancia del enemigo estatico a la pared es muy corta para pasar andando en modo Tenebris. El jugador debe calcular el tiempo que tarda el enemigo que patrulla para ir por el balcón de la derecha, cambiarse a Tenebris y quedarse quieto para que no le pille, y avanzar una vez el enemigo haya continuado con su patrulla.</li>
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
                            <li><span class="bold">Tenebris</span> funciona como una antitesis del otro modo. Nos permite "ver" a gran distancia, a través de las paredes pudiendo así analizar el puzle entero y encontrar los relojes que sirven de guía. Además nos permite pasar despercividos en las narices de un enemigo, siempre y cuando no emitamos ruido.<br/>Su contrapartida, como podemos ver en las imágenes, es que la estructura del nivel no es tan clara como en Silentium y tenemos que fijarnos en el contorno de los objetos que dibujan las ondas para guiarnos.</li>
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
        codeSourceUrl:'https://store.steampowered.com/app/2079410/The_Tsars_Secret/',
        hasSteam: true,
        detailIsDisplayed: false,
    },
    {
        id:"electraProject",
        name: "Proyecto Electra (WIP)",
        functions: 'Diseñador, Programador',
        images: [
            {
                title:"Project Electra Main Page",
                src:   "assets/images/WIP_Banner.png",
            },
            
        ],
        url:'',
        videoId:"",
        detail:
        `
        <div class="details">
            <p class="gameDesc">El proyecto Electra es un juego en desarrollo que pretende combinar el combate de los deckbuilders como Slay the Spire e Inscryption con la arquitectura de un RPG clásico y un sistema de gestión de recursos para el deck.</p>
            <section class="mainSection">
                <h2 class="title">Mi contribución al proyecto</h2>
                <p class="subtitle">Actualmente somos 2 personas en el proyecto y ambos nos dedicamos al diseño y la programación del mismo.</p>
                <div class="categories">
                    <div class="row customRow">
                        <div class="col-lg-4 topCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Documento de Concepto</h3>
                                    <p class="cardDesc">Documento inicial donde presento brevemente la idea.</p>
                                    <a href="https://germiesqui.github.io/portfolioWebPage/assets/ProjectElectra_Concept.pdf"><button class="btn cardBtn"><span class="textBtn">A B R I R</span></button></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card shadow-lg cardImgContainer">
                            <img style="height: 100%;" src="assets/images/ProjectElectra_Cover.png" class="cardImg">
                            </div>
                        </div>
                        <div class="col-lg-4 topCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Diseño de combate</h3>
                                    <p class="cardDesc">Uno de los primeros puntos ha sido definir el combate del juego.</p>
                                    <a href="#PECombatDesign"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sections evenSection" id="PECombatDesign">
            <div class="sectionDecoration"></div>
                <div class="col-lg-12">
                    <h3 class="title sectionTitle">Diseño de Combate</h3>
                    <div class="sectionBody finalRowBody">
                        <p>El combate pretende darle una pequeña vuelta al esquema de combate de Slay the Spire. Mientras que <b>en el Slay the Spire la estrategia se centra en optimizar el turno actual</b> con las cartas que tienes disponibles y sabiendo lo que el enemigo va a relaizar el turno siguiente, <b>nuestro juego incorporará una estrategia transversal de todo el combate.</b></p>
                        <p>Para ello haremos que cuentes con 2 mazos. Estos mazos funcionan de manera similar a los de Inscryption.</p>
                        <ul>
                            <li><p>Tendremos un <b>mazo basico</b> que nos permitira generar recursos de manera inmediata y recompensaremos al jugador a medio plazo si se usa dicha carta de manera optima. (<span class="italic">Ej: Tras usar esta carta, obtines 2 recurso extra si en el proximo turno,el enemigo te inflinge daño.</span>)</p></li>
                            <li><p>Contaremos con otro <b>mazo de artefactos</b>. Este mazo contendra las acciones interesantes del jugador que serviran principalmente para atacar o protegerse. Estas cartas consumen recurso que NO se regenrea automaticamente como en Slay the Spire.</p></li>
                        </ul>
                        <p>Además, las cartas artefacto son de un solo uso. De esta manera se genera una dinámica de optimizar el uso de dichas cartas y genera un loop de creación de cartas tras el combate que se une con el sistema de gestión de recursos.</p>
                        <p>La intención es que el jugador cuente con la información de sus cartas en mano, la probabilidad de las cartas que le quedan por robar y su conocimiento sobre las acciones enemigas para formar una estrategia a largo plazo (estrategia de combate).</p>
                    </div>
                </div>
            </section>
        </div>
        `,
        codeSourceUrl:'',
        hasSteam: false,
        detailIsDisplayed: false,
    }
];

