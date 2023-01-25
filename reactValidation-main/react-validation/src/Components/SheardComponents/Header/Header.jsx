import { Col_2, Col_4, Col_6, Col_8, Container, Row } from '../../../Styles/GLobal.style'
import { Wrapper, Navbar, NavLink, NavbarButton,Input } from './Header.style'

export default function Header() {
    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <Col_2>
                            <Navbar>
                                <NavLink>ThorCodeing</NavLink>
                            </Navbar>
                        </Col_2>
                        <Col_4>
                            <Input />
                        </Col_4>
                        <Col_6>
                            <Navbar>
                                <NavLink>HOME</NavLink>
                                <NavLink>PRODUCT</NavLink>
                                <NavLink>CATEGORY</NavLink>
                                <NavbarButton>LOGIN</NavbarButton>
                                <NavbarButton>SIGNUP</NavbarButton>
                            </Navbar>
                        </Col_6>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}
