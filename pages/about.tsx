import Id from "../public/images/Id.png"
import Image from "next/image";
export default function About () {
    return (
    <div>
        <div className="row g-0">
            <div className="col-8">
                <div className="mb-5">
                    <h1 className="Animation_text_home">LANGLOIS Noah</h1>
                </div>
                <p className="scale_in_center">Actuellement étudiant ingénieur à l&apos;<a href="https://www.ensma.fr/" 
                target="_blank" rel="noopener noreferrer">ISAE-ENSMA</a> où je me suis spécialisé en informatique
                et avionique, je suis à la recherche d&apos;un projet de fin d&apos;étude afin d&apos;achever ma formation.</p>
                <p className="scale_in_center">Vous pourrez retrouver sur ce site toutes les informations me conçerant, mon expérience, ma formation et plein
                d&apos;autres ! N&apos;hésitez pas à me contacter !
                </p>
            </div>
            <div className="col ms-5">
              <Image className="Animation_text_home" src={Id} alt="" height='250'></Image>
            </div>
          </div>
          <div className="mt-5">
            <p className="scale_in_center">
              Né le 5 décembre 2001 à Cherbourg-en-Cotentin dans la Manche en Normandie, j&apos;ai grandi
              et vécu dans cette ville jusqu&apos;à mes 19 ans. Je suis ensuite parti étudier dans la ville de
              Poitiers, près du Futuroscope pour mon diplôme d&apos;ingénieur. Sportif et voyageur, je profite
              des expériences qu&apos;offre la vie pour bouger et faire de nouvelles rencontres. Le sport m&apos;apporte
              des qualités de travail d&apos;équipe et de détermination mais aussi de leading grâce à une longue
              expérience de capitanat. Le voyage m&apos;apporte de son côté des qualités d&apos;expérience
              internationale et d&apos;adaptation à des environnements nouveaux. 
            </p>
          </div>
    </div>
    );
}