import React from 'react';
import "./Plan.css";

export const Plan = () => {
    return (
        <div>
            <div className='cta_area'>
                <div className='container'>
                    <div className='row align-items-center  '>
                        <div className='col-lg-7'>
                            <div className='cta_left'>
                                <div className='cta_content'>
                                    <h3>Planning your next Holidays ?</h3>
                                    <h5>Subscribe to our newsletter. Get the latest travel trends & deals!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='cat_form'>
                                <form id='cta_form_wrapper' className='ng-pristine ng-valid'>
                                    <div className='input-group'>
                                        <input className='form-control' id='newemail' type="text" placeholder='Enter your mail address'></input>
                                        <button className='btn btn_theme1 btn_md' onClick="" type='button'>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
