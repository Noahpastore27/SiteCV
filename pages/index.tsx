import Id from "../public/images/Id.png"
import Image from "next/image"
import About from "./about"
import Formation from "./formation";
import Experience from "./experience";
import { useState } from "react";
export default function App() {
  
  const [currentPage,setCurrentPage] = useState('home');
  const [statebtn1,setStatebtn1] = useState('btn btn-secondary w-100 p-3 active')
  const [statebtn2,setStatebtn2] = useState('btn btn-secondary w-100 p-3')
  const [statebtn3,setStatebtn3] = useState('btn btn-secondary w-100 p-3')
  const [statebtn4,setStatebtn4] = useState('btn btn-secondary w-100 p-3')
  const [statebtn5,setStatebtn5] = useState('btn btn-secondary w-100 p-3')
  const [statebtn6,setStatebtn6] = useState('btn btn-secondary w-100 p-3')


  const displayPage = () => {
    if (currentPage === 'home') {
      return (<About></About>);
    };
    if (currentPage === 'formation') {
      return (<Formation></Formation>);
    };
    if (currentPage === 'experience') {
      return (<Experience></Experience>);
    }
    if (currentPage === 'projets') {
      return (<></>);
    }
    if (currentPage === 'encore') {
      return (<></>);
    }
    if (currentPage === 'contact') {
      return (<></>);
    }
  } 

  const GoToHome = () => {
    setCurrentPage('home')
    setStatebtn1('btn btn-secondary w-100 p-3 active')
    setStatebtn2('btn btn-secondary w-100 p-3')
    setStatebtn3('btn btn-secondary w-100 p-3')
    setStatebtn4('btn btn-secondary w-100 p-3')
    setStatebtn5('btn btn-secondary w-100 p-3')
    setStatebtn6('btn btn-secondary w-100 p-3')
  }

  const GoToForm = () => {
    setCurrentPage('formation')
    setStatebtn1('btn btn-secondary w-100 p-3')
    setStatebtn2('btn btn-secondary w-100 p-3 active')
    setStatebtn3('btn btn-secondary w-100 p-3')
    setStatebtn4('btn btn-secondary w-100 p-3')
    setStatebtn5('btn btn-secondary w-100 p-3')
    setStatebtn6('btn btn-secondary w-100 p-3')
  }

  const GoToExp = () => {
    setCurrentPage('experience')
    setStatebtn1('btn btn-secondary w-100 p-3')
    setStatebtn2('btn btn-secondary w-100 p-3')
    setStatebtn3('btn btn-secondary w-100 p-3 active')
    setStatebtn4('btn btn-secondary w-100 p-3')
    setStatebtn5('btn btn-secondary w-100 p-3')
    setStatebtn6('btn btn-secondary w-100 p-3')
  }

  const GoToProj = () => {
    setCurrentPage('projets')
    setStatebtn1('btn btn-secondary w-100 p-3')
    setStatebtn2('btn btn-secondary w-100 p-3')
    setStatebtn3('btn btn-secondary w-100 p-3')
    setStatebtn4('btn btn-secondary w-100 p-3 active')
    setStatebtn5('btn btn-secondary w-100 p-3')
    setStatebtn6('btn btn-secondary w-100 p-3')
  }

  const GoToMore = () => {
    setCurrentPage('encore')
    setStatebtn1('btn btn-secondary w-100 p-3')
    setStatebtn2('btn btn-secondary w-100 p-3')
    setStatebtn3('btn btn-secondary w-100 p-3')
    setStatebtn4('btn btn-secondary w-100 p-3')
    setStatebtn5('btn btn-secondary w-100 p-3 active')
    setStatebtn6('btn btn-secondary w-100 p-3')
  }

  const GoToContact = () => {
    setCurrentPage('contact')
    setStatebtn1('btn btn-secondary w-100 p-3')
    setStatebtn2('btn btn-secondary w-100 p-3')
    setStatebtn3('btn btn-secondary w-100 p-3')
    setStatebtn4('btn btn-secondary w-100 p-3')
    setStatebtn5('btn btn-secondary w-100 p-3')
    setStatebtn6('btn btn-secondary w-100 p-3 active')
  }

  function BtnGroupNav () {
    return (
      <div className="btn-group-vertical" role="group">
        <button type="button" className={statebtn1} onClick={GoToHome}>À propos</button>
        <button type="button" className={statebtn2} onClick={GoToForm}>Formation</button>
        <button type="button" className={statebtn3} onClick={GoToExp}>Expérience</button>
        <button type="button" className={statebtn4} onClick={GoToProj}>Projets</button>
        <button type="button" className={statebtn5} onClick={GoToMore}>Mais encore...</button>
        <button type="button" className={statebtn6} onClick={GoToContact}>Contact</button>
     </div> 
    );
  }
  

  return (
    <>
      <div className="min-vh-100 row g-0">
        <div className="col-2 text-bg-dark pt-3">
          <Image className="ms-3" src={Id} alt="" height="150"></Image>
          <h4 className="mt-3 ms-3">LANGLOIS Noah</h4>
          <p className="ms-4 ps-3">Étudiant ingénieur</p>
          <ul className="nav flex-column mt-5">
          <BtnGroupNav></BtnGroupNav>
          </ul>
        </div>
        <div className="col p-5 overflow-auto">
          {displayPage()}
        </div>
      </div>
    </>
  )
}
