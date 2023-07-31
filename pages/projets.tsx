import tictac from "../public/images/projtictactoe.png"
import avio from "../public/images/Projavio.png"
import pipo from "../public/images/projpipeau.png"
import catia1 from "../public/images/projcatiacrete.png"
import catia2 from "../public/images/Projcatiacollab.png"
import Image from "next/image";

export default function Projets () {
    return (
        <div className="vh-100">
            <div className="">
                <div className="row g-0 mb-4">
                    <div className="col-1 me-5">
                        <h1>Projets</h1>
                    </div>
                    <div className="col ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>                    
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-7">
                                <h2>Algorithme & Systèmes numériques : Ultimate TicTacToe</h2>
                                <a href="../public/pdf/ProjTictactoe.pdf" download>
                                    Sujet
                                </a>
                                <p>
                                    Implémentation d&apos;un Ultimate TicTacToe en language ADA :<br></br>
                                    - Visualisation du jeu dans la console <br></br>
                                    - Enregistrement d&apos;une partie<br></br>
                                    - Mode 2 joueurs : Joueur V/S Ordinateur & Joueur V/S Joueur <br></br>
                                    - Mode auto : Ordinateur V/S Ordinateur
                                </p>
                            </div>
                            <div className="col-3 ps-5 mt-3">
                                <Image src={tictac} alt="" height="150"></Image>
                            </div>
                            <div className="col text-center mt-5">
                                <h3>2021</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-6 pe-5">
                                <h2>Avionique : <br></br> Gestion & contrôle d&apos;un
                                simulateur de drone</h2>
                                <a href="../public/pdf/Proj_Avionique_Sujet.pdf" download>
                                Sujet</a>
                                <p>
                                    - Focus sur l&apos;implémentation downlink des capteurs du drone vers le simulateur
                                    de l&apos;ordinateur en language C <br></br>
                                    - Travail entre différentes équipes
                                </p>
                            </div>
                            <div className="col-4 mt-4">
                                <Image src={avio} alt="" height="200"></Image>
                            </div>
                            <div className="col text-center mt-5">
                                <h3>2023</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-6">
                                <h2>Signal & Systèmes : <br></br> Compétition D3S </h2>
                                <a href="../public/pdf/ProjPipeau.pdf" download>
                                Sujet</a>
                                <p>
                                    - Implémenter un rover capable d&apos;avancer à l&apos;oreille <br></br>
                                    - Course entre équipes de travail
                                </p>
                            </div>
                            <div className="col-4 mt-5">
                                <Image src={pipo} alt="" height="60"></Image>
                            </div>
                            <div className="col mt-5">
                                <h3>2021-2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-6">
                                <h2>CATIA V5/6 :<br></br> Rétroconception <br></br>crête et fuselage d&apos;avion </h2>
                                <a href="../public/pdf/ProjCatia.pdf" download>
                                Sujet</a>
                                <p>
                                    - Rétroconception et fabrication du 1er chasseur conçu <br></br> et construit en 
                                    grande série par Dassault pour l&apos;Armée de l&apos;Air <br></br>
                                    - Depuis 2010, un projet de re-conception de l&apos;avion est en cours au 
                                    sein de Dassault Aviation et implique des étudiants de divers cursus
                                </p>
                            </div>
                            <div className="col-4 mt-5 ps-4">
                                <Image src={catia1} alt="" height="150"></Image>
                            </div>
                            <div className="col mt-5 text-center">
                                <h3>2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-6">
                                <h2>CATIA V5/6 :<br></br> Conception collaborative <br></br>Appui réglable </h2>
                                <a href="../public/pdf/ProjCatia2" download>
                                Sujet</a>
                                <p>
                                    - Apprentissage de la conception collaborative sur Catia<br></br>
                                    - Travail d&apos;équipe sur un projet
                                </p>
                            </div>
                            <div className="col-4 mt-5 ps-4">
                                <Image src={catia2} alt="" height="150"></Image>
                            </div>
                            <div className="col mt-5 text-center">
                                <h3>2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}