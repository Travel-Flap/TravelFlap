import './PopularDestinationBanner.css';

export const PopularDestinationBanner = () => {

    return (

        <>
            <div className= 'card BannerDiv '>
            <img  className='Bannerimage'  src="Images/PopularDestinationImages/Populardestinationinnerimage banner1.jpg" alt='banner image'/>
            <div class="card-img-overlay ">
                <p className='PopularDestinationBannerHeading'>Turkey</p>
                <p style={{marginLeft:"5%",color:"rgb(192, 189, 189)"}}>5 Night / 6 Days - 1Country / 2 Cities</p>
                <p style={{marginLeft:"5%",color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='PopularDestinationBannerHeading2' > ₹2500</p>
            </div>

            </div>
        </>

    );
}

