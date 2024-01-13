(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+YTG":
/*!***********************************!*\
  !*** ./src/app/api/projectsEn.ts ***!
  \***********************************/
/*! exports provided: projectsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsEn", function() { return projectsEn; });
const projectsEn = [
    {
        id: "tsarsSecret",
        name: "The Tsar's Secret",
        functions: 'Level Designer, Gameplay Designer, System Designer',
        images: [
            {
                title: "The Tsar's Secret Main Page",
                src: "assets/images/TsarSecrets/Landing.jpg",
            },
        ],
        url: 'https://otterworldsgames.itch.io/the-tsars-secret',
        videoId: "fps61jKr3bY",
        detail: `
        <div class="details">
            <p class="gameLink">Check out our Steam page at <strong><a href="https://store.steampowered.com/app/2079410/The_Tsars_Secret/">https://store.steampowered.com/app/2079410/The_Tsars_Secret/</a></strong></p>
            <p class="gameDesc">The Tsar’s Secret is a 2.5D stealth game about infiltrating the Tsar’s palace. You can’t fight back, so the only way for succeeding is to outsmart your enemies and remain undiscovered. Use magic powers to blind or cause deafness in the palace guards, sneaking behind them and complete your mission.</p>
            <section class="mainSection">
                <h2 class="title">My contribution to the project</h2>
                <p class="subtitle">I have been involved as a game designer since the beginning of the project along with 3 other colleagues in a project of more than 30 people. Below, I will detail my contributions in different sections.</p>
                <div class="categories">
                    <div class="row customRow">
                        <div class="col-lg-4 topCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Level Design</h3>
                                    <p class="cardDesc">I have been mainly dedicated to the design of the second level of the game.</p>
                                    <a href="#TSLevelDesign_En"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
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
                                    <h3 class="cardTitle">System Design</h3>
                                    <p class="cardDesc">In addition to contributing to the ideation and design of the mechanics, I have made numerous prototypes of all of them.</p>
                                    <a href="#TSSystemDesign_En"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rectangleDecoration"></div>
                    <div class="row customRow">
                        <div class="col-lg-4 bottomCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Gameplay Design</h3>
                                    <p class="cardDesc">When designing the second level, I have taken into account the desired difficulty curve and the experience to be achieved with each challenge.</p>
                                    <a href="#TSGameplayDesign_En"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
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
                                    <h3 class="cardTitle">Initial Concept</h3>
                                    <p class="cardDesc">The initial concept has gone through several phases and has changed considerably since its inception.</p>
                                    <a href="#TSConcept_En"><button class="btn cardBtn"><span class="textBtn">M O R E</span></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sections evenSection" id="TSLevelDesign_En">
            <div class="sectionDecoration"></div>
                <div class="col-lg-6">
                    <h3 class="title sectionTitle">Diseño de Niveles</h3>
                    <div class="sectionBody">
                        <p>Of the two levels that this vertical slice has, I have made the design of the second one together with another colleague. One of the several rooms that I have designed has been this one that we can see in the image on the right.</p>
                        <ol>
                            <li>From the previous room we enter the corridor in Tenebris mode.</li>
                            <li>From the previous room we enter the corridor in Silentium mode.</li>
                            <li>Hidden corridor that allows you to skip part of the room. When you exit the previous room in Tenebris mode, your own wave illuminates this corridor.</li>
                            <li>Long corridor that allows you to analyze the puzzle of the next room as you advance. In Tenebris you can analyze the enemies, their routes and use the clock as a guide.</li>
                            <li>6. 7. The motivation of this room is to confront static enemies that stand on themselves looking to the sides. Taking advantage of the corners, you must advance in Silentium when he looks the other way, switch to Tenebris so he doesn't see you when he turns, and switch back to Silentium to advance on his side.</li>
                            <li>Clock as a visual and audible guide in both modes to show you the right way.</li>
                            <li>The distance from the stationary enemy to the wall is too short to walk past in Tenebris mode. The player must time the other patrolling enemy to go through the balcony on the right, switch to Tenebris and stay still so he doesn't get caught, and move forward once the enemy has continued his patrol.</li>
                        </ol>
                    </div>
                    
                </div>
                <div class="col-lg-6 imgCol">
                    <img src="assets/images/TsarSecrets/Room6.jpg" class="sectionImg">
                </div>
            </section>
            <section class="sections evenSection" id="TSGameplayDesign_En">
            <div class="sectionDecoration"></div>
                <div class="col-lg-6">
                    <h3 class="title sectionTitle">Gameplay Design</h3>
                    <div class="sectionBody">
                        <p>When designing the levels we have taken into account 3 principles:</p>
                        <ol>
                            <li>Force the player to use the 2 modes to overcome the various challenges.</li>
                            <li>Get the player to stop and analyze the challenge before trying to pass it.</li>
                            <li>Achieve a tight difficulty curve with intermediate peaks of difficulty and rest areas.</li>
                        </ol>
                        <p>For the first principle we have included certain situations as we can see in the first gif on the right which is a part of a larger room with more interconnected challenges.</p>
                        <p>For the second principle we have adjusted the levels to force the player to use Tenebris or Silentium mode while walking close to the challenge from a safe position that allows him to analyze the level as he approaches it.</p>
                        <p>For the third principle we devised a difficulty curve separated by rooms in which we have intermediate peaks of increasing difficulty followed by rest areas and checkpoints strategically placed to increase or decrease the intensity of the zones.</p>
                        <img src="assets/images/TsarSecrets/Difficulty.jpg" class="sectionImg">
                    </div>
                    
                </div>
                <div class="col-lg-6 imgCol2">
                    <img src="assets/images/TsarSecrets/CambioModoGif.gif" class="sectionImg">
                    <img src="assets/images/TsarSecrets/PasilloGif.gif" class="sectionImg">
                </div>
            </section>
            <section class="sections evenSection" id="TSSystemDesign_En">
            <div class="sectionDecoration"></div>
                <div class="col-lg-6">
                    <h3 class="title sectionTitle">System Design</h3>
                    <div class="sectionBody">
                        <p>During the initial phases of the project, we focused on closing and defining the core loop of the game and with it, the main mechanic: the mode change.</p>
                        <p>The game has two modes: Silentium and Tenebris. Each one fulfills a special function in solving the puzzles.</p>
                        <ul>
                            <li><span class="bold">Silentium</span> allows us to see the level clearly, where exactly the enemies are, where they are looking and serves as a familiar resource to adapt to the game.<br/>But it has a problem, its range is short and does not allow us to see through walls.</li>
                            <li><span class="bold">Tenebris</span> works as an antithesis of the other mode. Nos permite "ver" a gran distancia, a través de las paredes pudiendo así analizar el puzle entero y encontrar los relojes que sirven de guia. It also allows us to pass unnoticed in the noses of an enemy, as long as we do not emit noise.<br/>Its downside, as we can see in the images, is that the structure of the level is not as clear as in Silentium and we have to look at the outline of the objects that draw the waves to guide us.</li>
                        </ul>
                        <p>This mode change also affects the enemies, which change their detection mode depending on which mode you are in.</p>
                    </div>
                </div>
                <div class="col-lg-6 imgCol">
                    <img src="assets/images/TsarSecrets/Silentium.jpg" class="sectionImg">
                    <img src="assets/images/TsarSecrets/Tenebris.jpg" class="sectionImg">
                </div>
            </section>
            <section class="sections evenSection" id="TSConcept_En">
            <div class="sectionDecoration"></div>
                <div class="col-lg-12">
                    <h3 class="title sectionTitle">initial Concept</h3>
                    <div class="sectionBody finalRowBody">
                        <p>The initial concept of the game has gone through many phases. Here are some links about the initial concept of the game and how it has evolved into The Tsar Secret.</p>
                        <a href="https://germiesqui.github.io/portfolioWebPage/assets/TimeKollapsed_Concept.pdf" target="_blank" type="button" class="btn btn-primary CVbtnLink">Initial Concept</a>
                        <a href="https://germiesqui.github.io/portfolioWebPage/assets/TimeKollapsed_Tratamiento.pdf" target="_blank" type="button" class="btn btn-primary CVbtnLink">Initial Concept 10 peger</a>
                        <a href="https://germiesqui.github.io/portfolioWebPage/assets/TheTsarSectrets_Tratamiento.pdf" target="_blank" type="button" class="btn btn-primary CVbtnLink">Final Idea 10 pager</a>
                    </div>
                </div>
            </section>
        </div>
        `,
        codeSourceUrl: 'https://store.steampowered.com/app/2079410/The_Tsars_Secret/',
        hasSteam: true,
        detailIsDisplayed: false,
    },
    {
        id: "electraProject",
        name: "Electra Project (WIP)",
        functions: 'Designer, Programmer',
        images: [
            {
                title: "Project Electra Main Page",
                src: "assets/images/WIP_Banner.png",
            },
        ],
        url: '',
        videoId: "",
        detail: `
        <div class="details">
            <p class="gameDesc">Project Electra is a game in development that aims to combine the combat of deckbuilders like Slay the Spire and Inscryption with the architecture of a classic RPG and a deck resource management system.</p>
            <section class="mainSection">
                <h2 class="title">Mi contributon to the project</h2>
                <p class="subtitle">We are currently 2 people in the project and we are both dedicated to the design and programming of the project.</p>
                <div class="categories">
                    <div class="row customRow">
                        <div class="col-lg-4 topCategoriesCol">
                            <div class="card bg-white shadow-lg category">
                                <div class="card-body cardBodyCustom">
                                    <h3 class="cardTitle">Concept Document</h3>
                                    <p class="cardDesc">Initial document where I briefly present the idea.</p>
                                    <a href="https://germiesqui.github.io/portfolioWebPage/assets/ProjectElectra_Concept.pdf"><button class="btn cardBtn"><span class="textBtn">O P E N</span></button></a>
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
                                    <h3 class="cardTitle">Combat Design</h3>
                                    <p class="cardDesc">One of the first points has been to define the game's combat.</p>
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
                    <h3 class="title sectionTitle">Combat Design</h3>
                    <div class="sectionBody finalRowBody">
                        <p>Combat is intended to put a slight twist on the Slay the Spire combat scheme. While <b>in Slay the Spire the strategy focuses on optimizing the current turn</b> with the cards you have available and knowing what the enemy is going to do next turn, <b>our game will incorporate a cross-combat strategy for the entire combat.</b></p>
                        <p>For this we will make you have 2 decks. These decks work similarly to those in Inscryption.</p>
                        <ul>
                            <li><p>We will have a <b>basic deck</b> that will allow us to generate resources immediately and will reward the player in the medium term if this card is used optimally. (<span class="italic">Ex: After using this card, you get 2 extra resource if in the next turn, the enemy inflicts damage on you.</span>)</p>
                            <li><p>We will have another <b>artifact deck</b>. This deck will contain the player's interesting actions that will serve mainly to attack or protect themselves. These cards consume resource that are NOT automatically regenerated as in Slay the Spire.</p></li>
                        </ul>
                        <p>In addition, artifact cards are single-use. This creates a dynamic to optimize the use of these cards and generates a post-combat card creation loop that ties in with the resource management system.</p>
                        <p>The intention is for the player to rely on the information of his cards in hand, the probability of his remaining cards to draw and his knowledge of enemy actions to form a long-term strategy (combat strategy).</p>
                    </div>
                </div>
            </section>
        </div>
        `,
        codeSourceUrl: '',
        hasSteam: false,
        detailIsDisplayed: false,
    }
];


/***/ }),

/***/ "+orD":
/*!*************************************!*\
  !*** ./src/app/api/referencesEs.ts ***!
  \*************************************/
/*! exports provided: referencesEs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referencesEs", function() { return referencesEs; });
const referencesEs = [
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Velghe Walter',
        personPosition: "IT Plant Manager",
        personCompany: 'Agc glass europe',
        message: "Zinedine est très efficace dans le développement d'applications et dans leur maintenance, innovante et rationnelle. Coder comme style de vie, son travail propose des produits de haute qualité, suivant les normes et les meilleures pratiques. Il a réalisé trois projets sur notre site et je suis tellement impressionné par ses techniques. Il a toujours une pensée critique. Il est toujours prêt à relever des défis.",
    },
    {
        personImg: "assets/images/lotfi-benkhider.jpg",
        personFullname: 'Benkhider Lotfi',
        personPosition: "CEO & Founder",
        personCompany: 'Scotfy',
        message: "Zinedine a effectué son stage dans mon entreprise. Il est indépendant et a une grande capacité d'apprentissage. Il respecte les délais de livraison. Il a l'esprit d'équipe. Zinedine n'hésite pas à proposer de nouvelles idées pertinentes. Il respecte les consignes, son code est propre.",
    },
    {
        personImg: "assets/images/mohamed-yahiatene.jpg",
        personFullname: 'Yahiatene Mohamed',
        personPosition: "DevOps Engineer",
        personCompany: 'AG2R La Mondiale',
        message: "J'ai travaillé pendant deux ans avec Zinedine à l'Université de Lille. Zinedine est un très bon partenaire de travail avec une grande connaissance du développement backend et frontend, il est toujours désireux d'aller de l'avant sans jamais avoir peur d'utiliser de nouvelles technologies. Il n'hésite pas à aider ses collègues chaque fois qu'il le peut. Il parvient à résoudre les problèmes rapidement et efficacement avec un optimisme typique.",
    }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documentos\GitHub\portfolioWebPage\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









class AboutComponent {
    constructor(_translationLoaderService) {
        this._translationLoaderService = _translationLoaderService;
        this.linkedinUrl = "https://www.linkedin.com/in/germ%C3%A1n-esquinazi-bachoer-5961541a3/";
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_3__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_4__["locale"]);
    }
    ngOnInit() {
        this.mapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarker"];
        this.building = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCity"];
        this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMailBulk"];
        this.phone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.birthday = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBirthdayCake"];
        this.badge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopHouse"];
        this.itchio = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faItchIo"];
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 54, vars: 30, consts: [["id", "about"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-right", 1, "col-lg-4", "col-md-12"], ["src", "assets/images/Foto2020.jpg", "alt", "profile photo", 1, "img-fluid"], [1, "d-flex", "justify-content-center"], ["rel", "tooltip", "target", "_blank", 1, "btn-social-media", 3, "href", "title"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://germiesqui.itch.io/", "rel", "tooltip", "target", "_blank", 1, "btn-social-media", "btn-default", "btn-round", "btn-lg", "btn-icon", 3, "title"], [1, "fa", "itchio", 3, "icon"], ["data-aos", "fade-left", 1, "col-lg-8", "col-md-12", "pt-4", "pt-lg-0"], [1, "font-italic"], [1, "col-lg-6", "col-md-6"], [3, "icon"], ["href", "mailto:german@esquinazi.com"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Alcobendas, Madrid, Espa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " german@esquinazi.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " +34 648794898 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, "about.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 16, "about.followMeOn"), " LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedinUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "about.followMeOn"), " Itch.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.itchio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, "about.jobTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 22, "about.introductionOfMe"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.building);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.badge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 24, "about.graduation"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 26, "about.researchDescription"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 28, "about.whyVideogames"));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    color: #149ddd;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: #dff3fc;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n    margin-right: 10px;\r\n}\r\n\r\n.itchio[_ngcontent-%COMP%]{\r\n    margin-right: 0;\r\n    font-size: 1.33333333em;\r\n    border-radius: 10px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  font-weight: 700;\r\n    font-size: 26px;\r\n    color: #173b6c;\r\n}\r\n\r\n.btn-social-media[_ngcontent-%COMP%]{\r\n  border-radius: 50px;\r\n  width: 40px;\r\n  height: 40px;\r\n  color: #ffffff;\r\n  align-items: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  background: #149ddd;\r\n  margin-right:10px;\r\n  margin-left:10px;\r\n  margin-top:10px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5mYS1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMxNDlkZGQ7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZmYzZmM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLml0Y2hpb3tcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMS4zMzMzMzMzM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaDN7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjMTczYjZjO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1tZWRpYXtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxNDlkZGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function () { return { backgroundImage: "url(assets/images/banner4.jpg)" }; };
class HomeComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.options = {
            strings: ['', 'Levels', 'Systems', 'Technical'],
            typeSpeed: 230,
            backSpeed: 230,
            loop: true,
        };
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__["locale"]);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
            }
            else {
            }
        });
    }
    ngOnInit() {
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('.typed', this.options);
        typed.reset(true);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 5, consts: [["id", "home", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center", 3, "ngStyle"], ["data-aos", "fade-in", 1, "hero-container", "aos-init", "aos-animate"], [1, "mt-3"], [1, "typed"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Germ\u00E1n Esquinazi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "home.iAmDeveloper"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["#home[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 35vh;\r\n    background: top center;\r\n    background-size: cover;\r\n}\r\n\r\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    margin-bottom: 50px;\r\n    font-size: 26px;\r\n    font-family: \"Poppins\", sans-serif;\r\n    display: block;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color: #fff; \r\n}\r\n\r\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    padding-bottom: 4px;\r\n    letter-spacing: 1px;\r\n    border-bottom: 3px solid #149ddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgYmFja2dyb3VuZDogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNob21lIHB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDF7XHJcbiAgICBjb2xvcjogI2ZmZjsgXHJcbn1cclxuXHJcbiNob21lIHAgc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxNDlkZGQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "AY9o":
/*!****************************************************************!*\
  !*** ./src/app/curriculum-vitae/curriculum-vitae.component.ts ***!
  \****************************************************************/
/*! exports provided: CurriculumVitaeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumVitaeComponent", function() { return CurriculumVitaeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var _api_experiencesEs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/experiencesEs */ "JAW2");
/* harmony import */ var _api_experiencesEn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/experiencesEn */ "CnTy");
/* harmony import */ var _api_publicationsEs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/publicationsEs */ "D7yZ");
/* harmony import */ var _api_publicationsEn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/publicationsEn */ "Hq7e");
/* harmony import */ var _api_vgExperiencesEs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/vgExperiencesEs */ "aVFq");
/* harmony import */ var _api_vgExperiencesEn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/vgExperiencesEn */ "rMl8");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");















function CurriculumVitaeComponent_li_46_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_46_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_46_p_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "education.mission"), " ", index_r9 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mission_r8, " ");
} }
function CurriculumVitaeComponent_li_46_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurriculumVitaeComponent_li_46_p_13_span_1_Template, 6, 5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", publication_r3.missions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "education.technologies"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r3.technologies, " ");
} }
function CurriculumVitaeComponent_li_46_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurriculumVitaeComponent_li_46_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const publication_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.detailOnClick($event, publication_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CurriculumVitaeComponent_li_46_span_9_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CurriculumVitaeComponent_li_46_span_10_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CurriculumVitaeComponent_li_46_p_13_Template, 6, 5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](publication_r3.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.publications.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.publications.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "education.detail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", publication_r3.detailIsDisplayed);
} }
function CurriculumVitaeComponent_li_53_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_53_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_53_p_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "education.mission"), " ", index_r19 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mission_r18, " ");
} }
function CurriculumVitaeComponent_li_53_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurriculumVitaeComponent_li_53_p_13_span_1_Template, 6, 5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vgExperience_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vgExperience_r13.missions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "education.technologies"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vgExperience_r13.technologies, " ");
} }
function CurriculumVitaeComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurriculumVitaeComponent_li_53_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const vgExperience_r13 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.detailOnClick($event, vgExperience_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CurriculumVitaeComponent_li_53_span_9_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CurriculumVitaeComponent_li_53_span_10_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CurriculumVitaeComponent_li_53_p_13_Template, 6, 5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vgExperience_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vgExperience_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vgExperience_r13.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vgExperience_r13.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !vgExperience_r13.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vgExperience_r13.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "education.detail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vgExperience_r13.detailIsDisplayed);
} }
function CurriculumVitaeComponent_li_59_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_59_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurriculumVitaeComponent_li_59_p_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r28 = ctx.$implicit;
    const index_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "education.mission"), " ", index_r29 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mission_r28, " ");
} }
function CurriculumVitaeComponent_li_59_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurriculumVitaeComponent_li_59_p_13_span_1_Template, 6, 5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r23.missions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "education.technologies"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r23.technologies, " ");
} }
function CurriculumVitaeComponent_li_59_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurriculumVitaeComponent_li_59_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const experience_r23 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.detailOnClick($event, experience_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CurriculumVitaeComponent_li_59_span_9_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CurriculumVitaeComponent_li_59_span_10_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CurriculumVitaeComponent_li_59_p_13_Template, 6, 5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r23.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r23.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !experience_r23.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r23.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "education.detail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r23.detailIsDisplayed);
} }
class CurriculumVitaeComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.experiences = _api_experiencesEs__WEBPACK_IMPORTED_MODULE_4__["experiencesEs"];
        this.publications = _api_publicationsEs__WEBPACK_IMPORTED_MODULE_6__["publicationsEs"];
        this.vgExperiences = _api_vgExperiencesEs__WEBPACK_IMPORTED_MODULE_8__["vgExperiencesEs"];
        this.cvLink = "https://germiesqui.github.io/portfolioWebPage/assets/CV_Game_Industry_2022_Es.pdf";
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_3__["locale"]);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.experiences = _api_experiencesEn__WEBPACK_IMPORTED_MODULE_5__["experiencesEn"];
                this.publications = _api_publicationsEn__WEBPACK_IMPORTED_MODULE_7__["publicationsEn"];
                this.vgExperiences = _api_vgExperiencesEn__WEBPACK_IMPORTED_MODULE_9__["vgExperiencesEn"];
                this.cvLink = "https://germiesqui.github.io/portfolioWebPage/assets/CV_GameDesign_2022_En.pdf";
            }
            else {
                this.experiences = _api_experiencesEs__WEBPACK_IMPORTED_MODULE_4__["experiencesEs"];
                this.publications = _api_publicationsEs__WEBPACK_IMPORTED_MODULE_6__["publicationsEs"];
                this.vgExperiences = _api_vgExperiencesEs__WEBPACK_IMPORTED_MODULE_8__["vgExperiencesEs"];
                this.cvLink = "https://germiesqui.github.io/portfolioWebPage/assets/CV_GameDesign_2022_Es.pdf";
            }
        });
    }
    ngOnInit() {
        this.planeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlane"];
        this.gameIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGamepad"];
        this.volleyBallIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolleyballBall"];
    }
    detailOnClick(event, experience) {
        experience.detailIsDisplayed = !experience.detailIsDisplayed;
        event.currentTarget.blur();
    }
}
CurriculumVitaeComponent.ɵfac = function CurriculumVitaeComponent_Factory(t) { return new (t || CurriculumVitaeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_10__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"])); };
CurriculumVitaeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurriculumVitaeComponent, selectors: [["app-curriculum-vitae"]], decls: 128, vars: 82, consts: [["id", "cv"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], [1, "timeline"], [1, "font-italic"], [1, "year", "p-2", "d-flex", "justify-content-center"], [4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-12", "aos-init", "aos-animate"], [1, "container", "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "aos-init", "aos-animate"], [1, "noProgress", "langue"], [1, ""], ["src", "assets/images/spanish-flag.png", "width", "20", "alt", "spanish-flag"], [1, "val"], ["src", "assets/images/united-kingdom-flag.png", "width", "20", "alt", "english-flag"], [1, "englishTitle"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "mt-3", "aos-init", "aos-animate"], [3, "icon"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-12", "col-md-12", "aos-init", "aos-animate", "CVbtn"], [1, "container", "row", "CVbtnRowContainer"], [1, "noProgress"], ["target", "_blank", "type", "button", 1, "btn", "btn-primary", "CVbtnLink", 3, "href"], [1, "d-flex", "flex-row"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"]], template: function CurriculumVitaeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2021 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2018 - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2015 - 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CurriculumVitaeComponent_li_46_Template, 14, 9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CurriculumVitaeComponent_li_53_Template, 14, 9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CurriculumVitaeComponent_li_59_Template, 14, 9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 32, "education.title"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 34, "education.eductionTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 36, "education.masterDegreeTwo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 38, "education.university2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 40, "education.erasmus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 42, "education.erasmusUniveristy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 44, "education.masterDegreeOne"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 46, "education.university1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 48, "education.publicationsTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 50, "education.vgExperiencesTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vgExperiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 52, "education.experiencesTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 54, "education.languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 56, "education.spanish"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 58, "education.fluent"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 60, "education.english"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 62, "education.goodLevel"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 64, "education.englishTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 66, "education.centerOfInterest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.volleyBallIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 68, "education.sport"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](102, 70, "education.sportDetails"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.planeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 72, "education.hobby"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](111, 74, "education.hobbyDetails"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.gameIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 76, "education.boardGames"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 78, "education.boardGamesDetails"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.cvLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](127, 80, "education.openCV"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["ul.timeline[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    position: relative;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: #105572;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 29px;\r\n    width: 2px;\r\n    height: 100%;\r\n    z-index: 400;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    color: #050d18;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-family: \"Raleway\", sans-serif;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    padding-left: 20px;\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: white;\r\n    display: inline-block;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    border: 3px solid #105572;\r\n    left: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 400;\r\n}\r\n\r\n.year[_ngcontent-%COMP%] {\r\n    background-color: #e4edf9; \r\n    width: 190px; \r\n    padding-left: 5px;\r\n    margin-right: 5px;\r\n    height: 40px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\n.langue[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    color: #149ddd;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: #dff3fc;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.CVbtn[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\r\n\r\n.CVbtnRowContainer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.CVbtnLink[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.englishTitle[_ngcontent-%COMP%]{\r\n    padding-left: 22px;\r\n    font-style: italic;\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJpY3VsdW0tdml0YWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImN1cnJpY3VsdW0tdml0YWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLnRpbWVsaW5lIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxudWwudGltZWxpbmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGJhY2tncm91bmQ6ICMxMDU1NzI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyOXB4O1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDQwMDtcclxufVxyXG5cclxuLnNraWxscyAucmVzdW1lLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMDUwZDE4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnVsLnRpbWVsaW5lID4gbGkge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbnVsLnRpbWVsaW5lID4gbGk6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzEwNTU3MjtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDQwMDtcclxufVxyXG5cclxuLnllYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZWRmOTsgXHJcbiAgICB3aWR0aDogMTkwcHg7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ubGFuZ3VlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmZhLWljb257XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzE0OWRkZDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RmZjNmYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uQ1ZidG4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5DVmJ0blJvd0NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uQ1ZidG5MaW5rIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW5nbGlzaFRpdGxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurriculumVitaeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-curriculum-vitae',
                templateUrl: './curriculum-vitae.component.html',
                styleUrls: ['./curriculum-vitae.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_10__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BzaH":
/*!*************************************!*\
  !*** ./src/app/api/referencesEn.ts ***!
  \*************************************/
/*! exports provided: referencesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referencesEn", function() { return referencesEn; });
const referencesEn = [
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Velghe Walter',
        personPosition: "IT Plant Manager",
        personCompany: 'Agc glass europe',
        message: "Zinedine is very effective in application development and in their maintenance, innovative and rational. Coding like lifestyle, his work features high quality products, following the standards and best practices. He has completed three projects on our site and I am so impressed with his techniques. He always has a thought criticism. He is always ready to take on challenges.",
    },
    {
        personImg: "assets/images/lotfi-benkhider.jpg",
        personFullname: 'Benkhider Lotfi',
        personPosition: "CEO & Founder",
        personCompany: 'Scotfy',
        message: "Zinedine completed her internship in my company. He is independent and has a great learning ability. He meets delivery deadlines. He has team spirit. Zinedine does not hesitate to propose new relevant ideas. He respects the instructions, its code is clean.",
    },
    {
        personImg: "assets/images/mohamed-yahiatene.jpg",
        personFullname: 'Yahiatene Mohamed',
        personPosition: "DevOps Engineer",
        personCompany: 'AG2R La Mondiale',
        message: "I worked for two years with Zinedine at the University of Lille. Zinedine is a very good working partner with high knowledge in backend and frontend development, he is always keen to move forward without ever being afraid to use new technologies. He does not hesitate to help his colleagues whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    }
];


/***/ }),

/***/ "CnTy":
/*!**************************************!*\
  !*** ./src/app/api/experiencesEn.ts ***!
  \**************************************/
/*! exports provided: experiencesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesEn", function() { return experiencesEn; });
const experiencesEn = [
    {
        title: "QA Tester",
        company: 'Saber Interactive Madrid',
        period: "2022 - Today",
        missions: [
            "System balance with Design team.",
            "Iterative level and game feel design with Design team.",
            "Team management",
            "Performance analysis in all platforms.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Mobile and fullstack web development",
        company: 'Armadillo Amarillo',
        period: "2020 - 2021",
        technologies: 'Angular, Vue, React, Nodejs, Scrum',
        missions: [
            "Frontend team lead in web and mobile application development.",
            "Hybrid mobile and fullstack web applications develper.",
            "Use of Scrum working methodology",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Fullstack web developer",
        company: 'Pixelware',
        period: "2019 (300h)",
        technologies: 'Vue, Javascript, Git, Java',
        missions: [
            "Internship as a fullstack web developer.",
        ],
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ "D7yZ":
/*!***************************************!*\
  !*** ./src/app/api/publicationsEs.ts ***!
  \***************************************/
/*! exports provided: publicationsEs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicationsEs", function() { return publicationsEs; });
const publicationsEs = [
    {
        title: "Paper Científico en proceso de publicación",
        company: 'Enhancing the Analysis of News Articles Against Misinformation using Natural Language Processing Techniques: the DECONews Case Study',
        period: "2020",
        technologies: 'Pyhton, Angular, NPL, Flask',
        missions: [
            "Paper científico en proceso de publicación desarrollado en conjunto con la Universidad Autónoma de Madrid.",
        ],
        detailIsDisplayed: false,
    }
];


/***/ }),

/***/ "HiVs":
/*!********************************************!*\
  !*** ./src/app/service/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ContactService {
    constructor(http) {
        this.http = http;
        this.api = 'https://mailthis.to/';
    }
    postMessage(input) {
        return this.http.post(this.api, input, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response) {
                return response;
            }
        }, (error) => {
            return error;
        }));
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Hq7e":
/*!***************************************!*\
  !*** ./src/app/api/publicationsEn.ts ***!
  \***************************************/
/*! exports provided: publicationsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicationsEn", function() { return publicationsEn; });
const publicationsEn = [
    {
        title: "Scientific paper in process of publication",
        company: 'Enhancing the Analysis of News Articles Against Misinformation using Natural Language Processing Techniques: the DECONews Case Study',
        period: "2020",
        technologies: 'Pyhton, Angular, NPL, Flask',
        missions: [
            "Scientific paper in process of publication developed in collaboration with Universidad Autónoma de Madrid.",
        ],
        detailIsDisplayed: false,
    }
];


/***/ }),

/***/ "Iiyf":
/*!***********************************!*\
  !*** ./src/app/api/gamejamsEs.ts ***!
  \***********************************/
/*! exports provided: gamejamsEs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamejamsEs", function() { return gamejamsEs; });
const gamejamsEs = [
    {
        id: "holodiscChampionship",
        name: "Holodisc Championship",
        functions: 'General Designer, Programmer, QA',
        images: [
            {
                title: 'Main Page',
                src: "assets/images/HolodiscChampionship/hd_Banner.png",
            },
            {
                title: 'Gameplay',
                src: "assets/images/HolodiscChampionship/hd_2.jpg",
            },
            {
                title: 'Menu',
                src: "assets/images/HolodiscChampionship/hd_3.png",
            },
        ],
        url: "https://gamesthattastelikegarlic.itch.io/holodisc-championship",
        videoId: "",
        detail: `
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
        codeSourceUrl: 'https://gamesthattastelikegarlic.itch.io/holodisc-championship',
        detailIsDisplayed: false,
        hasSteam: false,
    },
    {
        id: "spiritCave",
        name: "Spirit Cave",
        functions: 'Level Designer, System Designer, Sound Designer, QA',
        images: [
            {
                title: 'Main Page',
                src: "assets/images/SpiritCave_MainPage.png",
            },
            {
                title: 'Screenshot Personaje Fantasma',
                src: "assets/images/SpiritCave_2.jpg",
            },
            {
                title: 'Screenshot Personaje',
                src: "assets/images/SpiritCave_3.jpg",
            },
        ],
        url: "https://germiesqui.itch.io/spirit-cave",
        videoId: "gpjd0Jl6Sik",
        detail: `
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
        codeSourceUrl: 'https://germiesqui.itch.io/spirit-cave',
        detailIsDisplayed: false,
        hasSteam: false,
    }
];


/***/ }),

/***/ "JAW2":
/*!**************************************!*\
  !*** ./src/app/api/experiencesEs.ts ***!
  \**************************************/
/*! exports provided: experiencesEs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesEs", function() { return experiencesEs; });
const experiencesEs = [
    {
        title: "QA Tester",
        company: 'Saber Interactive Madrid',
        period: "2022 - Actual",
        missions: [
            "Balanceo de sistemas en conjunción con el departamento de diseño.",
            "Diseño iterativo de niveles y sensación de juego en conjunción con el departamento de diseño.",
            "Gestion de equipos.",
            "Análisis de rendimiento en todas las plataformas."
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Desarollador Móvil y Desarrollador Web fullstack",
        company: 'Armadillo Amarillo',
        period: "2020 - 2021",
        technologies: 'Angular, Vue, React, Nodejs, Scrum',
        missions: [
            "Responsable del equipo frontend de Armadillo Amarillo.",
            "Desarrollador de aplicaciones móviles híbridas y web fullstack.",
            "Metodología de trabajo Scrum.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Desrrollador Web Fullstack",
        company: 'Pixelware',
        period: "2019 (300h)",
        technologies: 'Vue, Javascript, Git, Java',
        missions: [
            "Prácticas en empresa como desarrollador web fullstack.",
        ],
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ "P0iy":
/*!***********************************!*\
  !*** ./src/app/shared/i18n/en.ts ***!
  \***********************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'en',
    data: {
        'about': {
            'title': 'About Me',
            'jobTitle': 'Game Designer',
            'introductionOfMe': 'Interested in level and gameplay design, UX/UI and accesibility.',
            'passionateAboutDevelopment': '-',
            'mobility': '-',
            'years': '-',
            'graduation': "Master's in Game Design",
            'myResearch': '-',
            'researchDescription': "Since I was a kid, I grew up with videogames. I remember the first game I played was Warcraft 3 and it laid the foundation for my love of fantasy. From that seed, came my love for reading, crafts, tabletop rpg and a lot of other things.",
            'and': '-',
            'whyVideogames': "Videogames leave a mark on you, teach you life lessons and connect you with other people, and that's why I decided to become a game designer.",
            'followMeOn': 'Follow me on',
        },
        'contact': {
            'contactMe': 'Contact Me',
            'notHesitateToContactMe': 'Do not hesitate to contact me',
            'identify': 'Identify',
            'enterIdentify': 'Enter your identify',
            'email': 'Email',
            'enterEmail': 'Enter your email',
            'object': 'Object',
            'enterObject': 'Enter object',
            'message': 'Message',
            'send': 'Send',
        },
        'education': {
            'title': 'Curriculum Vitae',
            'eductionTitle': 'Education',
            'experiencesTitle': 'Professional Experience',
            'vgExperiencesTitle': 'Game Design Experience',
            'publicationsTitle': 'Publications',
            'centerOfInterest': 'Extracurricular Activities',
            'sport': 'Sports',
            'sportDetails': 'Voleyball, Capoeira, Basketball',
            'hobby': 'Hobbies',
            'hobbyDetails': 'Videogames, Leatherworking, Electronics, 3D Modeling',
            'boardGames': 'Dungeon Master',
            'boardGamesDetails': 'in DnD for 5 years',
            'languages': 'Languages',
            'fluent': 'Native',
            'goodLevel': 'Fluent written and spoken',
            'englishTitle': 'English Cambridge B2 Certificate',
            'spanish': 'Spanish',
            'english': 'English',
            'masterDegreeTwo': "Master's in Game Design",
            'masterDegreeTwoDesc': "-",
            'masterDegreeOne': "Computer Science Degree",
            'masterDegreeOneDesc': "-",
            'erasmus': "Erasmus in Sweden",
            'bachlorDegreeDesc': "-",
            'erasmusUniveristy': 'Linnaeus Universitet, Växjö, SWE',
            'university1': 'Universidad Autonoma de Madrid, ES',
            'university2': 'Universidad Complutense de Madrid, ES',
            'bachelor': 'Ignacio Ellacuria, ES',
            'mission': 'Mission',
            'technologies': 'Technologies',
            'openCV': 'Open Curriculum',
            'detail': 'Detail',
            'tripsCountries': '-',
            'boardGamesPlayed': '-',
            'years': '-'
        },
        'header': {
            'home': 'Home',
            'about': 'About',
            'skills': 'Skills',
            'references': 'References',
            'contactMe': 'Contact me',
            'spanish': 'Spanish',
            'english': 'English',
        },
        'home': {
            'iAmDeveloper': 'I am game designer',
        },
        'projects': {
            'title': 'Projects',
            'subcategory': 'Game Jams',
            'projectDetail': 'Project detail',
            'Itchio': 'Itch.io',
            'Steam': 'Steam',
            'technologiesTitle': 'Functions',
        },
        'references': {
            'title': 'References',
        },
        'skills': {
            'title': 'Skills',
            'technologies': 'Technologies',
            'tools': 'Tools',
            'methodologies': 'Methodologies'
        },
    }
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");








class AppComponent {
    constructor(_translateService) {
        this._translateService = _translateService;
        this._translateService.addLangs(['en', 'es']);
        this._translateService.setDefaultLang('es');
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        if (!localStorage.getItem("lang")) {
            localStorage.setItem("lang", 'es');
        }
        let lang = localStorage.getItem("lang");
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-curriculum-vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #01557a;\r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    vertical-align: middle;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      margin: 10px 0px ;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NTdhO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5mb290ZXIgcHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweCA7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./references/references.component */ "en7e");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/contact.service */ "HiVs");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _service_contact_service__WEBPACK_IMPORTED_MODULE_23__["ContactService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YouTubePlayerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YouTubePlayerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_21__["YouTubePlayerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot(),
                ],
                providers: [
                    _service_contact_service__WEBPACK_IMPORTED_MODULE_23__["ContactService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aVFq":
/*!****************************************!*\
  !*** ./src/app/api/vgExperiencesEs.ts ***!
  \****************************************/
/*! exports provided: vgExperiencesEs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vgExperiencesEs", function() { return vgExperiencesEs; });
const vgExperiencesEs = [
    {
        title: "Game Designer",
        company: "The T'sar Secret",
        period: "2021 - 2022 (1 año)",
        technologies: 'Unreal Engine, Perforce, Scrum',
        missions: [
            "Diseño de niveles.",
            "Diseño de sistemas.",
            "Diseño de gameplay.",
            "Prototipado con blueprints."
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Game Designer",
        company: "Holodisc Championship",
        period: "GMTK 2023",
        technologies: 'Unity, GitHub',
        missions: [
            "Balanceo de mecanicas.",
            "Diseño de gameplay.",
            "Programacion en C#.",
            "QA"
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Game Designer",
        company: "Spirit Cave",
        period: "Global Game Jam 2022",
        technologies: 'Unreal Engine, Perforce',
        missions: [
            "Diseño de niveles.",
            "Diseño de sistemas.",
            "Diseño de sonido.",
            "Prototipado con blueprints.",
            "QA"
        ],
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ "bpQU":
/*!***********************************!*\
  !*** ./src/app/shared/i18n/es.ts ***!
  \***********************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'es',
    data: {
        'about': {
            'title': 'Sobre Mi',
            'jobTitle': "Diseñador de videojuegos",
            'introductionOfMe': "Interesado en el diseño de niveles y gameplay, UX/UI y accesibilidad.",
            'passionateAboutDevelopment': ' -',
            'mobility': '-',
            'years': '-',
            'graduation': "Master en diseño de videojuegos",
            'myResearch': '-',
            'researchDescription': "Desde pequeño, me he criado con videojuegos. Recuerdo que el primer juego que me pasé fue el Warcraft 3 y sentó las bases de mi amor por la fantasía. De esa semilla, surgió mi gusto por la lectura, las manualidades, el rol y un montón de cosas más.",
            'and': '-',
            'whyVideogames': "Los videojuegos te marcan, te enseñan lecciones de vida y te conectan con otras personas y, por eso mismo, decidí dedicarme al diseño de videojuegos.",
            'followMeOn': 'Sigueme en',
        },
        'contact': {
            'contactMe': 'Contacta conmigo',
            'notHesitateToContactMe': "No dudes en contectar conmigo",
            'identify': 'Nombre',
            'enterIdentify': 'Introduzca su nombre',
            'email': 'Email',
            'enterEmail': 'Introduzca su email',
            'object': 'Asunto',
            'enterObject': "Introduzca el asunto",
            'message': 'Mensaje',
            'send': 'Enviar',
        },
        'education': {
            'title': 'Curriculum Vitae',
            'eductionTitle': 'Educación',
            'experiencesTitle': 'Experiencia Laboral',
            'vgExperiencesTitle': 'Experiencia Game Designer',
            'publicationsTitle': 'Publicaciones',
            'centerOfInterest': "Actividades Extracurriculares",
            'sport': 'Deportes',
            'sportDetails': 'Voleyball, Capoeira, Baloncesto',
            'hobby': 'Hobbies',
            'hobbyDetails': 'Videojuegos, Talabarteria, Electronica, Modelado 3D',
            'boardGames': 'Dungeon Master',
            'boardGamesDetails': 'en DnD durante 5 años',
            'languages': 'Idiomas',
            'fluent': 'Nativo',
            'goodLevel': 'Fluido hablado y escrito',
            'englishTitle': 'Título de Inglés Cambridge B2',
            'spanish': 'Español',
            'english': 'Inglés',
            'masterDegreeTwo': "Master en Diseño de videojuegos",
            'masterDegreeTwoDesc': "-",
            'masterDegreeOne': "Grado en Ingeniería Informática",
            'masterDegreeOneDesc': "-",
            'erasmus': "Erasmus en Suecia",
            'bachlorDegreeDesc': "-",
            'erasmusUniveristy': 'Linnaeus Universitet, Växjö, SWE',
            'university1': 'Universidad Autónoma de Madrid, ES',
            'university2': 'Universidad Complutense de Madrid, ES',
            'bachelor': 'Ignacio Ellacuria, ES',
            'mission': 'Función',
            'technologies': 'Tecnologías',
            'openCV': 'Abrir Curriculum',
            'detail': 'Detalle',
            'tripsCountries': '-',
            'boardGamesPlayed': '-',
            'years': '-'
        },
        'header': {
            'home': 'Inicio',
            'about': 'Sobre Mi',
            'skills': 'Competencias',
            'references': 'Referencias',
            'contactMe': 'Contacto',
            'spanish': 'Español',
            'english': 'Inglés',
        },
        'home': {
            'iAmDeveloper': 'Game designer',
        },
        'projects': {
            'title': 'Proyectos',
            'subcategory': 'Game Jams',
            'projectDetail': 'Detalles',
            'Itchio': 'Itch.io',
            'Steam': 'Steam',
            'technologiesTitle': 'Funciones',
        },
        'references': {
            'title': 'Referencias',
        },
        'skills': {
            'title': 'Competencias',
            'technologies': '-',
            'tools': '-',
            'methodologies': '-'
        },
    }
};


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/contact.service */ "HiVs");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









class ContactComponent {
    constructor(_translationLoaderService, builder, contact) {
        this._translationLoaderService = _translationLoaderService;
        this.builder = builder;
        this.contact = contact;
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_3__["locale"]);
    }
    ngOnInit() {
        this.FormData = this.builder.group({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            object: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit(FormData) {
        console.log(FormData);
        this.contact.postMessage(FormData).subscribe(response => {
            location.href = 'https://mailthis.to/confirm';
            console.log(response);
        }, error => {
            console.warn(error.responseText);
            console.log({ error });
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 50, vars: 32, consts: [["id", "contact"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "row"], [1, "col-md-3", "col-lg-3"], [1, "contact-info"], ["src", "assets/images/contact-image.png", "alt", "image"], [1, "col-md-9"], [1, "contact-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "fullname", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["formControlName", "fullname", "aria-describedby", "emailHelp", "type", "text", "id", "fullname", "name", "fullname", 1, "form-control", 3, "placeholder"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "email", 1, "control-label", "col-sm-2"], ["formControlName", "email", "type", "email", "id", "email", "name", "email", 1, "form-control", 3, "placeholder"], ["for", "object", 1, "control-label", "col-sm-2"], ["formControlName", "object", "type", "text", "id", "object", "name", "object", 1, "form-control", 3, "placeholder"], ["for", "comment", 1, "control-label", "col-sm-2"], ["formControlName", "comment", "rows", "5", "id", "comment", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-default", 3, "disabled"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(ctx.FormData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, "contact.contactMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, "contact.notHesitateToContactMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.FormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "contact.identify"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 18, "contact.enterIdentify"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 20, "contact.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 22, "contact.enterEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 24, "contact.object"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 26, "contact.enterObject"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 28, "contact.message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.FormData.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 30, "contact.send"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background-color: #25274d;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]{\r\n    padding: 4%;\r\n    height: 400px;\r\n}\r\n\r\n.col-md-3[_ngcontent-%COMP%]{\r\n    background: #1478a7;\r\n    padding: 4%;\r\n    border-top-left-radius: 0.5rem;\r\n    border-bottom-left-radius: 0.5rem;\r\n}\r\n\r\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.col-md-9[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    padding: 3%;\r\n    border-top-right-radius: 0.5rem;\r\n    border-bottom-right-radius: 0.5rem;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    font-weight:600;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background:#149ddd;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    width: 25%;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    box-shadow:none;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    padding-top: 100px; \r\n    padding-bottom: 30px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjc0ZDtcclxufVxyXG5cclxuLmNvbnRhY3R7XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5jb2wtbWQtM3tcclxuICAgIGJhY2tncm91bmQ6ICMxNDc4YTc7XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mbyBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLmNvbC1tZC05e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gbGFiZWx7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDojMTQ5ZGRkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBidXR0b246Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgzLGg0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "en7e":
/*!****************************************************!*\
  !*** ./src/app/references/references.component.ts ***!
  \****************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var _api_referencesEn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/referencesEn */ "BzaH");
/* harmony import */ var _api_referencesEs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/referencesEs */ "+orD");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0) { return { active: a0 }; };
function ReferencesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reference_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, index_r2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", reference_r1.personImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personFullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", reference_r1.message, " ");
} }
class ReferencesComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_3__["referencesEn"];
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__["locale"]);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_3__["referencesEn"];
            }
            else {
                this.references = _api_referencesEs__WEBPACK_IMPORTED_MODULE_4__["referencesEs"];
            }
        });
    }
    ngOnInit() {
    }
}
ReferencesComponent.ɵfac = function ReferencesComponent_Factory(t) { return new (t || ReferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
ReferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferencesComponent, selectors: [["app-references"]], decls: 15, vars: 4, consts: [["id", "references"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-right", "data-aos-delay", "300", 1, "card", "shadow-lg", "rounded", "pb-3"], ["id", "carouselIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselIndicators", "data-slide-to", "0", 1, "not-active", "active"], ["data-target", "#carouselIndicators", "data-slide-to", "1", 1, "not-active"], ["data-target", "#carouselIndicators", "data-slide-to", "2", 1, "not-active"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", 3, "ngClass"], [1, "d-block", "w-100"], [1, "row"], [1, "col-lg-2", "ml-4", "mr-4", "col-sm-12"], [1, "mt-4"], ["alt", "slide", 1, "d-block", "w-100", "rounder", 3, "src"], [1, "mt-3"], [1, "mt-2"], [1, "text-uppercase"], [1, "card-body", "ml-4", "mr-3", "mt-4", "col-lg-9", "col-sm-12"]], template: function ReferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReferencesComponent_div_14_Template, 25, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "references.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.references);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["li.not-active[_ngcontent-%COMP%]{\r\n    background-color: rgb(95, 146, 161);\r\n}\r\n\r\nli.active[_ngcontent-%COMP%]{\r\n    background-color: rgb(6, 46, 58);\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    color: rgb(22, 59, 90);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJyZWZlcmVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaS5ub3QtYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNDYsIDE2MSk7XHJcbn1cclxuXHJcbmxpLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0NiwgNTgpO1xyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5oMntcclxuICAgIGNvbG9yOiByZ2IoMjIsIDU5LCA5MCk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-references',
                templateUrl: './references.component.html',
                styleUrls: ['./references.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class HeaderComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.language = "";
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_2__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_3__["locale"]);
        if (localStorage.getItem("lang")) {
            this.language = localStorage.getItem("lang");
        }
        else {
            this.language = 'es';
        }
    }
    languageChange($event) {
        let lang = $event.value;
        localStorage.setItem("lang", lang);
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.js-scroll-trigger').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-collapse').toggle();
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.nav').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-collapse').toggle();
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 35, vars: 13, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"], [1, "home", "p-1", "rounded"], [1, "navbar-nav"], [1, "nav-item", "p-1", "rounded"], ["href", "#", 1, "nav-link", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-home"], [1, "navbar-toggler", "nav", "mb-1"], [1, "navbar-toggler-icon"], [1, "container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "width", "100%", "float", "right"], [1, "navbar-nav", 2, "float", "right"], ["href", "#about", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-user"], ["href", "#cv", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-file-blank"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-book-content"], ["aria-label", "Select a language", 2, "margin-top", "5px", 3, "ngModel", "ngModelChange", "change"], ["value", "es"], ["value", "en", 1, "pl-3"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_mat_radio_group_ngModelChange_28_listener($event) { return ctx.language = $event; })("change", function HeaderComponent_Template_mat_radio_group_change_28_listener($event) { return ctx.languageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "header.home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, "header.about"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 9, "header.spanish"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 11, "header.english"), " ");
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["li[_ngcontent-%COMP%]:hover, .home[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(51, 59, 61);\r\n}\r\n\r\ni[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(45, 51, 53);\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n    background-color: #212529;\r\n}\r\n\r\ni[_ngcontent-%COMP%]{\r\n  font-size: 24px;\r\n  padding-right: 6px;\r\n  color: #6f7180;\r\n}\r\n\r\n.nav-home[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(51, 59, 61);\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%]{\r\n  color:white;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 3px 4px;\r\n  margin-bottom: 2px;\r\n  transition: 0.3s;\r\n  font-size: 15px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGk6aG92ZXIsLmhvbWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1OSwgNjEpO1xyXG59XHJcblxyXG5pOmhvdmVyLGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA1MSwgNTMpO1xyXG59XHJcbm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbml7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICBjb2xvcjogIzZmNzE4MDtcclxufVxyXG5cclxuLm5hdi1ob21lOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTksIDYxKTtcclxufVxyXG5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbmF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDNweCA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5saXtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function SkillsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technologie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technologie_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", technologie_r3.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", technologie_r3.remark);
} }
function SkillsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tool_r4.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", tool_r4.remark);
} }
function SkillsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const methodologie_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](methodologie_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", methodologie_r5.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", methodologie_r5.remark);
} }
class SkillsComponent {
    constructor(_translationLoaderService) {
        this._translationLoaderService = _translationLoaderService;
        this.skills = {
            technologies: [{ name: "Java, J2EE, Spring, C#", percent: 90, remark: 'excellent' }, { name: "PHP", percent: 70, remark: 'good' }, { name: "Android", percent: 90, remark: 'excellent' }, { name: "Python, C++", percent: 70, remark: 'very-good' }, { name: "JavaScript, BootStrap, Angular", percent: 90, remark: 'excellent' }],
            tools: [{ name: "Git", percent: 90, remark: 'excellent' }, { name: "Office", percent: 90, remark: 'excellent' }, { name: "Linux, Windows", percent: 70, remark: 'very-good' }, { name: "MySql, PgSql", percent: 90, remark: 'excellent' }, { name: "Docker, Kubernetes", percent: 50, remark: 'average' }],
            methodologies: [{ name: "Scrum", percent: 70, remark: 'very-good' }, { name: "Uml", percent: 90, remark: 'excellent' }, { name: "Disign Thinking", percent: 70, remark: 'good' }, { name: "TDD", percent: 90, remark: 'excellent' }, { name: "DevOps", percent: 50, remark: 'average' }]
        };
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__["locale"]);
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 29, vars: 15, consts: [["id", "skills"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row", "mt-2"], ["data-aos", "fade-up ", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], [1, "h5"], ["id", "skillgraph"], ["class", "row skill-row", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], ["id", "skillgraph", 1, "panel", "panel-default"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], [1, "row", "skill-row"], [1, "label", "d-flex", "flex-row"], [1, "skillLabel"], [1, "skill-percent"], [1, "skillData-Wrapper"], [1, "skillData", "bg-rust", 3, "ngClass"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SkillsComponent_div_14_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SkillsComponent_div_21_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SkillsComponent_div_28_Template, 8, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "skills.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "skills.technologies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.technologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "skills.tools"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.tools);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 13, "skills.methodologies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.methodologies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".bg-lightgray[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\r\n    background-color: #ddd;\r\n}\r\n.skillData-Wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n#skillgraph[_ngcontent-%COMP%] {\r\n  padding: 1em; \r\n}\r\n.skill-percent[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.skillLabel[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  font-weight: 600;\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: #050d18d7;\r\n\r\n}\r\n.competence-Wrapper[_ngcontent-%COMP%]{\r\n  line-height: 0.1 0.7em;\r\n  height: 12px;\r\n  width: .1em;\r\n  float: left;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.skillData-Wrapper[_ngcontent-%COMP%], .label[_ngcontent-%COMP%] {\r\n  width: 100%; \r\n}\r\n.skillData[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\r\n  line-height: 0.1 0.7em;\r\n  height: 12px;\r\n  float: left;\r\n  color: white;\r\n  text-align: center; \r\n}\r\n.excellent[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n.very-good[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n}\r\n.good[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n.average[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n.bg-rust[_ngcontent-%COMP%] {\r\n    background-color: #149ddd;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxnQkFBZ0I7O0FBRWxCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWxpZ2h0Z3JheSwgLnNraWxsRGF0YS1XcmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuLnNraWxsRGF0YS1XcmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jc2tpbGxncmFwaCB7XHJcbiAgcGFkZGluZzogMWVtOyBcclxufVxyXG5cclxuLnNraWxsLXBlcmNlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNraWxsTGFiZWx7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzA1MGQxOGQ3O1xyXG5cclxufVxyXG5cclxuLmNvbXBldGVuY2UtV3JhcHBlcntcclxuICBsaW5lLWhlaWdodDogMC4xIDAuN2VtO1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogLjFlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2tpbGxEYXRhLVdyYXBwZXIsIC5sYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG59XHJcblxyXG4uc2tpbGxEYXRhLCAuc2tpbGxEYXRhLVdyYXBwZXIge1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjEgMC43ZW07XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4uZXhjZWxsZW50e1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi52ZXJ5LWdvb2R7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmdvb2R7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmF2ZXJhZ2V7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJnLXJ1c3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OWRkZDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "jHbM":
/*!***********************************!*\
  !*** ./src/app/api/projectsEs.ts ***!
  \***********************************/
/*! exports provided: projectsEs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsEs", function() { return projectsEs; });
const projectsEs = [
    {
        id: "tsarsSecret",
        name: "The Tsar's Secret",
        functions: 'Level Designer, Gameplay Designer, System Designer',
        images: [
            {
                title: "The Tsar's Secret Main Page",
                src: "assets/images/TsarSecrets/Landing.jpg",
            },
        ],
        url: 'https://otterworldsgames.itch.io/the-tsars-secret',
        videoId: "fps61jKr3bY",
        detail: `
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
        codeSourceUrl: 'https://store.steampowered.com/app/2079410/The_Tsars_Secret/',
        hasSteam: true,
        detailIsDisplayed: false,
    },
    {
        id: "electraProject",
        name: "Proyecto Electra (WIP)",
        functions: 'Diseñador, Programador',
        images: [
            {
                title: "Project Electra Main Page",
                src: "assets/images/WIP_Banner.png",
            },
        ],
        url: '',
        videoId: "",
        detail: `
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
        codeSourceUrl: '',
        hasSteam: false,
        detailIsDisplayed: false,
    }
];


/***/ }),

/***/ "rMl8":
/*!****************************************!*\
  !*** ./src/app/api/vgExperiencesEn.ts ***!
  \****************************************/
/*! exports provided: vgExperiencesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vgExperiencesEn", function() { return vgExperiencesEn; });
const vgExperiencesEn = [
    {
        title: "Game designer",
        company: "The T'sar Secret",
        period: "2021 - 2022 (1 year)",
        technologies: 'Unreal Engine, Perforce, Scrum',
        missions: [
            "Level design.",
            "System design.",
            "Gameplay design.",
            "Prototyping with blueprints."
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Game Designer",
        company: "Holodisc Championship",
        period: "GMTK 2023",
        technologies: 'Unity, GitHub',
        missions: [
            "Mechanic balance.",
            "Gameplay design.",
            "Programming in C#.",
            "QA"
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Game designer",
        company: "Spirit Cave",
        period: "Global Game Jam 2022",
        technologies: 'Unreal Engine, Perforce',
        missions: [
            "Level design.",
            "System design.",
            "Sound design.",
            "Prototyping with blueprints.",
            "QA"
        ],
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'cv', component: _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vaew":
/*!*******************************************************!*\
  !*** ./src/app/service/translation-loader.service.ts ***!
  \*******************************************************/
/*! exports provided: TranslationLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationLoaderService", function() { return TranslationLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TranslationLoaderService {
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Load translations
     *
     * @param {Locale} args
     */
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this._translateService.setTranslation(locale.lang, locale.data, true);
        });
    }
}
TranslationLoaderService.ɵfac = function TranslationLoaderService_Factory(t) { return new (t || TranslationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationLoaderService, factory: TranslationLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "xJkO":
/*!***********************************!*\
  !*** ./src/app/api/gamejamsEn.ts ***!
  \***********************************/
/*! exports provided: gamejamsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamejamsEn", function() { return gamejamsEn; });
const gamejamsEn = [
    {
        id: "holodiscChampionship",
        name: "Holodisc Championship",
        functions: 'General Designer, Programmer, QA',
        images: [
            {
                title: 'Main Page',
                src: "assets/images/HolodiscChampionship/hd_Banner.png",
            },
            {
                title: 'Gameplay',
                src: "assets/images/HolodiscChampionship/hd_2.jpg",
            },
            {
                title: 'Menu',
                src: "assets/images/HolodiscChampionship/hd_3.png",
            },
        ],
        url: "https://gamesthattastelikegarlic.itch.io/holodisc-championship",
        videoId: "",
        detail: `
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
        codeSourceUrl: 'https://gamesthattastelikegarlic.itch.io/holodisc-championship',
        detailIsDisplayed: false,
        hasSteam: false,
    },
    {
        id: "spiritCave",
        name: "Spirit Cave",
        functions: 'Level Designer, System Designer, Sound Designer, QA',
        images: [
            {
                title: 'Main Page',
                src: "assets/images/SpiritCave_MainPage.png",
            },
            {
                title: 'Screenshot Ghost Form',
                src: "assets/images/SpiritCave_2.jpg",
            },
            {
                title: 'Screenshot Protagonist',
                src: "assets/images/SpiritCave_3.jpg",
            },
        ],
        url: "https://germiesqui.itch.io/spirit-cave",
        videoId: "gpjd0Jl6Sik",
        detail: `
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
        codeSourceUrl: 'https://germiesqui.itch.io/spirit-cave',
        hasSteam: false,
        detailIsDisplayed: false,
    }
];


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/i18n/en */ "P0iy");
/* harmony import */ var _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/i18n/es */ "bpQU");
/* harmony import */ var _api_projectsEn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/projectsEn */ "+YTG");
/* harmony import */ var _api_projectsEs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/projectsEs */ "jHbM");
/* harmony import */ var _api_gamejamsEn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/gamejamsEn */ "xJkO");
/* harmony import */ var _api_gamejamsEs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/gamejamsEs */ "Iiyf");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");














const _c0 = ["myYouTubePlayer"];
function ProjectsComponent_div_8_div_4_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 26);
} }
function ProjectsComponent_div_8_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_8_div_4_a_1_i_1_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", image_r11.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", image_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r12 == 0);
} }
function ProjectsComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_8_div_4_a_1_Template, 2, 3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", project_r2.id, "-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r2.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectsComponent_div_8_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r2.codeSourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "projects.Itchio"));
} }
function ProjectsComponent_div_8_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r2.codeSourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "projects.Steam"));
} }
function ProjectsComponent_div_8_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_8_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_8_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "youtube-player", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", project_r2.videoId)("width", ctx_r8.videoWidth)("height", ctx_r8.videoHeight);
} }
function ProjectsComponent_div_8_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
} if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", project_r2.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "col-lg-12": a0, "col-lg-6": a1 }; };
const _c2 = function (a0) { return { "cardCustom": a0 }; };
const _c3 = function (a0) { return { "backgroundImage": a0 }; };
function ProjectsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_8_div_4_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectsComponent_div_8_a_15_Template, 3, 4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsComponent_div_8_a_16_Template, 3, 4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_8_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const project_r2 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.detailOnClick($event, project_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectsComponent_div_8_span_18_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectsComponent_div_8_span_19_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectsComponent_div_8_div_22_Template, 3, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectsComponent_div_8_div_23_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c1, project_r2.detailIsDisplayed, !project_r2.detailIsDisplayed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, !project_r2.detailIsDisplayed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", project_r2.id, "-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, "url(" + project_r2.images[0].src + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !project_r2.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, "projects.technologiesTitle"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.functions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !project_r2.hasSteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r2.hasSteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !project_r2.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r2.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 17, "projects.projectDetail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r2.detailIsDisplayed && project_r2.videoId != "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r2.detailIsDisplayed);
} }
function ProjectsComponent_div_17_div_4_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 26);
} }
function ProjectsComponent_div_17_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_17_div_4_a_1_i_1_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r31 = ctx.$implicit;
    const index_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", image_r31.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", image_r31.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r32 == 0);
} }
function ProjectsComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_17_div_4_a_1_Template, 2, 3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamejam_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", gamejam_r22.id, "-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gamejam_r22.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", gamejam_r22.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectsComponent_div_17_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamejam_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", gamejam_r22.codeSourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "projects.Itchio"));
} }
function ProjectsComponent_div_17_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamejam_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", gamejam_r22.codeSourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "projects.Steam"));
} }
function ProjectsComponent_div_17_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_17_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_17_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "youtube-player", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamejam_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", gamejam_r22.videoId)("width", ctx_r28.videoWidth)("height", ctx_r28.videoHeight);
} }
function ProjectsComponent_div_17_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 31);
} if (rf & 2) {
    const gamejam_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", gamejam_r22.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ProjectsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_17_div_4_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectsComponent_div_17_a_15_Template, 3, 4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsComponent_div_17_a_16_Template, 3, 4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_17_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const gamejam_r22 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.detailOnClick($event, gamejam_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectsComponent_div_17_span_18_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectsComponent_div_17_span_19_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectsComponent_div_17_div_22_Template, 3, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectsComponent_div_17_div_23_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gamejam_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c1, gamejam_r22.detailIsDisplayed, !gamejam_r22.detailIsDisplayed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, !gamejam_r22.detailIsDisplayed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", gamejam_r22.id, "-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, "url(" + gamejam_r22.images[0].src + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !gamejam_r22.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gamejam_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, "projects.technologiesTitle"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gamejam_r22.functions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !gamejam_r22.hasSteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gamejam_r22.hasSteam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !gamejam_r22.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gamejam_r22.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 17, "projects.projectDetail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gamejam_r22.detailIsDisplayed && gamejam_r22.videoId != "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gamejam_r22.detailIsDisplayed);
} }
class ProjectsComponent {
    constructor(_translationLoaderService, _translateService, _changeDetectorRef, sanitized) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this._changeDetectorRef = _changeDetectorRef;
        this.sanitized = sanitized;
        this.projects = _api_projectsEs__WEBPACK_IMPORTED_MODULE_4__["projectsEs"];
        this.gamejams = _api_gamejamsEs__WEBPACK_IMPORTED_MODULE_6__["gamejamsEs"];
        this._translationLoaderService.loadTranslations(_shared_i18n_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _shared_i18n_es__WEBPACK_IMPORTED_MODULE_2__["locale"]);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.projects = _api_projectsEn__WEBPACK_IMPORTED_MODULE_3__["projectsEn"];
                this.gamejams = _api_gamejamsEn__WEBPACK_IMPORTED_MODULE_5__["gamejamsEn"];
            }
            else {
                this.projects = _api_projectsEs__WEBPACK_IMPORTED_MODULE_4__["projectsEs"];
                this.gamejams = _api_gamejamsEs__WEBPACK_IMPORTED_MODULE_6__["gamejamsEs"];
            }
        });
        this.projects.forEach(project => {
            project.detail = this.sanitized.bypassSecurityTrustHtml(project.detail);
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log("after view init");
        //this.onMouse("spiritCave-link", "spiritCave-img", "spiritCave");
        this.onMouse("tsarsSecrets-link", "TsarsSecrets-img", "tsarsSecret");
        this.venobox = $('.venobox');
        this.venobox.venobox();
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
    detailOnClick(event, project) {
        this.projects.filter(item => item.detailIsDisplayed && item.id != project.id).map(elem => elem.detailIsDisplayed = false);
        project.detailIsDisplayed = !project.detailIsDisplayed;
        event.currentTarget.blur();
    }
    onMouse(idLink, idImage, id) {
        $('#' + idLink).on("mouseenter", function () {
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
        $('#' + idImage).on("mouseenter", function () {
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
    }
    onResize() {
        this.videoWidth = Math.min(this.myYouTubePlayer.nativeElement.clientWidth, 1200);
        this.videoHeight = this.videoWidth * 0.6;
        this._changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        window.removeEventListener('resize', this.onResize);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myYouTubePlayer = _t.first);
    } }, hostBindings: function ProjectsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ProjectsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 8, consts: [["id", "portfolio"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["class", "col-sm-12 ", "data-aos", "flip-up", 3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "gamejam"], ["data-aos", "flip-up", 1, "col-sm-12", 3, "ngClass"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded", 3, "ngClass"], [1, "card-header", "d-flex", "flex-column", 2, "height", "300px", "width", "100%"], [1, "img-wrap", 2, "height", "300px", "width", "100%", 3, "id", "ngStyle"], ["class", "links mt-auto d-flex justify-content-center", 3, "id", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "flex-row", "justify-content-center"], ["target", "_blank", "target", "_blank", "type", "button", "class", "btn btn-primary mr-3", 3, "href", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "my-youtube-player d-flex flex-row justify-content-center", 4, "ngIf"], ["class", "mt-3 d-flex flex-column", "id", "detailDiv", 3, "innerHTML", 4, "ngIf"], [1, "links", "mt-auto", "d-flex", "justify-content-center", 3, "id"], ["data-gall", "project.id", "class", "venobox vbox-item", 3, "href", "title", 4, "ngFor", "ngForOf"], ["title", "", "target", "_BLANK", 3, "href"], [1, "bx", "bx-link", "bx-md"], ["data-gall", "project.id", 1, "venobox", "vbox-item", 3, "href", "title"], ["class", "bx bx-zoom-in bx-md", 4, "ngIf"], [1, "bx", "bx-zoom-in", "bx-md"], ["target", "_blank", "target", "_blank", "type", "button", 1, "btn", "btn-primary", "mr-3", 3, "href"], [1, "my-youtube-player", "d-flex", "flex-row", "justify-content-center"], ["myYouTubePlayer", ""], [3, "videoId", "width", "height"], ["id", "detailDiv", 1, "mt-3", "d-flex", "flex-column", 3, "innerHTML"], ["data-gall", "gamejam.id", "class", "venobox vbox-item", 3, "href", "title", 4, "ngFor", "ngForOf"], ["data-gall", "gamejam.id", 1, "venobox", "vbox-item", 3, "href", "title"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 24, 26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectsComponent_div_17_Template, 24, 26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "projects.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, "projects.subcategory"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gamejams);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayer"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\r\nh2{\r\n  color: rgb(22, 59, 90);\r\n}\r\n\r\nli.not-active{\r\n  background-color: rgb(95, 146, 161);\r\n}\r\n\r\nli.active{\r\n  background-color: rgb(6, 46, 58);\r\n}\r\n\r\n.img-wrap {\r\n  vertical-align: top;\r\n  transition: opacity 3s;\r\n  -webkit-transition: opacity 0.8s;\r\n  opacity: 1;\r\n  background: top center;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.links{\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n}\r\n\r\n.cardCustom {\r\n  height: 600px;\r\n}\r\n\r\n.italic {\r\n  font-style: italic;\r\n}\r\n\r\n.bold {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n}\r\n\r\n.projectImgDetails {\r\n  padding: 10px;\r\n}\r\n\r\n.my-youtube-player{\r\n  padding-top: 20px;\r\n}\r\n\r\n.details{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mainSection{\r\n  text-align: center;\r\n}\r\n\r\n.title{\r\n  font-weight: 600;\r\n}\r\n\r\n.category{\r\n  height: 320px;\r\n}\r\n\r\n.cardBodyCustom{\r\n  padding-top: 60px;\r\n  position: relative;\r\n  height: 320px;\r\n}\r\n\r\n.cardDesc{\r\n  margin-top: 30px;\r\n  font-style: italic;\r\n}\r\n\r\n.cardBtn{\r\n  justify-content: center;\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n}\r\n\r\n.topCategoriesCol{\r\n  align-self: end;\r\n  z-index: 1;\r\n}\r\n\r\n.bottomCategoriesCol{\r\n  align-self: baseline;\r\n}\r\n\r\n.cardImgContainer{\r\n  overflow: hidden;\r\n  height: 400px;\r\n  max-height: 400px;\r\n  position: relative;\r\n}\r\n\r\n.cardImg{\r\n  display: block;\r\n    width: 100%;\r\n    height: auto;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.cardImgSpecial{\r\n  height: inherit; \r\n  width: auto; \r\n  margin: 0 -40px;\r\n}\r\n\r\n.customRow{\r\n  margin: 30px 0;\r\n}\r\n\r\n.rectangleDecoration{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 300px;\r\n  background-color: #425465;\r\n  margin: -150px -36px;\r\n  z-index: 0;\r\n}\r\n\r\n.textBtn{\r\n  border-bottom: 3px solid rgb(22, 59, 90);\r\n  display: inline-block;\r\n  width: 70px;\r\n}\r\n\r\n.sections{\r\n  display: flex;\r\n}\r\n\r\n.sectionImg{\r\n  width: 100%;\r\n  margin: 10px 0;\r\n}\r\n\r\n.sectionTitle{\r\n  font-size: 4rem;\r\n  color: white;\r\n  font-weight: 500;\r\n  height: 160px;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 130%;\r\n}\r\n\r\n.sectionDecoration{\r\n  position: absolute;\r\n  margin: -10px -36px;\r\n  height: 180px;\r\n  width: 100%;\r\n  background-color: #425465;\r\n  z-index: 0;\r\n}\r\n\r\n.sectionBody{\r\n  margin-top: 40px;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.imgCol{\r\n  align-self: center;\r\n  margin-top: 210px;\r\n}\r\n\r\n.imgCol2{\r\n  align-self: center;\r\n  margin-top: 100px;\r\n}\r\n\r\n.bold{\r\n  font-weight: 600;\r\n}\r\n\r\n.gameDesc{\r\n  font-style: italic;\r\n  font-size: larger;\r\n}\r\n\r\nsection{\r\n  padding-top: 50px;\r\n}\r\n\r\n.gameLink{\r\n  display: inline-block;\r\n  align-self: center;\r\n}\r\n\r\n.finalRowBody{\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgye1xyXG4gIGNvbG9yOiByZ2IoMjIsIDU5LCA5MCk7XHJcbn1cclxuXHJcbmxpLm5vdC1hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNDYsIDE2MSk7XHJcbn1cclxuXHJcbmxpLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNDYsIDU4KTtcclxufVxyXG5cclxuLmltZy13cmFwIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgM3M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kOiB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGlua3N7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkQ3VzdG9tIHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uaXRhbGljIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0SW1nRGV0YWlscyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm15LXlvdXR1YmUtcGxheWVye1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2F0ZWdvcnl7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxufVxyXG5cclxuLmNhcmRCb2R5Q3VzdG9te1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG59XHJcblxyXG4uY2FyZERlc2N7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jYXJkQnRue1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi50b3BDYXRlZ29yaWVzQ29se1xyXG4gIGFsaWduLXNlbGY6IGVuZDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYm90dG9tQ2F0ZWdvcmllc0NvbHtcclxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmNhcmRJbWdDb250YWluZXJ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmRJbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jYXJkSW1nU3BlY2lhbHtcclxuICBoZWlnaHQ6IGluaGVyaXQ7IFxyXG4gIHdpZHRoOiBhdXRvOyBcclxuICBtYXJnaW46IDAgLTQwcHg7XHJcbn1cclxuXHJcbi5jdXN0b21Sb3d7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbi5yZWN0YW5nbGVEZWNvcmF0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjU0NjU7XHJcbiAgbWFyZ2luOiAtMTUwcHggLTM2cHg7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLnRleHRCdG57XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigyMiwgNTksIDkwKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VjdGlvbkltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnNlY3Rpb25UaXRsZXtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEzMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uRGVjb3JhdGlvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiAtMTBweCAtMzZweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjU0NjU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLnNlY3Rpb25Cb2R5e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG59XHJcblxyXG4uaW1nQ29se1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMTBweDtcclxufVxyXG4uaW1nQ29sMntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5nYW1lRGVzY3tcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5nYW1lTGlua3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZmluYWxSb3dCb2R5e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_7__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }]; }, { myYouTubePlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myYouTubePlayer']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map