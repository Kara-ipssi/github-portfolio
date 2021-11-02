import '../assets/css/Profile.css';


function Profile(){
    return(
        <div id="profile">
            <div id="profile_img" style={{background: 'url("https://avatars.githubusercontent.com/u/72872432?v=4") center'}}></div>
            <div id="username">
                <span style={{display: "block"}}> Karamoko Coulibaly </span>
                <a href="https://github.com/kara-ipssi"> @Kara-ipssi </a>
            </div>
            <div id="userbio" style={{display: "block"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </div>
            <div id="about">
                <span><i className=""></i></span>
                <span><i className=""></i></span>
                <span><i className=""></i></span>
                <div id="socials">
                    <span>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile;