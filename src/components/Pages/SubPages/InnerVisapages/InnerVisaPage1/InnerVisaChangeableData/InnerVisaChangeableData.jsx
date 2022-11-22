import React,{useState} from 'react';
import { Container } from "react-bootstrap";
import "./InnerVisaChangeableData.css";
import countrydata from '../../../../../../CountryData.json';

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

                <li class="nav-item" role="presentation" className="innervisabuttonDiv">
                    <button className={ showtab===6 ? "innerVisaHeadingButtons active": "innerVisaHeadingButtons"}  onClick={()=>handletab(6)}>Why choose Us?</button>
                </li>
            </ul>

      <div class="tab-content text-dark" id="pills-tabContent">
           <div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none"}}> 

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
                                                    
                                                    <div className='innervisaaddbutton' onClick={increase}>
                                                        +
                                                    </div>

                                                    <p className='innerVisacountertext'> {counter} </p>
                                                    <div className="innervisasubtractbutton" onClick={decrease}>
                                                        -
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
                                                    
                                                    <div className='innervisaaddbutton' onClick={increase}>
                                                        +
                                                    </div>

                                                    <p className='innerVisacountertext'> {counter} </p>
                                                    <div className="innervisasubtractbutton" onClick={decrease}>
                                                        -
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
                                                    
                                                    <div className='innervisaaddbutton' onClick={increase}>
                                                        +
                                                    </div>

                                                    <p className='innerVisacountertext'> {counter} </p>
                                                    <div className="innervisasubtractbutton" onClick={decrease}>
                                                        -
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
                                <div className='innervisadetailsform'>
                                    <h1>Apply Now!!</h1>
                                    <input type="text" placeholder='Email ID' className='innervisadetailforminputs'/> <br/>
                                    <input type="text" placeholder='Contact Number' className='innervisadetailforminputs'/><br/>
                                    <input type="text" placeholder='Visa Type' className='innervisadetailforminputs'/><br/>
                                    <button className='innervisadetailsapplybutton'>Apply</button>
                                </div>
                            </div>
                        </div>
             </div>

          <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} > 
           <p>Tab 2 Content</p>
           <p>Fill the form</p>
          </div>

           <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} > 
           <p>Tab 3 Content</p>
           <p>Fill the form</p>
          </div>

          <div  className= { showtab===4 ? "tab-pane fade show active":"tab-pane fade show"} > 
               <p>Tab 4 Content</p>
          </div>

          <div  className= { showtab===5 ? "tab-pane fade show active": "tab-pane fade"} > 
           <p>Tab 5 Content</p>
           <p>Fill the form</p>
          </div>

           <div  className= { showtab=== 6? "tab-pane fade show active": "tab-pane fade"} > 
           <p>Tab 6 Content</p>
           <p>Fill the form</p>
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

