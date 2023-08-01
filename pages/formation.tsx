import millet from "../public/images/millet.png"
import grignard from "../public/images/grignard.png"
import ensma from "../public/images/ensma.png"
import Image from "next/image";

export default function Formation () {
    return (
        <div className="vh-100">
            <div className="">
                <div className="row g-0 mb-4">
                    <div className="col-2 me-4">
                        <h1>Formation</h1>
                    </div>
                    <div className="col ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-7">
                                <h2>Baccalauréat Scientifique</h2>
                                <a href="https://lycee-millet.com/" target="_blank" rel="noopener noreferrer">
                                Lycée Jean-François MILLET</a>
                                <p>Cherbourg-en-Cotentin</p>
                                <h4>Mention Très Bien</h4>
                            </div>
                            <div className="col-3 mt-3">
                                <Image src={millet} alt="" height="100"></Image>
                            </div>
                            <div className="col mt-5">
                                <h3>2016-2019</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-6 pe-5">
                                <h2>CPGE MP/MPSI</h2>
                                <p>&#40;Classe préparatoire aux grandes écoles, mathématiques, physique et sciences de 
                                    l&apos;ingéieur&#41;</p>
                                <a href="https://www.lycee-grignard.fr/" target="_blank" rel="noopener noreferrer">
                                Lycée Victor GRIGNARD</a>
                                <p>Cherbourg-en-Cotentin</p>
                            </div>
                            <div className="col-4 mt-4">
                                <Image src={grignard} alt="" height="100"></Image>
                            </div>
                            <div className="col mt-5">
                                <h3>2019-2021</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-body">
                        <div className="row g-0">
                            <div className="col-6">
                                <h2>Ingénieur ISAE-ENSMA</h2>
                                <p>&#40;Spécialisation informatique, avionique et systèmes&#41;</p>
                                <a href="https://www.ensma.fr/" target="_blank" rel="noopener noreferrer">
                                ISAE-ENSMA</a>
                                <p>Poitiers - Fututoscope</p>
                            </div>
                            <div className="col-4 ps-5 mt-3">
                                <Image src={ensma} alt="" height="100"></Image>
                            </div>
                            <div className="col mt-5">
                                <h3>2021-2024</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}