import Image from "next/image";
import emn from "../public/images/emn.svg"
import leclerc from "../public/images/leclerc.png"
import endel from "../public/images/endel.png"
import ace from "../public/images/ace.png"
import ru from "../public/images/ru.png"
import { useState } from "react";
export default function Experience () {

    const [jobetu,setJobetu]=useState(0)
    const [stage,setStage]=useState(1)
    const DefJob = () => {
        if (jobetu===0) {
            setJobetu(1)
        }
        if (jobetu===1) {
            setJobetu(0)
        }
    }
    const DefStage = () => {
        if (stage===0) {
            setStage(1)
        }
        if (stage===1) {
            setStage(0)
        }
    }

    function MoreJobetu () {
        if (jobetu===0) {
            return (<></>);
        }
        if (jobetu===1) {
            return (
                <div className="fade_in_top">
                    <div className="row g-0 mt-3">
                        <div className="col-4 card">
                            <div className="card-body">
                                <div className="height_card">
                                    <h2>Agent d&apos;entretien, <br></br> Gardiennage</h2>
                                    <p>Nettoyage de résidences, poubelles, halls.</p>
                                    <br></br>
                                    <a href="http://societe-emn.fr/" target="_blank" rel="noopener noreferrer">
                                    EMN</a>
                                    <p>Cherbourg-en-Cotentin</p>
                                    <div className="text-center mt-5">
                                        <Image src={emn} alt="" height="50"></Image>
                                    </div>
                                    <div className="text-center mt-5">
                                        <h3 className="">2019</h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="height_card">
                                        <div className="">
                                            <h2>Livreur,<br></br> Vendeur</h2>
                                            <p>Livraison de matériel électroménager et vente dans l&apos;espace multimédia</p>
                                            <br></br>
                                            <a href="https://www.e.leclerc/mag/e-leclerc-tourlaville" target="_blank" rel="noopener noreferrer">
                                            E.Leclerc</a>
                                            <p>Tourlaville</p>
                                        </div>
                                        <div className="mt-5 text-center">
                                            <Image src={leclerc} alt="" height="50"></Image>
                                        </div>
                                        <div className="text-center mt-5">
                                            <h3>Été 2020-2021</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="height_card">
                                        <div className="">
                                            <h2>Logisticien, <br></br>Gestion de stock</h2>
                                            <p>Gestion de stock de matériel d&apos;usinage, création d&apos;une macro 
                                            excel VBA de gestion de stock</p>
                                            <a href="https://www.altradendel.com/en/" target="_blank" rel="noopener noreferrer">
                                            ENDEL</a>
                                            <p>Tourlaville</p>
                                        </div>
                                        <div className="text-center mt-5">
                                            <Image src={endel} alt="" height="50"></Image>
                                        </div>
                                        <div className="text-center mt-5">
                                            <h3>Août 2022</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    function MoreStage () {
        if (stage===0) {
            return (<></>);
        }
        if (stage===1) {
            return (
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col">
                                <h2>Stage ouvrier</h2>
                                <p>
                                    Vision plus complète du fonctionnement d&apos;une entreprise et de
                                    la vie ouvrière et celle d&apos;un atelier.
                                </p>
                                <a href="https://ace-normandie.com/lentreprise/lentreprise-2/" target="_blank" rel="noopener noreferrer">
                                ACE</a>
                                <p>Querqueville</p>
                                <a href="../public/pdf/LANGLOIS_Noah_SO2022.pdf"
                                download>Rapport de stage</a>
                            </div>
                            <div className="col text-center mt-2">
                                <Image src={ace} alt="" height="100"></Image>
                            </div>
                            <div className="col mt-5 text-center">
                                <h3 className="">Juillet 2022</h3>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="">
                    <div className="card">
                        <div className="card-body">
                            <div className="row g-0">
                                <div className="col">
                                    <h2>Stage ingénieur</h2>
                                    <p>Activité de recherche et développement dans le cadre du projet &apos;&apos;Accroître le soutien 
                                    aux ingénieurs logiciels atteints de maladies neurodivergentes et étudiants en informatique&apos;&apos; ainsi 
                                    qu&apos;un projet en Smart Contract Security.</p>
                                    <br></br>
                                    <a href="https://en.ru.is/" target="_blank" rel="noopener noreferrer">
                                    Reykjavik University</a>
                                    <p>Reykjavik, ISLANDE</p>
                                </div>
                                <div className="col mt-4 text-center">
                                    <Image src={ru} alt="" height="125"></Image>
                                </div>
                                <div className="col text-center mt-5">
                                    <h3>Juin-Août 2023</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }


    function MoreJobBtn () {
        if (jobetu===0) {
            return (
                <button className="btn btn-secondary" onClick={() => DefJob()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </button>
            );
        }
        if (jobetu===1) {
            return (
                <button className="btn btn-secondary" onClick={() => DefJob()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </button>
            );
        }
    }

    function MoreStageBtn () {
        if (stage===0) {
            return (
                <button className="btn btn-secondary" onClick={() => DefStage()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </button>
            );
        }
        if (stage===1) {
            return (
                <button className="btn btn-secondary" onClick={() => DefStage()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </button>
            );
        }
    }


    return (
        <div className="vh-100">
            <div className="">
                <div className="row g-0 mb-4">
                    <div className="col-2 me-4">
                        <h1>Expérience</h1>
                    </div>
                    <div className="col ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-4">
                                <MoreJobBtn />
                            </div>
                            <div className="col-4 text-center">
                                <h2>Jobs étudiants</h2>
                            </div>
                        </div>
                        <MoreJobetu />
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-4">
                                <MoreStageBtn />
                            </div>
                            <div className="col-4 text-center">
                                <h2>Stages</h2>
                            </div>
                        </div>
                        <MoreStage />
                    </div>
                </div>
            </div>
        </div>

    );
}