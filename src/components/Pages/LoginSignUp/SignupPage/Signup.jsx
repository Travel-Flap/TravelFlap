import React from 'react';
import { Link } from 'react-router-dom';
import { NewHomeNav } from '../../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import "./Signup.css";

export const SignupPageTravelFlap = () => {
    return (
        <>
            <div className='travelFlapSignUpOuterDiv'>

                {/* <NewHomeNav /> */}

                <div className='travelFlapSignUpParentDiv'>
                    {/* <h4> Welcome to thee Signup Page </h4> */}
                    <div className='travelFlapSignupInnerDiv'>
                        <div className='travelFlapSignupFormDiv'>

                            <h3> Signup </h3>

                            <div className='signupSocialIcons'>
                                <img src='/Images/NewHomeLayout/LoginSignup/socialoginoptions.png' alt='social icons' />

                                <p> or </p>
                            </div>

                            <form className="row g-4 needs-validation  signUpFormInnerDiv" novalidate>
                                <div className="col-md-10">
                                    {/* <label for="validationCustom01" className="form-label">First name</label> */}
                                    <div className='input-group signupNameDiv'>
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
                                    {/* <label for="validationCustom02" className="form-label">Last name</label> */}
                                    <div className='input-group signupNumberDiv'>
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/Phone.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustom02" placeholder='Phone no' required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-10">
                                    {/* <label for="validationCustomUsername" className="form-label">Username</label> */}
                                    <div className="input-group has-validation signupEmailDiv">
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/email.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='Email address' required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-10">
                                    {/* <label for="validationCustom03" className="form-label">City</label> */}
                                    <div className='input-group signupPasswordDiv'>
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/Password.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustom03" placeholder='Password' required />
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-10">
                                    {/* <label for="validationCustom01" className="form-label">First name</label> */}
                                    <div className='input-group signupConfirmPasswordDiv'>
                                        <span className="input-group-text" id="inputGroupPrepend">
                                            <img src='/Images/NewHomeLayout/LoginSignup/Password.png' alt='icon image' />
                                        </span>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder='Confirm your password' required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-check signupAgreementDiv" >
                                        <input className="form-check-input signupAgreementCheckBoxDiv" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label signupAgreementTextDiv" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary signupSubmitButtonDiv" type="submit">Submit form</button>
                                </div>

                                <div className="col-12 signupAlradyAccountDiv">
                                    <p className='loginPageRouteText'> Already have account? </p>

                                    <Link to="/loginPage">
                                        <p className='loginPageRouteButton'> Login </p>
                                    </Link>
                                </div>

                            </form>
                        </div>


                        <div className='travelFlapSignupImageDiv'>
                            <img src='/Images/NewHomeLayout/LoginSignup/loginsignuptextimage.png' alt='signup image' />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
