import Id from "../public/images/Id.png"
import Image from "next/image"
import About from "./about"
export default function App() {
  return (
    <>
      <div className="min-vh-100 row g-0">
        <div className="col-2 text-bg-dark pt-3">
          <Image className="ms-3" src={Id} alt="" height="150"></Image>
          <h4 className="mt-3 ms-3">LANGLOIS Noah</h4>
          <p className="ms-4 ps-3">Étudiant ingénieur</p>
          <ul className="nav flex-column mt-5">
            <div className="btn-group-vertical" role="group">
              <button type="button" className="btn btn-secondary w-100 active p-3">À propos</button>
              <button type="button" className="btn btn-secondary w-100 p-3">Formation</button>
              <button type="button" className="btn btn-secondary w-100 p-3">Expérience</button>
              <button type="button" className="btn btn-secondary w-100 p-3">Projets</button>
              <button type="button" className="btn btn-secondary w-100 p-3">Mais encore...</button>
              <button type="button" className="btn btn-secondary w-100 p-3">Contact</button>
            </div> 
          </ul>
        </div>
        <div className="col p-5 overflow-auto">
          <About></About>
        </div>
      </div>
    </>
  )
}
