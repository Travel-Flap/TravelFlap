import React,{useState} from 'react';
import { Container } from "react-bootstrap";
import "./InnerVisaChangeableData.css";

export const InnerVisaChangeableData = () => {

 const[showtab, setShowtab]= useState(1);

 const handletab = (e)=>{
  setShowtab(e);
    }
    return(
<>
        <React.Fragment>
             <Container>
      <div className="row">
        <div className="col-sm-12 bg-light innervisaChangemainDiv">      
              
            <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button className= {showtab===1? "test active": "test" }  onClick={()=>handletab(1)}>Type Of Visa</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button className={ showtab===2 ? "test active": "test"}  onClick={()=>handletab(2)}>Document</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button className={ showtab===3 ? "test active": "test"}  onClick={()=>handletab(3)}>Process</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button className= {showtab===4? "test active": "test" }  onClick={()=>handletab(4)}>Sample Visa</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button className={ showtab===5 ? "test active": "test"}  onClick={()=>handletab(5)}>Embassy</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button className={ showtab===6 ? "test active": "test"}  onClick={()=>handletab(6)}>Why choose Us?</button>
                </li>
            </ul>

      <div class="tab-content text-dark" id="pills-tabContent">
           <div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} > 
               <p>Tab 1 Content</p>
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


        </>
    );
}

