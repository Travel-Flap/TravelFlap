
import { FaWhatsapp,FaPhoneAlt,FaRegClock } from "react-icons/fa";
import "./InnerVisaPageContactDiv.css";
export const InnerVisaPageContactDiv = () => {

    return (
            <>
            <div className='innervisadetailsform'>
                <h1>Apply Now</h1>
                <input type="text" placeholder='Email ID' className='innervisadetailforminputs'/> <br/>
                <input type="text" placeholder='Contact Number' className='innervisadetailforminputs'/><br/>
                <select className="innervisadetailforminputs">
                    <option value="Visa Types">Visa Types</option>
                    <option value="Transit Visa">Transit Visa</option>
                    <option value="Insurance Visa">Insurance Visa</option>
                    <option value="job visa + insurance">Job visa + Insurance</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Buisness Visa">Buisness Visa</option>
                    <option value="Work Visa">Work Visa</option>
                    <option value="Immigration Visa">Immigration Visa</option>
                </select>
                <button className='innervisadetailsapplybutton'>Let Us Call You</button>
                <button className='innervisadetailsapplybutton'> <FaWhatsapp size="1.2em" style={{marginRight:"3%"}}/> Visa On WhatsApp</button>
                <button className='innervisadetailsapplybutton'> <FaPhoneAlt size="1.2em" style={{marginRight:"3%"}}/> Call Us On</button>
                <button className='innervisadetailsapplybutton'> <FaRegClock size="1.2em" style={{marginRight:"3%"}}/> 9:00AM to 9:00PM</button>
            </div>
            </>
    );
}

