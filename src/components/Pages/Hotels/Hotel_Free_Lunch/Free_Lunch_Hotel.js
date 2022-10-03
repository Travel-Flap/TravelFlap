import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdLunchDining } from "react-icons/md"
import "../Hotel_Free_Lunch/Free_Hotel_Lunch.css"
export function Free_Hotel_Lunch() {
    return <div className="parrent_recom_div">

        <h4>Hotels Near You With Free Lunch</h4>
        <div className="all_image_card">
            <div className="Image_card">
                {/* <div className="rating_chat"><MdLunchDining fontSize={"40px"} /></div> */}
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/196188603.jpg?k=e8d81db7b34713eee5dcfe62e0f1f1dc675cd151c938d506221486ccf51bcef5&o=" alt="" />
                <p>EKO STAY-SOLACE VILLA </p>
                <p className="rating_start">
                <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <br/>
                    <span className="place_name">
                        <FaMapMarkerAlt />
                        Gandolim,Goa
                    </span>
                </p>
                <th>INR ,8,100</th>
                {/* <p className="Free_Lunch">Free Lunch</p> */}
            </div>
            <div className="Image_card">
                {/* <div className="rating_chat"><MdLunchDining fontSize={"40px"} /></div> */}

                <img src="https://pix8.agoda.net/hotelImages/20138677/0/ab9b36247d8754118deff18b32cb1255.jpg?ca=16&ce=1" alt="" />
                <p>Gypsys 2BHK Apartment</p>
                <p className="rating_start">
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <br/>
                    <span className="place_name">
                        <FaMapMarkerAlt />
                        Colva,Goa
                    </span>
                </p>
                <th>INR ,1,710</th>
            </div>
            <div className="Image_card">
                {/* <div className="rating_chat"><MdLunchDining fontSize={"40px"} /></div> */}

                <img src="https://pix8.agoda.net/hotelImages/20138677/0/ab9b36247d8754118deff18b32cb1255.jpg?ca=16&ce=1" alt="" />
                <p>Gypsys 2BHK Apartment</p>
                <p className="rating_start">
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <br/>
                    <span className="place_name">
                        <FaMapMarkerAlt />
                        Colva,Goa
                    </span>
                </p>
                <th>INR ,1,710</th>
            </div>
            <div className="Image_card">
                {/* <div className="rating_chat"><MdLunchDining fontSize={"40px"} /></div> */}

                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/324936872.jpg?k=93e992d44e79dccddca882225e3fec8c9c8b7e237c8e423e94cc33d9c6c499d0&o=" alt="" />
                <p>Baga Mansion</p>
                <p className="rating_start">
                <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <br/>
                    <span className="place_name">
                        <FaMapMarkerAlt />
                        Baga,Goa
                    </span>
                </p>
                <th>INR ,1,059</th>
            </div>
            <div className="Image_card">
                {/* <div className="rating_chat"><MdLunchDining fontSize={"40px"} /></div> */}

                <img src="https://pix8.agoda.net/hotelImages/21953508/-1/4e08bb8d6dedb40a5df3a9f05b71a44f.jpg?ca=17&ce=1" alt="" />
                <p>Casa Dos Reblos</p>
                <p className="rating_start">
                <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <BsFillStarFill  className="staricon"/>
                    <br/>   
                    <span className="place_name">
                        <FaMapMarkerAlt />
                        Panaji,Goa
                    </span>
                </p>
                <th>INR ,2,676.82</th>
            </div>
            
        </div>


    </div>
}