import Image from "next/image";
import emn from "../public/images/emn.svg"
import leclerc from "../public/images/leclerc.png"
import ensma from "../public/images/ensma.png"
export default function Experience () {
    return (
        <div className="vh-100">
            <div className="Animation_text_home">
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
            <div className="scale_in_center">
                <div className="card">
                    <div className="card-body">
                        <h2>Jobs étudiants</h2>
                        <div className="row g-0">
                            <div className="col-4 card mt-5 ">
                                <div className="card-body">
                                    <h2>Agent d&apos;entretien, <br></br>Nettoyage des résidences, <br></br> Gardiennage</h2>
                                    <a href="http://societe-emn.fr/" target="_blank" rel="noopener noreferrer">
                                    EMN</a>
                                    <p>Cherbourg-en-Cotentin</p>
                                    <p>(Job étudiant)</p>
                                </div>
                                <div className="mt-4 pt-2">
                                    <Image src={emn} alt="" height="40"></Image>
                                </div>
                                <div className="ms-5 mt-4 pt-2">
                                    <h3>2019</h3>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <div className="">
                                            <div className="pe-5">
                                                <h2>Livreur, Vendeur</h2>
                                                <p>Livraison de matériel électroménager et vente dans l&apos;espace multimédia</p>
                                                <a href="https://www.e.leclerc/mag/e-leclerc-tourlaville" target="_blank" rel="noopener noreferrer">
                                                E.Leclerc</a>
                                                <p>Tourlaville</p>
                                            </div>
                                            <div className="mt-4 ps-5 pt-3">
                                                <Image src={leclerc} alt="" height="70"></Image>
                                            </div>
                                            <div className="mt-5 ps-5 pt-3">
                                                <h3>Été 2020-2021</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <div className="">
                                            <div className="">
                                                <h2>Ingénieur ISAE-ENSMA</h2>
                                                <p>&#40;Spécialisation informatique, avionique et systèmes&#41;</p>
                                                <a href="https://www.ensma.fr/" target="_blank" rel="noopener noreferrer">
                                                ISAE-ENSMA</a>
                                                <p>Poitiers - Fututoscope</p>
                                            </div>
                                            <div className="ps-5 mt-3">
                                                <Image src={ensma} alt="" height="100"></Image>
                                            </div>
                                            <div className="mt-5">
                                                <h3>2021-2024</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}