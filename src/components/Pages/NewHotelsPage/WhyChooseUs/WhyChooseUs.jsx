import "./WhyChooseUs.css";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";

export const WhyChooseUs = () => {
    return (
        <>
            <div className="newwhyChoosemaindiv">
                <div className="newwhychooseheading">
                    Why Choose US?
                </div>
                <div className="newwhychooseOptions">
                    <div className="newwhychooseOptions1">
                        <div className="newWhychooseIcon1">
                            <img src={first}/>
                        </div>
                        <div className="newWhychooseContent">
                            <h4>Exclusive Deals</h4>
                            <p>Compare Deals from 3M+ hotels and <br/> accommodations at one place</p>
                        </div>
                    </div>
                    <div className="newwhychooseOptions1">
                        <div className="newWhychooseIcon1">
                            <img src={second}/>
                        </div>
                        <div className="newWhychooseContent">
                            <h4>Stays for every need</h4>
                            <p>Choose your ideal stays from hotels, restaurants, <br/> homestays,cottages and other properties</p>
                        </div>
                    </div>
                    <div className="newwhychooseOptions1">
                        <div className="newWhychooseIcon1">
                            <img src={third}/>
                        </div>
                        <div className="newWhychooseContent">
                            <h4>Millions of Reviews</h4>
                            <p>Check Rating based on millions of <br/> guest reviews</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
