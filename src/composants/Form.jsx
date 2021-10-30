import { useEffect, useState } from "react";

function Form(){

    const [username, setUsername] = useState('')
    const [owned, setOwned] = useState(true);
    let user = {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        user = await verifUser(username)
        console.log(user);
    }

    useEffect(()=>{
        console.log(owned)
    }, [owned])

    const verifUser = async (user) => {
        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;    
        }
    }

    return(
        <form className="search-form">
            <i className="fab fa-github"></i>
            <div className="search-form__row search-form__row--user">
                <input className="search-value" type="text" placeholder="Entrez votre username ici" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <button onClick={(e)=>handleSubmit(e)}><i className="fas fa-arrow-circle-right"></i></button>
            </div>
            <div className="search-form__row search-form__row--repo">
                <label htmlFor="ownedRepo">
                    Show only owned repositories
                    <input type="checkbox" name="ownedRepo" id="ownedRepo" onChange={(e)=>setOwned(!e.target.value)} value={owned}/>
                </label>
            </div>
            <p className="error">
                Github username not found
            </p>
        </form>
    )
}

export default Form;