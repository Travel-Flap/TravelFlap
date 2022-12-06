import { useContext, createContext, useEffect, useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";
// import { NewFlight } from "../../NewFlightsPage/NewFlight";
import Home from "../Home";
import { GoogleButton } from 'react-google-button';
import UserAuth  from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginPageTravelFlap = () => {

    // const [value, setValue] = useState('')
    // const handleClick = () => {
    //     signInWithPopup(auth, provider).then((data) => {
    //         setValue(data.user.email)
    //         localStorage.setItem("email", data.user.email)
    //     })
    // }

    // useEffect(() => {
    //     setValue(localStorage.getItem('email'))
    // })


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

                            <h3> loginPage </h3>

                            <div className='loginPageSocialIcons'>
                                <img src='/Images/NewHomeLayout/LoginSignup/socialoginoptions.png' alt='social icons' />

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
                                </div>

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
