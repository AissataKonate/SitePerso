import {React, useState} from 'react';
import './Contact.css';
import contactImg from "./img/perfil.jpg"
import emailjs from 'emailjs-com';
const Contact=()=>  {
    
        function sendEmail(e){
            e.preventDefault();
            emailjs.sendForm("service_n1hzqtf",
            "template_h1zj5vr",
            e.target,
            "user_NNx9Hi8OPbigC4BnlQ251"
            ).then(result => {
                alert('Message envoyé, je vous répondrai dès que possible', result.text);
                },
                error => {
                alert( 'Une erreur s’est produite,Veuillez réessayez',error.text)
                })
        }
    
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contactez-moi.</h1>
                            <p className="hire__text white">Je suis disponible pour un travail indépendant.
                             Connectez-vous avec moi par téléphone:</p>
                           <p className="hire__text white"><strong>+223 73534057</strong>
                            ou par email: <strong><a href="mailto:a.konate18152@pi.tn">a.konate18152@pi.tn</a></strong></p>
                        </div>
                        <div className="input__box">
                            <form onSubmit={sendEmail}>
                           <input type="text" name="name" className="contact name" placeholder="Votre Nom *" />
                           <input type="text" name="user_email" className="contact email" placeholder="Votre Email *" />
                           
                           <textarea name="message" id="message" placeholder="Ecrivez votre message"></textarea>
                           <button className="btn contact pointer" type="submit">Envoyer</button>
                           
                           </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )

    }
export default Contact;