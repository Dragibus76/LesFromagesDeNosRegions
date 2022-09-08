import React from "react";

const AuthForm = () => {
    return(
        <React.Fragment>
            <h1>Se connecter</h1>
                <form onSubmit={()=>{}}>
                    <label htmlFor="email">Votre emai</label>
                    <input type="email" id="email" required/>

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" id="password" required/>

                    <button type="button" onClick={()=>{}}>Se connecter</button>
                </form>
        </React.Fragment>
    )
    
}

export default AuthForm;