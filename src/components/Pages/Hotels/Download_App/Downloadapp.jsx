import("../Download_App/Downloadapp.css")
export const Downloadapp = () => {


    return (
        <>
            <div className="download_container">
                <div className="container_chid1">
                    <h1>Download App Now!</h1>
                    <span>Get India's #1 travel super app, join 100 Million+ Happy travellers!</span>
                </div>
                <div className="container_chid2">
                    <div className="logo_container">
                        <div className="down_logo">
                            <img src="https://i.ibb.co/47XfKL8/logo-cleanup-overlay.png" alt="" />
                        </div>
                        <div className="input_mobile">

                            <div>Use code WELCOMEMMT and get upto Rs 5000 off on your first domestic hotel booking</div>
                            <div className="input" placeholder="Enter Mobile Number">
                                <div className="india">
                                    <img src="https://www.travelflap.com/images/Flags/India.jpg" alt="" />
                                    <span className="mobilecode">+91</span>
                                </div>
                                <input type="text"  placeholder="enter your mobile number"/>
                                <div className="getapplink">

                                <button className="getname">Get App Link</button>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="vr"></div>
                    <div className="playstore_container">
                        
                        <div className="playstoress">
                        <span>More ways to get the apps</span>
                            <div>
                                <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp" alt="" />

                            </div>
                            <div>
                                <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp" alt="" />

                            </div>

                        </div>
                        <div className="qrcode">
                            <img src="https://promos.makemytrip.com/notification/xhdpi/QRCodeDT_QR-code.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

 