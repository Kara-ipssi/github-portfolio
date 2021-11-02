import './assets/css/App.css';
import Form from './composants/Form';
import { useState, useEffect} from "react";
import Profile from './composants/Profile';
import Work from './composants/Work';

function App() {

    const [user, setUser] = useState({})
    const [error, setError] = useState(false);
    const [formView, setFormView] = useState(true);

    useEffect(()=>{
        console.log(user)
        if(user.message === undefined){
            setError(false)
            setFormView(false);
        }
        else{
            setError(true);
            setFormView(true);
        }
    },[user])
    return (
        <>
            {console.log(formView)}
            {/* <Form 
                        user={user} 
                        setUser={setUser}
                        error={error}
                        setError={setError}
                    /> */}
            {formView === false ? 
                 
                    <Form 
                        user={user} 
                        setUser={setUser}
                        error={error}
                        setError={setError}
                    />
                :
                    <Profile />
                
            }

            {/* <Work/> */}
        </>
    );
}

export default App;
