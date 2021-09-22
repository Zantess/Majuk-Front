import React, { useState } from 'react';
import '../Style/Formulaire.css'
import{ init } from 'emailjs-com';
init("user_9nea08qFTG2aDnXQooqJ1");

//Variable de programmation du formulaire
const Formulaire = () => {
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [erromes, setErromes] = useState("")
    const isEmail = () => {
        let mail = document.getElementById('not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = 'none';
            return true;
        } else {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            setTimeout(() => {
                mail.style.animation = 'none';
            }, 1000);
            return false;
        };
    };

    const failMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = 'Merci de remplir correctement les champs requis *';
        formMess.style.opacity = '1';
        formMess.syle.background = 'rgb(253,87,87)';
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Configuration d'activation du hendleSubmit

        if (pseudo && isEmail && message) {


            sendFeedback("template_unw4hfj", {
                pseudo,
                email,
                message,
            });

        } else {
            failMessage();
        }
    };



    const sendFeedback = (templateId, variables) => {

        window.emailjs
            .send("gmail", templateId, variables)
            .then((res) => {
                console.log('success !');
                setPseudo("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) => setErromes('Oups une erreur de syntaxe ')

            )};

    return (
        <form className="contact-form">
            <h2>Contactez-nous</h2>
            <div className="form-content">
                <input
                    type="text"
                    id="pseudo"
                    name="pseudo"
                    onChange={(e) => setPseudo(e.target.value)}
                    placeholder="pseudo *"
                    value={pseudo}
                    autoComplete="off"
                />

                <div className="email-content">
                    <label id="not-email"> Email non valide</label>
                    <input
                        type="mail"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email *"
                        value={email}
                        autoComplette="off"
                    />
                </div>
                <textarea
                    id="message"
                    pseudo="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="message *"
                    value={message}
                />
            </div>
            <input
                className="button"
                type="button"
                value="Envoyer"
                onClick={handleSubmit}
            />
            <div className="from-message">
                {erromes}
            </div>
        </form>);
};

export default Formulaire;

