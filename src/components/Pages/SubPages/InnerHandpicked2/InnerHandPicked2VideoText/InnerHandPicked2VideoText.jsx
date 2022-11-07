import "./InnerHandPicked2VideoText.css";
import Image from "./m_Interlaken_l_426_640.jpg";
export const InnerHandPicked2VideoText = () => {
    var embedId = "JQr1-VchonU"
    return (
        <>
            {/* <div className="Main-Content-Footer"> */}
            <br /><br />
            <div className="InnerHandPicked2VideoText-Content-Footer">
                <img src={Image} />
            </div>
            <div className="InnerHandPicked2VideoText-Content-Items">
                <iframe
                    width="650"
                    height="400"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className="InnerHandPicked2VideoText-Content-Footer3">
                {/* <h3> Take a tour</h3> */}
                <p style={{ textAlign: "left" }}>Best In Class Service, Huge Inventories,Multiple Deals & Global Expertise<br />
                    Cheaper smarter and simpler business trip.No Annual Maintainance Fee.Easy<br />
                    modifications.14000+ Active companies.Best Price on Hotels.No hidden <br />
                    Charges.Free upgrades.Real-time reporting .Our features and benefits are <br />
                    curated to suit the needs of every employee using myBiz.Based on our <br />
                    experience, we can outrightly say that the response of myBiz team is worth<br />
                    appreciation.The team has been stupendously putting their best foot forward<br />
                    to resolve any query raised,even at odd hours, to maintain customer delight.<br />
                    This approach sets them apart."mybiz helped us in providing the best of travel<br />
                    and accommodation related services, along with the dedicated manager & <br />
                    customer support team.We get the best rates and most expansive inventory <br />
                    for hotels covering even tier 2 and tier 3 cities, which has led to a seamless <br />
                    travel experience.I have been using myBiz portal for more than 7 months<br />
                    now and so far,I am very satisfied with the performance.User-friendly portal,<br />
                    utmost accuracy with regards to cancellation and refunds,on-the-go booking,<br />
                    supportive team,maximum clarity on portal with no hidden costs, and<br />
                    competitive prices with savings the reason why we like myBiz.
                </p>
            </div>

            {/* </div> */}


        </>
    )
}