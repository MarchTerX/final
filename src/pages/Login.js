import { Grid, Typography } from "@mui/material";
import Menu from "../component/Menu";
import '../pages/InputBox.css'
import '../pages/Login.css'
import { useState } from "react";
import Axios from 'axios';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    const addUser = () => {
        Axios.post('http://localhost:5000/register', {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email
        })
    }

    return(
        <div>
            <Menu />
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <div className="mid">
                        <Typography variant="h4">LOGIN</Typography> 
                    </div>

                    <div className="gapLogin"> 
                        <div className="InputBox">
                            <input type="text" required="required" />
                            <span>USERNAME</span>
                        </div>
                    
                        <div className="InputBox">
                            <input type="password" required="required" />
                            <span>PASSWORD</span>
                            
                            <div className="right">
                                <Typography variant="subtitle" component="a" href='' sx={{ flexGrow: 1, fontFamily: 'monospace', color: 'inherit' }}>
                                    Forget your password?
                                </Typography>
                            </div>
                        </div>
                        <div className="btn">
                            <a href="/">
                            <button>Login</button>
                            </a>
                        </div>
                    </div>

                </Grid>
                
                <div className="line"></div>
                
                <Grid item xs={12} md={6}>
                    <div className="mid">
                        <Typography variant="h4">REGISTER</Typography>

                        <div className="gapRegister"> 
                        <div className="InputBox">
                            <input type="text" required="required" onChange={(event) => {setUsername(event.target.value)}} />
                            <span>USERNAME</span>
                        </div>
                    
                        <div className="InputBox">
                            <input type="password" required="required" onChange={(event) => {setPassword(event.target.value)}} />
                            <span>PASSWORD</span>
                        </div>

                        <div className="InputBox">
                            <input type="password" required="required" onChange={(event) => {setCpassword(event.target.value)}} />
                            <span>CONFIRM PASSWORD</span>
                        </div>

                        <div className="InputBox">
                            <input type="text" required="required" onChange={(event) => {setFirstname(event.target.value)}} />
                            <span>FISTNAME</span>
                        </div>

                        <div className="InputBox">
                            <input type="text" required="required" onChange={(event) => {setLastname(event.target.value)}} />
                            <span>LASTNAME</span>
                        </div>

                        <div className="InputBox">
                            <input type="text" required="required" onChange={(event) => {setEmail(event.target.value)}} />
                            <span>EMAIL</span>
                        </div>

                        <div className="btn">                           
                            <button onClick={addUser}>REGISTER</button>
                        </div>
                    </div>
                    </div>
                    <p>{username}</p>
                    <p>{password}</p>
                    <p>{firstname}</p>
                    <p>{lastname}</p>
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;