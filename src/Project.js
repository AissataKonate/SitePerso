import React from "react";
import "./Project.css";
import Project1 from './img/projet0.jpg';
import Project2 from './img/projet4.jpg';
import Project3 from './img/projet5.jpg';
import Project4 from './img/biblio.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Projects</h1>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Developpement</h5>
                     <h4 className="project__text">Back office ONTT</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Developpement</h5>
                     <h4 className="project__text">React e-commerce Gallerie</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Developpement</h5>
                     <h4 className="project__text">Gestion calendrier j2ee</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Developpement</h5>
                     <h4 className="project__text">Gestion d'une bibliothèque</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


            
           </div>
       </div>
    </div>
  );
}

export default Project;
