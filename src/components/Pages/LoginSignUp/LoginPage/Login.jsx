import { useContext, createContext, useEffect, useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

import { auth, google, facebook, twitter, github } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import Home from "../Home";
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginPageTravelFlap = () => {

    // This part is from the same project
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);

    const LoginTrue = () => (
        <>

        
            <h1>Welcome!</h1>
            <img src={user.photoURL} style={{ width: 120 }} />
            <p>Welcome {user.displayName}! Your account {user.email} has been successfully logged in at {user.metadata.lastSignInTime}</p>
            <button style={{ width: 150 }} onClick={logout}>
                Logout
            </button>
        </>
    )

    const login = async (provider) => {
        const result = await signInWithPopup(auth, provider)
        setUser(result.user)
        setIsLogin(true)
        console.log(result)
    }

    const logout = async () => {
        const result = await signOut(auth)
        setUser(null)
        setIsLogin(false)
        console.log(result)
    }


    // This part is from different project

    // const { googleSignIn, user } = UserAuth();
    // const navigate = useNavigate();

    // const handleGoogleSignIn = async () => {
    //     try {
    //         await googleSignIn();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     if (user != null) {
    //         navigate('/flights');
    //     }
    // }, [user]);

    return (


        <>
            <div className='travelFlaploginPageOuterDiv'>

                {/* <NewHomeNav /> */}

                <div className='travelFlaploginPageParentDiv'>
                    {/* <h4> Welcome to thee loginPage Page </h4> */}
                    <div className='travelFlaploginPageInnerDiv'>
                        <div className='travelFlaploginPageFormDiv'>

                            <h3> LoginPage </h3>

                            <div className='loginPageSocialIcons'>
                                {/* <img  onClick={() => login(google)} src='/Images/NewHomeLayout/LoginSignup/socialoginoptions.png' alt='social icons' /> */}
                                <FcGoogle onClick={() => login(google)} style={{fontSize:"25px", marginRight:"4%", marginTop:"0.7%"}}/>
                                <img onClick={() => login(facebook)} src="/Images/NewHomeLayout/LoginSignup/facebook.png" style={{height:"23px"}} alt="image"/>
                                {/* <BsFacebook onClick={() => login(facebook)}/> */}
                                <p> or </p>
                            </div>

                            <form className="row g-4 needs-validation  loginPageFormInnerDiv" novalidate>
                                <div className="col-md-10">
                                    {/* <label for="validationCustom01" className="form-label">First name</label> */}
                                    <div className='input-group loginPageNameDiv'>
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/email.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder='Your name' required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-10">
                                    <div className='input-group loginPagePasswordDiv'>
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/Password.png' alt='icon image' />
                                        </span>
                                        <input type="password" className="form-control" id="validationCustom03" placeholder='Password' required />
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-md-10">
                                    <div className='input-group loginPageNumberDiv'>
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/Phone.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustom02" placeholder='Phone no' required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div> */}

                                {/* 
                                <div className="col-md-10">
                                    <div className="input-group has-validation loginPageEmailDiv">
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/email.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='Email address' required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div> */}



                                {/* <div className="col-md-10">
                                    <div className='input-group loginPageConfirmPasswordDiv'>
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/Password.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder='Confirm your password' required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div> */}
{/* 
                                <div className="col-12">
                                    <div className="form-check loginPageAgreementDiv" >
                                        <input className="form-check-input loginPageAgreementCheckBoxDiv" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label loginPageAgreementTextDiv" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div> */}

                                <div className="col-12">
                                    <button className="btn btn-primary loginPageSubmitButtonDiv" type="submit">Submit form</button>
                                </div>

                                <div className="col-12 loginPageAlradyAccountDiv">
                                    <p className='loginPageRouteText'> Don't have account? </p>

                                    <Link to="/signupPage">
                                        <p className='loginPageRouteButton'> SignUp </p>
                                    </Link>
                                </div>

                            </form>
                        </div>

                        {/* <h1>Login please...</h1>
                        <button style={{ width: 150, backgroundColor: '#de5246', color: 'white' }}
                            onClick={() => login(google)}>
                            Login with Google
                        </button>
                        <button style={{ width: 150, backgroundColor: '#3b5998', color: 'white' }}
                            onClick={() => login(facebook)}>
                            Login with Facebook
                        </button> */}

                        {/* <div>
                            <NewFlight/>
                            <button onClick={handleClick}>Signin With Google</button>
                            {value ? <Home/> :
                                <button onClick={handleClick}>Signin With Google</button>
                            }
                        </div> */}

                        {/* <div className='loginGoogleButton'>
                            <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
                            <div className=' '>
                                <GoogleButton onClick={handleGoogleSignIn} />
                            </div>
                        </div> */}

                        <div className='travelFlaploginPageImageDiv'>
                            <img src='/Images/NewHomeLayout/LoginSignup/loginsignuptextimage.png' alt='loginPage image' />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
