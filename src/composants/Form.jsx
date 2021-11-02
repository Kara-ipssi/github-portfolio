import { useState } from "react";

function Form(props){
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let data = await verifUser(username);
        setLoading(false);
        props.setUser(data);
    }


    const verifUser = async (user) => {
        try {
            const response = await fetch(`https://api.github.com/users/${user}`, {
                headers: {
                    'Authorization': `token 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`
                }
            });
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
                
                <button onClick={(e)=>handleSubmit(e)}>
                    <i className={loading ? "fas fa-spinner fa-spin" : "fas fa-arrow-circle-right"}></i>
                </button>         
                
            </div>
            <div className="search-form__row search-form__row--repo">
                <label htmlFor="ownedRepo">
                    Show only owned repositories
                    <input type="checkbox" name="ownedRepo" id="ownedRepo" checked/>
                </label>
            </div>
            {props.error ? 
            (
                <p className="error">
                    Github username not found
                </p>
            ) : 
            ("")
            }
        </form>
    )
}

export default Form;