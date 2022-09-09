import React, { useRef, useState } from "react";
import classes from "./authForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";


const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState("");

  //Controller si l'erreur est a true ou a false
  if (error) {
    console.log("true");
  } else {
    console.log("false")
  }

  //Récupération des champs inputs par preventdefault
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
        setError({
            title: "⚠️ L'email doit être valide , le mot de passe doit contenir 8 caractères minimum et doit avoir au moins  une majuscule , une minuscule et un chiffre ! ",
            // message: "un ou plusieurs champs sont vides"
        })
      return;
    }

    // Controle validité email
    const regExEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    if (!regExEmail(enteredEmail)) {
      return;
    }
    // Controle validité password
    const regExPassword = (value) => {
        // doit contenir 8caractères minimum , 1 majuscule , 1 minuscule et un chiffre et un caractère spéciaux
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
    };

    if (!regExPassword(enteredPassword)) {
        return;
    }

    //Vider les champs après validation
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <React.Fragment>

        {error &&  <ErrorModal
        title={error.title}
        message={error.message}/>}
       


      <section className={classes.auth}>
        <h1>Se connecter</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Votre email : </label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="password">Votre mot de passe : </label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>

          <Button type={"submit"} onClick={() => {}}>
            Connexion
          </Button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AuthForm;
