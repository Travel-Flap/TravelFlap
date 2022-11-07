import "./InnerHandpick3Banner.css"
import Carousel from 'react-bootstrap/Carousel';

export const InnerHandpick3Banner = () => {
    return (
        <>
            <div className="CarouselMaindiv">
                <div className="row CarouselMainContainer">
                    <div className="card-horizontal">
                        <Carousel variant="dark" className="InnerCarouselPage">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 Page3BannerImage"
                                    src="images/Adventure3.jpg"
                                    alt="First slide"
                                    dots="false"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-90 Page3BannerImage"
                                    src="images/m_Sydney_destination_l_571_857.webp"
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-90 Page3BannerImage"
                                    src="images/Adventure3.jpg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    
                    <div className="card-body col-md-34 CarouselDetailPage">
                        <h4 className="card-title" style={{ textAlign: "left" }}>Explore the Ancient Temples</h4>
                        <p className="card-text carouselDescription" style={{ textAlign: "left" }}>Some quick example text to build on the card title and make up the bulk of the card's content.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ullam culpa animi velit aut officiis ratione dignissimos vero, odio eveniet accusantium? Maxime animi nesciunt in provident minima ullam nostrum sapiente!
                        Deleniti illum libero, rerum maiores ipsam sequi commodi at soluta doloribus! Voluptatibus commodi quos blanditiis accusantium placeat non maxime esse odit quibusdam aliquam, quasi tenetur iste earum, repudiandae facere ipsum.
                        Magnam est maiores amet ducimus. Quae quia ipsam exercitationem aut velit, ea laborum nulla nihil explicabo aperiam ullam beatae quam sed odit nisi necessitatibus quidem rerum distinctio ut, dolorem quos.
                        Quisquam quae ipsa voluptate quia omnis laudantium, consequatur non quidem dolores. Molestias iusto, dolore corporis nisi distinctio amet dignissimos vel debitis facere libero modi recusandae? Minus reprehenderit suscipit recusandae! Alias!
                        Nemo id delectus doloremque a aut excepturi vitae animi, aliquid, obcaecati, dolore enim voluptates repellendus exercitationem quod! Nihil voluptatem quibusdam tempore suscipit, nam repellat eius doloremque fugit, numquam repudiandae hic?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium dolore porro corrupti? Nisi aliquid non repudiandae error tempora a maxime. Harum excepturi non possimus, porro at</p>
                    </div>
                    </div>

                </div>
            </div>
        </>
    );
}


