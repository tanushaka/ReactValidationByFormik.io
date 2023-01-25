import { Col_4,Col_8, Container_fluid, Row } from '../../../Styles/GLobal.style';
import { Wrapper, P ,I} from './Footer.style';

export default function Footer() {
    return (
        <>
            <Wrapper>
                <Container_fluid>
                    <Row>
                        <Col_8>
                            <P>abc@Footer.com</P>
                        </Col_8>
                        <Col_4>
                            <I className="fa fa-instagram"></I>
                            <I className="fa fa-facebook"></I>
                            <I className="fa fa-youtube-play"></I>
                            <I className="fa fa-twitter"></I>
                        </Col_4>
                    </Row>
                </Container_fluid>
            </Wrapper>
        </>
    )
}
