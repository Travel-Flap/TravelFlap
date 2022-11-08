import ".//VideoText.css";
import Image from "./m_Interlaken_l_426_640.jpg";
export const VideoTextStaycation = () => {
    var embedId = "JQr1-VchonU"
    return (
        <>
            {/* <div className="Main-Content-Footer"> */}
            <br /><br />
            <div className="Staycation-Content-Footer">
                <img src={Image} />
            </div>
            <div className="Staycation-Content-Items">
                <iframe
                    width="550"
                    height="350"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className="Staycation-Content-Footer3">
                {/* <h3> Take a tour</h3> */}
               
                <p style={{ textAlign: "left"}}>Best In Class Service, Huge Inventories,Multiple Deals & Global Expertise
                    Cheaper smarter and simpler business trip.No Annual Maintainance Fee.Easy
                    modifications.14000+ Active companies.Best Price on Hotels.No hidden 
                    Charges.Free upgrades.Real-time reporting .Our features and benefits are <br />
                    curated to suit the needs of every employee using myBiz.Based on our 
                    experience, we can outrightly say that the response of myBiz team is worth<br />
                    appreciation.The team has been stupendously putting their best foot forward<br />
                    to resolve any query raised,even at odd hours, to maintain customer delight.
                    This approach sets them apart."mybiz helped us in providing the best of travel<br />
                   
                </p>
            </div>

            {/* </div> */}


        </>
    )
}