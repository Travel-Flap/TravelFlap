import Card from 'react-bootstrap/Card';
import ExtendedImage from "./Component 36.jpg";
import "./DiscoverExtendedStay.css";
import { Button } from 'react-bootstrap';

export const DiscoverExtendedStay = () => {
    return (
        <div className='extendedCardOuterDiv'>
            <Card className="bg-dark extendedCard text-white">
                <Card.Img src={ExtendedImage} alt="Card image" />
                <Card.ImgOverlay >
                    <Card.Title className='extendedImageContent'>Escape for a while.</Card.Title>
                    <Card.Text>
                        Enjoy the freedom of an extended stay on Travelflap.com
                    </Card.Text>
                    <Card.Text>
                        <Button variant="primary" size="lg">
                            Discover Stays
                        </Button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

// export default ImgOverlayExample;