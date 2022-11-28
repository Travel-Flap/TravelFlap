import React,{useState} from 'react';
import { Container } from "react-bootstrap";
import "./InnerVisaChangeableData.css";
import countrydata from '../../../../../../CountryData.json';
import { InnerVisaPageContactDiv } from '../InnerVisaPageContactDiv/InnerVisaPageContactDiv';

export const InnerVisaChangeableData = () => {

 const[showtab, setShowtab]= useState(1);
 const [countryid, setCountryid] = useState('');
 const [state, setState] = useState([]);
 const [stateid, setStateid] = useState('');
 const [counter, setCounter] = useState(0);

 const handletab = (e)=>{
  setShowtab(e);
    }

    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        //console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }

    const increase = () => {
    setCounter(count => count + 1);
  };

    const decrease = () => {
    setCounter(count => count - 1);
  };
    return(
<>
   <div className='innerVisapagemainDiv'>
        
        <React.Fragment>
             <Container>
      <div className="row">
        <div className="col-sm-12 bg-light innervisaChangemainDiv">      
              
            <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist" className='innervisabuttonouterDiv'>
                <li class="nav-item" role="presentation" className="innervisabuttonDiv">
                    <button className= {showtab===1? "innerVisaHeadingButtons active": "innerVisaHeadingButtons" }  onClick={()=>handletab(1)}>Type Of Visa</button>
                </li>
                <li class="nav-item" role="presentation" className="innervisabuttonDiv">
                    <button className={ showtab===2 ? "innerVisaHeadingButtons active": "innerVisaHeadingButtons"}  onClick={()=>handletab(2)}>Document</button>
                </li>

                <li class="nav-item" role="presentation" className="innervisabuttonDiv">
                    <button className={ showtab===3 ? "innerVisaHeadingButtons active": "innerVisaHeadingButtons"}  onClick={()=>handletab(3)}>Process</button>
                </li>
                <li class="nav-item" role="presentation" className="innervisabuttonDiv">
                    <button className= {showtab===4? "innerVisaHeadingButtons active": "innerVisaHeadingButtons" }  onClick={()=>handletab(4)}>Sample Visa</button>
                </li>
                <li class="nav-item" role="presentation" className="innervisabuttonDiv">
                    <button className={ showtab===5 ? "innerVisaHeadingButtons active": "innerVisaHeadingButtons"}  onClick={()=>handletab(5)}>Embassy</button>
                </li>


            </ul>
<div class="tab-content text-dark" id="pills-tabContent">
           
           <div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none",borderBottom:"none"}}> 

                         <div className='innerVisaChangeableButton'> 
                           <div className='innerVisaChangeableDataBannerdropcontainer'>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                                    <option value="" >Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='innerVisaChangeableDataBannerdropcontainer1'>
                                <select className="form-select newVisaform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                    <option value="" >Select Nationality</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                         </div>

                        <div className='visaTypeMainDiv'>
                            <div className='innerVisaTypedetailsDiv'>

                                    <div className='innerVisaTypeDetailContainer'>
                                        <div className='innervisaInformationDiv'>
                                            <p className='innerVisaRate'>Rate:Normal</p>
                                            <p className='innerVisaTypeofVisa'>Indian E-Visa</p>
                                            <p className='innerVisaDescription'> Expolre Visa Option to see if there is a visa right for you.We have a range of 
                                                options depending on whether you want tourist and business visa</p>
                                            <p className='innerVisaPrice'>Prices are inclusive taxes</p>
                                            <p className='visaPrice'>₹ 6500</p>
                                        </div>
                                        <div className='innerVisaAddtoCartDiv'>
                                            <div className='innervisaCartcounter'>
                                                {/* <div className='innervisacounterdata'> */}
                                                
                                                    <div className='innervisaaddbutton' onClick={decrease}>
                                                        -
                                                    </div>

                                                    <p className='innerVisacountertext'> {counter} </p>
                                                    <div className="innervisasubtractbutton" onClick={increase}>
                                                        +
                                                    </div>

                                                {/* </div> */}
                                            </div>
                                            <div className='innerVisaAddtocartButton'>
                                                Add to Cart
                                            </div>
                                        </div>
                                    </div>

                                    <div className='innerVisaTypeDetailContainer'>
                                        <div className='innervisaInformationDiv'>
                                            <p className='innerVisaRate'>Rate:Normal</p>
                                            <p className='innerVisaTypeofVisa'>Indian E-Visa</p>
                                            <p className='innerVisaDescription'> Expolre Visa Option to see if there is a visa right for you.We have a range of 
                                                options depending on whether you want tourist and business visa</p>
                                            <p className='innerVisaPrice'>Prices are inclusive taxes</p>
                                            <p className='visaPrice'>₹ 6500</p>
                                        </div>
                                        <div className='innerVisaAddtoCartDiv'>
                                            <div className='innervisaCartcounter'>
                                                {/* <div className='innervisacounterdata'> */}
                                                    
                                                   <div className='innervisaaddbutton' onClick={decrease}>
                                                        -
                                                    </div>

                                                    <p className='innerVisacountertext'> {counter} </p>
                                                    <div className="innervisasubtractbutton" onClick={increase}>
                                                        +
                                                    </div>

                                                {/* </div> */}
                                            </div>
                                            <div className='innerVisaAddtocartButton'>
                                                Add to Cart
                                            </div>
                                        </div>
                                    </div>

                                    <div className='innerVisaTypeDetailContainer'>
                                        <div className='innervisaInformationDiv'>
                                            <p className='innerVisaRate'>Rate:Normal</p>
                                            <p className='innerVisaTypeofVisa'>Indian E-Visa</p>
                                            <p className='innerVisaDescription'> Expolre Visa Option to see if there is a visa right for you.We have a range of 
                                                options depending on whether you want tourist and business visa</p>
                                            <p className='innerVisaPrice'>Prices are inclusive taxes</p>
                                            <p className='visaPrice'>₹ 6500</p>
                                        </div>
                                        <div className='innerVisaAddtoCartDiv'>
                                            <div className='innervisaCartcounter'>
                                                {/* <div className='innervisacounterdata'> */}
                                                    
                                                   <div className='innervisasubtractbutton' onClick={decrease}>
                                                        -
                                                    </div>

                                                    <p className='innerVisacountertext'> {counter} </p>
                                                    <div className="innervisaaddbutton" onClick={increase}>
                                                        +
                                                    </div>

                                                {/* </div> */}
                                            </div>
                                            <div className='innerVisaAddtocartButton'>
                                                Add to Cart
                                            </div>
                                        </div>
                                    </div>
                                     
                            </div>
                            <div className='innerVisaTypecontactDiv'>
                               <InnerVisaPageContactDiv/>
                            </div>
                        </div>
           </div>

           <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} style={{textDecoration:"none",borderBottom:"none"}} > 
                
                    <div className='innerVisaChangeableButton'> 
                           <div className='innerVisaChangeableDataBannerdropcontainer'>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                                    <option value="" >Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='innerVisaChangeableDataBannerdropcontainer1'>
                                <select className="form-select newVisaform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                    <option value="" >Select Nationality</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                    </div>
                    
                    <div className='visaTypeMainDiv'>
                         <div className='innervisaPageDocumentMainDiv'>
                            <h2 className='innervisaDocumentHeading'>Documents Required for Vietnam Visa for Indians </h2>
                            <div className='innervisaPageDocumentContainer'>
                                    <ul>
                                        <li className='innervisapageDoumentsLists'>Scanned colour copy of first and last page of your Passport.</li>
                                        <li className='innervisapageDoumentsLists'>Scanned recent colour passport size photograph with white background.</li>
                                        <li className='innervisapageDoumentsLists'> Indian Passport, with a validity of minimum six more months from the date of travel to Vietnam,</li>
                                        <li className='innervisapageDoumentsLists'>You will need at least two blank pages on your passport for the visa stamp.</li>
                                        <li className='innervisapageDoumentsLists'>A filled out visa application form.</li>
                                        <li className='innervisapageDoumentsLists'>Payment (25 USD to 50 USD) for visa fees.</li>
                                        <li className='innervisapageDoumentsLists'>A Letter of Approval from a Vietnamese embassy or consulate (if you are picking up your visa at the airport).</li>
                                    </ul>
                            </div>
                         </div>
                         <div className='innerVisaTypecontactDiv'>
                               <InnerVisaPageContactDiv/>
                         </div>
                    </div>
                    
           </div>

           <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} style={{textDecoration:"none",borderBottom:"none"}} > 
                    
                    <div className='innerVisaChangeableButton'> 
                           <div className='innerVisaChangeableDataBannerdropcontainer'>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                                    <option value="" >Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='innerVisaChangeableDataBannerdropcontainer1'>
                                <select className="form-select newVisaform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                    <option value="" >Select Nationality</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                    </div>

                    <div className='visaTypeMainDiv'>
                        <div className='innervisaprocessMainDiv'>
                            <h3 className='innervisaProcessheading'>Visa process</h3>
                            <div className='innervisaProcesscontainerDiv'>
                                <img className='innervisaProcessImage' src='Images/InnerVisaPage/Visa (1).png'/>
                            </div>
                        </div>
                        <div className='innerVisaTypecontactDiv'>
                               <InnerVisaPageContactDiv/>
                        </div>
                    </div>
          </div>

          <div  className= { showtab===4 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none",borderBottom:"none"}}> 
                    <div className='innerVisaChangeableButton'> 
                           <div className='innerVisaChangeableDataBannerdropcontainer'>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                                    <option value="" >Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='innerVisaChangeableDataBannerdropcontainer1'>
                                <select className="form-select newVisaform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                    <option value="" >Select Nationality</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                    </div>

                    <div className='visaTypeMainDiv'>
                        <div className='visainnerSample'>
                            <div className='visainnerImageDiv'>
                               <img src='Images/InnerVisaPage/dubai-sample.jpg'/>
                            </div>
                        </div>

                        <div className='innerVisaTypecontactDiv'>
                               <InnerVisaPageContactDiv/>
                        </div>

                    </div>
          </div>

          <div  className= { showtab===5 ? "tab-pane fade show active": "tab-pane fade"} style={{textDecoration:"none",borderBottom:"none"}}> 
                    <div className='innerVisaChangeableButton'> 
                           <div className='innerVisaChangeableDataBannerdropcontainer'>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                                    <option value="" >Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='innerVisaChangeableDataBannerdropcontainer1'>
                                <select className="form-select newVisaform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                    <option value="" >Select Nationality</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                    </div>

                    <div className='visaTypeMainDiv'>
                        <div className='visaInnerEmbasy'>
                            <div className='visaInnerEmbasyLinks'>
                                <h4 className='visaInnerEmbasyHeadings'>Vietnam Visa Requirements</h4>
                                <ul>
                                    <li className='VisaEmbasyLinks'>Have a valid Passport and valid Vietnam Visa.</li>
                                    <li  className='VisaEmbasyLinks'>Be in good health.</li>
                                </ul>
                            </div>

                            <div className='visaInnerEmbasyLinks'>
                                <h4 className='visaInnerEmbasyHeadings'>Travel Checklist</h4>
                                <ul>
                                    <li className='VisaEmbasyLinks'>Passport.</li>
                                    <li  className='VisaEmbasyLinks'>Valid Vietnam Visa.</li>
                                </ul>
                            </div>

                            <div className='visaInnerEmbasyLinks'>
                                <h4 className='visaInnerEmbasyHeadings'>What to do when you arrive in Vietnam</h4>
                                <ul>
                                    <li className='VisaEmbasyLinks'>Keep your Declaration form in hand (provided to you on the flight).</li>
                                </ul>
                            </div>

                            <div className='visaInnerEmbasyLinks'>
                                <h4 className='visaInnerEmbasyHeadings'>Vietnam travel guide</h4>
                                <ul>
                                    <li className='VisaEmbasyLinks'>Vietnam is a nation of huge contrasts, immense cultural diversity, and breath-taking natural wonders that can keep its travellers – ranging from back packers to the world’s elite – entertained for weeks if not months.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='innerVisaTypecontactDiv'>
                               <InnerVisaPageContactDiv/>
                        </div>
                        
                    </div>
          </div>

      


      </div>
      

   </div>     
</div>
            </Container>

        </React.Fragment>

   </div>
        </>
    );
}

