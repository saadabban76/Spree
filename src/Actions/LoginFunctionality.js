import React, { useState } from 'react';
import './LoginFunctionality.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function LoginFunctionality() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            history.push('/')
        })
        .catch(error => alert(error.message));
    }

    const register = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">

            <Link to='/'>
                <span className='login__title'>Spree<span style={{fontSize:'0.8rem',color:'#ff790b'}}>....</span></span>
            </Link>

            <span>
                Sign in to your spree account
            </span>

            <div className="login__container">
                <form>
                    {/* <h5>E-mail</h5> */}
                    <input placeholder='Email address' type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    
                    {/* <h5>Password</h5> */}
                    <input placeholder='Password' type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button className="login__signinButton" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By Signing-in you agree to the Spree of use & Sale
                    . please see our privacy Notice , our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create Account</button>
            </div>
        </div>
    )
}

export default LoginFunctionality
